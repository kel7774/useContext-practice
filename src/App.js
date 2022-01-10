import "./styles.css";
import NotesList from "./NotesList";
import { NoteContextProvider } from "./notecontext";

export default function App() {
  return (
    <NoteContextProvider>
      <div className="App">
        <NotesList />
      </div>
    </NoteContextProvider>
  );
}
