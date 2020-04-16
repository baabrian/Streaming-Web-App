import React from 'react';
import { Link } from 'react-router-dom';

const StreamItem = (props) => {
    return (
        <div className="item">
            {renderAdmin(props.streamUserId, props.currentUserId, props.streamId)}
            <i className="large middle aligned icon camera" />
            <div className="content">
                {props.title}
                <div className="description">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

const renderAdmin = (streamUserId, userId, streamId) => {
    if (streamUserId === userId) {
        return (
            <div className="right floated content">
                <Link to={`/streams/edit/${streamId}`} className="ui button primary">Edit</Link>
                <button className="ui button negative">Delete</button>
            </div>
        );
    } else {
        return null;
    }
}


export default StreamItem;