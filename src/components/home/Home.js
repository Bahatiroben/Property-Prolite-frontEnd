import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loadNav} from '../../redux/actions/navActions';
const HomePage = (props) => {
    useEffect(()=>{
        props.loadNav([{to: '/', caption: 'Home'}, {to: '/login', caption: 'Login'}])
    }, []);
    return(<>
    <div className="home-section">
        <h1 className="hd">PropertyPro-lite</h1>
        <Link to="/signup"><button className="button">Get started</button></Link>
    </div>
    <div className="bottom">
        <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Modi soluta quidem provident molestiae magni eveniet minima 
     neque saepe, amet ea dolore quaerat cumque dignissimos deleniti
      quibusdam beatae voluptas laborum quos. Lorem, ipsum dolor sit amet 
      consectetur adipisicing elit. Corrupti, voluptates! Adipisci consectetur 
      tempore, excepturi inventore tempora odit? Magni eveniet itaque quos facere aspernatur
       consequatur. Incidunt blanditiis quo minima ullam voluptatibus. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Distinctio
        </p>
    </div>
    </>)
}

HomePage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);