import React from "react";
import styled from "styled-components";

import { NoteContext } from "./notecontext";
import useChecklist from "./useChecklist";

const ListItems = styled.li`
  list-style: none;
`;

const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const NotesList = () => {
  const [state, setState] = React.useContext(NoteContext);
  const { toggleCheck } = useChecklist();
  return (
    <div>
      {state.notes.map((note, i) => (
        <div>
          <ul>
            <ListItemWrapper key={i}>
              <ListItems>{note.name}</ListItems>
              <button onClick={toggleCheck}>Press to complete</button>
            </ListItemWrapper>
          </ul>
          <h4>Completed?</h4>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
