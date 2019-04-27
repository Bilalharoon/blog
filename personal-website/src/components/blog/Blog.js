import React from 'react';
import './Blog.css'
import { strict } from 'assert';

const Blog = (props) => {

    const Image = props.didLoad ? <img src="https://source.unsplash.com/collection/335434/1600x900" alt="" className="card-img-top" /> : <div className="loader">Loading...</div>
    return (

        <div className="col-sm-4 mb-5 d-flex align-items-stretch">
            <div className="card">
                <div className="card-header">{props.title + " " + props.id.toString()}</div>
                {Image}
                <div className="card-body">
                    <p className="card-text">{props.body}</p>
                </div>
            </div>
        </div>


    )
}

export default Blog