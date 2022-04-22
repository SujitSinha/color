import {useState, useEffect} from 'react'
import './App.css';
import { colorsData } from './ColorsData';
import CardGrid from './Components/CardGrid'


function App() {
console.log('colorsData', colorsData)
  const [searchedValue, setSearchedValue]= useState('')
  const [data, setData] = useState('');

  useEffect(() => {
    if(searchedValue!=='')
    {
    const filteredData = colorsData.filter((data) => {
      return data.name.toLowerCase().includes(searchedValue);
    });

    setData(filteredData);
  }
  }, [searchedValue]);

  console.log('data', data)

  const handleColorChange=(e)=>{
    setSearchedValue(e.target.value)
  }

  const searchColor=()=>{
    //console.log(searchedValue)
  }

  return (
    <>
    <div className="search-color">
    <h1>Color a word!</h1>
    <input type="text"
    onChange={handleColorChange}
    ></input>
    <button type="button" onClick={searchColor}>search</button>
    </div>
    <div className="results">
        {searchedValue === "" && "All Colors"}
        {searchedValue !== "" && data.length === 0 && `No results for '${searchedValue}'`}
        {searchedValue !== "" && data.length !== 0 && `Results for '${searchedValue}'`}
      </div>
<CardGrid data={data} />
    </>
    
  );
}

export default App;
