import React from "react";

const Song = ({song}) => {
    return (
        <li>
          <a href={song.url}>{song.title} by {song.artist}</a>
        </li>
      );
}

export default Song;