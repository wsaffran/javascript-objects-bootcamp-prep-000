
var playlist = new Object({Masego: 'Sunday Vibes'})

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName]: songTitle})
  return playlist
}
