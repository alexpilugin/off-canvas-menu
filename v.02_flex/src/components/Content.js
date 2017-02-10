import React from 'react';

//ES6 stateless React Component
const Content = (props) => {
    const component = (
        <section className="Content">
            {props.children}
        </section>
    )
    return component
}

export default Content;