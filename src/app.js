import React, { useEffect } from 'react'
import { Route, Routes,Navigate, useNavigate } from 'react-router-dom';
import {Home} from "./container";
import {auth} from "./config/firebase.config.js"
const App=()=>{
    const navigate=useNavigate;

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(userCred=>{
            if(userCred){
                console.log(userCred?.providerData[0]);
            }
            else{
                navigate("/home/auth",{replace:true});
            }
        })
    },[])
    return(
        <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
            <Routes>
                <Route path="/home/*" element={<Home />} />

                {/* if the route is not matching */}
                <Route path="*" element={<Navigate to={"/home"} />} />
            </Routes>
        </div>
    )
}
export default App;