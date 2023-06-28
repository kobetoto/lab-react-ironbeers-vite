import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";

// function BeerPage() {
//     // Get the BeerId param from the URL.
//     let { BeerId } = useParams();
//     // ...
//   }

function BeerDetailsPage() {
  let { beerId } = useParams();
  console.log("BeerId", beerId);
  return;
}

export default BeerDetailsPage;
