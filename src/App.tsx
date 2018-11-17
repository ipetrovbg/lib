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
            loading: true
        }
    }
    render() {
        return <div className="app">
            <Showcase>
                <Button classNames="in-group" disabled={false} loading={this.state.loading} onClick={this.onClickButton.bind(this)}>1</Button>
                <Button classNames="in-group" disabled={false} loading={false}>2</Button>
                <Button classNames="in-group" disabled={false} loading={false} onClick={this.setLoading.bind(this)}>3</Button>
                <div>Something</div>
                <Button classNames="" disabled={false} loading={false} onClick={this.setLoading.bind(this)}>3</Button>
            </Showcase>
        </div>;
    }

    public onClickButton() {
        console.log("Button was clicked");
        this.setLoading();
    }

    public setLoading() {
        this.setState({
            loading: !this.state.loading
        })
    }
}