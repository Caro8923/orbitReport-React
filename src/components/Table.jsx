import satData from "./satData";
import Buttons from "./Buttons";
import "./styling.css";

//prop state variable sat to Table component (holds array of satellites based on current state)
//map over sat data to produce repeated rows of satellites with specified columns
//best practice - if data has an id, use the id
//conditional logic to produce operational display based on whether true or false

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data, id) => {
        return (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? "Active" : "Inactive"}</td>
          </tr>
        );
      })}
     </tbody>
   </table>
  );
};

export default Table;