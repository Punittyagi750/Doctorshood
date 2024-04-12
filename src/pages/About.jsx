import React from 'react';
import '../styles/about.css';
import Punit from '../images/teampunit.jpg';
import Sourav from '../images/teamsourav.jpg';
import Omkar from '../images/teamomkarmukesh.jpg';
import Vishal from '../images/teamvishal.jpg';

const About = () => {
    return (
        <div className='container'>
            <h1>About Developers</h1>
            <button >
                <a href='/'>
                    Go back to Home
                </a>
            </button>

            <div className='card-deck mt-10'>
                <div className='developer'>
                    <img src={Punit} alt="Punit" />
                    <h2>Punit</h2>
                    <p className="role">Contribution: Testing </p>
                </div>
                <div className='developer'>
                    <img src={Sourav} alt="Sourav" />
                    <h2>Sourav</h2>
                    <p className="role">Contribution: Development</p>
                </div>
                <div className='developer'>
                    <img src={Omkar} alt="Dhage Omkar Mukesh" />
                    <h2>Omkar</h2>
                    <p className="role">Contribution: Designing</p>
                </div>
                <div className='developer'>
                    <img src={Vishal} alt="Developer 4" />
                    <h2>Vishal</h2>
                    <p className="role">Contribution: Report and Data Collection</p>
                </div>
            </div>
        </div>
    );
};

export default About;
