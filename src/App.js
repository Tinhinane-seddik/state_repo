import React, {useState} from "react";
import './App.css';
import Count1 from './Counte/Count1';
import data from  "./data.json";

function App() {
  const [index , setIndex] = useState(0);
 const handleChalenge = (etat) => {
   if ( etat === "-" && index !== 0  ){ setIndex(index - 1);}
   if ( etat === "-" && index == 0){ setIndex(data.length - 1);}
   if ( etat === "+" && index + 1 < data.length){ setIndex(index +1);}
 }
  return (
    <div className="App">
      <div className="bg-Count1"></div>
      <Count1 data = {data[index]}/>
      <div className="buttons" >
        <button onClick={() => handleChalenge("-")} className="previous">-</button> 
        <button onClick={() => handleChalenge("+")} className="next"> +</button> 
     </div>
   </div>  
     
  );
}

export default App;
