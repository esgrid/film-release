import React from "react";
import Song from "./Song";

const SongReleaseList = ({songs}) => {

    const songNodes = songs.map(song => <Song key={song.id} song={song} />);

    return (
        <ul>
            {songNodes}
        </ul>
    );
}

export default SongReleaseList;