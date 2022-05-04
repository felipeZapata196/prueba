
import { NavBar } from './components/NavBar';

import SideBar from './components/Sidebar';


import {Layout}  from './components/Layout'

import './App.css';
function App() {
  return (
   <div className="general-containter">

      <div className="sidebar">

     <SideBar />

      </div>

      <div className="mainContainer">
        <NavBar/>

        <Layout/>







      </div>



   </div>
  );
}

export default App;