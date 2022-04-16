import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login/Login";
import Details from "./Details";

const App = () => {
    
    return(
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavBar/>}>
                        <Route index element={<Login/>}/>
                        <Route path="home" element={<Home/>}/>
				        <Route path="*" element={<Navigate to ="/" />}/>
                        <Route path="details" element={<Details/>}/>
                </Route>
			    </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;