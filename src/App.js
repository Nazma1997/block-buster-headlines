import React, {Component} from 'react';
import Header from './component/header/header';
import {newsCategory} from '../src/news/index'
import NewsList from './component/news-list/news-list';
import Pagination from './component/pagination/pagination';




const fakeNews = [
  {
    title: 'Title1',
    content: 'Content',
    url: 'https://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'Published date and time',
    source: {
      name: 'CNN',
    }
  },
  {
    title: 'Title2',
    content: 'Content',
    url: 'https://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'Published date and time',
    source: {
      name: 'CNN',
    }
  }

]

class App extends Component {
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 offset-md-3'>
           
           <Header category={newsCategory.technology}></Header>

           <div className='d-flex justify-content-between'>
           
           <p className='text-black-50 ml-auto'>
              About {0} results found
           </p>
           <p className='text-black-50 ml-auto'>
              {1} page of {100}
            </p>

           </div>


           <NewsList news={fakeNews}></NewsList>
           <Pagination></Pagination>
          </div>

        </div>

      </div>
    )
  }
}


export default App;

