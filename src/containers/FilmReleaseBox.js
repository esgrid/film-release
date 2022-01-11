import React, { useState } from 'react';
import FilmReleaseList from '../components/FilmReleaseList';
import UpcomingRelease from '../components/UpcomingRelease';



const FilmReleaseBox = () => {

    const [films, setFilms] = useState([
        {
            id: 1,
            text: "Scream",
            link: "https://www.imdb.com/title/tt11245972/?ref_=rlm"
        },
        {
            id: 2,
            text: "Cyrano",
            link: "https://www.imdb.com/title/tt12889404/?ref_=rlm"
        },
        {
            id: 3,
            text: "Memoria",
            link: "https://www.imdb.com/title/tt8399288/?ref_=rlm"
        },
        {
            id: 4,
            text: "Save the Cinema",
            link: "https://www.imdb.com/title/tt12048234/?ref_=rlm"
        },
        {
            id: 5,
            text: "Cow",
            link: "https://www.imdb.com/title/tt11548822/?ref_=rlm"
        }
    ]);
    // setFilms(films);

    const upcomingRelease = "https://www.imdb.com/calendar/?region=gb"

    const releases = () => {
        window.location = "https://www.imdb.com/calendar/?region=gb";
    }

    return (
        <>
            <h1>Upcoming Film Releases (UK)</h1>
            <hr></hr>
            <FilmReleaseList films={films}/>
            <hr></hr>
            <div>
                <UpcomingRelease upcomingReleaseLink={upcomingRelease}/>
                {/* <h2><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases > ></a></h2> */}
            </div>
            {/* <button onClick={() => releases()}>View more upcoming releases > ></button> */}
        </>
        
    );
}

export default FilmReleaseBox;