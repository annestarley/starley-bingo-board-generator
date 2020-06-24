const pics = [
"images2/John.jpeg", 
"images2/Colleen.jpeg", 
"images2/Dan.jpeg",
"images2/Paul.jpeg",
"images2/Anne.jpeg",
"images2/Betty.jpeg",
"images2/Harry.jpeg",
"images2/Mary.jpeg",
"images2/Mora.jpeg",
"images2/Priscilla.jpeg",
"images2/Benji.jpeg",
"images2/Stacey.jpeg",
"images2/Katelyn.jpeg",
"images2/Sarah.jpeg",
"images2/Andrew.jpeg",
"images2/Laura.jpeg",
"images2/Grace.jpeg",
"images2/Heather.jpeg",
"images2/Charlotte.jpeg",
"images2/David.jpeg",
"images2/Holly.jpeg",
"images2/Matthew.jpeg",
"images2/Nathan.jpeg"
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