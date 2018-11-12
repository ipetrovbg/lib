import * as React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);

import "./App.scss";
import Showcase from "./components/Showcase/Showcase";
import {Button} from "./components/Button/Button";

export class App extends React.Component<{test: string; }, {loading: boolean}> {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    render() {
        return <div className="app">
            <Showcase>
                <Button classNames="primary" loading={this.state.loading} onClick={this.onClickButton.bind(this)}>Follow</Button>
            </Showcase>
        </div>;
    }

    public onClickButton() {
        console.log("Button was clicked");
    }

    public setLoading() {
        this.setState({
            loading: !this.state.loading
        })
    }
}