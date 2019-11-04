import React, { Component} from 'react';
import { connect } from 'react-redux';
import { loadProperties } from '../../redux/actions/propertyActions';
import PropTypes from 'prop-types'
import PropertyContainer from './PropertyContainer';
import SideBar from '../views/SideBar';
import {loadNav} from '../../redux/actions/navActions'

class PropertiesPage extends Component {
    componentDidMount(){
        const {loadProperties, properties, loadNav} = this.props;
        properties.length === 0?loadProperties().catch(err=>{
            localStorage.setItem('ProliteToken', '');
            this.props.history.push('/login')
        }):console.log(this.props)
        loadNav([{to: '/properties', caption: 'Properties'}, {to: '/logout', caption: 'Sign Out'}])
    }
    render() { 
        return ( <>
        <SideBar/>
        <div className="box products-page">
            {
                this.props.properties.map(property => (
                    <PropertyContainer key={property.id} property={property}/>
                ))
            }

            </div> </>);
    }
}
PropertiesPage.propTypes = {
    properties: PropTypes.array.isRequired,
    loadProperties: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        properties: state.properties,
        navList: state.navList
    }
}

const mapDispatchToProps = {
    loadProperties,
    loadNav
}
export default connect(mapStateToProps, mapDispatchToProps)(PropertiesPage);