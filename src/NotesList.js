import React from "react";
import styled from "styled-components";

import { NoteContext } from "./NoteContext";
import useChecklist from "./useChecklist";

const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListItem = styled.li`
  list-style: none;
`;

const NotesList = () => {
  const [state, setState] = React.useContext(NoteContext);

  const { toggleCheck } = useChecklist();

  return (
    <div>
      {state.notes.map((note, i) => (
        <ul>
          <ListItemWrapper>
            <ListItem key={i}>
              {note.name}{" "}
              {note.isChecked ? null : (
                <span aria-label="img" role="img">
                  ✅
                </span>
              )}
              <h4>Completed?</h4>
              <button onClick={toggleCheck}>Press to complete</button>
            </ListItem>
          </ListItemWrapper>
        </ul>
      ))}
    </div>
  );
};

export default NotesList;
