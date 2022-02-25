const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBttB_JeNd40QSMr4OZ3mFPLpSDTYySDas',
    authDomain: 'mhixx-github-io.firebaseapp.com',
    projectId: 'mhixx-github-io'
});

var db = firebase.firestore()


function addScore(name, score, date) {
    db.collection("wordle-score").add({
        name: name,
        score: score,
        date: date
    })


}
async function getScores(date) {
    console.log(`getScores(${date})`);
    let datas = []
    const querySnapshot = await db.collection("wordle-score").where("date", "==", date).get()
    querySnapshot.forEach((doc) => {
        datas.push(doc.data())
    })

    return datas

}