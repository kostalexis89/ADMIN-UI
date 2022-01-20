import React, { useState, useEffect } from "react";
import appData from "../app.json";
import tagsData from "../tag.json";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default function AppEntries() {
  const [appList, setAppList] = useState([]);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    setAppList(appData.data);
    setTagList(tagsData.data);
  }, []);

  const result = appList.map((app, index) => {
    for (let i = 0; i < app.tagsID.length; i++) {
      console.log(app.tagsID[i]);
      for(let j=0; j< tagList.length;j++){
        if(tagList[j].id===app.tagsID[i]){
            app.tagsID[i] = tagList[j].name + "   "
        }
      }
    }
    return (
      <>
        {/* <p key={app.id}>{app.name}</p> */}
        <tr key={app.id}>
          <td>{index + 1}</td>
          <td>{app.name}</td>
          <td>{app.tagsID}</td>
          <td>Delete Edit</td>
        </tr>
      </>
    );
  });

  return (
    <Table striped bordered hover variant="dark">
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
  );
}
