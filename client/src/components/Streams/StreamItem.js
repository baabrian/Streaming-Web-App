import React from 'react';
import { Link } from 'react-router-dom';

const StreamItem = (props) => {
    return (
        <div className="item">
            {renderAdmin(props.streamUserId, props.currentUserId, props.streamId)}
            <i className="large middle aligned icon camera" />
            <div className="content">
                <Link to={`/streams/${props.streamId}`} className="header">
                    {props.title}
                </Link>
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
                <Link to={`/streams/delete/${streamId}`} className="ui button negative">Delete</Link>
            </div>
        );
    } else {
        return null;
    }
}


export default StreamItem;