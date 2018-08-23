import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import data from '../things.json'

class CategoryList extends Component {
    render() {
        return (
            <div className="categories">
                <div className="panda-category">
                    <div className="panda-content">
                        <Link to="/pandas">Panda Bears</Link>
                        <p>
                            Pandas are bears native to south-central China, 
                            and are objectively the cutest animals on earth.
                        </p>
                    </div>
                    <div className="panda-image">
                        <img src={data.pandas.photos[0].imageURL} alt="panda" />
                    </div>
                </div>
                <div className="miniature-category">
                    <div className="miniature-content">
                        <Link to="/miniatures">Miniature Paintings</Link>
                        <p>
                            I enjoy painting miniatures. 
                            I've only been painting for about 6-months, 
                            here's some of my work.
                        </p>
                    </div>
                    <div className="miniature-image">
                        <img src={data.miniatures.photos[0].imageURL} alt="miniature" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryList;
