// Initialize Cloud Firestore through Firebase
function getToday() {
  const d = new Date()
  return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear()


}


async function getScoresFromFirebase() {
  const scores = await getScores(getToday())
  return scores

}


$(document).ready(async function () {

  const scores = await getScoresFromFirebase()


  for (let i = 0; i < scores.length; i++) {
    $(`.board-name:eq(${i})`).text(scores[i].name + " = " +scores[i].score)

    
  }

  


})



