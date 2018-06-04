import React from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UserList from './partials//user/UserList';


const App = props =>{
  const users = props.myData;
  return (
    <React.Fragment>
      <Header myTitle={'React Users'} />
      <UserList myUsers={users}/>
      <Footer />
      </React.Fragment>
  )
}

export default App;
