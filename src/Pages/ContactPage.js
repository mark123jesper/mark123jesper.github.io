import React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import * as emailjs from 'emailjs-com';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import Title from '../Components/Title';
import Textfield from '../Components/Contact/TextField';
import Button from '../Components/Contact/Button';
import Swal from 'sweetalert2';
import ContactCards from '../Components/Contact/ContactCards';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const inistialState = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
};

const formValidation = Yup.object().shape({
    fullName: Yup.string().required('Required Field'),
    email: Yup.string().email('Invalid Email').required('Required Field'),
    subject: Yup.string().required('Required Field'),
    message: Yup.string().required('Required Field'),
});

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact | White Cat Developer</title>
            </Helmet>
            <AboutPageStyles>
                <div className="p-particles-js">
                    <Particle />
                </div>
                <Box minHeight="88vh">
                    <Title title={"Contact"} />
                    <Typography variant="h4" sx={{ marginBottom: 3 }}>
                        Get in Touch
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid container item md={6}>
                            <Formik
                                initialValues={{
                                    ...inistialState
                                }}
                                validationSchema={formValidation}
                                onSubmit={(values, { resetForm }) => {
                                    emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID, process.env.REACT_APP_FORMIK_TEMPLATE_ID, values, process.env.REACT_APP_FORMIK_USER_ID)
                                        .then(() => {
                                            resetForm({});
                                            Swal.fire(
                                                'Message Successfully Sent',
                                                'Thank you for messaging.',
                                                'success'
                                            );

                                        })
                                        .catch(error => {
                                            Swal.fire(
                                                'Something went Wrong',
                                                `${error}.`,
                                                'error'
                                            );
                                        });
                                }}
                            >
                                <Form>
                                    <Textfield
                                        name="fullName"
                                        label="Full Name*"
                                        sx={{ marginBottom: 3 }}
                                    />
                                    <Textfield
                                        name="email"
                                        label="Email*"
                                        sx={{ marginBottom: 3 }}
                                    />
                                    <Textfield
                                        name="subject"
                                        label="Message Subject*"
                                        sx={{ marginBottom: 3 }}
                                    />
                                    <Textfield
                                        multiline={true}
                                        rows={5}
                                        name="message"
                                        label="Your Message*"
                                        sx={{ marginBottom: 3 }}
                                    />
                                    <Button>
                                        Send Message
                                    </Button>
                                </Form>
                            </Formik>
                        </Grid>
                        <Grid container item md={6} spacing={2} alignItems="center" justifyContent="center">
                            <ContactCards title={"Phone"} icon={<LocalPhoneIcon />} details={"+63 995 1919 650"}/>
                            <ContactCards title={"Email"} icon={<EmailIcon />} details={"whitecat123dev@gmail.com"}/>
                            <ContactCards title={"Address"} icon={<MyLocationIcon />} details={"Taguig City, Philippines"}/>
                            <ContactCards title={"Github"} icon={<GitHubIcon />} details={"@mark123jesper"}/>
                            <ContactCards title={"LinkedIn"} icon={<LinkedInIcon />} details={"@mark123jesper"}/>
                            <ContactCards title={"Twitter"} icon={<TwitterIcon />} details={"@shironekomaru69"}/>
                            <ContactCards title={"Facebook"} icon={<FacebookIcon />} details={"@mark123jesper"}/>
                        </Grid>
                    </Grid>
                </Box>
            </AboutPageStyles>
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

export default ContactPage
