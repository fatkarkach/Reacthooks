import { Outlet } from "react-router-dom";

export default function Visitorinterface(){
    return <div>
        <div> Navbar</div>
        <Outlet></Outlet>
         <div>footer</div>
    </div>
}