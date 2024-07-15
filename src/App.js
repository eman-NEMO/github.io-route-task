import React, { useEffect, useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Customers from "./Components/customer";

export default function App() {
 

  return (
    <>
    <Customers/>
    </>
  );
}


// import logo from './logo.svg';
// import './App.css';
// import { useState, useEffect } from 'react';
// import { onMessage } from 'firebase/messaging';
// import toast, { Toaster } from 'react-hot-toast';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database'; // Import Realtime Database
// import { messaging } from './notifications/firebase'; // Import Firebase messaging

// function App() {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Initialize Firebase app with configuration
//     const firebaseConfig = {
//       apiKey: "AIzaSyD6cXAHR7NCGhaDsxlKG1cfu79ftX87ri8",
//       authDomain: "fir-cloud-messaging-510d1.firebaseapp.com",
//       projectId: "fir-cloud-messaging-510d1",
//       databaseURL: "https://fir-cloud-messaging-510d1-default-rtdb.firebaseio.com/",
//       storageBucket: "fir-cloud-messaging-510d1.appspot.com",
//       messagingSenderId: "47898018372",
//       appId: "1:47898018372:web:42370a40ccef34cfcd3211",
//       measurementId: "G-30TRXVDCX0"
//     };

//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }

//     // Listen for incoming messages
//     onMessage(messaging, (payload) => {
//       console.log(payload);
//       // Update state to reflect new notification
//       setNotifications((prevNotifications) => [...prevNotifications, payload.notification.body]);
//       // Display toast notification
//       saveNotificationToFirebase(payload)
//       toast(payload.notification.body);
//     });

//     // Fetch existing notifications on component mount
//     fetchNotifications();

//     // Cleanup function to remove the listener when component unmounts
//     return () => {
//       const db = firebase.database();
//       const notificationsRef = db.ref('message');
//       notificationsRef.off('value'); // Remove the value listener
//     };
//   }, []);

//   const saveNotificationToFirebase = (notificationData) => {
//     const db = firebase.database();
//     const notificationsRef = db.ref('message');

//     const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

// // Set the value in the database with the formatted timestamp as the key
// notificationsRef.child(timestamp).set(notificationData.notification.body, (error) => {
//   if (error) {
//     console.error('Error adding notification: ', error);
//   } else {
//     console.log('Notification added successfully');
//   }
// });
//     // Push new notification to Firebase

//   };

//   const fetchNotifications = () => {
//     const db = firebase.database();
//     const notificationsRef = db.ref('message');

//     // Listen for changes to the notifications node in Firebase
//     notificationsRef.on('value', (snapshot) => {
//       console.log(snapshot)
//       const notificationsData = snapshot.val();
//       if (notificationsData) {
//         // Convert Firebase object to an array of notification messages
//         const notificationsArray = Object.entries(notificationsData).map(([key, value]) => ({ id: key, message: value }));
//         setNotifications(notificationsArray);
//       }
//     });
//   };

//   return (
//     <div className="App">
//       <Toaster />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Edit <code>src/App.js</code> and save to reload.</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <div>
//         <h2>Notification History</h2>
//         <ul>
//           {notifications.map((notification, index) => (
//              <li key={index}>{`${notification.id}: ${notification.message}`}</li>

//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
