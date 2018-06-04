import React from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UserList from './partials//user/UserList';
import {getUsers} from '../services/services';


const App = props =>{
  const userList = getUsers();
  console.log(userList);
  
  return (
    <React.Fragment>
      <Header myTitle={'React Users'} />
      <UserList myUsers={userList}/>
      <Footer />
      </React.Fragment>
  )
}

export default App;
