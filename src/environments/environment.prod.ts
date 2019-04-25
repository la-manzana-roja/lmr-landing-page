import { FirebaseConfig, GoogleMapsKey } from './config-keys';

export const environment = {
  production: true,
  firebase: FirebaseConfig,
  cloudFunctionsUrl:
    'https://us-central1-lamanzanarojawebsite.cloudfunctions.net',
  googleMaps: GoogleMapsKey
};
