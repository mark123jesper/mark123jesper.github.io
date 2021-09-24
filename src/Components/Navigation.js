import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from '../Assets/M.png';

const Navigation = () => {
    return (
        <NavigationStyles>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink
                        exact to="/"
                        activeClassName="active-class">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/about"
                        activeClassName="active-class">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/skill"
                        activeClassName="active-class">
                        Skill
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/project" activeClassName="active-class">
                        Project
                    </NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p> Made by Mark Jesper Pillerva</p>
                <p>&copy;{new Date().getFullYear()}</p>
            </footer>
        </NavigationStyles>
    )
}

const NavigationStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 5px solid var(--border-color);
    text-align: center;

    .avatar {
        width: 100%;
        padding: 1.5rem 0;
        text-align: center;
        
        img {
            width: 60%;
            border-radius: 50%50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items {
        width: 100%;

        .active-class {
            background-color: var(--background-color-dark);
            }

        .nav-item {
            display: block;

            a {
                display: block;
                padding: 0.5rem 0;
                position: relative;

                &:hover {
                    cursor: pointer;
                }

                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50;
                    background-color: var(--background-color-dark);
                    opacity: 50%;
                    transition: all 0.4s cubic-bezier(1, -0.2, .25, .95);
                }
            }

            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }
    }

    .footer {
        padding: 1rem;

        p {
            display: block;
            font-size: 0.7rem;
        }
    }
`;

export default Navigation
