import { Outlet } from "react-router-dom";

export default function Admininterface(){
    return <div>
        <div> Top bar</div>
        <div>siedbar</div>
        <Outlet></Outlet>
         <div>footer</div>
    </div>
}