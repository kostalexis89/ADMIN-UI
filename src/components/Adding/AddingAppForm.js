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

  console.log(enteredTags)
  const addingAppHandler = (e) => {
    e.preventDefault();
  };

  const listOfTags = props.tagList.map((tag) => {
    return (
      {value:tag.name,label:tag.name}
    );
  });
  console.log(listOfTags)
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
