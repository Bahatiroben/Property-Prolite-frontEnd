/* eslint-disable react/prop-types */
import React, { Component } from 'react';
class PropertyContainer extends Component {
    constructor(props) {
        super(props);       
    }
    render() { 
        return ( <div className="product-container box">
        <div className="poperty-header">
            <h2 className="product-title">
                <a href="singlepost.html"> {this.props.property.title}</a>
            </h2>
        </div>

        <div className="row">

            <div className="col-1">
                <div className="img-container">
                    <a href="singlepost.html"><img src={this.props.property.imageurl}/></a>
                </div>
            </div>

            <div className="col-2">
                <div className="pro-feature price">{this.props.property.price} rwf</div>
                
                <div className="pro-feature type">{this.props.property.type}</div>
                <button className="buy rent"><a href="singlepost.html">Buy Now</a></button>
            </div>

        </div>
    </div> );
    }
}

export default PropertyContainer;