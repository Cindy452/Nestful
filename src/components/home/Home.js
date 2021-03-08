import React from 'react';
import './home.style.scss';
import Container from '@material-ui/core/Container';
import logo from '../../assets/egg.jpg'



const Home = () => {
    return (
        <Container className='start-container'>
        <img src={logo} alt='Logo' className='image'/>;
        <h1>Retirement Check-In</h1>
        <h2>Let's get started with a retirement readiness check. Help us give you a personalized experience by providing some basic information about yourself.</h2>
        </Container>
    )
   
}

export default Home;