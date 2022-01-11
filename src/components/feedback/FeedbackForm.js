import React, { useState } from 'react';

const FeedbackForm = ({onFeedbackSubmit}) => {

    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleNameChange = event => setName(event.target.value);

    const handleFeedbackChange = event => setFeedback(event.target.value);

    const handleFormSubmit = event => {
        event.preventDefault();
        const nameToSubmit = name.trim();
        const feedbackToSubmit = feedback.trim();

        if (!nameToSubmit || !feedbackToSubmit){
            return;
        }

        onFeedbackSubmit(
            {
                name: nameToSubmit,
                feedback: feedbackToSubmit
            }
        );

        setName('');
        setFeedback('');
    }

    return (
        <form class="feedback-form" onSubmit={handleFormSubmit}>

            <input type="text" placeholder="Your name" value={name} onChange={handleNameChange}/>
            <input type="text" placeholder="What's on your mind?" value={feedback} onChange={handleFeedbackChange}/>
            <input type="submit" value="Send Feedback" />

        </form>
    );

}

export default FeedbackForm;