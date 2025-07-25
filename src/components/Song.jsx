import React from 'react';

export const Song = ({ fn, song }) => {
  const showPlayer = () => {
    fn(true, song);
  };

  return (
    <div className="card mb-3 p-3 shadow-sm">
      <div className="row g-3 align-items-center">
        <div className="col-12 col-md-4 text-center">
          <img
            src={song.artworkUrl100}
            alt={`${song.trackName} artwork`}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-12 col-md-5 text-center text-md-start">
          <strong>{song.artistName}</strong>
          <br />
          <span>{song.trackName}</span>
        </div>
        <div className="col-12 col-md-3 text-center">
          <button onClick={showPlayer} className="btn btn-primary mt-2 mt-md-0 w-100">
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  );
};
