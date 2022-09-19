import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import './PostAd.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


function PostAd() {

  const [adTitle, setTitle] = useState('');
  const [adContent, setContent] = useState('');
  const [adDate, setDate] = useState('');
 const [PaymentMode, setPaymentMode] = useState('');


  const handleTitleChange = (value) => { setTitle(value); };

  const handleContentChange = (value) => { setContent(value); };
  const handlePaymentModeChange = (value) => { setPaymentMode(value); };
 

  const Navigate = useNavigate();
  
    const navigateToPayment = () => {
      const data =
    {
      AdTitle: adTitle,
      AdContent: adContent,
      AdDate: adDate,
      PaymentMode: PaymentMode,
     
    };
    Navigate("/Payment");
    const url = 'https://localhost:44331/api/User/Advertisement';
    axios.post(url, data).then((result) => {
      alert(result.data)
    }).catch((error) => {
      alert(error);
    })

      /*Navigate('/Pay');*/
    }

    return (
     
      <div className="mt-5 d-flex justify-content-center PostAd-Container">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalTitle">
            <Form.Label column sm={2}>
              Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="title" placeholder="Title" onChange={(e) => handleTitleChange(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalContent">
            <Form.Label column sm={2}>
              Content
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="Content" placeholder="Content" onChange={(e) => handleContentChange(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalContent">
            <Form.Label column sm={2}>
              Date
            </Form.Label>
            <DatePicker selected={adDate} onChange={adDate => setDate(adDate)} />
          </Form.Group>

          <fieldset>
            <Form.Group as={Row} className="mb-3"  onChange={(e) => handlePaymentModeChange(e.target.value)}>
              <Form.Label as="legend" column sm={3}>
                Payment Mode
              </Form.Label>
              <Col sm={10}>
              <Form.Check
                  type="radio"
                  label="Debit Card"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Credit Card"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
          </fieldset>

          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={3}>
                Package
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="checkbox"
                  label="500Rs"
                  name="form-check-input"
                  id="flexCheckDefault"
                />
                <Form.Check
                  type="checkbox"
                  label="1000Rs"
                  name="form-check-input"
                  id="flexCheckDefault"
                />
                <Form.Check
                  type="checkbox"
                  label="750Rs"
                  name="form-check-input"
                  id="flexCheckDefault"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={navigateToPayment}>Proceed to pay</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      
    );
  }

export default PostAd;