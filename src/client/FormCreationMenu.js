import React, { Component } from 'react';
import Popup from 'reactjs-popup'
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

export class FormCreationMenu extends Component {
    constructor(props) {
        super(props);//only leaving this here in case this.props is needed in the constructor
    }

    render() {
        return(
            <Popup trigger={<button className="button"> Add Goal Component </button>} modal lockScroll = {true}>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                    &times;
                    </a>
                    <div className="header">Add Goal </div>
                    <div className="content">
                    {' '}
                    Choose New Goal Component Type From List
                    </div>
                    <div className="actions">
                    <Popup
                        trigger={<button className="button"> Component Types </button>}
                        position="top center"
                        closeOnDocumentClick
                    >
                        <List>
                            {/* <div className="menu"> */}
                            <ListItem button className="menu-item" title="menu_yesno"> Yes/No</ListItem>
                            <ListItem button className="menu-item" title="menu_timer"> Timer</ListItem>
                            <ListItem button className="menu-item" title="menu_increment"> Increment</ListItem>
                            <ListItem button className="menu-item" title="menu_textbox"> TextBox</ListItem>
                            <ListItem button className="menu-item" title="menu_dropdown"> DropDown</ListItem>
                            {/* </div> */}
                        </List>
                    </Popup>
                    <button 
                        className="button"
                        onClick={()=> {
                            close()
                        }}
                    >
                        Apply
                    </button>

                    <button
                        className="button"
                        onClick={() => {
                        close()
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

// export class ChooseMenu extends Component {
//     constructor(props) {
//         super(props);//only leaving this here in case this.props is needed in the constructor
//     }

//     render(){

//     }
// }

// export class YesNoGoal extends Component {
//     constructor(props) {
//         super(props);//only leaving this here in case this.props is needed in the constructor
//     }

//     render(){

//     }
// }

// export class IncrementGoal extends Component {
//     constructor(props) {
//         super(props);//only leaving this here in case this.props is needed in the constructor
//     }

//     render(){

//     }
// }



// export class DropdownGoal extends Component {
//     constructor(props) {
//         super(props);//only leaving this here in case this.props is needed in the constructor
//     }

//     render(){

//     }
// }



// export class TextboxGoal extends Component {
//     constructor(props) {
//         super(props);//only leaving this here in case this.props is needed in the constructor
//     }

//     render(){

//     }
// }
