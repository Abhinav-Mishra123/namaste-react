import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react"
import Header from "./src/components/Header";
import RestaurentCard from "./src/components/RestaurentCard";
import Body from "./src/components/Body";


const AppLayOut = () => (
  <>
    <Header />
    <Body/>
  </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />)