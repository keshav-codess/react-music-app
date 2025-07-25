import React from 'react';

export const Player = ({ song, fn }) => {
  if (!song) return <div>No song selected</div>;

  return (
    <div className="card text-center shadow p-4 mt-4 mx-auto" style={{ maxWidth: '500px' }}>
      <img
        src={song.artworkUrl100}
        alt={`${song.trackName} artwork`}
        className="img-fluid rounded-circle mx-auto mb-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />

      <div className="card-body">
        <h5 className="card-title">{song.trackName}</h5>
        <p className="card-text text-muted">{song.artistName}</p>

        <audio controls className="w-100 mb-3">
          <source src={song?.previewUrl} type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>

        <button className="btn btn-outline-success w-100" onClick={() => fn(false, null)}>
          🔙 Back to Songs
        </button>
      </div>
    </div>
  );
};
