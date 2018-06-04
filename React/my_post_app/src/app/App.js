import React from 'react';
import './App.css';
import Header from './partials/Header';
import PostList from './partials/post/PostList';
import Footer from './partials/Footer';

const App = (props) => {
  const posts = props.myData
  return (
      <React.Fragment>
          <Header myTitle={'BIT Posts'} />
          <PostList myPosts={posts} />
          <Footer />
      </React.Fragment>
  )
}

export default App;
