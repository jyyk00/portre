import React from 'react';
import '../style.css'

function Bio() {
    return (
        // <section class="about-section">
        //     <div class="about">

                <div class="bio-head">
                    <h2 class="title"> About Me </h2>
                    <img class="biopic" src="assets/images/bio-pic.jpeg" width="95" height="95" alt="bioMe"></img>
                </div>
                <p> 20 years old. Currently living in the Portland, OR area. <br> Attending The University Of
                Oregon to obtain a certificate in Full Stack Web
                Development (graduation date: April of 2020). Using the skills learned through the
                University of Oregon coding bootcamp
                along with my own research; my goal is to enter the industry as a full stack developer
                filling both needs in front and back-end technologies
                        to create new, add on too, and solve applications.</p>

                
            {/* </div>
        </section> */}
    )
};

export default Bio;