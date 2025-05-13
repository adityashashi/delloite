class MusicPlayer {
  constructor() {
    this.playlist = [];
    this.currentIndex = -1;
  }

  addSongToPlaylist(songTitle) {
    this.playlist.push(songTitle);
    if (this.currentIndex === -1) this.currentIndex = 0;
  }

  playNextSong() {
    if (this.currentIndex < this.playlist.length - 1) {
      this.currentIndex++;
      return this.playlist[this.currentIndex];
    }
    return "End of playlist";
  }

  playPreviousSong() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.playlist[this.currentIndex];
    }
    return "Start of playlist";
  }

  jumpToSong(songIndex) {
    if (songIndex >= 0 && songIndex < this.playlist.length) {
      this.currentIndex = songIndex;
      return this.playlist[this.currentIndex];
    }
    return "Invalid index";
  }

  getCurrentSong() {
    if (this.currentIndex === -1 || this.playlist.length === 0) return "No song is playing";
    return this.playlist[this.currentIndex];
  }

  shufflePlaylist() {
    for (let i = this.playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.playlist[i], this.playlist[j]] = [this.playlist[j], this.playlist[i]];
    }
    this.currentIndex = 0;
  }
}
