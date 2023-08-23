import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function addEmployee() {
  const initialValue = {
    empName: "",
    employeeContactNumber: "",
    address: {
      city: "",
      pincode: "",
    },
  };
  const [employee, setEmployee] = useState(initialValue);
  const [message,setMessage]=useState();
  const handleChange =(e) => {
    const { name, value } = e.target;
    console.log(name , value);
    setEmployee({ ...employee, [name]: value });
    console.log(employee);
  };
  const handleChange2 =(e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, address:{
        ...employee.address,[name]: value }});
    console.log(employee);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Inside")
    axios.post("http://localhost:8080/employees",employee).then((res)=>{
        console.log(res.data);
        let id=res.data.split(" ")[1];
        let msg=`Employee Succesfully Enrolled with Employee ID : ${id}`;
        console.log(msg);
        setMessage(msg);
    }).catch((e)=>{
        console.log(e);
    })
  }

  return (
    <>
      <div className="heading">Register New Employee</div>
      <div className="input">
        <form
          className="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Name"
            name="empName"
            onChange={handleChange}
            value={employee.empName}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="contactNumber"
            name="employeeContactNumber"
            onChange={handleChange}
            value={employee.employeeContactNumber}
          />
          <br />
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={handleChange2}
            value={employee.address.city}
          />
          <br />
          <input
            type="text"
            placeholder="pincode"
            name="pincode"
            onChange={handleChange2}
            value={employee.address.pincode}
          />
          <br />
          <Button variant="success" type="submit" className="btnReg">
            Register
          </Button>
        </form>
      </div>
     {message!==""?<div className="msg">{message}</div>:""}
    </>
  );
}
