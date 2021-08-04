import './App.css';
import {useState} from "react"

function App() {
  
  
  const [rows,setRows] = useState(0);
  const [cols,setCols] = useState(0);
  const [showInfo,setShowInfo] = useState(true);
  const resultStyle = {
    fontSize: "12px",
    background: "rgb(150, 104, 150)",
    display: "grid",
    margin: 0,
    gridTemplate: "repeat(1,fit-content)/repeat(1,fit-content)",
  };
  function call(){
    getValue();
    clearBoard(document.getElementById("result-container"));
  }
  function clearBoard(node){
    if(node !== null){
      while(node.children.length > 0){
        console.log("len: ",node.children.length,"\nchild: ",node.children[0])
        node.removeChild(node.children[0])
      }
    }
  }
  function getValue(){
    let rowsVal = document.getElementById("rows");
    let colsVal = document.getElementById("cols");
    setRows(rowsVal.value);
    setCols(colsVal.value);
  }
  function createMatrix(){ // until 16
    setShowInfo(false);
    let rowsVal = document.getElementById("rows");
    let colsVal = document.getElementById("cols");
    if(rowsVal.value === "" || rowsVal.value === "0" || rowsVal.value < 0){
      setShowInfo(true);
      alert("rows must be greater than 0");
    }
    else if(colsVal.value === "" || colsVal.value === "0" || colsVal.value < 0){
      setShowInfo(true);
      alert("columns must be greater than 0");
    }
    else if(rowsVal.value > 16){
      alert("rows can't greater than 16");
    }
    else if(colsVal.value > 16){
      alert("columns can't greater than 16");
    }
    else{
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
    return;
    
  }
  
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="header-container">
          <h1 className="header">BUILD MATRIX</h1>
        </div>
        <div className="input">
          <label className="row-label" for="rows">rows</label>
          <input className="row-input" id="rows"  placeholder="max. 16 rows" type="number" onChange={call}></input>
          <label className="col-label" for="columns">columns</label>
          <input className="col-input" id="cols" placeholder="max. 16 columns" type="number"  onChange={call}></input>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={createMatrix}>BUILD</button>
        </div>
        <div id="result-container" style={resultStyle}>
          <h3>{(cols < 1) ? "enter number of rows and columns in the input fields and click on 'BUILD' to get the result!" : undefined}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
