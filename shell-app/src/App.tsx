import React from "react";
import ReactDOM from "react-dom";
import Counter from "micro-app-1/Counter";

import "./index.scss";

const App = () => (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: Mirco Frontend shell-app</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Tailwind</div>
        <div className="mt-40">
            <div>Counter Micro App</div>
            <Counter/>
        </div>
    </div>
);
ReactDOM.render(<App/>, document.getElementById("app"));
