import React, { Component } from 'react';
import './Home.css';
import Vrbox from './Vrbox';
import './scrollbar.css'
import {Link} from 'react-router-dom';
import logo from './assets/logo.png';
import Sample from './Sample';
import expand from './assets/expand.png'
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='section'>
                <div className='banner'>
                    <img src={logo} alt="" />
                    <div>
                        <p>KIT - KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY</p>
                        <p>COIMBATORE, TAMILNADU-641402</p>
                        <p>AN AUTONOMOUS INSTITUTION</p>
                    </div>
                </div>
                <div className='section-1'>
                    <div className='title'>
                        <p>Explore KIT</p>
                        <h1>Virtual Tour</h1>
                    </div>
                    <div className='logo-3d'>
                        <Vrbox/>
                    </div>
                </div>
                <div className='section-2'>
                    <div className='title'>
                        <h1>Explore KIT from Home</h1>
                        
                    </div>
                    <div className='description'>
                        <p>Use our Virtual Tour to discover spaces that aren't even available on an in-person campus tour, such as classrooms, laboratories, residence halls, and more. Even better, it's available 24 hours a day, seven days a week, and never reaches capacity.</p>
                    </div>
                </div>
                <div className='section-3'>
                    <div className='container'>
                        <Sample/>
                        <Link to="/center">
                            <img src={expand} alt="" />
                        </Link>
                        <div className='right'>
                            <p>Explore KIT</p>
                            <Link to="/center">
                                <button>LET'S GO</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='map'>
                    <iframe 
                    title='kit-map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.522423229561!2d77.08215501472046!3d10.999375092170439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85695d582db7b%3A0x55286f9c43c3294d!2sKalaignarKarunanidhi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1679045461699!5m2!1sen!2sin" 
                    width="1000" 
                    height="380" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='footer'>
                    <img src={logo} alt="" />
                    <p>© KIT - KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY. 2021 - 2022.</p>
                </div>
            </div>
        );
    }
}
 
export default Home;