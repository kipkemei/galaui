
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


export default class extends React.Component {
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
        this.services.getForList("disease/").finally()
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">Diseases</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive bordered={true}>
                                        <thead className="text-primary">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Code</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.itemList.map((item, i)=>{
                                            return <tr key={i}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.code}</td>
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
