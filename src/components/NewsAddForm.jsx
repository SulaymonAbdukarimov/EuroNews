import React from "react";
import { useState } from "react";
import useHttp from "../hook/useHttp";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { newsCreated } from "../redux/actions";

function NewsAddForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newNews = { id: v4(), name, description, category };

    request("http://localhost:3001/news", "POST", JSON.stringify(newNews))
      .then(dispatch(newsCreated(newNews)))
      .catch((err) => console.log(err));

    setName("");
    setCategory("");
    setDescription("");
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name for new News
        </label>
        <input
          type="text"
          required
          name="name"
          className="form-control"
          id="name"
          placeholder="What is name of news?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Description
        </label>
        <input
          type="text"
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="What is your news about?"
          style={{ height: "120px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label fs-4  text-white">
          Choose category of news
        </label>
        <select
          required
          className="form-select"
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Category News...</option>
          <option value="Hot News">Hot News</option>
          <option value="Sport News">Sport News</option>
          <option value="World News">World News</option>
        </select>
      </div>
      <button type="submit" className="btn shadow-lg btn-dark text-light w-100">
        Create News
      </button>
    </form>
  );
}

export default NewsAddForm;
