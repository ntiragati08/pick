import "./TrialSection.scss";
import Footer from "./Footer";
import React, { useState, useEffect, useCallback } from "react";

function TrialSection() {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/api/v1/predict", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => setResponseData(data))
      .catch((error) => console.error(error));
    const data = await response.json();
    console.log(data);
    <p>data.result</p>;
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="section trailSection">
      <div className="trailSectionRight">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">Search:</label>
          <input
            type="text"
            id="search-input"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div>{responseData && <p>The result is: {responseData.result}</p>}</div>
      </div>

      <div
        className="trailSectionLeft"
        style={{
          backgroundColor: "black",
          backgroundImage: `url("https://farmersedge.ca/wp-content/uploads/2022/02/Fertilizer-Nitrogen-scaled.jpg")`,
        }}
      >
        <h1>Fertilizer</h1>
        <h3>Enter your soil information and get a fertilizer recommendation</h3>
      </div>
    </div>
  );
}

export default TrialSection;
