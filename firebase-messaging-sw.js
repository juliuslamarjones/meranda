importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDxFse5ziXWYyzOimzdWjqNNDgsvzD-rvo",
    authDomain: "meranda-grooming.firebaseapp.com",
    projectId: "meranda-grooming",
    storageBucket: "meranda-grooming.firebasestorage.app",
    messagingSenderId: "583723658573",
    appId: "1:583723658573:web:e9e074ffacbf29f1ad5b04"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https://juliuslamarjones.github.io/meranda/'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});