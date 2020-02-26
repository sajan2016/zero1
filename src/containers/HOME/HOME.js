import React,{Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import CONTENT from '../../components/CONTENT/CONTENT';
import SLIDER from '../../components/Navigation/Navheader/SLIDER/SLIDER';


class HOME extends Component{
    render(){
      return(
          <Layout>
              <SLIDER/>
              <CONTENT/>
          </Layout>
      )
    }
}

export default HOME;