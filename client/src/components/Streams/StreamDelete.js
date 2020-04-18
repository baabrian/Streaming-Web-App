import React, { useEffect } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream, fetchStream } from '../../actions';
import { connect } from 'react-redux'

const StreamDelete = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, [])

    const actions = (
        <div>
            <button onClick={() => props.deleteStream(props.match.params.id)} className="ui button negative">Delete</button>
            <button onClick={() => history.push("/")} className="ui button">Cancel</button>
        </div>
    )

    console.log(props.stream);

    return (

        <Modal
            title="Delete Stream"
            content={renderContent(props.stream)}
            action={actions}
            onDismiss={() => history.push("/")}
        />

    );
}

const renderContent = (stream) => {
    if (!stream) {
        return "are you sure want to delete this stream?"
    }

    return `Are you want to delete the stream with title: ${stream.title}`
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.stream[`${ownProps.match.params.id}`]
    }
}

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);