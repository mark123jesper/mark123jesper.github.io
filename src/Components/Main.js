import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import AboutPage from '../Pages/AboutPage'
import HomePage from '../Pages/HomePage'
import SkillPage from '../Pages/SkillPage'
import ProjectPage from '../Pages/ProjectPage'
import ContactPage from '../Pages/ContactPage'

const Main = () => {
    return (
        <MainStyles>
            {/* <div className="lines">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div> */}
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/skill" component={SkillPage} />
                <Route path="/project" component={ProjectPage}/>
                <Route path="/contact" component={ContactPage} />
            </Switch>
        </MainStyles>
    )
}

const MainStyles = styled.main`
    position: relative;
    margin-left: 12rem;
    height: 100vh;

    /* .lines {
        position: absolute;
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        .line-1,
        .line-2,
        .line-3,
        .line-4 {
            width: 1px;
            min-height: 100vh;
            background-color: blue;
        }
    } */
`;

export default Main
