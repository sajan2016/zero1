import React,{Component} from 'react';
import classes from './CONTENT.module.css'
import Aux from '../../hoc/Aux/Aux';
import unlimited from "../../assets/img/unlimited.png"
import img1 from '../../assets/img/1-u.png';
import img2 from '../../assets/img/3-u.png';
import img3 from '../../assets/img/9-u.png';
import speed from '../../assets/img/3-u-speed.png';
import sms from '../../assets/img/sms.png';
import globe from '../../assets/img/globe.png';
import eye from '../../assets/img/eye.png';
import roam from '../../assets/img/roam.png';

class CONTENT extends Component{

    render(){
        return (
            <Aux>
                <main>
                    <section className={[classes.section__plan,classes.umarginbottommedium].join(' ')}>
                        <div className={classes.row}>
                        <div className={classes.section__planunlimiteddata}>
                            <figure className={classes.section__planunlimiteddata__shape}>
                            <img src={unlimited} alt="person on a tour" className={classes.section__planunlimiteddata__img}/>
                            </figure>
                            <div className={classes.section__planunlimiteddata__text}>
                            <h3 className={classes.umarginbottomsmall}>
                            Are You Ready For Unlimited Data?
                            </h3>
                            <p>
                                <span className={[classes.section__plantext,classes.umargintopsmall].join(' ')}>
                                Need to download your favourite shows at home on Wi-Fi before leaving the house? Resisting
                                </span><br/>
                                <span className={classes.section__plantext}>
                                the urge to game now so that you can save on data for that big show-down later? Or only
                                </span><br/>
                                <span className={classes.section__plantext}>
                                waiting till you get Wi-Fi before downloading those wanderlust pictures your BFF sent?
                                </span>
                                <span className={[classes.section__plantext,classes.umargintopsmall].join(' ')}>
                                Wait no more! With our Unlimited Data plans, you can surf now, later and whenever without having to worry about the bills!
                                </span>
                            </p>
                            <button className={[classes.btn,classes.btnpurple,classes.umargintopsmall].join(' ')}>
                            View Our Plans!
                            </button>
                            </div>
                        </div>
                        </div>
                    </section>
                    
                    <section className={classes.section__plangroup}>
                        <div className={classes.row}>
                        <br/>
                        <hr className={classes.section__plangroupline}/>
                        </div>
                        <div className={classes.row}>
                        <h3 className={classes.headingtertiary}>
                        How living with Zero1 looks like!
                        </h3>
                        </div>
                        <div className={classes.row}>
                        <div className={classes.col1of3}>
                            <ul className={classes.plan__choice__list}>
                            <li className={classes.plan__choice__item}>
                                <div className={classes.plan__choicelogo}>
                                <img src={img1} alt="no" className={classes.plan__choiceimg}/>
                                </div>
                            1GB To Unlimited</li>
                            <li className={classes.plan__choice__item}>
                                <div className={classes.plan__choicelogo}>
                                <img src={img2} alt="no" className={classes.plan__choiceimg}/>
                                </div>
                            3GB To Unlimited</li>
                            <li className={classes.plan__choice__item}>
                                <div className={classes.plan__choicelogo}>
                                <img src={img3} alt="no" className={classes.plan__choiceimg}/>
                                </div>
                            9GB To Unlimited</li>
                            </ul>
                        </div>
                        <div className={[classes.col2of3,classes.plan].join(' ')}>
                            <img src={speed} alt="no" className={classes.plan__dataimg}/>
                            <button className={[classes.btn,classes.btnpurple,classes.umargintopsmall].join(' ')}>
                            Take Me There
                            </button>
                        </div>
                        </div>
                    </section>
                    
                    <section className={classes.feature}>
                        <h1 className={classes.headingprimary}>Here's what more you can get</h1>
                        <div className={classes.row}>
                        <div className={classes.col1of2}>
                            <div className={[classes.feature__component,classes.umargintopsmall].join(' ')}>
                            <img src={sms} alt="" className={classes.feature__componentimg}/>
                            <div className={classes.feature__componentdata}>
                                <h3>Roamings Calls & SMS</h3>
                                <p>Get low-cost SMS and crystal-clear voice calls as you travel! No more worries of crazy bill
                                shocks after coming back from your trip!
                                </p>
                            </div>
                            </div>
                            <div className={[classes.feature__component,classes.umargintopsmall].join(' ')}>
                            <img src={globe} alt="" className={classes.feature__componentimg}/>
                            <div className={classes.feature__componentdata}>
                                <h3>International Calls & Global SMS</h3>
                                <p>Making overseas calls have never been easier! Now reach anyone on the globe at
                                just $0.60 per SMS!
                                </p>
                            </div>
                            </div>
                            <div className={[classes.feature__component,classes.umargintopsmall].join(' ')}>
                            <img src={eye} alt="" className={classes.feature__componentimg}/>
                            <div className={classes.feature__componentdata}>
                                <h3>Parental Control Filters</h3>
                                <p>Worrying about your child accessing inappropriate content on the internet?
                                Here's the solution
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className={[classes.col1of2,classes.feature__logo]}>
                            <div className={classes.feature__logoandbutton}>
                                <img src={roam} alt="roam" className={classes.feature__logoandbuttonimg}/><br/>
                                <button className={[classes.btn,classes.btnpurple,classes.umargintopmedium].join(' ')}>
                                    Take me There
                                </button>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section className={classes.section__form}>
                    <div className={classes.section__form__heading}>
                    <span className={classes.section__form__headingmain}>Chained To A Contract?</span>
                    <p className={classes.section__form__headingdescription}>
                        Tell us when your existing contract ends, and we'll send you a reminder when it's time to break free!
                    </p>
                    </div>
                    <form action="https://www.edwardbeazer.com/importing-images-with-react" className={classes.form} method="get">
                    <input id="first-name" name="first_name" type="text" placeholder="Given Name (As per NRIC/FIN)" className={[classes.form__input,classes.form__isprimary].join(' ')}/>
                    <input id="last-name" name="last_name" type="text" placeholder="Family Name  (As per NRIC/FIN)" className={[classes.form__input,classes.form__isprimary].join(' ')}/>
                    <input id="email" name="email" type="email" placeholder="Email" className={[classes.form__input,classes.form__isprimary].join(' ')}/>
                    <input id="mobile-no" name="mobile_no" type="number" placeholder="Contact Number" className={[classes.form__input,classes.form__isprimary].join(' ')}/>

                    <select className={[classes.form__select,classes.form__isprimary].join(' ')}>
                        <option disabled="disabled" value="">
                            Current Telco
                        </option>
                        <option value="Circles Life">
                            Circles Life
                        </option>
                        <option value="CMI">
                            CMI
                        </option>
                        <option value="Giga">
                            Giga
                        </option>
                        <option value="Gomo">
                            Gomo
                        </option>
                        <option value="Grid Mobile">
                            Grid Mobile
                        </option>
                        
                        <option value="M1">
                            M1
                        </option>
                        
                        <option value="MyRepublic">
                            MyRepublic
                        </option>
                        
                        <option value="redONE">
                            redONE
                        </option>
                        
                        <option value="Singtel">
                            Singtel
                        </option>
                        
                        <option value="Starhub">
                            Starhub
                        </option>
                        
                        <option value="Vivifi">
                            Vivifi
                        </option>
                        
                        <option value="VivoBee">
                            VivoBee
                        </option>
                    </select>

                    <h3 className={classes.form__remindermsg}>Reminder alert will only be sent to contracts expiring in a month or more</h3>
                    <button className={[classes.btn,classes.btnblack,classes.form__btn].join(' ')} type="submit">
                        Remind Me
                    </button>
                    </form>

                    </section>
                    </main>
            </Aux>    
        )
    }
}

export default CONTENT;