import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import CVEN from '../Resume/CVEN.pdf';
import CVDE from '../Resume/CVDeutsch.pdf';
class Resume extends Component {
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
                            color: '#fff', height: '500px',
                            background: 'url(https://i.ibb.co/5Yst2pJ/CV-ESP-Europass-20200316-P-rez-Vallenas-EN-001.jpg) center / cover'
                        }}>Cusco, Perú</CardTitle>
                        <a href={CVDE} alt="CV" style={{ textDecoration: 'none', color: 'black', fontSize: '22px' }}>CV English</a>
                        {/* <CardText>
                            Av. Collasuyo, Cusco Perú
                        </CardText> */}
                        <CardActions border>
                            {/*<Button colored><a href="https://github.com/manuepeva">Github</a></Button>
                             <Button colored>CodePen</Button>
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
                    {/*Deutsch*/}
                    <Card shadow={5} style={{ minWidth: '1050', margin: 'auto', height: '30em', width: '71%' }}>
                        <CardTitle style={{
                            color: '#fff', height: '500px',
                            background: 'url(https://i.ibb.co/N3zvzCL/CV-ESP-Europass-20200418-P-rez-Vallenas-Deutsch-001.jpg) center / cover'
                        }}>Manuel Pérez</CardTitle>
                        <a href={CVEN} alt="CV" style={{ textDecoration: 'none', color: 'black', fontSize: '22px' }}>CV Deutsch</a>
                        {/* <CardText>
                            Cusco is the third most important city in Perú, it was the
                            main city of the Inca´s Empire and it is located at -5 GMT
                    </CardText> */}
                        <CardActions border>
                            {/* <Button colored><a href="https://github.com/manuepeva">Github</a></Button>
                            <Button colored>CodePen</Button>
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
                    <Tab>English</Tab>
                    <Tab>Deutsch</Tab>
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


export default Resume;