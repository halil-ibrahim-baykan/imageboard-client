import React from "react";
import CreateFormContainer from "./CreateFormContainer";

export default function List(props) {
  return (
    <div>
      <CreateFormContainer />
      {console.log(props)}
      {props.images.map(image => {
        return (
          <div key={image.id}>
            <h3>{image.title}</h3>
            <img src={image.url} alt={image.title} />
          </div>
        );
      })}
    </div>
  );
}
