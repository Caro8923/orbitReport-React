import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";

//sat holds which data is currently being displayed
//Set method prevents redundancy in orbit type array (3 different types of orbits)
//orbitTypes should be an array of [low, medium, high]
//filterByType function filters list of satellite objects based on orbit type (after clicking button)
//pass in current orbit type, fBT returns new array displaySats containing satellites that match orbit type
//add 3 props to pass down to button component

function App() {
  const [sat, setSat] = useState(satData);
  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
      const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  }
  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        orbitTypes={orbitTypes}
        />
      <Table sat={sat}/>
    </div>
  );
}

export default App;