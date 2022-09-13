import React from 'react'
import Navbar from '../components/navbar'
import facebook from '../assets/images/facebook.png'
import email from '../assets/images/email.png'
import insta from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import zo from '../assets/images/Linkitsoft-profile-CV-10.png'
import clients from '../assets/images/Linkitsoft-profile-CV-01.png'

import p1 from '../assets/images/Linkitsoft-profile-CV-12.png'
import p2 from '../assets/images/Linkitsoft-profile-CV-13.png'
import p3 from '../assets/images/Linkitsoft-profile-CV-14.png'
import p4 from '../assets/images/Linkitsoft-profile-CV-15.png'
import p5 from '../assets/images/Linkitsoft-profile-CV-16.png'
import p6 from '../assets/images/Linkitsoft-profile-CV-17.png'

import s1 from '../assets/images/Linkitsoft-profile-CV-20.png'
import s2 from '../assets/images/Linkitsoft-profile-CV-21.png'
import s3 from '../assets/images/Linkitsoft-profile-CV-22.png'
import s4 from '../assets/images/Linkitsoft-profile-CV-23.png'
import s5 from '../assets/images/Linkitsoft-profile-CV-24.png'
import s6 from '../assets/images/Linkitsoft-profile-CV-25.png'
import s7 from '../assets/images/Linkitsoft-profile-CV-26.png'

import send from '../assets/images/Linkitsoft-profile-CV-28.png'

import inputCircle from '../assets/images/Linkitsoft-profile-CV-27.png'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200
});

