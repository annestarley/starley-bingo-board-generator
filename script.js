const pics = [
"images/portraits/John.jpeg", 
"images/portraits/Colleen.jpeg", 
"images/portraits/Dan.jpeg",
"images/portraits/Paul.jpeg",
"images/portraits/Anne.jpeg",
"images/portraits/Betty.jpeg",
"images/portraits/Harry.jpeg",
"images/portraits/Mary.jpeg",
"images/portraits/Mora.jpeg",
"images/portraits/Priscilla.jpeg",
"images/portraits/Benji.jpeg",
"images/portraits/Stacey.jpeg",
"images/portraits/Katelyn.jpeg",
"images/portraits/Sarah.jpeg",
"images/portraits/Andrew.jpeg",
"images/portraits/Laura.jpeg",
"images/portraits/Grace.jpeg",
"images/portraits/Heather.jpeg",
"images/portraits/Charlotte.jpeg",
"images/portraits/David.jpeg",
"images/portraits/Holly.jpeg",
"images/portraits/Matthew.jpeg",
"images/portraits/Nathan.jpeg",
"images/portraits/Cassie.jpeg",
"images/portraits/Claire.jpeg",
"images/portraits/Lucy.jpeg",
"images/portraits/Jack.jpeg"
]

let bingo = {
createBingoLayout: function (arr) {
  for (let i = 0; i < 24; i++) {
    if (arr[i]) image = arr[i]
    else image = 'https://via.placeholder.com/1000x800'
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