import React, { useState } from 'react'; 
import { AddTitle } from '../AddPopup/AddTitle';

export const AddButton = props => {
  const { setTitle, setSubTitle } = props
  const [addTitleState, toggle] = useState(false);
  const inspect = () => {
    toggle(true);
  };
  
  return (
      <div>
    <button onClick={inspect} disabled={addTitleState}>
        + Add Creative
    </button>
    {addTitleState && 
      <AddTitle 
        toggle={toggle}
        setTitle={setTitle}
        setSubTitle={setSubTitle}
      />
    }
    </div>
  );
};