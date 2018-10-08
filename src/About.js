import React from 'react';
import { Image, Grid, Transition } from 'semantic-ui-react'

class About extends React.Component {
    

    render() {
        return (
            <section id="about-section">

                    <Grid>
                        <Grid.Column>
                            <Transition transitionOnMount animation='fade' duration={2900}>
                                <img className="about-picture" src={require("./assets/headshot.jpg")}/>
                            </Transition> <br />
                            <div className="page-box">
                                <Transition transitionOnMount animation='fade' duration={1300}>
                                <h3> about </h3>
                                </Transition>
                                <Transition transitionOnMount animation='fade' duration={2900}>
                                <div className="page-description">
                                    <p> I am student studying Informatics </p>
                                    <p> at the University of Washington. </p>
                                    <p> I spend my time learning new </p>
                                    <p> web technologies and building </p>
                                    <p> cool applications. </p>
                                    <p> Aside from that, you can find me </p>
                                    <p> spinning on my head or watching</p>
                                    <p> anime. </p>
                                </div>
                                </Transition>
                            </div>
                        </Grid.Column>
                    </Grid>
          
            </section>
        );

    }
}

    
    
export default About;
    