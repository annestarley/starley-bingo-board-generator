const pics = [
"images/John.jpeg", 
"images/Colleen.jpeg", 
"images/Dan.jpeg",
"images/Paul.jpeg",
"images/Anne.jpeg",
"images/Betty.jpeg",
"images/Harry.jpeg",
"images/Mary.jpeg",
"images/Mora.jpeg",
"images/Priscilla.jpeg",
"images/Benji.jpg",
"images/Stacey.jpeg",
"images/Katelyn.jpeg",
"images/Sarah.jpeg",
"images/Andrew.jpeg",
"images/Laura.jpeg",
"images/Grace.jpeg",
"images/Heather.jpeg"
]

let bingo = {
createBingoLayout: function (arr) {
  for (let i = 0; i < 24; i++) {
    if (arr[i]) image = arr[i]
    else image = 'https://via.placeholder.com/120x160'
    this.createBingoSquare(image);
    if (i == 11) this.createBingoSquare('images/free-square.png')
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