import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { useAuth0 } from "@auth0/auth0-react";


const Home = (props) => {
  const {user, isAuthenticated} = useAuth0()
  console.log(user)
  return (
    <Card className={classes.home}>
      {isAuthenticated && <h1>Welcome back {user.nickname}</h1>}
      {!isAuthenticated && <h1>Please Login</h1>}
    </Card>
  );
};

export default Home;
