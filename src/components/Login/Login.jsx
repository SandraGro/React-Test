import React from 'react';
import Link from 'react-router-dom/Link';
import { Form, Button, Modal } from 'react-bootstrap';


/*function Login(props) {
    return (
        <div>
            {props.name}
        </div>
    );
}*/

/*
const Login =  (props) =>{
      return (
        <div>
            {props.name}
        </div>
    );
}
*/

/*
const Login =  ({name}) =>(
    return (
      <div>
          {name}
      </div>
  );
*/
const Login = () => (
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Link to= "/list">
            <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Link>
        </Modal.Footer>
    </Modal.Dialog>

);

// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             clicked: false,
//             name: this.props.name,
//         };
//         this.changeClicked = this.changeClicked.bind(this);
//     }
//     changeClicked(event) {
//         console.log(event.target);
//         this.setState({clicked: !this.state.clicked})
//     }
//     render() {
//         return (
//             <div onClick={this.changeClicked}>
//                 {this.state.name}
//                 <br/>
//                 {this.state.clicked.toString()}
//             </div>
//         )
//     }
// }

export default Login;
