import React from 'react'
import img from './false.jpg'
export default function Info() {

function onClick() {
console.log("clicked");
}
return (
<>
    <div className="container my-3">
        <h1 id='heading' style={{ color: 'white' ,background:'grey' }}>Welcome to Untamed Expressions</h1>
        <p>It has been observed that when a person is presented with an excessive number of choices, it often works to
            their disadvantage. The key lies in maintaining focus. True happiness does not come from constantly seeking
            something better than what we already have; rather, it comes from striving to enhance and appreciate the
            blessings bestowed upon us by a higher power. Rest assured, you will find much greater contentment by
            embracing this mindset. Trust me.
            <img src="" alt="" />
        </p>
        <button type="button" className="btn btn-success my-3">Learn more</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat quos dolorem tempora eveniet
            suscipit perferendis quisquam error, nihil sit alias eius labore a? Necessitatibus veritatis totam
            reprehenderit quasi asperiores et quae, doloremque commodi beatae accusantium assumenda laboriosam aliquam
            voluptates quibusdam quo molestias dicta hic earum? Dolorem obcaecati iure voluptate laudantium. Illum ad
            corporis fugit? Suscipit pariatur animi nemo adipisci vel impedit voluptate tenetur dicta officiis, illum
            autem ad fugit beatae ipsum, voluptatibus sequi minus soluta dolorum? Itaque facilis accusamus ipsum iste
            temporibus! Labore placeat, similique ipsum saepe officiis architecto est itaque quaerat repudiandae,
            consequuntur eaque incidunt adipisci ipsa in.
        </p>
        <button type="button" className="btn btn-danger my-3">Danger</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat quos dolorem tempora eveniet
            suscipit perferendis quisquam error, nihil sit alias eius labore a? Necessitatibus veritatis totam
            reprehenderit quasi asperiores et quae, doloremque commodi beatae accusantium assumenda laboriosam aliquam
            voluptates quibusdam quo molestias dicta hic earum? Dolorem obcaecati iure voluptate laudantium. Illum ad
            corporis fugit? Suscipit pariatur animi nemo adipisci vel impedit voluptate tenetur dicta officiis, illum
            autem ad fugit beatae ipsum, voluptatibus sequi minus soluta dolorum? Itaque facilis accusamus ipsum iste
            temporibus! Labore placeat, similique ipsum saepe officiis architecto est itaque quaerat repudiandae,
            consequuntur eaque incidunt adipisci ipsa in.
        </p>
        <button type="button" className="btn btn-danger my-3">Danger</button>
        <ul>
            <h3>For more information visit</h3>
            <li><a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a></li>
            <li><a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a></li>
            <li><a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a></li>
            <li><a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a></li>
        </ul>

    </div>
</>
)
}