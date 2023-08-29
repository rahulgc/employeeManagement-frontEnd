import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route , Link} from "react-router-dom";
import ViewEmployee from './ViewEmployee';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';


function App() {



  return (
    <>
 <BrowserRouter>
        <Navbar bg="dark" data-bs-theme="dark" className='nav'>
        <div className='container'>
          <div className='logo'><Link to="/" className='link1'>Employee Portal</Link></div>
          <div className="routes">
            <Link className='route' to="/viewEmployee">ViewEmployee</Link>
            <Link className='route' to="/addEmployee">AddEmployee</Link>
          </div>
        </div >
      </Navbar>
      <Routes>
        <Route path="/" element={<ViewEmployee/>} />
        <Route path="/viewEmployee" element={<ViewEmployee/>} />
        <Route path="/addEmployee" element={<AddEmployee/>} />
        <Route path="/updateEmployee/:id" element={<UpdateEmployee/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
