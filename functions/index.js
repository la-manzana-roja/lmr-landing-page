'use strict';

const admin = require('firebase-admin');
const functions = require('firebase-functions');
const firebaseHelper = require('firebase-functions-helper');
const urlMetadata = require('url-metadata');
const cors = require('cors')({
  origin: true
});

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const ALLOWED_ORIGINS = [
  'http://127.0.0.1:4200',
  'http://127.0.0.1:8080',
  'https://lamanzanarojawebsite.firebaseapp.com'
];
const NEWS_COLLECTION = 'news';

function verifyOrigin(request, response) {
  const origin = request.headers.origin;

  if (ALLOWED_ORIGINS.indexOf(origin) > -1) {
    response.set('Access-Control-Allow-Origin', origin);
  }
}

function updateDocument(collectionName, document) {
  return firebaseHelper.firestore.updateDocument(db, collectionName, document.id, document);
}

function getDocument(collectionName, documentId) {
  return firebaseHelper.firestore.getDocument(db, collectionName, documentId);
}

exports.updateNewMetadata = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    verifyOrigin(request, response);

    const newId = request.body.id;

    getDocument(NEWS_COLLECTION, newId)
      .then(link => Promise.all([link, urlMetadata(link.url)]))
      .then(results => {
        let link = results[0];
        const metadata = results[1];

        link.title = metadata.title;
        link.description = metadata.description;
        link.image = metadata.image;

        updateDocument(NEWS_COLLECTION, link);

        return response.status(200).send(link);
      })
      .catch(error => response.status(500).send(error));
  });

});

exports.updateNewViews = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    verifyOrigin(request, response);

    const newId = request.body.id;

    getDocument(NEWS_COLLECTION, newId)
      .then(link => {
        const views = link.views;
        link.views = views ? views + 1 : 1;

        updateDocument(NEWS_COLLECTION, link);

        return response.status(200).send(link);
      })
      .catch(error => response.status(500).send(error));
  });
});
