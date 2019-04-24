import { FirebaseConfig, GoogleMapsKey } from './keys-config';

export const environment = {
  production: true,
  firebase: FirebaseConfig,
  cloudFunctionsUrl:
    'https://us-central1-lamanzanarojawebsite.cloudfunctions.net',
  googleMaps: GoogleMapsKey
};
