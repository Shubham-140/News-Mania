import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
  capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      pageSize: 0,
    };
    document.title = `NewsMania - ${this.capitalizeFirstLetter(this.props.category)} News | Get Tons of News Daily | NewsMania.com`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f4714c11f794501839dd64bee110a10&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page:this.state.page+1
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-5">
          <h1 className="text-center h5" style={{ marginTop: '72px',fontSize:'28px'}}>NewMania - Top Headlines On {this.capitalizeFirstLetter(this.props.category)} News</h1>
          {this.state.loading && <Spinner />}
          {!this.state.loading && this.state.articles && this.state.articles.length === 0 && <div className="text-center my-5">No articles found</div>}
          <div className="row my-4">
            {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
              return (
                <div className="col-md-4 mb-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    readStatus="Read More"
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    textClass="small"
                    imgClass="img-fluid"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-around my-4">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-sm btn-light border" onClick={this.handlePrevClick}>&larr; Previous Page</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-sm btn-light border" onClick={this.handleNextClick}>Next Page &rarr;</button>
        </div>
      </>
    );
  }
}

export default News;
