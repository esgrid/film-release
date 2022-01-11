import React from "react";

const Feedback = ({name, children}) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{children}</p>
        </>
    );
}

export default Feedback;