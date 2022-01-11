import React from "react";

import Song1 from "../assets/bensound-anewbeginning.mp3";
import Song2 from "../assets/bensound-creativeminds.mp3";
import Song3 from "../assets/bensound-ukulele.mp3";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = React.useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Lost Chameleon - Genesis",
        file: Song1
      },
      {
        name: "The Hipsta - Shaken Soda",
        file: Song2
      },
      {
        name: "Tobu - Such Fun",
        file: Song3
      }
    ],
    currentTrackIndex: null,
    isPlaying: false
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
