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

  const map1 = new Map()
  
  for (let i = 0; i < scores.length; i++) {
    if (!map1.has(scores[i].name)){
      map1.set(scores[i].name,[])
    }

    map1.get(scores[i].name).push(scores[i].score)

  }


  let i = 0
  map1.forEach( (val,key, map) => {

    let sc = 0
    for (let j = 0; j < val.length; j++) {
      sc += val[j]
    }

    sc = sc / val.length

    $(`.board-name:eq(${i})`).text( key + " = " + sc)
    i++

  })

  
  


})

function play(){
  window.location.href = "https://mhixx.github.io/wordle/";
 
 }


