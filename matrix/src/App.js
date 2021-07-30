import './App.css';
import {useState} from "react"

function App() {
  
  
  const [rows,setRows] = useState(0);
  const [cols,setCols] = useState(0);
  const [showInfo,setShowInfo] = useState(true);
  const resultStyle = {
    alignContent: "center",
    margin: 0,
    padding: "20px",
    display: "grid",
    gridTemplate: `repeat(${rows},30px)/repeat(${cols},1fr)`
  };
  function getValue(){
    let rowsVal = document.getElementById("rows");
    let colsVal = document.getElementById("cols");
    setRows(rowsVal.value);
    setCols(colsVal.value);
  }
  function createMatrix(){
    setShowInfo(false);
    let rowsVal = document.getElementById("rows");
    let colsVal = document.getElementById("cols");
    if(rowsVal.value === "" || colsVal.value === "" || rowsVal.value === "0" || colsVal.value === "0"){
      setShowInfo(true);
      alert("rows and columns must be greater than 0!");
    }
    for(let i=1; i<=rows; i++){
      for(let j=1; j<=cols; j++){

        let newElement = document.createElement("div");
        newElement.setAttribute("id","cell");
        let text = document.createTextNode(`${i}/${j}`);
        newElement.appendChild(text);
        let fatherElement = document.getElementById("result-container");
        fatherElement.appendChild(newElement);
        newElement.setAttribute("style",
        `
          grid-row:${i}/${i+1};
          grid-column:${j}/${j+1};
          margin: 2px;

        `
        )
      }
    }
    
  }
  
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="header-container">
          <h1 className="header">BUILD MATRIX</h1>
        </div>
        <div className="input">
          <label className="input-ele" for="rows">rows</label>
          <input className="input-ele" id="rows" placeholder="number of rows" type="number" onChange={getValue}></input>
          <label className="input-ele" for="columns">columns</label>
          <input className="input-ele" id="cols" placeholder="number of columns" type="number" onChange={getValue}></input>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={createMatrix}>BUILD</button>
        </div>
        <div id="result-container" style={resultStyle}>
          <h2>{showInfo ? "enter number of rows and columns in the input fields and click on 'Build' to get the result!" : null}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
