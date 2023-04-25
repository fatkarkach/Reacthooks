import { Route, Routes } from 'react-router-dom';
import './App.css';
import Visitorinterface from './Visitor/Visitorinterface';
import Admininterface from './Admin/Admininterface';
import About from './Visitor/pages/About';
import Home from './Visitor/pages/Home';


function App() {
  // const [count,setcount]=useState(0)
  // useEffect(
  //   ()=>{
  //     console.log("welcoom")
  //   },[count]
  // )
  // const firstname=useRef()
  
  return (
    <div className="App">
      {/* <p>{count}</p> */}
   {/* <h1>app page </h1> */}
   {/* <button onClick={()=>setcount(count+1)}>+</button> */}
   {/* <input type="text" ref={firstname}></input>
   <button  onClick={()=>console.log(firstname.current.value)}>click</button> */}
   <Routes>
    <Route path="/" element={<Visitorinterface/>}>
      <Route index element={< Home/>}></Route>
      <Route path="about" element={< About/>}></Route>
    </Route>
    <Route path="/admin" element={<Admininterface/>}></Route>
    {/* <Route path="*" element={<Notfound/>}></Route> */}


   </Routes>


    </div>
  );
}

export default App;
