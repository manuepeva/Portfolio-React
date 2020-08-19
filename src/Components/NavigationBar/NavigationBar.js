import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../Routes/Main';
import { Link } from 'react-router-dom';
export const NavigationBar = () => {
    return (
        <div>
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Portfolio" scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/Resume">Resume</Link>
                            <Link to="/About">About</Link>
                            <Link to="/Project">Projects</Link>
                            <Link to="/Contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Portfolio">
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/Resume">Resume</Link>
                            <Link to="/About">About</Link>
                            <Link to="/Project">Project</Link>
                            <Link to="/Contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        </div>
    )
}


export default NavigationBar;