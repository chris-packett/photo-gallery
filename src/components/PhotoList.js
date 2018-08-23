import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import data from '../things.json'

class PhotoList extends Component {
    render() {
        return (
            <div>
                <div className="category-title-and-description-container">
                    <h3 className="category-title">{data[this.props.match.params.category].title}</h3>
                    <h4 className="category-description">{data[this.props.match.params.category].description}</h4>
                </div>
                <div className="photos">
                    {data[this.props.match.params.category].photos.map((photo, i) => {
                        return (
                            <Link to={`/${this.props.match.params.category}/${i}`} key={i}>
                                <div className="photo">
                                    <div className="photo-image">
                                        <img src={photo.imageURL} alt={photo.title}/>
                                    </div>
                                    <div className="photo-title">
                                        {photo.title}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default PhotoList;