const Home = () => {
  return (
    <div className='header'>
        <Navbar item={['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7']} />
        <div className='main'>             
                    {/* Hello Section */}
                    <section className='home' id="section-1">
                        <div className="home_content" data-aos="fade-bottom">
                            <div className='home_top'>
                                <p>Hello 👋 I’M <span> SYED ZOHAIB AKHTAR </span>
                                    TECHNOLOGIST THAT USES
                                    DESIGN, PROCESS AND
                                    STRATEGY TO BUILD
                                    GREATE PRODUCTS.
                                </p>
                                <div className='btn'>
                                    <button>CONTACT US</button>
                                </div>
                            </div>
                            <img src={zo}/>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className='about' id="section-2" data-aos="fade-up">
                        <div className="about_content">
                            <p className='heading'>ABOUT</p>
                            <p className='text'>I describe myself as a multidisciplinary designer, builder and leader.
                                My skills in product, design, project management, technology and operations
                                have allowed me to build and deliver products across many fields for my clients</p>
                            <p className='text'>I have over 7 years of professional experience working for software companies.
                                During that time, I have accumulated expertise with modern technologies,
                                harnessing design thinking, applying agile methodologies and defining
                                strategic objectives to deliver value to my users and drive business success.</p>
                        </div>
                        <div className='expSection'>
                        <p className='heading'>Experience</p>
                            <div className='expSection_content'>
                                <div className='expSection_experience'>
                                    <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                    <p className='date'>Jan. 2020 - Present</p>
                                </div>
                                <div className='expSection_experience'>
                                    <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                    <p className='date'>Jan. 2020 - Present</p>
                                </div>
                                <div className='expSection_experience'>
                                    <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                    <p className='date'>Jan. 2020 - Present</p>
                                </div>
                                <div className='expSection_experience'>
                                    <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                    <p className='date'>Jan. 2020 - Present</p>
                                </div>
                                <div className='expSection_experience'>
                                    <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                    <p className='date'>Jan. 2020 - Present</p>
                                </div>
                            </div>
                          
                        </div>
                    </section>

                    {/* Mindset Section */}
                    <section className='mindset' id="section-3" data-aos="fade-bottom">
                        <p className='heading'>Mindset</p>
                        <div className="mindset_content">
                           <div className='mindset_singleItem'>
                                <p className='heading'>Experimental</p>
                                <p className='text'>Open-minded and able to take a scientific approach to solving problems, both in product and process</p>
                           </div>
                           <div className='mindset_singleItem'>
                                <p className='heading'>Decisive</p>
                                <p className='text'>Ability to make decisions quickly and effectively, even in times of uncertainty and pressure.</p>
                           </div>
                           <div className='mindset_singleItem'>
                                <p className='heading'>Optimistic</p>
                                <p className='text'>Positive about the outcome of the future, the actions of others and the decisions made.</p>
                           </div>
                           <div className='mindset_singleItem'>
                                <p className='heading'>Adaptable</p>
                                <p className='text'>Able to be flexible enough to adjust to new conditions and rapidly changing priorities</p>
                           </div>
                           <div className='mindset_singleItem'>
                                <p className='heading'>Agile</p>
                                <p className='text'>Committed to tight feedback cycles and continuous improvement within development</p>
                           </div>
                            
                        </div>
                    </section>

                    {/* Clients Section */}
                    <section className='client' id="section-4" data-aos="fade-up">
                        <p className='heading'>Clients</p>
                       <img src={clients}/>
                    </section>

                    {/* project Section */}
                    <section className='projects' id="section-5">
                        <p data-aos="fade-up" className='heading'>Our Projects</p>
                        <div className='projects_images'>
                            <img src={p1} alt=''/>
                            <img src={p2} alt=''/>
                            <img src={p4} alt=''/>
                            <img src={p3} alt=''/>
                            <img src={p5} alt=''/>
                            <img src={p6} alt=''/>
                        </div>
                    </section>

                    {/* skills Section */}
                    <section className='skills' id="section-6" data-aos="fade-up">
                        <div className='skills_left' >
                            <div>
                                <p className='heading'>Skills & <br/> Experience</p>
                                <p className='specialtext'>- Hello i’m technologist that uses design, process and strategy to build greate products</p>
                            </div>
                                <p className='subheading'>Skills</p>
                            <div className='skills_all'>
                                <div className='skills_single'>
                                    <img src={s2} alt=''/>
                                    <p>Wireframe</p>
                                </div>
                                <div className='skills_single'>
                                    <img src={s3} alt=''/>
                                    <p>Visual Design</p>
                                </div>
                                <div className='skills_single'>
                                    <img src={s4} alt=''/>
                                    <p>Prototype</p>
                                </div>
                                <div className='skills_single'>
                                    <img src={s5} alt=''/>
                                    <p>Art Direction</p>
                                </div>
                                <div className='skills_single'>
                                    <img src={s6} alt=''/>
                                    <p>User Research</p>
                                </div>
                                <div className='skills_single'>
                                    <img src={s1} alt=''/>
                                    <p>User Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='skills_right'>
                        <p className='subheading'>Experience</p>
                        <div className="skills_content">
                           <div className='skills_singleItem'>
                                <p className='heading'>2019 - Present</p>
                                <div className='text'>
                                    <p>Product Designer</p>
                                    <p className='small'>Amazon Inc</p>
                                </div>
                           </div>
                           <div className='skills_singleItem'>
                                <p className='heading'>2018 - 2019</p>
                                <div className='text'>
                                    <p>UI/UX Designer</p>
                                    <p className='small'>Amazon Inc</p>
                                </div>
                           </div>
                           <div className='skills_singleItem'>
                                <p className='heading'>2016 - 2018</p>
                                <div className='text'>
                                    <p>Web UI/UX Designer</p>
                                    <p className='small'>Amazon Inc</p>
                                </div>
                           </div>
                           <div className='skills_singleItem'>
                                <p className='heading'>2014 - 2016</p>
                                <div className='text'>
                                    <p>UI Designer</p>
                                    <p className='small'>Amazon Inc</p>
                                </div>
                           </div>                            
                        </div>
                          <div className='skills_photo'>
                          <img src={zo}/>
                          </div>
                        </div>
                    </section>

                    {/* contact Section */}
                    <section className='contact' id="section-7" data-aos="fade-up">
                        <div className='contact_left'>
                            <div>
                                <p className='heading'>Lets Discuss Your Project </p>
                            </div>
                            <div>
                                <div className='contact_info'>
                                    <img src={s7} alt=''/>
                                    <div>
                                        <p>Email</p>
                                        <p className='email'>zohaib@linkitsoft.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className='contact_photo'>
                                <img src={zo}/>
                            </div>
                        </div>
                        <div className='contact_right'>
                        
                          <div className='contact_inputSection'>
                            <img src={inputCircle}/>
                            <div className='contact_inputBox'>
                                <input type='text' placeholder='Name'/>
                                <input type='text' placeholder='Email'/>
                                <input type='text' placeholder='Subject Line'/>
                                <input type='text' placeholder='Type Message Here'/>
                                <div className='contact_btnSnd'>
                                    <img src={send} alt=''/>
                                </div>
                            </div>
                          </div>
                        </div>
                    </section>
                    {/* <section className='contact' id="section-5" data-aos="fade-up">
                        <p className='heading'>Social Media Handle</p>
                        <div className="contact_content" data-aos="flip-left">
                           <img src={facebook} alt=''/>
                            <p>www.facebook.com/maazil</p>
                        </div>
                        <div className="contact_content" data-aos="flip-left" >
                           <img src={insta} alt=''/>
                            <p>maazil12</p>
                        </div>
                        <div className="contact_content" data-aos="fade-up">
                           <img src={linkedin} alt=''/>
                            <p>www.linkedin.com/maazil</p>
                        </div>
                        <div className="contact_content" data-aos="fade-up">
                           <img src={email} alt=''/>
                            <p>maazil@gmail.com</p>
                        </div>
                    </section> */}
                
        </div>
    </div>
  )
}

export default Home