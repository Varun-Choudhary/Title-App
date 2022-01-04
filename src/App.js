import React, { useEffect, useState } from 'react'; 
import { ColorFilter } from './components/ColorSearch/ColorSearch';
import { TitleSearch } from './components/TitleSearch/TitleSearch';
import { AddButton } from './components/AddButton/AddButton';
import { TitleList } from './components/TitleList/TitleList';

export const App = () => {
  const [colors, setColors] = useState([]);
  const [titleValue, setTitleValue] = useState([]);
  const [subTitleValue, setSubTitleValue] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');

  let filteredTitle = [];
  let filteredSubTitle = [];

  const filterByTitle = (e) => {
    console.log(e.target.value);
    for(let i=0;i < titleValue.length; i++ ) {
      if(titleValue[i].toLowerCase().includes(e.target.value.toLowerCase())) {
        console.log('if', titleValue[i]);
        filteredTitle.push(titleValue[i]);
        filteredSubTitle.push(subTitleValue[i]);
      }
    }
  }
  
  useEffect(() => {
    userAction();
  }, []);

  const setTitle = (value) => {
    var tmpArr = titleValue.slice();
    tmpArr.push(value);
    setTitleValue(tmpArr);
  }

  const setSubTitle = (value) => {
    var tmpArr = subTitleValue.slice();
    tmpArr.push(value);
    setSubTitleValue(tmpArr);
  }

  const userAction = async () => {
    const response = await fetch('https://random-flat-colors.vercel.app/api/random?count=5');
    const colors =  await response.json();
    setColors(colors);
  }
  console.log('>>>', titleValue, subTitleValue);

  return (
    <div>
      Filter by
      <ColorFilter  colors={ colors } />
      <TitleSearch filterByTitle={filterByTitle}/>
      <AddButton
        setTitle={setTitle}
        setSubTitle={setSubTitle}
      />
      <TitleList
        titleValue = {filteredTitle}
        subTitleValue = {filteredSubTitle}
      />
    </div>
  )
};