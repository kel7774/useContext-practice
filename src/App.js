import { Routes, Route } from "react-router";

import "./styles.css";

import { MusicPlayerProvider } from "./MusicPlayer/MusicPlayerContext";
import { NoteContextProvider } from "./NoteContext";

import NotesList from "./NotesList";
import TrackList from "./MusicPlayer/components/TrackList";
import PlayerControls from "./MusicPlayer/components/PlayerControls";

export default function App() {
  return (
    <div className="App">
      <MusicPlayerProvider>
        <NoteContextProvider>
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/tracks" element={<TrackList />} />
          </Routes>
          <PlayerControls />
        </NoteContextProvider>
      </MusicPlayerProvider>
    </div>
  );
}
