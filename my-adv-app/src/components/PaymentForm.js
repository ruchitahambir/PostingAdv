import './payment.css';
import './Payment.js';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


 
function PaymentForm() {
    const Navigate =  useNavigate()
 
    const handleSubmit = () => {
        Navigate('/');
    }
    return(
        <div className = 'Payment' >
                <h1>Hurrayyy....Now You Can advertise With Us...!!!!</h1>        
                <Form>
                <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                    Back
                </Button>
            </Form> 
        </div >

        
    );
    }


 
export default PaymentForm;