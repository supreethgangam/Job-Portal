import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './style.css';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:''
        }
    }

    render() {
        return (
            // <Jumbotron fluid>
            <div style={{marginTop: "3.5%"}}>
                <Container style={{ borderRadius: "10px",height: "500px", width: "500px", backgroundImage: `url("https://t4.ftcdn.net/jpg/00/80/91/63/360_F_80916319_83VVkECyXahP0ahpjS1mQPfcWEKEAqP8.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                    <h2 style={{ fontFamily: "monospace" }}>Welcome to Shramik Sandhan</h2>
                    <p>
                    <h6><b><i>The easiest way to find a job!</i></b></h6>
                    </p>
                    <Link to="/login">
                        <Button 
                            renderAs="button"
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "72%",
                                backgroundColor: "#532448",
                                borderColor: "#532448",
                            }}
                        >
                            <span>Login</span>
                        </Button>
                    </Link>
                    <h6 className="grey-text text-darken-1">
                        Don't have an account? <Link to="/register" style={{color: "#532448"}}>Register</Link>
                    </h6>
                </Container>
            </div>
        )
    }
}