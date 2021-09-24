import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/M.png'

const CompanySection = () => {
    return (
        <CompanySectionStyles>
            <div className="left-content">
                <img src={logo} alt="Profile" />
            </div>
            <div className="right-content">
                <div className="subtitle">
                    <h4>White Cat Developer</h4>
                </div>
                <p className="paragraph">
                    The official alias made by Mark Jesper Pillerva as his trademark logo and tradename for his works.
                </p>
            </div>
        </CompanySectionStyles>
    )
}

const CompanySectionStyles = styled.div`
    display:flex;
    margin: 3rem auto;

    .left-content {
        max-width: 300px;
        margin-right: 1rem;

        img {
            width: 100%;
        }
    }

    .right-content {
        text-align: left;

        .subtitle {
            h4 {
                font-size: 2rem;
                color: var(--secondary-color);
            }
        }

        .paragraph {
            padding: 1rem 0;
            text-align: left;
            line-height: 1.6;
        }
    }
`;


export default CompanySection
