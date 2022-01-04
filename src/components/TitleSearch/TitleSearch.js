import React from 'react'; 

export const TitleSearch = (props) => {
    const {filterByTitle} = props;
    return (
        <form>
         <label>
          Title/Subtitle:
          <input type="text" name="name" onChange={filterByTitle} />
        </label>
        </form>
    )
}