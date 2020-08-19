import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Contact extends Component {
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
                            background: 'url(https://i.ibb.co/PxBJDgb/Palacio-Inca-Roca.jpg) center / cover'
                        }}>Cusco, Perú</CardTitle>
                        <CardText>
                            Av. Collasuyo, Cusco Perú
                        </CardText>
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
                    {/*Versión en español*/}
                    <Card shadow={5} style={{ minWidth: '750', margin: 'auto', height: '30em', width: '71%' }}>
                        <CardTitle style={{
                            color: '#fff', height: '300px',
                            background: 'url(https://i.ibb.co/gVDQ0xt/Calle-Hatunrumiyok.jpg) center / cover'
                        }}>Manuel Pérez</CardTitle>
                        <CardText>
                            Cusco is the third most important city in Perú, it was the
                            main city of the Inca´s Empire and it is located at -5 GMT
                    </CardText>
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
                    <Tab>Address</Tab>
                    <Tab>Location</Tab>
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


export default Contact;