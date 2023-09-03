import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export default function ViewEmployee() {
  const [employee, setEmployee] = useState();
  let listEmployee;
  const [list, setList] = useState();
  const navigate=useNavigate();

  useEffect(() => {
    axios
    .get("http://localhost:8080/employees")
    .then((res) => {
      setEmployee(res.data);
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);

  const deleteEmployee=(e)=>{
    let msg=e.target.parentElement.firstElementChild.innerHTML;
    let id=msg.split(":")[1];
    console.log(id.trim());
    axios.delete(`http://localhost:8080/employees/delete/${id}`).then((res)=>{
      console.log(res.data);
      alert(res.data);
      const updatedEmployee = employee.filter((e)=>
        e.empId !==Number.parseInt(id)
      );
      setEmployee(updatedEmployee);
      
    }).catch((e)=>{
      console.log(e);
      alert("Something Went Wrong ! Please Retry")
    })

  }
  const updateEmployee=(e)=>{
    e.preventDefault();
    let msg=e.target.parentElement.firstElementChild.innerHTML;
    let id=msg.split(":")[1];
    id=Number.parseInt(id.trim());
    console.log(id);
    if(id > 0){
      navigate(`/updateEmployee/${id}`);
    }else{
      alert("Invalid ID. Please try again");
    }


  }

  useEffect(() => {
    listEmployee =
      employee &&
      employee.map((e) => (
        <Card  className="card">
          <Card.Body>
            <Card.Title>Employee Id : {e.empId}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Name : {e.empName}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Contact : {e.employeeContactNumber}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              City : {e.address.city}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
             Pincode : {e.address.pincode}
            </Card.Subtitle>
            <Button className="btn" onClick={updateEmployee}>Update</Button>
            <Button className="btn" onClick={deleteEmployee}>Delete</Button>
          </Card.Body>
        </Card>
      ));
    setList(listEmployee);
  }, [employee]);

  return(<div className="cardcontainer">{list}</div>);
}
