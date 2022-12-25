import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import BlockForm from './components/BlockForm';
import project from '../src/project.json'
import React from 'react';

import {  Routes , Route} from 'react-router-dom';
import Home from './components/Home';


import Player from './components/Player';

function App() {
  return (
    <div className="wrapper">
<Header/>
    <div className="content">
    <Routes>
           {/* по главному пути рендери элемент home  */}
          <Route path="/player" element={<Player/>}/>
          <Route path="/" element={<Home />}/>
      </Routes>

    </div>
  </div>
  );
}

export default App;
