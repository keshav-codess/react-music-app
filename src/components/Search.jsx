import { useRef } from "react";

export const Search = ({ fn }) => {
  const artist = useRef();

  return (
    <div className="row g-2 align-items-end">
      <div className="col-12 col-md-8">
        <label htmlFor="artistInput">Artist Name</label>
        <input
          id="artistInput"
          ref={artist}
          type="text"
          className="form-control"
          placeholder="🔍 Search by Artist"
        />
      </div>
      <div className="col-12 col-md-4 text-md-start text-end">
        <button
          className="btn btn-success w-100 mt-2 mt-md-0"
          onClick={() => fn(artist.current.value)}> Search </button>
      </div>
    </div>
  );
};
