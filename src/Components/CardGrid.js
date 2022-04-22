import React from 'react'
import '../App.css';

function CardGrid(props) {
  return (
        <div class='grid-container'>
        {props.data && props?.data?.map((data) => {
          return (
            <div class='grid-item' style={{ backgroundColor: data.hex }}>
              <div style={{ color: data.hex === "#000000" && "white" }}>
                {data.hex}
              </div>
            </div>
          );
        })}
    </div>
  )
}

export default CardGrid