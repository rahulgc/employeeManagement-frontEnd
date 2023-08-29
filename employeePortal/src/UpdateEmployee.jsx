import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateEmployee() {
  const params = useParams();
  const navigate=useNavigate();
  const [employee, setEmployee] = useState();
  const initialValue = {
    empName: "",
    employeeContactNumber: "",
    address: {
      city: "",
      pincode: "",
    },
  };
  const [updatedEmployee, setUpdatedEmployee] = useState(initialValue);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employees/get/" + params.id)
      .then((res) => {
        setEmployee(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEmployee({ ...employee, [name]: value });
    setUpdatedEmployee({ ...employee, [name]: value });
    console.log(updatedEmployee);
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      address: {
        ...employee.address,
        [name]: value,
      },
    });
    setUpdatedEmployee({
      ...employee,
      address: {
        ...employee.address,
        [name]: value,
      },
    });
    console.log(updatedEmployee);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(updatedEmployee !== null){
        axios.put("http://localhost:8080/employees/update",updatedEmployee).then((res)=>{
            console.log(res.data);
            alert("Update Successful");
            navigate("/viewEmployee");
    }).catch((e)=>{
        console.log(e);
        alert("Something Went Wrong ! Please try again");
    })
    }
  }
  return (
    <>
      <div className="heading">Update Employee : {params.id}</div>
      <div className="input">
        <form className="form" onSubmit={(e)=>{handleSubmit(e)}}>
          <input
            type="text"
            placeholder="Name"
            name="empName"
            value={employee && employee.empName}
            disabled={true}
          />
          <br />
          <input
            type="text"
            placeholder="contactNumber"
            name="employeeContactNumber"
            value={employee && employee.employeeContactNumber}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="city"
            name="city"
            value={employee && employee.address.city}
            onChange={handleChange2}
          />
          <br />
          <input
            type="text"
            placeholder="pincode"
            name="pincode"
            value={employee && employee.address.pincode}
            onChange={handleChange2}
          />
          <br />
          <Button variant="success" type="submit" className="btnReg">
            Update
          </Button>
        </form>
      </div>
    </>
  );
}
