import React from 'react';

//ES6 stateless React Component
const Aside = (props) => {
    const classNames = `Aside ${ props.className ? props.className: ""} ${props.closed ? " closed" : ""}`;
    const component = (
        <aside className={classNames}>
            <div className="block">
                {props.children}
            </div>
        </aside>
    )
    return component;
}

const propTypes = {
  isOpen: React.PropTypes.bool
};
const defaultProps = {
  isOpen: false
};

Aside.propTypes = propTypes;
Aside.defaultProps = defaultProps;

export default Aside;

