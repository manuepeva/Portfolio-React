import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import ImageManuel from '../Images/ManuelP.jpg';
class LandingPage extends Component {
    render() {
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <a href="https://google.com" /><img
                            src={ImageManuel}
                            alt="avatar"
                            className="avatar-image"
                        /><a />
                        <div className="banner-text">
                            <h1>Front End Web Developer</h1>

                            <hr />
                            <p>
                                HTML/CSS | REACT | SASS | NODEJS | BOOTSTRAP | MONGODB
                        </p>

                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/manuel-perez-v-97169836/?locale=en_US" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/manuepeva" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* FreeCodeCamp */}
                                <a href="https://www.freecodecamp.org" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                                {/* TeamTreehouse */}
                                <a href="https://www.freecodecamp.org" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-laptop" aria-hidden="true" />
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>

            </div >
        )
    }
}


export default LandingPage;