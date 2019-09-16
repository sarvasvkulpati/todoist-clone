import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializaApp({
    apiKey: "AIzaSyCgLg1SrRJK6YZsbO58lWLpT0u-MeT0cEg",
    authDomain: "todoist-tutorial-3b78d.firebaseapp.com",
    databaseURL: "https://todoist-tutorial-3b78d.firebaseio.com",
    projectId: "todoist-tutorial-3b78d",
    storageBucket: "todoist-tutorial-3b78d.appspot.com",
    messagingSenderId: "1007132345556",
    appId: "1:1007132345556:web:9b349e292de56eef262741"

})

export { firebaseConfig as firebase};