import satData from "./satData";
import "./styling.css";

//3 props 
// map over orbit types to produce button for each one
//sat = element of array mapping over ; id provides an index (whatever index current element is at in array)
//all orbits resets state variable to hold all of the satellites again

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div className="flex-container">
      {orbitTypes.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit 
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;