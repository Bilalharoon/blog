import React, { Component } from 'react';
import axios from 'axios'
import Blog from './Blog'
import { connect } from 'react-redux'

class BlogContainer extends Component {

    state = {
        NumOfPages: 0,
        didLoad: false
    }

    componentDidMount() {

        // the image loaded
        this.setState({ didLoad: true })


        // grab the posts from the api
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {

            // get the number of pages in total
            this.setState({ NumOfPages: Math.floor(response.data.length / 9) })
            console.log(this.state.NumOfPages)

            // get 9 posts to show on the screen
            this.props.getPosts(response.data.slice(this.props.match.params.id * 9, (this.props.match.params.id * 9) + 9))
            console.log(this.props.blogPosts)



        }
        )

    }

    render() {

        // show the back button if we're not on the first page
        const backButton = this.props.match.params.id > 0 ? <a href={`/blog-posts/${parseInt(this.props.match.params.id) - 1}`}><button className="mr-2 btn btn-secondary" type="button">back</button></a> : undefined

        // show to next button if we're not on the last page
        const nextButton = this.props.match.params.id < this.state.NumOfPages ? <a href={`/blog-posts/${parseInt(this.props.match.params.id) + 1}`}><button className="btn btn-secondary" type="link">next</button></a> : undefined
        return (<div className="container mt-5">
            <div className="row">

                {this.props.blogPosts.map(post => <Blog key={post.id} title={post.title} body={post.body} id={post.id} didLoad={this.state.didLoad} />)}

            </div>

            <div className="row d-flex justify-content-center mb-5">
                {backButton}
                {nextButton}
                {console.log(this.state.NumOfPages)}
            </div>

        </div>)
    }
}

const mapStateToProps = state => {
    return {
        blogPosts: state.posts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: (posts) => dispatch({ type: 'GET', payload: posts }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)