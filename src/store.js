// This import loads the firebase namespace along with all its type information.
import * as firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/analytics";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaZ8T34sTPeR9fVl9xu117mqNWxhP-aq4",
  authDomain: "vispelen.firebaseapp.com",
  databaseURL: "https://vispelen.firebaseio.com",
  projectId: "vispelen",
  storageBucket: "vispelen.appspot.com",
  messagingSenderId: "465943738791",
  appId: "1:465943738791:web:3ea2afb719d9e3d75c5e82",
  measurementId: "G-267H595L5V",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

const toArray = (val) => {
  const asArray = Object.entries(val).reduce((acc, curr) => {
    acc.push({ ...curr[1], index: curr[0] });
    return acc;
  }, []);

  return asArray;
};

export const sortFn = (arr) =>
  arr.sort((a, b) => {
    if (a.points === b.points) return 0;

    return a.points > b.points ? -1 : 1;
  });

export const listenOnChanges = (cb) => {
  const playersRef = database.ref("players/");
  playersRef.on("value", function (snapshot) {
    const value = snapshot.val();
    const res = toArray(value);
    cb(res);
  });
};

export const writeUserData = (key, name, points) => {
  firebase.database().ref(`players/${key}`).set({
    points,
    name,
  });
};
