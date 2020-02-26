import React from 'react';
// import Aux from '../../../hoc/Aux/Aux';
import classes from './FOOTER.module.css';


const FOOTER = (props)=>{
  return (
    <footer className={classes.footer}>
    <div className={classes.footer__left}>
        <div className={classes.row}>
            <div className={classes.col1of3}>
                <h1 className={classes.footer__leftheading}>Company</h1>
                <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__lefttext}>About Us</a> 
                <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__lefttext}>Press</a> 
                <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__lefttext}>Partnership</a> 
            </div>

            <div className={classes.col1of3}>
                <h1 className={classes.footer__leftheading}>Contact</h1>
                <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__lefttext}>FAQ</a> 
                <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__lefttext}>Submit a Ticket</a> 
            </div>

            <div className={classes.col1of3}>
                <h1 className={classes.footer__leftheading}>Corporate</h1>
                <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__lefttext}>CIS Plans</a>
                <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__lefttext}>Corporate Enquries</a> 
            </div>

        </div>

        <div className={classes.footer__left__terms}>
            <p>
                <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__left__termslink}>
                Terms and Conditions
                </a>
                &nbsp;|&nbsp;
                <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__left__termslink}>
                Privacy Policy
                </a>
            </p>
        </div>
    </div>

    <div className={classes.footer__right}>
        <p className={classes.footer__rightlinks}>
            <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__rightlinkslink}>
            {/* <i style="fontsize:24px" className="fa">&#xf16d;</i> */}fa
            </a>
            <a href="https://www.freeformatter.com/css-beautifier.html#ad-output" className={classes.footer__rightlinkslink}>
            {/* <i style="fontsize:24px" className="fa">&#xf082;</i> */} fa
            </a>
        </p>
        <p className={classes.footer__righttext} >©&nbsp;2020 Zero1 Pte Ltd (BRN:
            201705239R)
        </p>
    </div>
</footer>
  )
}

export default FOOTER;