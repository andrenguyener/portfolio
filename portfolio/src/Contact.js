import React from 'react';
import { Grid, Button, Transition } from 'semantic-ui-react'
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        var field = event.target.id;
        var value = event.target.value;

        var changes = {}; 
        changes[field] = value; 
        this.setState(changes); 
    }

    handleSubmit(event) {
        event.preventDefault();
            
        var apiURL = `https://api.andren.me/v1/email`;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var request = new Request(apiURL, {
            method: "POST",
            headers: myHeaders,
            mode: "cors",
            body: JSON.stringify(this.state),
            cache: "default"
        });
        fetch(request)
        this.setState({name: "", email: "", subject: "", message: ""});
    }
    
    render() {
        return (
            <div id="contact-section">
                <Grid>
                    <Grid.Column>
                        <div className="page-box">
                            <Transition transitionOnMount animation='fade' duration={1300}>
                                <h3> contact </h3>
                            </Transition>
                            <Transition transitionOnMount animation='fade' duration={2900}>
                                <div className="page-description">
                                    <form action='' className='contact-form'>
                                        <input id="name" name='name' placeholder='name' type='text' value={this.state.name} onChange={this.handleChange}/> <br/>
                                        <input id="email" name='email' placeholder='email' type='text' value={this.state.email} onChange={this.handleChange}/> <br/>
                                        <input id="subject" name='subject' placeholder='subject' type='text' value={this.state.subject} onChange={this.handleChange}/> <br/>
                                        <textarea id="message" name='message' placeholder='message' type='text' value={this.state.message} col="30" onChange={this.handleChange}/> <br />
                                        <button id="contact-button-send" onClick={(e) => this.handleSubmit(e)}>Send</button>
                                    </form>
                                </div>
                            </Transition>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        );

    }
}

    
    
export default Contact;
    