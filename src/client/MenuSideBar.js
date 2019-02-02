import React, { Component } from 'react';
import {Goal} from "./Goal.js"

export class MenuSideBar extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        var fields = [{name: "yesNo", title: "Test1"},
                      {name: "timer"},
                      {name: "dropdown", title: "test2", options: ["a", "r", "y", "t"]},
                      {name: "textBox", title: "test3"},
                      {name: "increment", title: "test4"},
                      {name: "Not A Real Type"}
                ]
        return(
            <div>
                <b>Sidebar Cotents</b>
                <br></br>
                <i>Need to add stuff here</i>
                <br/>
                <Goal dataFields={fields}/>
            </div>
        );
    }
}