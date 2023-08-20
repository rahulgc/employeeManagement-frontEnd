import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route , Link} from "react-router-dom";
import ViewEmployee from './ViewEmployee';
import AddEmployee from './AddEmployee';


function App() {



  return (
    <>
 <BrowserRouter>
        <Navbar bg="dark" data-bs-theme="dark" className='nav'>
        <Container>
          <Link to="/" className='link1'>Employee Portal</Link>
          <Nav className="me-auto">
            <Link className='link2' to="/viewEmployee">ViewEmployee</Link>
            <Link className='link3' to="/addEmployee">AddEmployee</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<ViewEmployee/>} />
        <Route path="/viewEmployee" element={<ViewEmployee/>} />
        <Route path="/addEmployee" element={<AddEmployee/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
