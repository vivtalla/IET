import React, { Component } from 'react';
import Popup from 'reactjs-popup'
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

export class FormCreationMenu extends Component {
    constructor(props) {
        super(props);//only leaving this here in case this.props is needed in the constructor
        this.state = {
            popupContent: "chooseMenu"
          };
        this.onListItemClicked = this.onListItemClicked.bind(this);
    }

    onListItemClicked(popupContent){
        this.setState({
          popupContent: popupContent
        })
    }

    render() {
        return(
            <Popup trigger={<button className="button"> Add Goal Component </button>} modal lockScroll = {true}>
            {close => (
                <div className="modal">
                    {/* <a className="close" onClick={()=>this.onListItemClicked("chooseMenu")}>
                    &times;
                    </a> */}
                    <div className="header">Add Goal Component </div>
                    {this.state.popupContent == "chooseMenu" ? <ChooseMenu /> : 
                    this.state.popupContent == "yesNoGoal"? <YesNoGoal /> : 
                    this.state.popupContent == "timerGoal"? <TimerGoal /> :
                    this.state.popupContent == "incrementGoal"? <IncrementGoal /> :
                    this.state.popupContent == "textboxGoal"? <TextboxGoal /> :
                    this.state.popupContent == "dropdownGoal"? <DropdownGoal /> : null}
                    <div className="actions">
                        <Popup
                            trigger={<button className="button"> Component Types </button>}
                            position="top center"
                            closeOnDocumentClick
                        >
                        {close1 => (
                            <List>
                            {/* <div className="menu"> */}
                            <ListItem button className="menu-item" title="menu_yesno" onClick={()=>{this.onListItemClicked("yesNoGoal"); close1()}}> Yes/No</ListItem>
                            <ListItem button className="menu-item" title="menu_timer" onClick={()=>{this.onListItemClicked("timerGoal"); close1()}}> Timer</ListItem>
                            <ListItem button className="menu-item" title="menu_increment" onClick={()=>{this.onListItemClicked("incrementGoal"); close1()}}> Increment</ListItem>
                            <ListItem button className="menu-item" title="menu_textbox" onClick={()=>{this.onListItemClicked("textboxGoal"); close1()}}> TextBox</ListItem>
                            <ListItem button className="menu-item" title="menu_dropdown" onClick={()=>{this.onListItemClicked("dropdownGoal"); close1()}}> DropDown</ListItem>
                            {/* </div> */}
                        </List>
                        )}
                        </Popup>
                        <button 
                            className="button"
                            onClick={()=> {
                                close();
                                this.onListItemClicked("chooseMenu");
                            }}
                        >
                            Apply
                        </button>

                        <button
                            className="button"
                            onClick={() => {
                            close();
                            this.onListItemClicked("chooseMenu");
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                )}
            </Popup>

        );
    }
}

export class ChooseMenu extends Component {
    constructor(props) {
        super(props);//only leaving this here in case this.props is needed in the constructor
    }

    render(){
        return(
            <div className="content">
                {' '}
                Choose New Goal Component Type From List
            </div>
        );
    }
}

export class YesNoGoal extends Component {
    constructor(props) {
        super(props);//only leaving this here in case this.props is needed in the constructor
    }

    render(){
         return(
             <div className="content">
                {' '}
                This is a placeholder for yes/no goal creation
             </div>
       );
    }
}

export class TimerGoal extends Component {
    constructor(props) {
        super(props);//only leaving this here in case this.props is needed in the constructor
    }

    render(){
        return(
            <div className="content">
               {' '}
               This is a placeholder for timer goal creation
            </div>
        );
    }
}

export class IncrementGoal extends Component {
    constructor(props) {
        super(props);//only leaving this here in case this.props is needed in the constructor
    }

    render(){
        return(
            <div className="content">
               {' '}
               This is a placeholder for icrement goal creation
            </div>
        );
    }
}


export class DropdownGoal extends Component {
    constructor(props) {
        super(props);//only leaving this here in case this.props is needed in the constructor
    }

    render(){
        return(
            <div className="content">
               {' '}
               This is a placeholder for dropdown goal creation
            </div>
        );
    }
}



export class TextboxGoal extends Component {
    constructor(props) {
        super(props);//only leaving this here in case this.props is needed in the constructor
    }

    render(){
        return(
            <div className="content">
               {' '}
               This is a placeholder for textbox goal creation
            </div>
        );
    }
}
