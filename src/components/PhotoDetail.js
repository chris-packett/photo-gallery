import React, { Component } from 'react';
import data from '.../things.json'

class PhotoDetail extends Component {
    render() {
        return (
            <div className="photo-detail-container">
                <h3>{this.props.match.params.category}</h3>
            </div>
        );
    }
}

export default PhotoDetail;
