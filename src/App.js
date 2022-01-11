import "./styles.css";
import NotesList from "./NotesList";
import { NoteContextProvider } from "./NoteContext";

export default function App() {
  return (
    <NoteContextProvider>
      <div className="App">
        <NotesList />
      </div>
    </NoteContextProvider>
  );
}
