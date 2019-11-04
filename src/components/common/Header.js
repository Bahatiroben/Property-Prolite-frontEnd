import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import  { loadNav } from '../../redux/actions/navActions';
import PropTypes from 'prop-types'
class Header extends Component {
    render() { 
        const activeStyle = {borderBottom: "2px solid white"}
        const NotactiveStyle = {textDecoration: "none"}
        const navList = this.props.navList?this.props.navList:[{to: '/', caption: 'Home'}]
        return ( 
         <>
        <nav className="header shadow-overlay">
    
        <span>
            <span className="logo-txt">PropertyPro-lite</span>
        </span>
        <ul className="navLinks">
            {
                navList.map((list)=>(<li key={list.caption}><NavLink to={list.to} key={list.caption} style={NotactiveStyle} activeStyle={activeStyle} exact>{list.caption}</NavLink></li>))
            }
        </ul>
        </nav>
        <div style={{height: 22}}></div> 
        </>
        );
    }
}
 
Header.propTypes = {
    navList: PropTypes.array.isRequired,
    loadNav: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        navList: state.navList
    }
}

const mapDispatchToProps = {
    loadNav
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);