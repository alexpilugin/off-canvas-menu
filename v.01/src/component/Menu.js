import React from 'react';
import './Menu.css';

//ES6 stateless React Component
const Menu = (props) => {
  const output = (
    <div role="navigation"
      className={"Menu " + props.cssClasses + (props.isOpen ? " isOpen" : "")}>
      <div className="block">
        {props.children}
      </div>
    </div>   
  )
  //return ( props.isOpen && output ) //show / hide 
  return output //show / hide
}

const propTypes = {
  isOpen: React.PropTypes.bool,
  cssClass: React.PropTypes.string,
};
const defaultProps = {
  isOpen: false,
  cssClasses: "",
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;


export default Menu;
