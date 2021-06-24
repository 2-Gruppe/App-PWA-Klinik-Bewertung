import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

const FooterComponent = () => {
    return (

        <Row style={{ textAlign: "center", backgroundColor: "#77777F", height: "140px" }}>

            <Col className="mt-4">
                <Button size="md" style={{ backgroundColor: "#262020", borderRadius: "50%", fontSize: "1.3rem" }} onClick={() => window.scrollTo(0, 0)} >^</Button>
            </Col>

        </Row>

    );
}

export default FooterComponent;