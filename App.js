
{/* <div className="container">
<div className="row">
    <div className="first-heading">
        <h1>This is first heading</h1>
        <p>This is first of my paragraph</p>
    </div>
    <div className="second-heading">
        <h1>This is second heading</h1>
        <p>This is second of my paragraph</p>
    </div>
</div>
</div> */}


const heading = React.createElement("div", {className: "container"},
    React.createElement("div", {className: "row"},
        [
            React.createElement("div", {className: "first-heading"},

                [
                    React.createElement("h1", {},"This is first heading"),
                    React.createElement("p", {}, "This is first of my paragraph")
                ],
            ),
            React.createElement("div", {className: "second-heading"},
                [
                    React.createElement("h1", {}, "This is second heading"),
                    React.createElement("p", {}, "This is second of my paragraph")
                ]
            ),
        ]
    ));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)