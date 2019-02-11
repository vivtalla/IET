import React, { Component } from 'react';
import Popup from 'reactjs-popup'

export class EditMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Popup trigger={<button className="button"> Open Modal </button>} modal lockScroll = {true}>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                    &times;
                    </a>
                    <div className="header"> Modal Title </div>
                    <div className="content">
                    {' '}
                    Sample Text
                    </div>
                    <div className="actions">
                    <Popup
                        trigger={<button className="button"> Trigger </button>}
                        position="top center"
                        closeOnDocumentClick
                    >
                        <div className="menu">
                        <div className="menu-item"> Menu item 1</div>
                        <div className="menu-item"> Menu item 2</div>
                        <div className="menu-item"> Menu item 3</div>
                        <div className="menu-item"> Menu item 4</div>
                        </div>
                    </Popup>
                    <button
                        className="button"
                        onClick={() => {
                        close()
                        }}
                    >
                        close modal
                    </button>
                    </div>
                </div>
                )}
            </Popup>

        );
    }
}