import React from 'react';
import { NavLink} from 'react-router-dom';
import {
    Menu,
    Responsive
  } from "semantic-ui-react";
import { slide as BurgerMenu } from 'react-burger-menu'




    

class Navbar extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false,
            toggle: false
        }
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    closeMenu () {
        this.setState({menuOpen: false, toggle: false})
    }
    


    render() {
        return (
            <div id="navigation-bar">
                <div id="logo">
                    <NavLink exact to="/" activeClassName="selected"  ><p>//an</p></NavLink>
                </div>
                <Responsive {...Responsive.onlyMobile}>
                        <div id="nav-icon" className={this.state.toggle === true ? "open" : ""} onClick={(e) => {this.setState({toggle: !this.state.toggle, menuOpen: !this.state.menuOpen})}}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    <BurgerMenu 
                        customBurgerIcon={ false }
                        customCrossIcon={ false }
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}
                        id="navigation-mobile">

                        <NavLink onClick={() => this.closeMenu()} to="/about"  activeClassName="selected" >about</NavLink>
                        <NavLink onClick={() => this.closeMenu()} to="/projects" activeClassName="selected">projects</NavLink>          
                        <NavLink onClick={() => this.closeMenu()} to="/contact"  activeClassName="selected">contact</NavLink> 
                    </BurgerMenu>
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <Menu pointing id="navigation-desktop" floated="right">
                        <NavLink to="/about"  activeClassName="selected" >about</NavLink>
                        <NavLink to="/projects" activeClassName="selected">projects</NavLink>          
                        <NavLink to="/contact"  activeClassName="selected">contact</NavLink> 
                    </Menu>
                </Responsive>
             
            </div>
        );

    }
}

    
    
export default Navbar;
    