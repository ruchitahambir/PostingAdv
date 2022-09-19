
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useNavigate} from 'react-router-dom';
import './payment.css';

function Payment()
{
    const navigate = useNavigate();
    const handleNumberChange =(e)=>{
  
        // Here we are checking if the length is equal to 10
        if(e.target.value.length===12)
        { 
          window.alert("Card number is excceding the limit")
        }
      }
      const handleCVVChange =(e)=>{
      if(e.target.value.length===3){ 
        window.alert("CVV ")
      }
    }
      const navigateToPaymentForm= () => {
      navigate('/PaymentForm');
}
    return (
        <div className="Post-Container" >
            <div className="mt-5 d-flex justify-content-left">
                <h3> Payment page</h3>
                <Form>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formGridName">
                            <Form.Label>Name on the card</Form.Label>
                            <Form.Control placeholder="Name on card" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control type="value" placeholder="0000000000000000"  maxLength={12} onChange={ handleNumberChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Billing Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridContact" >
                        <Form.Label>CVV</Form.Label>
                        <Form.Control placeholder="000 " type="Password"  maxLength={3} onChange={ handleCVVChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridContact">
                        <Form.Label>Expiration</Form.Label>
                        <Form.Control placeholder="00" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridContact">
                        <Form.Label>Year</Form.Label>
                        <Form.Control placeholder="0000 " />
                    </Form.Group>     
                    
                    <Button variant="primary" type="submit" onClick={navigateToPaymentForm} onChangeCapture={PaymentRequestUpdateEvent}>
                        Submit
                    </Button>
                </Form>
            </div>
            </div>
        )
}
export default Payment;