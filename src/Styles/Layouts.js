import styled from 'styled-components';

export const TextCenter = styled.section`
    text-align: center;
`;

export const CenterLayout = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
`;

export const TransitionStyle = styled.div`
    .fade-enter {
    opacity: 0;
    z-index: 1;
    }

    .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 450ms ease-in-out;
    }
`;