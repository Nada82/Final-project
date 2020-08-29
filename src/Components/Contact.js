import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Contact = (props) => {
  return (
<div className="contact">
<center>
  <h1 className="goodbye">Like what you saw?
  <div>
    If so, please feel free to submit your contact info and a small description of your request below.
    I'll be sure to get back to you asap!</div>
    <div>
    Thanks again for your visit and Looking forward to working together!
    </div>
    </h1>
  </center>
  <div><br></br></div>
    <Form className="form"> 
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input type="email" name="email" id="exampleEmail"  placeholder="Insert Name"/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Email</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="xxxxx@xxmail.xxx" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">Message</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="How can I help you?"/>
          </FormGroup>
        </Col>
      
      </Row>
      <Button>Send</Button>
    </Form>

    </div>
  );
}

export default Contact;