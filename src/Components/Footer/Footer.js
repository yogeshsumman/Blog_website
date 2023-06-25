import React from 'react'
import './Footer.css';
import facebook from "./facebook.png";
export default function Footer() {
    return (
        <body>
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Untamed Expressions</h3>
                                <p>Welcome to Yogesh Summan's Bold Insights, a blog where fearlessness meets deep introspection. As the founder and author, Yogesh Summan, I am dedicated to providing you with exceptionally thoughtful insights on life's myriad aspects. With a bold and unapologetic approach, this blog delves into the depths of existence, exploring topics such as personal growth, mindfulness, relationships, and the human experience.</p>
                            </div>
                            <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="https://twitter.com/SummanYogesh"><i className="icon ion-social-twitter"></i></a><a href="https://www.instagram.com/yogesh.summan/"><i className="icon ion-social-instagram"></i></a></div>
                        </div>
                        <p className="copyright">Untamed Expressions© 2023</p>
                    </div>
                </footer>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </body>
    )
}