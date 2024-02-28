import React from "react";
import './App.css'
import Navbar  from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Post from "./Components/Post/Post";
import { Action, Originals,Romance } from "./constants/urls";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Post title ='Netflix Originals'  url={Originals}/>
      <Post title ='Action' isSmall url={Action}/>
      <Post title ='Romance' isSmall  url={Romance}/>
    </div>
  );
}

export default App;
