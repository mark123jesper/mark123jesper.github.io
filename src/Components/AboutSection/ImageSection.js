import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import profile from '../../Assets/profile.jpg'

const ImageSection = () => {
    return (
        <ImageSectionStyles>
            <div className="left-content">
                <img src={profile} alt="Profile" />
            </div>
            <div className="right-content">
                <div className="subtitle">
                    <h4>I am <span>Mark Jesper Pillerva</span></h4>
                </div>
                <p className="paragraph">
                    An originally Electrical Engineer that bravely ventured the world of tech idustry and studied and aims to become a full-pledged Software Developer/Engineer. Is fond of Web Development, and an aspiring Blockchain Developer who is also trying to aim in becoming a Mobile Developer.
                </p>
                <Button className="button" variant="outlined">Download my CV</Button>
            </div>
        </ImageSectionStyles>
    )
}

const ImageSectionStyles = styled.div`
    display:flex;
    margin: 3rem auto;

    .left-content {
        width: 800px;
        margin-right: 1rem;

        img {
            width: 100%;
        }
    }

    .right-content {
        .subtitle {

            h4 {
                font-size: 2rem;

                span {
                    color: var(--secondary-color);
                    font-size: 2rem;
                }
            }
        }

        .paragraph {
            padding: 1rem 0;
            text-align: justify;
            line-height: 1.6;
        }

        .button {
            color: var(--secondary-color);
            border-color: var(--secondary-color);

            &:hover {
                background-color: var(--secondary-color);
                color: var(--font-color-light);
            }
        }
    }
`;


export default ImageSection
