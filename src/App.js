import React from "react";
import './App.css'
import Navbar  from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Post from "./Components/Post/Post";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Post/>
    </div>
  );
}

export default App;
