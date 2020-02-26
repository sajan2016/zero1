import React,{Component} from 'react';
import classes from './LOGIN.module.css'
import Layout from '../../hoc/Layout/Layout';
import loginimg from "../../assets/img/accountlogin-icon.png";

class LOGIN extends Component{
    render(){
      return(
          <Layout>
          <section class={classes.login}>
              <div class={classes.login__message}>
                <img src={loginimg} alt="login__message_img" class={classes.login__message_img}/>
                <div class={[classes.login__message_group,classes.umargintopsmall].join(' ')}>
                  <p class={[classes.login__message_heading,classes.umargintopsmall].join(' ')}>Account Login</p>
                  <p class={[classes.login__message_text,classes.umargintopsmall].join(' ')}>To subscribe to our plan, you first need to register an account with us.<br/>
                    Once you have an account, please log in to manage your account, and make purchases.</p>
                  <p class={[classes.login__message_question,classes.umargintopsmall].join(' ')}>
                    Don't have an account? <span class={classes.login__message_question_bold}>Create one here.</span></p>
                </div>
              </div>
            </section>
          </Layout>
      )
    }
}

export default LOGIN;