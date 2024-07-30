import React from "react";
import ReactDOM from "react-dom/client";


const Heading = () => (
    <div className="container">
      <div className="row">
        <div className="first-heading">
          <h1>This is the first heading</h1>
          <p>This is the first paragraph</p>
        </div>
        <div className="second-heading">
          <h1>This is the second heading</h1>
          <p>This is the second paragraph</p>
        </div>
      </div>
    </div>
  );

  const number = 1000

  const HeadingComponent = () =>(
    <>
   <h1>{number}</h1> 
    <h1>This is Heading Component</h1>
    <Heading props="1" /> 
    <Heading></Heading>
    {Heading()}
    </>
  )

// const heading = React.createElement("div", {className: "container"},
//     React.createElement("div", {className: "row"},
//         [
//             React.createElement("div", {className: "first-heading"},

//                 [
//                     React.createElement("h1", {},"This is first heading"),
//                     React.createElement("p", {}, "This is first of my paragraph")
//                 ],
//             ),
//             React.createElement("div", {className: "second-heading"},
//                 [
//                     React.createElement("h1", {}, "This is second headinasg sas"),
//                     React.createElement("p", {}, "This is second of my paragraph asa")
//                 ]
//             ),
//         ]
//     ));





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)