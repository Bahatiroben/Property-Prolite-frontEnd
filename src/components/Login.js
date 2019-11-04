import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { NavLink } from 'react-router-dom'
import {signin} from '../redux/actions/signinAction';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {} }
    }
    componentDidMount(){
        const token = localStorage.getItem('ProliteToken');
        if(token) {
            this.props.history.push('/properties');
        }
    }
     handleClick = ({target})=>{
         const {signin} = this.props;
        signin(this.state);
    } 
     handleChange = ({target})=>{
        this.setState((prev)=> ({...prev, [target.name]: target.value}))
        console.log(this.state)
    }
    render() { 

        return (
            <>
        <div className="form">
        <form>
            <div className="box">

                <input type="email" onChange={this.handleChange} placeholder="Email" name="email" className="full-width" id="email" required=""/>
                <br/>

                <input type="password" onChange={this.handleChange} placeholder="Password" name= "password" className="full-width" id="password" required=""/>
                <div id="forgot-password">
                    <a href="./reset.html">Forgot Password?</a>
                </div>
                <br/>
                 <NavLink to="/properties" onClick={this.handleClick} className="button primary full-width">Log In</NavLink>
                 
                <hr/>
            </div>

        </form>
        <div className="sign-in to-center">New to PrepertyPro-lite?</div>

        <NavLink to="/signup">
            <button className="to-center create button">
                Sign Up
            </button>
        </NavLink>
    </div>
    </>
    );
    }
}
 
LoginPage.propTypes = {
    signin: PropTypes.func.isRequired
}
const mapStateToProps = ({user}) => {
    return {
        user
    }
}

const mapDispatchToProps = {
    signin
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);