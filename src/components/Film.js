import React from "react";

const Film = ({link, children}) => {
    return (
        <li><a href={link}>{children}</a></li>
    );
}

export default Film;