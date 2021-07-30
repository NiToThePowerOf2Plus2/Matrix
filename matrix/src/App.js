import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="header-container">
          <h1 className="header">BUILD OWN MATRIX</h1>
        </div>
        <div className="input">
          <label className="input-ele" for="rows">rows</label>
          <input className="input-ele" id="rows" type="number"></input>
          <label className="input-ele" for="columns">columns</label>
          <input className="input-ele" id="columns" type="number"></input>
        </div>
        <div className="btn-container">
          <button className="btn">BUILD</button>
        </div>
        <div className="result-container"></div>
      </div>
    </div>
  );
}

export default App;
