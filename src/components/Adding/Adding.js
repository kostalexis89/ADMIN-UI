import React, { useState } from "react";
import classes from "../../pages/AppEntries.module.css";
import Button from "../UI/Button/Button";
import AddingAppForm from "./AddingAppForm";

export default function Adding(props) {

    const [addingApp, setAddingApp] = useState(false)
    const addingAppHandler = () =>{
        setAddingApp(true)
    }
    const cancelHandler = () => {
        setAddingApp(false)
    }
  return (
    <div className={classes.btnContainer}>
      {!addingApp && <><Button onClick={addingAppHandler}>Add a new App</Button>
      <Button>Add a new Tag</Button></>}
      {addingApp && <AddingAppForm addingAppHandler={props.addingAppHandler} cancelHandler={cancelHandler} tagList={props.tagList}/>}
    </div>
  );
}
