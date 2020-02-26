
import React ,{Component}from 'react'

import Aux from '../Aux/Aux';
import Navheader from '../../components/Navigation/Navheader/Navheader';
import FOOTER from '../../components/Navigation/FOOTER/FOOTER';
import CONTENT from '../../components/CONTENT/CONTENT';


class Layout extends Component{

    render (){
        return (
         <Aux>
           <Navheader></Navheader>
            <CONTENT/>
            <FOOTER/>
         </Aux> 
        )
    }
}
export default Layout;
