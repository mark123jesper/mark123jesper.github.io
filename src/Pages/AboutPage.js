import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { MainLayout } from '../Styles/Layouts';
import Title from '../Components/Title';
import ImageSection from '../Components/AboutSection/ImageSection';
import Particle from '../Components/Particle';
import CompanySection from '../Components/AboutSection/CompanySection';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About | White Cat Developer</title>
            </Helmet>
            <MainLayout>
                <AboutPageStyles>
                    <div className="p-particles-js">
                        <Particle />
                    </div>

                    <Title title={'About the Alias'} />
                    <CompanySection />
                    
                    <Title title={'About Me'} />
                    <ImageSection />

                </AboutPageStyles>
            </MainLayout>
        </>
    )
}

const AboutPageStyles = styled.section`
    position: relative;
    
    .p-particles-js {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
`;

export default AboutPage
