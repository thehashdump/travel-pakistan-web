/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import firebaseConfig from './config/firebaseConfig';

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
