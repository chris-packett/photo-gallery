import React, { Component } from 'react';
import data from '../things.json'

class PhotoDetail extends Component {
    render() {
        let photo = data[this.props.match.params.category].photos
        let id = this.props.match.params.id
        return (
            <div className="photo-detail-container">
                <div className="photo-detail-title">
                    <h3>{photo[id].title}</h3>
                </div>
                <div className="photo-detail-image">
                    <img src={photo[id].imageURL} alt={photo[id].title} />
                </div>
                <div className="photo-detail-source">
                    <a href={photo[id].sourceURL}>Source</a>
                </div>
            </div>
        );
    }
}

export default PhotoDetail;
