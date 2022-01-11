import React from "react";
import { NoteContext } from "./NoteContext";

const useChecklist = () => {
  const [state, setState] = React.useContext(NoteContext);

  function toggleCheck() {
    setState((state) => ({ ...state, isChecked: !state.isChecked }));
  }

  return {
    toggleCheck
  };
};

export default useChecklist;
