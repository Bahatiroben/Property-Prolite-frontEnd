import React, { Component} from 'react';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions/registerAction';
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom';
class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    handleClick = ({target})=>{
        const {signUp} = this.props;
        signUp(this.state);
        //console.log(this.state)
    }

    handleChange = ({target})=>{
        this.setState((prev)=> ({...prev, [target.name]: target.value}))  
    } 
    render() {
        return (
            <>
        <div className="form">
        <form>
            <div className="box">

                <input type="email" onChange={this.handleChange} placeholder="Email" name="email" className="full-width" id="email" required=""/>
                <br/>
                <input type="text" onChange={this.handleChange} placeholder="First Name" name="firstName" className="full-width" id="first-name" required=""/>
                <br/>
                <input type="text" onChange={this.handleChange} placeholder="Last Name" name="lastName" className="full-width" id="last-name" required=""/>
                <br/>
                <input type="text" onChange={this.handleChange} placeholder="Phone NUmber" name="phoneNumber" className="full-width" id="email" required=""/>
                <br/>
                <input type="password" onChange={this.handleChange} placeholder="Password" className="full-width" id="password" name="password" required=""/>
                <br/>
                 <NavLink to="/properties" onClick={this.handleClick} className="button primary full-width">Sign Up</NavLink>
                <hr/>
            </div>

        </form>
        <div className="sign-in to-center">Already a member?</div>

        <NavLink to="/properties">
            <button className="to-center create button">
                Sign In
            </button>
        </NavLink>
    </div>
    </>
    );
    }
}
RegisterPage.propTypes = {
    signUp: PropTypes.func.isRequired
}
const mapStateToProps = ({user}) => {
    return {
        user
    }
}

const mapDispatchToProps = {
    signUp
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);