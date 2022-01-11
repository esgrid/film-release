import React from "react";
import Feedback from "./Feedback";


const FeedbackList = ({feedback}) => {

    const feedbackNodes = feedback.map(ifeedback => {
            return <Feedback name={ifeedback.name} key={ifeedback.id}>{ifeedback.feedback}</Feedback>
        }
    );

    return (
        <>
            {feedbackNodes}
        </>
        
    );
}

export default FeedbackList;