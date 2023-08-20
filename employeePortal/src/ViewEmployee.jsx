import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
export default function ViewEmployee() {
  const [employee, setEmployee] = useState();
  let listEmployee;
  const [list, setList] = useState();

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

  useEffect(() => {
    listEmployee =
      employee &&
      employee.map((e) => (
        <Card  className="card">
          <Card.Body>
            <Card.Title>Employee Id : {e.empId}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {e.empName}
            </Card.Subtitle>
            <Card.Link href="#">Update</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      ));
    setList(listEmployee);
  }, [employee]);

  return <>{list}</>;
}
