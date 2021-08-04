import './App.css';
import {useState} from "react"

function App() {
  
  const [waitVar,setWaitVar] = useState(false);
  const [rows,setRows] = useState(0);
  const [cols,setCols] = useState(0);
  function call(){
    getValue();
    clearBoard(document.getElementById("result-container"));
  }
  function clearBoard(node){
    if(node !== null){
      while(node.children.length > 0){
        node.removeChild(node.children[0])
      }
    }
    setWaitVar(false);
  }
  function getValue(){
    let rowsVal = document.getElementById("rows");
    let colsVal = document.getElementById("cols");
    setRows(rowsVal.value);
    setCols(colsVal.value);
  }
  let rowsVal = document.getElementById("rows");
  let colsVal = document.getElementById("cols");
  function createMatrix(){ // until 16
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
        );
      }
      
    }
    setWaitVar(false);
    clearInterval(stop);
    document.getElementById("btnId").disabled = false;
    document.getElementById("btnId").style = "none";
    return;
    
  }
  let stop;
  let run = ()=>{
    if(rowsVal.value === "" || rowsVal.value === "0" || rowsVal.value < 0){
      alert("rows must be greater than 0");
    }
    else if(colsVal.value === "" || colsVal.value === "0" || colsVal.value < 0){
      alert("columns must be greater than 0");
    }
    else if(rowsVal.value > 12){
      alert("rows can't greater than 12");
    }
    else if(colsVal.value > 12){
      alert("columns can't be greater than 12");
    }
    else{
      clearBoard(document.getElementById("result-container"));
      setTimeout(createMatrix,3000);
      setWaitVar(true);
      document.getElementById("btnId").disabled = true;
      document.getElementById("btnId").style = "background: lightgray;";
      stop = setInterval(()=>simulateWaiting(),500);
    }
  }
  
  function simulateWaiting(){
    let waitingText = document.getElementById("waitText");
    if(waitingText !== null){
      waitingText.innerHTML += " . "
    }
  }
  
  //styles
  const resultStyle = {
    fontSize: "12px",
    background: "rgb(150, 104, 150)",
    display: "grid",
    margin: 0,
    gridTemplate: "repeat(1,fit-content)/repeat(1,fit-content)",
  };

  const coverStyle={
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgb(150, 104, 150,0.7)",
    display: "grid",
  }

   
  
  return (
    <div className="main-container">
      {waitVar ?
        <div id="cover" style={coverStyle}> 
          <div id="wait">
            <h1 id="waitText">WAIT</h1>
          </div> 
        </div>
      : null}
      <div className="content-container">
        <div className="header-container">
          <h1 className="header">BUILD MATRIX</h1>
        </div>
        <div className="input">
          <label className="row-label" for="rows">rows</label>
          <input className="row-input" id="rows"  placeholder="max. 12 rows" type="number" onChange={call}></input>
          <label className="col-label" for="columns">columns</label>
          <input className="col-input" id="cols" placeholder="max. 12 columns" type="number"  onChange={call}></input>
        </div>
        <div className="btn-container">
          <button className="btn" id="btnId" onClick={run}>BUILD</button>
        </div>
        <div id="result-container" style={resultStyle}>
          <h3>{(cols < 1) ? "enter number of rows and columns in the input fields and click on 'BUILD' to get the result!" : undefined}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
