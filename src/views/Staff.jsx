
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

const data = [
  {
    name: "James Maina",
    address: "4190-00100",
    city: "Nairobi",
    role: "Pharmacist",
    status: "active",
    description: "Cardiatic researcher with pseudo neomral power"
  },
  {
    name: "Samuel Ndiwa",
    address: "4190",
    city: "Kisii",
    role: "Doctor",
    status: "active",
    description: "Neural researcher"
  },
  {
    name: "Timothy Kiptoo",
    address: "4190-00100",
    city: "Nanyuki",
    role: "Nurse",
    status: "active",
    description: "CDC-10 asssistant"
  },
  {
    name: "Tomas Oloo",
    address: "4190-00100",
    city: "Mombasa",
    role: "Pharmacist",
    status: "active",
    description: "Lympathy and trigonometry"
  },
  {
    name: "Jane Waswa",
    address: "Footbal 43",
    city: "Eldoret",
    role: "Trainee Nurse",
    status: "active",
    description: "Architect"
  },
  {
    name: "Lyon Founier",
    address: "4190-00100",
    city: "Nakuru",
    role: "Doctor",
    status: "active",
    description: "Psychiatrist"
  },
  {
    name: "Mehn Mabonga",
    address: "4190-00100",
    city: "Thika",
    role: "Nurse",
    status: "active",
    description: "Gestation and nutrition"
  },
  {
    name: "Samuel Ndiwa",
    address: "4190",
    city: "Kisii",
    role: "Doctor",
    status: "active",
    description: "Neural researcher"
  },
  {
    name: "Timothy Kiptoo",
    address: "4190-00100",
    city: "Nanyuki",
    role: "Nurse",
    status: "active",
    description: "CDC-10 asssistant"
  },
  {
    name: "Tomas Oloo",
    address: "4190-00100",
    city: "Mombasa",
    role: "Pharmacist",
    status: "active",
    description: "Lympathy and trigonometry"
  },
  {
    name: "Jane Waswa",
    address: "Footbal 43",
    city: "Eldoret",
    role: "Trainee Nurse",
    status: "active",
    description: "Architect"
  },
  {
    name: "Lyon Founier",
    address: "4190-00100",
    city: "Nakuru",
    role: "Doctor",
    status: "active",
    description: "Psychiatrist"
  },
  {
    name: "Mehn Mabonga",
    address: "4190-00100",
    city: "Thika",
    role: "Nurse",
    status: "active",
    description: "Gestation and nutrition"
  },
  {
    name: "Samuel Ndiwa",
    address: "4190",
    city: "Kisii",
    role: "Doctor",
    status: "active",
    description: "Neural researcher"
  },
  {
    name: "Timothy Kiptoo",
    address: "4190-00100",
    city: "Nanyuki",
    role: "Nurse",
    status: "active",
    description: "CDC-10 asssistant"
  },
  {
    name: "Tomas Oloo",
    address: "4190-00100",
    city: "Mombasa",
    role: "Pharmacist",
    status: "active",
    description: "Lympathy and trigonometry"
  },
  {
    name: "Jane Waswa",
    address: "Footbal 43",
    city: "Eldoret",
    role: "Trainee Nurse",
    status: "active",
    description: "Architect"
  },
  {
    name: "Lyon Founier",
    address: "4190-00100",
    city: "Nakuru",
    role: "Doctor",
    status: "active",
    description: "Psychiatrist"
  },
  {
    name: "Mehn Mabonga",
    address: "4190-00100",
    city: "Thika",
    role: "Nurse",
    status: "active",
    description: "Gestation and nutrition"
  },
  {
    name: "James Maina",
    address: "4190-00100",
    city: "Nairobi",
    role: "Pharmacist",
    status: "active",
    description: "Cardiatic  with pseudo neomral power"
  },
  {
    name: "James Maina",
    address: "4190-00100",
    city: "Nairobi",
    role: "Pharmacist",
    status: "active",
    description: "Ca with pseudo neomral power"
  },
  {
    name: "James Maina",
    address: "4190-00100",
    city: "Nairobi",
    role: "Pharmacist",
    status: "active",
    description: "Cardiatic researcher with pseudo ower"
  },
  {
    name: "James Maina",
    address: "4190-00100",
    city: "Nairobi",
    role: "Pharmacist",
    status: "active",
    description: "Cardiatic researc power"
  },
];


class Staff extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th className="text-right">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.map((item, i)=>{
                      return <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.role}</td>
                        <td>{item.status}</td>
                        <td className="text-right">{item.description}</td>
                        <td><a href="/maps">View</a></td>
                      </tr>
                    })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Staff;
