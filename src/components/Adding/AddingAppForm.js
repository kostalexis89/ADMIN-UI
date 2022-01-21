import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../UI/Button/Button";
import Select from "react-select";

export default function AddingAppForm(props) {
  const [enteredApp, setEnteredApp] = useState("");
  const [enteredTags, setEnteredTags] = useState();

  const appEntryHandler = (e) => {
    setEnteredApp(e.target.value);
  };

  const tagEntryHandler = (e) => {
    setEnteredTags(Array.isArray(e)?e.map(x=>x.label):[])
  };

  const addingAppHandler = (e) => {
    e.preventDefault();
    props.addingAppHandler(enteredApp,enteredTags)
    setEnteredApp('')
    props.cancelHandler()

  };

  const listOfTags = props.tagList.map((tag) => {
    return (
      {value:tag.name,label:tag.name}
    );
  });
  return (
    <Form onSubmit={addingAppHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter new App"
          value={enteredApp}
          onChange={appEntryHandler}
        />
      </Form.Group>
      <Select isMulti options={listOfTags} onChange={tagEntryHandler}></Select>
      <div style={{ marginTop: "20px", marginLeft: "5px" }}>
        <Button type="submit">Add App</Button>
        <Button onClick={props.cancelHandler}>Cancel</Button>
      </div>
    </Form>
  );
}
