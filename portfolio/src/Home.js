import React from 'react';
import { Grid, Transition } from 'semantic-ui-react'
class Home extends React.Component {
    
    constructor() {
        super();
        this.state = {
            name: "bob",
            info: "meow meow meow"
        };
    }
    
    render() {
        return (
            <div id="home-section">
                <Grid>
                    <Grid.Column>
                        <div className="page-box">
                            <Transition transitionOnMount animation='fade' duration={1300}>
                                <h3> andre nguyen </h3>
                            </Transition>
                            <Transition transitionOnMount animation='fade' duration={2900}>
                                <div className="page-description">
                                    <p> user centric developer </p>
                                    <p> designing innovations </p>
                                    <p> creating solutions </p>
                                </div>
                            </Transition>
                        </div>
                    
                    </Grid.Column>
                </Grid>
            </div>
        );

    }
}

    
    
export default Home;
    