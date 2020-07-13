import React from 'react';
import axios from 'axios';
import Book from '../components/Book';
//import './Home.css';

class Home extends React.Component{
  state = {
    isLoading : true,
    books : []
  };
  getBooks = async() => {
    const {
      data:{
        data : {books}
      }
    } = await axios.get("https://search.shopping.naver.com/search/all?frm=NVSHMDL&origQuery=%EC%B1%85%20"+encodeURI({ book_title })+"&pagingIndex=1&pagingSize=40&productSet=model&query=%EC%B1%85%20%EC%96%B4%EB%A6%B0%EC%99%95%EC%9E%90&sort=price_asc&timestamp=&viewType=list");
    this.setState({books, isLoading : false });
  }
  componentDidMount(){
    this.getBooks();
  }
  render(){
    const{ isLoading, books } = this.state;
    return (
      <section className="container">
        {isLoading ? ( 
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ) : ( 
            <div className="books">
              {books.map(books => (
                 <Books 
                    key={books.id}
                    id={books.id} 
                    year={books.year}
                    title={books.title}
                    summary={books.summary}
                    poster={books.medium_cover_image}
                    genres={books.genres}
                    />
                    ))}
                    </div>
    )}
    </section>
    );
  }
}

export default Home;
