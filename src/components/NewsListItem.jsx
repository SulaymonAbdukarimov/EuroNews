import React from "react";

function NewsListItem({ name, id, description, category, deleteNewsPost }) {
  let elementClassName;

  switch (category) {
    case "Hot News":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "Sport News":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "World News":
      elementClassName = "bg-secondary bg-gradient";
      break;
    default:
      elementClassName = "bg-success bg-gradient";
  }

  return (
    <li
      className={`card flex-row shadow-lg text-white my-2 ${elementClassName}`}
    >
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="News img"
        className="img-fluid w-25 d-inline"
        style={{ objectFit: "cover" }}
      />
      <span className="position-absolute top-0  end-90 translate-middle badge border rounded-pill bg-light">
        <button
          onClick={() => deleteNewsPost(id)}
          className="btn-close"
          type="button"
          aria-label="Close"
        ></button>
      </span>
    </li>
  );
}

export default NewsListItem;
