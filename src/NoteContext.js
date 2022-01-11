import React from "react";

const NoteContext = React.createContext([{}, () => {}]);

const NoteContextProvider = ({ children }) => {
  const [state, setState] = React.useState({
    notes: [
      {
        name: "Pay Library Late Fee"
      },
      {
        name: "Contact Credit Union"
      },
      {
        name: "Finish Janky Website"
      }
    ],
    isChecked: false
  });
  return (
    <NoteContext.Provider value={[state, setState]}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteContextProvider };
