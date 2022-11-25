import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import PBisection from "./Page/PBisection"
import Navbar from "./components/Navbar"
import PHome from "./Page/PHome"
import PFlasePosition from "./Page/PFlasePosition"
import PCramer from "./Page/PCramer"
import POnepoint from "./Page/POnepoint"
import G from "./components/G"
// import FCramer from
// import GBisection from "./Graph/GBisection"


export default function AppRouter() {
    return(
        <div className="AppRouter">
        <BrowserRouter>

                    <Navbar />
                        
                <Routes>

                <Route path="" element={<PHome />} />

                <Route path="/Home" element={<PHome />} />

                <Route path="/Bisection" element={<PBisection />} />

                <Route path="/Flase-Position" element={<PFlasePosition />} />

                <Route path="/One-Point%20Iteration" element={<POnepoint />} />

                <Route path="/Cramer's-Rule" element={<PCramer />} />

                <Route path="/G" element={<G />} />

            </Routes>

        </BrowserRouter>
        </div>
    )
}