import React from 'react'; 

export const TitleList = props => {
  const { titleValue, subTitleValue } = props
  console.log(titleValue, subTitleValue);
    let a = [];
  const futmpFuncnc = () => {
    for(let i=0; i<titleValue.length; i++) {
        console.log(titleValue[i], subTitleValue[i]);
        a.push(<li>
      <div>
        <h1>{titleValue[i]}</h1>
        <p>{subTitleValue[i]}</p>
      </div></li>
        );
    }
  } ;

  futmpFuncnc();

    return (
      <div>
       <ul>{
        a
       }</ul>
      </div>
    );
};