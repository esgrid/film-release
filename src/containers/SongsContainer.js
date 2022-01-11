import React, { useState } from 'react';
import SongReleaseList from '../components/songs/SongReleaseList';
import FeedbackForm from '../components/feedback/FeedbackForm';
import FeedbackList from '../components/feedback/FeedbackList';


const SongsContainer = () => {

    const [songs, setSongs] = useState([
        {
            id: 1,
            title: "Last Christmas",
            artist: "Wham!",
            url: "https://www.youtube.com/watch?v=E8gmARGvPlI"
        },
        {
            id: 2,
            title: "Never Gonna Give You Up",
            artist: "Rick Astley",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            id: 3,
            title: "Spice Up Your Life",
            artist: "Spice Girls",
            url: "https://www.youtube.com/watch?v=9wfpXI5PKlw"        
        }
    ]);

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            name: "Ronaldinho",
            feedback: "You could've added more songs for a better experience."
        },
        {
            id: 2,
            name: "Rivaldo",
            feedback: "Awesome songs! Looking forward to hearing more."
        }
    ]);

    const addFeedback = submittedFeedback => {
        submittedFeedback.id = Date.now();
        setFeedback([...feedback, submittedFeedback]);
    }

    return (
        <>
            <h1>My Top Songs of the Year</h1>
            <hr></hr>
            <SongReleaseList songs={songs}/>
            <hr></hr>
            <h2>Give us your feedback:</h2>
            <FeedbackForm onFeedbackSubmit={feedback => addFeedback(feedback)}/>
            <FeedbackList feedback={feedback}/>
            
        </>
        
    );
}

export default SongsContainer;