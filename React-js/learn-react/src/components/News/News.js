import React, { Component } from "react";
import IntroSection from "../../componentsChild/IntroSection";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          link: "https://themes.the4.co/kalles-html/blog-left-sidebar.html",
          img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/blog-01.jpg",
          title: "Eyeglasses that Suit Your Personality",
          time: "August 27, 2020",
          content:
            "Because people generally recognize you by your face, the eyeglasses you wear are a very real part of your identity....",
        },
        {
          id: 2,
          link: "https://themes.the4.co/kalles-html/blog-left-sidebar.html",
          img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/blog-02.jpg",
          title: "How Eyeglasses Protect and Improve Vision?",
          time: "August 27, 2020",
          content:
            "For most Americans, eyeglasses are an indispensable part of our daily lives. In the United States, more than 6 out...",
        },
        {
          id: 3,
          link: "https://themes.the4.co/kalles-html/blog-left-sidebar.html",
          img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/blog-03.jpg",
          title: "Making a spectacle: How glasses are crafted",
          time: "August 27, 2020",
          content:
            "When it comes to getting a pair of glasses, looks can be deceiving. We see them as functional fashion, but in reali...",
        },
      ],
    };
  }
  render() {
    let element = this.state.posts.map((post, index) => {
      let result = "";
      result = (
        <li className="news-item col-lg-4" key={index}>
          <NewsItem
            link={post.link}
            img={post.img}
            title={post.title}
            time={post.time}
            content={post.content}
          />
        </li>
      );
      return result;
    });
    return (
      <section className="section-news">
        <div className="container">
          <IntroSection
            title="Latest News"
            text="Finding eyeglasses with the qualities that are most 
            important to you could be as simple as choosing a frame material each 
            distinguished by its own strengths."
          />
          <div className="news">
            <ul className="news-list wrap">{element}</ul>
          </div>
        </div>
      </section>
    );
  }
}
