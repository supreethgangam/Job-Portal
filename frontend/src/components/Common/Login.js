import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import './style.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
        console.log(userData);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
            <div className="color-back">
                <div style={{ marginTop: "4rem" }} className="row">
                    <div className="col s8 offset-s2" >
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left" style={{color: "#532448", paddingLeft: "15%", paddingTop: "8%"}}><b>keyboard_backspace</b></i>
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "15%" }}>
                            <h4>
                            <b>Login</b>
                            </h4>
                            <p className="grey-text text-darken-1">
                            Don't have an account? <Link to="/register" style={{color: "#532448"}}><b>Register</b></Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12" style={{ paddingLeft: "15%" }}>
                                <label htmlFor="email"><b>Email</b></label><br></br>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.email || errors.emailnotfound
                                    })}
                                    style={{borderRadius: "12px",borderColor: "purple", width: "85%"}}
                                />
                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
                            </div>
                            <div className="input-field col s12" style={{ paddingLeft: "15%", paddingTop: "3%" }}>
                                <label htmlFor="password"><b>Password</b></label><br></br>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password || errors.passwordincorrect
                                    })}
                                    style={{borderRadius: "12px",borderColor: "purple", width: "85%"}}
                                />
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "25%", paddingTop: "3%" }}>
                                <button
                                    style={{
                                    width: "150px",
                                    borderRadius: "15px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    backgroundColor: "#532448",
                                    borderColor: "#532448",
                                    }}
                                    type="submit"
                                    className="btn btn-primary btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
  