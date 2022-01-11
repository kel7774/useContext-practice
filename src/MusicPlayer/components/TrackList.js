import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from "../useMusicPlayer";

const TrackList = () => {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying
  } = useMusicPlayer();

  const navigate = useNavigate();

  return (
    <>
      {trackList.map((track, index) => (
        <div className="box">
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
      <button onClick={() => navigate("/")}>back to notes</button>
    </>
  );
};

export default TrackList;
