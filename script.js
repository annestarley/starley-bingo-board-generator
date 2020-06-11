const pics = [
"./images/John.jpeg", 
"./images/Colleen.jpeg", 
"./images/Dan.jpeg",
"./images/Paul.jpeg",
"./images/Anne.jpeg"
]

let bingo = {
createBingoLayout: function (arr) {
  for (let i = 0; i < 24; i++) {
    if (arr[i]) image = arr[i]
    else image = 'https://via.placeholder.com/120x160'
    this.createBingoSquare(image);
    if (i == 11) this.createBingoSquare('./images/free-square.png')
  }
},
createBingoSquare: function (image) {
  let img = $('<img>').attr('src', image);
  $('.bingo-board').append(img);
},
shufflePics: function (arr) {
  return arr.sort(() => Math.random() - 0.5);
}
}
let shuffledPics = bingo.shufflePics(pics);
bingo.createBingoLayout(shuffledPics);