
import React ,{Component}from 'react'

import Aux from '../Aux/Aux';
import Navheader from '../../components/Navigation/Navheader/Navheader';
import FOOTER from '../../components/Navigation/FOOTER/FOOTER';

class Layout extends Component{

    render (){
        return (
         <Aux>
           <Navheader/>
           {this.props.children}
           <FOOTER/>          
           </Aux> 
        )
    }
}
export default Layout;
