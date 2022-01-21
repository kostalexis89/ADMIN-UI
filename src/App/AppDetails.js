import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import appData from "../app.json";
import tagsData from "../tag.json";
import classes from '../components/Home/Home.module.css';
import Card from '../components/UI/Card/Card';

export default function AppDetails() {
  const [appDetails, setAppDetails] = useState(null)
  const { id } = useParams()

  useEffect(()=>{
    // axios.get(`/api/app/${id}`)
		// 	.then(response => {
		// 		setAppDetails(response.data)
		// 	})
		// 	.catch(err => console.log(err))
  },[])
  return <Card className={classes.home}>
          <h1>RTL</h1>
          <h4>React</h4>
          <h4>MONGODB</h4>
          <h4>EXPRESS</h4>
        </Card>;
}
