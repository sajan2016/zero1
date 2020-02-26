import React,{Component} from 'react';
import classes from './SLIDER.module.css'
import Aux from '../../../../hoc/Aux/Aux';

class SLIDER extends Component{

    render(){
        return (
            <Aux>
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
}

export default SLIDER;