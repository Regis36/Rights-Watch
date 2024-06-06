import React from 'react'; 
import { BrowserRouter, Routes,Route } from "react-router-dom" ;
//import Login from "./Components/Auth/login" ; 
import Homepage from './Components/ExplorePage/explorepage';
import Signup from "./Components/Auth/signup" ; 
import Login2 from './Components/Auth/login2';
import Userpage from './Components/Userpage/userpage';
import Profile from './Components/Profile/Profile' ; 
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {themeSettings} from "./theme.js";

function App() {
  const mode = useSelector((state) => state.mode); 
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme= {theme}>
          <CssBaseline/>
          <Routes>
            <Route path = "/" element= {<Login2/>}/> 
              <Route path= "/homepage" element = {<Homepage/>} />
              {/* <Route path="/" element = {<Login/>} /> */}
              
              {/* <Route path= "/home" element = {<Homepage/>} /> */}
              <Route path = "/signup" element= {<Signup/>} />
              <Route path = "/userpage" element= {<Userpage/>} /> 
              <Route path= "/profilepage" element = {< Profile />} />
              <Route path="/children" element = {<childrenRights/>} />

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
