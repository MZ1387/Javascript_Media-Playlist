let playlist = new Playlist();

//songs
let humoDeTabaco = new Song("Humo De Tabaco", "Alex Cuba", "3:28");
let lovedLikeThis = new Song("Loved Like This", "Tatiana Manaois", "3:19");
//movies
let theCountOfMonteCristo = new Movie("The Count Of Monte Cristo", "2002", "2:11:00");
let shawshankRedemption = new Movie("Shawshank Redemption", "1994", "2:22:00");

playlist.add(humoDeTabaco);
playlist.add(lovedLikeThis);
playlist.add(theCountOfMonteCristo);
playlist.add(shawshankRedemption);

let playlistElement = document.getElementById("playlist");
playlist.renderIn(playlistElement);

let playButton = document.getElementById('play');
playButton.onclick = function() {
  playlist.play();
  playlist.renderIn(playlistElement);
}

let nextButton = document.getElementById('next');
nextButton.onclick = function() {
  playlist.next();
  playlist.renderIn(playlistElement);
}

let stopButton = document.getElementById('stop');
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderIn(playlistElement);
}
