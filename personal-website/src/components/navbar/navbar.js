import React from 'react';
import './navbar.css'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
            <button className="navbar-toggler ml-auto btn btn-secondary" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blog-posts/0">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Me</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default navbar