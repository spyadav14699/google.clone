import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import SearchData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Book Name..." data={SearchData} />
    </div>
  );
}

export default App;