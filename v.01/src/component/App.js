import React from 'react';
import Menu from './Menu';
import Content from './Content';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            menuIsOpen: false,
        }
    }
    handleOnClick = (evt) => {
        this.setState({ menuIsOpen: !this.state.menuIsOpen })
    }
    render() {
        const isOpen = this.state.menuIsOpen;
        return (
            <div className="App">

                <button className="btn"
                    onClick={this.handleOnClick} >
                    {!this.state.menuIsOpen ? 'open' : 'close'}
                </button>

                <Menu
                    isOpen={this.state.menuIsOpen} >
                    {/* some content inside menu */}
                    <ul>
                        <li>item 0 </li>
                        <li>item 1 </li>
                        <li>item 2 </li>
                    </ul>
                </Menu>

                <Content cssClasses={this.state.menuIsOpen ? 'move' : ''} />

            </div>
        )
    }
}

export default App;