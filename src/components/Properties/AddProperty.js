import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createProperty } from '../../redux/actions/propertyActions';

class AddProperty extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleChange = ({ target}) => {
        const {files} = target;
        //if(target.value == null || undefined ) {
            // const label = document.querySelector(`[name = l${target.name}]`)
            // label.style.desplay = "block";
            // label.innerHTML = "this field is required";
            // console.log(label);
        //}
        this.setState((prev) => ({...prev, [target.name]: files?files[0] : target.value}));
    }

    handleSubmit = async () => {
        const labels = document.querySelectorAll("[name^='l']");
        labels.forEach((label) => {
            //console.log(label.attributes.name.value);
            const n = label.attributes.name.value.slice(1);
            if(!this.state[n]) {
                label.innerHTML = `${n} is required`
                //console.log(label.name);
                return 0
            } else {
                label.innerHTML = '';
                return 0
            }
            //console.log((!label.innerHTML))
        })
        //console.log(labels);
        const property = new FormData;
        const {
            title, price, address, imageUrl, type, description
        } = this.state;
        property.append("imageUrl", imageUrl, imageUrl);
        property.append("title", title);
        property.append("address", address);
        property.append("price", price);
        property.append("type", type);
        property.append("description", description);
        const { createProperty } = this.props;
        const button = document.querySelector("[name='submit']");
        button.innerHTML = 'Saving...'
        
         const t = await createProperty(property).then((data)=> {
             if(!data) {
                 this.props.history.push("/properties");
             } else {
                button.innerHTML = 'Save'
                if(data.status === 500) {
                    localStorage.setItem('PropliteToken', '');
                    this.props.history.push('/login');
                }
             }
         });
        console.log(t);
    }

    render() { 
        const errStyle = {
            color: "orange",
            width: "100%",
            fontSize: 18

        }
        return ( <>
        
        <div className="create-container form">
        <div className="create-title">Create New Property</div>
        <form action="#" className="box">
            <input onChange={this.handleChange} type="text" name="title" id="title" placeholder="Title"/>
            <label style={errStyle} name="ltitle"></label>
            <br/>

            <input onChange={this.handleChange} type="number" name="price" id="price" placeholder="Price"/>
            <label style={errStyle} name="lprice"></label>
            <br/>

            <input onChange={this.handleChange} type="text" name="state" id="state" placeholder="State"/>
            <label style={errStyle} name="lstate"></label>
            <br/>

            <input onChange={this.handleChange} type="text" name="type" id="type" placeholder="Type"/>
            <label style={errStyle} name="ltype"></label>
            <br/>

            <input onChange={this.handleChange} type="text" name="address" id="address" placeholder="Address"/>
            <label style={errStyle} name="laddress"></label>
            <br/>

            <textarea onChange={this.handleChange} name="description" id="description">Description...</textarea>
            <label style={errStyle} name="ldescription"></label>
            <br/>

            <input onChange={this.handleChange} type="file" name="imageUrl" id="type"/>
            <label style={errStyle} name="limageUrl"></label>
            <br/>
            <label name="submit" onClick={this.handleSubmit} className="button primary save">
                Save
            </label>
            
        </form>
    </div>
         </>);
    }
}

AddProperty.propTypes = {
    property: PropTypes.array.isRequired,
    createProperty: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        property: state.newproperty,
    }
}

const mapDispatchToProps = {
    createProperty,
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);