import React, { useState } from 'react'; 
import { TitleList } from '../TitleList/TitleList';
import { App } from '../../App';

export const AddTitle = props => {
  const { toggle, setTitle, setSubTitle } = props;

  const saveWithClick = (e) => {
    e.preventDefault();
    toggle(false);
    setTitle(e.target.title.value);
    setSubTitle(e.target.subTitle.value);
  };

  return (
    <div>
      Creative creation
      <form onSubmit={saveWithClick}>
        <label>
          Title:
          <input 
            type="text"
            name="title"
            placeholder= 'type title...'
          />
          Subtitle:
          <input 
            type="text"
            name="subTitle"
            placeholder= 'type subtitle...'
          />
        </label>
        <input type="submit" value="Done" />
      </form> 
    </div>
  );
};