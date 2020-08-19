import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Project number one*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '300px',
                            background: 'url(https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'
                        }}>TRACKER APP REACT</CardTitle>
                        <CardText>
                            Project created using React and Mongo DB to create a full stack app
                    </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/manuepeva/Expense-Tracker-ReactJS-Hooks">Github</a></Button>
                            {/* <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project number two*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto ' }}>
                        <CardTitle style={{
                            color: '#fff', height: '300px',
                            background: 'url(data:image/jpeg;base64,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) center / cover'
                        }}>BREAKING BAD API - REACT</CardTitle>
                        <CardText>
                            Project created using React and the public API from the Breaking Bad series
                    </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/manuepeva/API---Breaking-Bad-Series-">Github</a></Button>
                            {/* <Button colored>CodePen</Button> */}
                            <Button colored><a href="https://manuepeva.github.io/API---Breaking-Bad-Series-/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project number three*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto ' }}>
                        <CardTitle style={{
                            color: '#fff', height: '300px',
                            background: 'url(https://lh3.googleusercontent.com/proxy/c4kHvYm95IrF-lquH4o6-fhNf9cZNCxzMI4K2u9D5fhHbYXcUwQHY5IZNwbYAvrInalJ18Ngwi3_XcUizokr-_BqDPWefuriigXHtEsomuLRmcrvf5Cavp-BdcQ) center / cover'
                        }}>SocketIo and REACT</CardTitle>
                        <CardText>
                            Project created using React and Socket.io in order to create front end real time interactivity
                    </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/manuepeva/SocketIoTEst">Github</a></Button>
                            {/* <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/*Project number one*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '300px',
                            background: 'url(https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'
                        }}>CSS GRID AND REACT</CardTitle>
                        <CardText>
                            Project created using React styled with CSS Grid
                </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/manuepeva/CSS-Grid-and-React">Github</a></Button>
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
                <div className="projects-grid">
                    {/*Project number one*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '300px',
                            background: 'url(data:image/jpeg;base64,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) center / cover'
                        }}>Angular2</CardTitle>
                        <CardText>
                            Project created using Angular2 using Visual Studio Code
                </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/manuepeva/CSS-Grid-and-React">Github</a></Button>
                            {/* <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div>
                    <h1>JavaScript Projects</h1>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>
                    this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>CSS</Tab>
                    <Tab>ANGULAR2</Tab>
                    <Tab>JavaScript</Tab>
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


export default Project;