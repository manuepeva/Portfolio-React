import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import CuscoAfternoon from '../Images/CuscoAfternoon.jpeg';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }
    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid about-grid">
                    {/*English version*/}
                    <Card shadow={5} style={{ minWidth: '750', margin: 'auto', height: '30em', width: '71%' }}>
                        <CardTitle style={{
                            color: '#fff', height: '300px',
                            background: 'url(https://i.ibb.co/5MBWYct/Cusco-Afternoon.jpg) center / cover'
                        }}>Manuel Pérez</CardTitle>
                        <CardText>
                            I´m a Web Developer and Business Manager with one year of comercial experience as
                            a Front End Developer, I´ve worked and developed projects using React, HTML, CSS,
                            JavaScript, Github, Babel, amongst other programming languagues & Technologies.<br />
                            When working my main goal it is to achieve customer´s satisfaction and get things done.

                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/manuepeva">Github</a></Button>
                            {/* <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div >
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid about-grid">
                    {/*Versión en español*/}
                    <Card shadow={5} style={{ minWidth: '750', margin: 'auto', height: '30em', width: '71%' }}>
                        <CardTitle style={{
                            color: '#fff', height: '300px',
                            background: 'url(https://i.ibb.co/5MBWYct/Cusco-Afternoon.jpg) center / cover'
                        }}>Manuel Pérez</CardTitle>
                        <CardText>
                            Soy un Desarrollador Web y Administrador con un año de experiencia comercial como Front End Developer, he trabajado y desarrollado proyectos utilizando React, HTML, CSS, JavaScript, Github, Babel, entre otros lenguajes y tecnologías de programación.
                            Al trabajar mi principal objetivo es lograr la satisfacción del cliente y finalizar el trabajo
                            al terminar del día.
                    </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/manuepeva">Github</a></Button>
                            {/* <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid about-grid">
                    {/*Project number one*/}
                    <Card shadow={5} style={{ minWidth: '750', margin: 'auto', height: '30em', width: '71%' }}>
                        <CardTitle style={{
                            color: '#fff', height: '300px',
                            background: 'url(https://i.ibb.co/5MBWYct/Cusco-Afternoon.jpg) center / cover'
                        }}>Manuel Pérez</CardTitle>
                        <CardText>
                            Ich bin ein Webentwickler und Business Manager mit einem Jahr Berufserfahrung als Front-End-Entwickler. Ich habe unter anderem mit React, HTML, CSS, JavaScript, Github, Babel und anderen Programmiersprachen und Technologien gearbeitet und Projekte entwickelt.
                            Bei meiner Arbeit ist es mein Hauptziel, die Kundenzufriedenheit zu erreichen und Aufgabe zuende bringen.
                    </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/manuepeva">Github</a></Button>
                            {/* <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }

    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>
                    this.setState({ activeTab: tabId })} ripple>
                    <Tab>ENGLISH</Tab>
                    <Tab>ESPAÑOL</Tab>
                    <Tab>DEUTSCH</Tab>
                </Tabs>
                {/* <section className="projects-grid"> */}
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>

                {/* </section> */}
            </div>
        )
    }
}


export default About;