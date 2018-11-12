import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {ComponentLifecycle} from "react";

export interface Test<P, S, SS = any> extends ComponentLifecycle<P, S, SS> {
    myHook: string;
    prototype: any;
}

ReactDOM.render(
    <App test="test" />,
    document.getElementById("root")
);