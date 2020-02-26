import React,{Component} from 'react';
import classes from './Navheader.module.css'
import Aux from '../../../hoc/Aux/Aux';
import Logo from "../../../assets/img/logo.png";
import {Link} from "react-router-dom";

class Navheader extends Component{

    render(){
        return (
            <Aux>
                <nav className={classes.navigation__nav}>
                    <ul className={classes.navigation__list}>
                        <li className={classes.navigation__item__logo}>
                        <img src={Logo} alt="logo" className={classes.navigation__logo}/>
                        </li>
                        <li className={classes.navigation__item}>
                        <Link  to="/login" className={classes.navigation__link}>Account Login</Link>
                        </li>
                        <li className={classes.navigation__item}>
                        <Link to="/signup" className={classes.navigation__link}>Sign Up</Link>
                        </li>
                        <li className={classes.navigation__item}>
                        <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="blank" className={classes.navigation__divider}>|</a>
                        </li>
                        <li className={classes.navigation__item}>
                        <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="blank" className={classes.navigation__link}>Help</a>
                        </li>
                        <li className={classes.navigation__item}>
                        <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="blank" className={classes.navigation__link}>EZ Port</a>
                        </li>
                        
                        <li className={classes.navigation__item}>
                        <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="blank" className={classes.navigation__link}>Why Zero1</a>
                        </li>
                        
                        <li className={classes.navigation__item}>
                        <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="blank" className={classes.navigation__link}>Services</a>
                        </li>
                        
                        <li className={classes.navigation__item}>
                        <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="blank" className={classes.navigation__link}>Plans</a>
                        </li>
                    </ul>
                </nav>
            </Aux>    
        )
    }
}

export default Navheader;