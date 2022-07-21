import React, {Component} from 'react';
import Header from './component/header/header';
import {newsCategory} from '../src/news/index'


class App extends Component {
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 offset-md-3'>
           
           <Header category={newsCategory.technology}></Header>
          </div>

        </div>

      </div>
    )
  }
}


export default App;

