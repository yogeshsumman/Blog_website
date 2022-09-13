import React from 'react'
import './Sidemenu.css'

export default function sidemenu() {
return (
<div>
    <div className="wrapper">
        <div className="sidebar">
            <ul>
                <li><a href="#"><i className="fas fa-home"></i>Home</a></li>
                <li><a href="#"><i className="fas fa-user"></i>Profile</a></li>
                <li><a href="#"><i className="fas fa-address-card"></i>About</a></li>
                <li><a href="#"><i className="fas fa-project-diagram"></i>portfolio</a></li>
                <li><a href="#"><i className="fas fa-blog"></i>Blogs</a></li>
                <li><a href="#"><i className="fas fa-address-book"></i>Contact</a></li>
                <li><a href="#"><i className="fas fa-map-pin"></i>Map</a></li>
            </ul>
            <div className="social_media">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        {/* <div className="main_content">
            <div className="header">Welcome!! Have a nice day.</div>
        </div> */}
    </div>
</div>
)
}