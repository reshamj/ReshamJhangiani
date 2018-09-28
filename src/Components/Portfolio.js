import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
        // var articles = this.props.data.articles.map(function(articles){
        //     return <div key={articles.title}><h5>{articles.title}</h5>
        //         <a href={articles.url} target="_blank" className="arrow-link">Read</a>
        //     </div>
        // })
    }
    return (<section id="portfolio">
        </section>
    );
  }
}

export default Portfolio;

//fix the style issue, padding to right so that articles can be rendered from this js file