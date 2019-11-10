import React from "react";

export default function CreateForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={props.values.title}
          onChange={props.onChange}
          placeholder="title"
        />
        <label>Url:</label>
        <input
          type="text"
          name="url"
          value={props.values.url}
          onChange={props.onChange}
          placeholder="url"
        />
        <button type="submit">add image</button>
      </form>
    </div>
  );
}
