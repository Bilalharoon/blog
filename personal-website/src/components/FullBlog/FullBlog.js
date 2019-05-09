import React from 'react';

const FullBlog = props => {
    return (
        <div className="container">
            Hello World {props.match.params.id}
        </div>
    )
}



export default FullBlog
