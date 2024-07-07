import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import HomePage from './components/HomePage/homePage.jsx';
import AddResume from './components/Resume/addResume/addResume.jsx';
import ViewResume from './components/Resume/viewResume/viewResume.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<App />} />
      <Route path="/HomePage" element={<HomePage />}/>
      <Route path="/resume/addResume" element={<AddResume />}/>
      <Route path="/resume/viewResume" element={<ViewResume />}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
