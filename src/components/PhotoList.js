import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import photos from '../things.json'

class PhotoList extends Component {
    render() {
        return (
            <div className="photos">
                {photos[this.props.match.params.category].photos[0].title}
            </div>
        );
    }
}

export default PhotoList;
