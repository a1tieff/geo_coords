import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function returnCities(e) {
  // до этого в скобках было e
  let data = {
    //city: e.target.value,
    latitude: e.target.value,
    longitude: e.target.value
  };

  fetch("http://localhost:3000/set_coordinates/return_cities", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

const Something = props => {
  return (
    <div>
      <input onChange={returnCitiese} />
    </div>
  );
};
