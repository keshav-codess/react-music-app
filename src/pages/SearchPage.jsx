import React, { useState, useEffect } from 'react';
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";

export const SearchPage = () => {
  const [allSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song, setPlayerSong] = useState(null);
  const [loading, setLoading] = useState(false);  

  const loadDefaultSongs = async () => {
    setLoading(true);
    const defaultSongs = await getSongs('Bollywood');
    setSongs(defaultSongs);
    setLoading(false);
  };

  useEffect(() => {
    loadDefaultSongs();
  }, []);

  const togglePlayer = (flag, songarg) => {
    setPlayerSong(songarg);
    setFlag(flag);
  };

  const getArtistName = async (artistName) => {
    setLoading(true);
    setSongs(await getSongs(artistName));
    setLoading(false);
  };

  const clearSearch = () => {
    loadDefaultSongs();
  };

  return (
    <div className="container">
      <div
        className="text-center p-4 mb-4 rounded"
        style={{ backgroundColor: '#f3e8ff', border: '1px solid #d3c1ff' }}
      >
        <h1 className="mb-0">
          <span role="img" aria-label="music">🎵</span> <strong>BeatBliss</strong>
        </h1>
      </div>

      {flag ? (
        <Player song={song} fn={togglePlayer} />) : (
        <>
          <div className="row mb-3">
            <div className="col-12 col-md-10">
              <Search fn={getArtistName} allSongs={allSongs} />
            </div>
            <div className="col-12 col-md-2 text-end">
              <button className="btn btn-sm btn-danger w-100 mt-2 mt-md-0" onClick={clearSearch}>
                Clear
              </button>
            </div>
          </div>

          {loading ? (
            <div className="d-flex justify-content-center my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Songs fn={togglePlayer} allSongs={allSongs} />
          )}
        </>
      )}
    </div>
  );
};
