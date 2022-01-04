import React from 'react'; 
import Circle from 'react-circle';

export const ColorFilter = (colors) => {
    const listItems = colors?.colors?.colors?.length ? colors?.colors?.colors.map((color) => (
      <li>
        <Circle
          showPercentageSymbol={false} 
          showPercentage={false}
          lineWidth={50}
          size={20}
          bgColor={color}
        />
      </li>
    )) : null;

    return (
        <div>
          Colors
          <ul>
            {listItems}
          </ul>
        </div>
    )
}