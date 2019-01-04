
var playlist = new Object({Masego: 'Sunday Vibes'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlistObject, artistName) {
  delete playlistObject.artistName;
  return playlist
}
