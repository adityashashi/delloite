import React, { useState } from 'react';

function MusicPlayer() {
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [newSong, setNewSong] = useState("");

  const addSong = () => {
    if (newSong.trim()) {
      setPlaylist([...playlist, newSong]);
      if (currentIndex === -1) setCurrentIndex(0); // Start at first song
      setNewSong("");
    }
  };

  const playNextSong = () => {
    if (playlist.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const playPreviousSong = () => {
    if (playlist.length === 0) return;
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + playlist.length) % playlist.length
    );
  };

  const jumpToSong = (index) => {
    setCurrentIndex(index);
  };

  const removeSong = (index) => {
    const updated = playlist.filter((_, i) => i !== index);
    setPlaylist(updated);
    if (updated.length === 0) {
      setCurrentIndex(-1);
    } else if (index === currentIndex) {
      setCurrentIndex(0); // fallback to first song
    } else if (index < currentIndex) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🎵 Music Player</h2>

      <div>
        <input
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
          placeholder="Enter song title"
        />
        <button onClick={addSong}>Add Song</button>
      </div>

      <h3>📃 Playlist:</h3>
      <ol>
        {playlist.map((song, index) => (
          <li key={index}>
            <span
              onClick={() => jumpToSong(index)}
              style={{
                cursor: "pointer",
                fontWeight: currentIndex === index ? "bold" : "normal",
                color: currentIndex === index ? "blue" : "black"
              }}
            >
              {song}
            </span>
            <button onClick={() => removeSong(index)} style={{ marginLeft: "10px" }}>
              🗑️
            </button>
          </li>
        ))}
      </ol>

      <h3>🎧 Now Playing:</h3>
      <p>{playlist.length > 0 && currentIndex !== -1 ? playlist[currentIndex] : "No song is playing"}</p>

      <button onClick={playPreviousSong}>⏮️ Previous</button>
      <button onClick={playNextSong} style={{ marginLeft: "10px" }}>
        ⏭️ Next
      </button>
    </div>
  );
}

export default MusicPlayer;
