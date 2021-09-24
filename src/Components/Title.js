import React from 'react'
import styled from 'styled-components'

const Title = ({ title }) => {
    return (
        <TitleStyled>
            <h2>
                {title}
                <span>{title}</span>
            </h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;

    h2 {
        color: var(--font-color-dark);
        font-size: 2.5rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 8rem;
            height: .10rem;
            background-color: rgba(23,199,154,.50);
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 5%;
            left: 0;
            width: 8rem;
            height: .10rem;
            background-color: var(--font-color-dark);;
        }

        span {
            color: rgba(23,199,154,.25);
            font-size: 2.7rem;
            font-weight: 500;
            position: absolute;
            left: 0;
            top: 5%;
            z-index: -1;
        }
    }
`;

export default Title;
