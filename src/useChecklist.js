import React from "react";
import { NoteContext } from "./notecontext";

const useChecklist = () => {
  const [, setState] = React.useContext(NoteContext);

  function toggleCheck() {
    setState((state) => ({ ...state, isChecked: !state.isChecked }));
  }

  return {
    toggleCheck
  };
};

export default useChecklist;
