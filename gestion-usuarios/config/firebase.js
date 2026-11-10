
const path = require('path');
require('dotenv').config();

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Cargar credenciales de Firebase
const serviceAccount = require(
    path.resolve(__dirname, '..', process.env.FIREBASE_SERVICE_ACCOUNT)
);

// Inicializar Firebase
if (getApps().length === 0) {
    initializeApp({
        credential: cert(serviceAccount)
    });
}

// Conectar con Firestore
const db = getFirestore();

console.log('Firebase conectado correctamente');

module.exports = { db };
