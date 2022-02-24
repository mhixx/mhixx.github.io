// Initialize Cloud Firestore through Firebase

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBttB_JeNd40QSMr4OZ3mFPLpSDTYySDas',
  authDomain: 'mhixx-github-io.firebaseapp.com',
  projectId: 'mhixx-github-io'
});

var db = firebase.firestore()

// db.collection("wordle-score").add({
//     name: "umi",
//     score: 100
// })

// db.collection("wordle-score").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
        
//     })
// });


console.log('ok')