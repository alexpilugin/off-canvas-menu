import React from 'react';
import Content from './Content';
import Aside from './Aside';

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
    return (
      <div className="App">
        <button className="btn"
          onClick={this.handleOnClick} >
          {!this.state.menuIsOpen ? 'open' : 'close'}
        </button>

        <Aside isOpen={this.state.menuIsOpen} >
          {/* some content inside menu */}
          <ul>
            <li>item 0 </li>
            <li>item 1 </li>
            <li>item 2 </li>
          </ul>
        </Aside>

        <Content>
          <h3>What is Lorem Ipsum?</h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Content>
      </div>
    );
  }
}

export default App;
