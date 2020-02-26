import React from 'react';
import classes from './Navheader.module.css'
import Aux from '../../../hoc/Aux/Aux';
import Logo from "../../../assets/img/logo.png";

const Navheader = (props)=>{
    return (
        <Aux>
            <nav className={classes.navigation__nav}>
                <ul className={classes.navigation__list}>
                    <li className={classes.navigation__item__logo}>
                    <img src={Logo} alt="logo" className={classes.navigation__logo}/>
                    </li>
                    <li className={classes.navigation__item}>
                    <a href="https://app.slack.com/client/T04NC6TC8/DFRK5QP1V" className={classes.navigation__link}>Account Login</a>
                    </li>
                    <li className={classes.navigation__item}>
                    <a href="https://app.slack.com/client/T04NC6TC8/DFRK5QP1V" className={classes.navigation__link}>Sign Up</a>
                    </li>
                    <li className={classes.navigation__item}>
                    <a href="https://app.slack.com/client/T04NC6TC8/DFRK5QP1V" className={classes.navigation__divider}>|</a>
                    </li>
                    <li className={classes.navigation__item}>
                    <a href="https://app.slack.com/client/T04NC6TC8/DFRK5QP1V" className={classes.navigation__link}>Help</a>
                    </li>
                    <li className={classes.navigation__item}>
                    <a href="https://app.slack.com/client/T04NC6TC8/DFRK5QP1V" className={classes.navigation__link}>EZ Port</a>
                    </li>
                    
                    <li className={classes.navigation__item}>
                    <a href="https://app.slack.com/client/T04NC6TC8/DFRK5QP1V" className={classes.navigation__link}>Why Zero1</a>
                    </li>
                    
                    <li className={classes.navigation__item}>
                    <a href="https://app.slack.com/client/T04NC6TC8/DFRK5QP1V" className={classes.navigation__link}>Services</a>
                    </li>
                    
                    <li className={classes.navigation__item}>
                    <a href="https://app.slack.com/client/T04NC6TC8/DFRK5QP1V" className={classes.navigation__link}>Plans</a>
                    </li>
                </ul>
            </nav>

            <header className={classes.header}>
                <div className={classes.slider}>
                    <input type="radio" name="slider" title="slide3"  className={classes.slider__nav}/>
                    <input type="radio" name="slider" title="slide1" className={classes.slider__nav}/>
                    <input type="radio" name="slider" title="slide2" className={classes.slider__nav}/>
                    <div className={classes.slider__inner}>
                    <div className={[classes.slider__contents,classes.slider__contents3].join(" ")}>
                        &nbsp;
                    </div>
                    <div className={[classes.slider__contents,classes.slider__contents1].join(" ")}>
                        &nbsp;
                    </div>
                    <div className={[classes.slider__contents,classes.slider__contents2].join(" ")}>
                        &nbsp;
                    </div>
                    </div>
                </div>
            </header>
        </Aux>    
    )
}

export default Navheader;