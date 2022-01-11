import React from "react";
import Film from "./Film";

const FilmReleaseList = ({films}) => {

    const filmNodes = films.map(film => <Film link={film.link} key={film.id}>{film.text}</Film>);

    return (
        <ul>
            {filmNodes}
        </ul>
    );
}

export default FilmReleaseList;