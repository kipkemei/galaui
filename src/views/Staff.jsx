
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
import Funcstions from "../Funcstions";
import Services from "../Services";


class Staff extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      alert: null,
      itemList: []
    };

    this.funcs = new Funcstions(this);
    this.services = new Services(this);
  }

  componentDidMount() {
    this.services.getForList("staff/").finally()
  }

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
                  <Table responsive bordered={true}>
                    <thead className="text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Location</th>
                        <th>Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.itemList.map((item, i)=>{
                      return <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.user.first_name} {item.user.last_name}</td>
                        <td>{item.user.email}</td>
                        <td>{item.dob}</td>
                        <td>{item.location}</td>
                        <td>{item.designation}</td>
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
