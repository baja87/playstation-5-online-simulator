import React, { Component, useState } from "react";
import { Games } from "../database.js";
import List from "./List.js";
import "./Search.scss";

const Search = (props) => {
  const [input, setInput] = useState("");
  let result = false;

  if (input != "" && input.length > 2) {
    result = [];
    Object.values(Games).map((item, i) => {
      if (item) {
        let label = item.label;
        let keywords = item.keywords;
        if (label && label.toLowerCase().includes(input)) {
          result.push(item);
        } else if (keywords && keywords.toLowerCase().includes(input)) {
          result.push(item);
        }
      }
    });
  }

  return (
    <div className="ps5-search">
      <h2>Search</h2>

      <input
        className="ps5-btn focus"
        type="search"
        placeholder="Start typing"
        onChange={(e) => setInput(e.target.value.toLowerCase())}
      />
      <div>
        {result && (
          <List
            list={[{ items: result }]}
            onClickMenu={(e) => props.onClickMenu(e)}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
