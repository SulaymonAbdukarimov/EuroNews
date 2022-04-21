// Vazifa;
// Yangiliklar qo'shish funksiyasini yozish
// P.S. No odatiy ID uchun UUID kutubxonadan foydalanishingiz mumkun

// O'rta Vazifa
// yangiliklar qo'shilgan vaqt,category bo'ycha ajralish

// Qiyin vazifa
// Yangiliklar db.jsonga ham tushush kerak bo'ladi

import React from "react";

function NewsAddForm() {
  return (
    <form className="border p-4 shadow-lg rounded">
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
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label fs-4  text-white">
          Choose category of news
        </label>
        <select required className="form-select" id="category" name="category">
          <option>News about...</option>
          <option value="hot">Hot News</option>
          <option value="sport">Sport News</option>
          <option value="world">World News</option>
        </select>
      </div>
      <button type="submit" className="btn shadow-lg btn-dark text-light w-100">
        Create News
      </button>
    </form>
  );
}

export default NewsAddForm;
