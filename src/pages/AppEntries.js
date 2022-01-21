import React, { useState, useEffect } from "react";
import appData from "../app.json";
import tagsData from "../tag.json";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import classes from "./AppEntries.module.css";
import Card from "../components/UI/Card/Card";
import Button from "../components/UI/Button/Button"
import Adding from "../components/Adding/Adding";

export default function AppEntries() {
  const [appList, setAppList] = useState([]);
  const [tagList, setTagList] = useState([]);
console.log(appList)

  const addingAppHandler = (enteredApp,enteredTags) => {
    
    console.log(enteredApp)
    console.log(enteredTags)
    setAppList((prev)=>{
      return [...prev, {
        id: enteredApp,
        name: enteredApp,
        tagsID: enteredTags
      }]
    })

  }

  const deleteHandler = (id) => {
    const newList = appList.filter((item) => item.id !== id);
    setAppList(newList);
    //also an axios delete
    // axios.delete(`api/app/${id}`)
    // .then((response)=>{
    //   console.log(response)
    // })
    // .catch(err=>console.log(err))
  };

  useEffect(() => {
    setAppList(appData.data);
    setTagList(tagsData.data);

    //USING THE API
    // axios.get('/api/app')
    // 	.then(response => {
    // 		console.log(response)
    // 		setappList(response.data)
    // 	})
    // 	.catch(err => console.log(err))
  }, []);

  const result = appList.map((app, index) => {
    for (let i = 0; i < app.tagsID.length; i++) {
      for (let j = 0; j < tagList.length; j++) {
        if (tagList[j].id === app.tagsID[i]) {
          app.tagsID[i] = tagList[j].name + "   ";
        }
      }
    }
    return (
      <>
        {/* <p key={app.id}>{app.name}</p> */}

        <tr key={app.id}>
          <td>{index + 1}</td>
          <td>
            <Link className={classes.appLinks} to={`/entries/app/${app.id}`}>
              {app.name}
            </Link>
          </td>
          <td>{app.tagsID}</td>
          <td className={classes.actionsContainer}>
            <span>&#x270E;</span>
            <span onClick={() => deleteHandler(app.id)}>&#x2613;</span>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <Adding addingAppHandler={addingAppHandler} tagList={tagList}/>
      <Card>
        <Table
          striped
          bordered
          hover
          variant="dark"
          className={classes.container}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{result}</tbody>
        </Table>
      </Card>
    </>
  );
}
