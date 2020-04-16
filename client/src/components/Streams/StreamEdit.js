import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id).catch((err) => {
            console.log(err)
        })
    }, []);

    if (!props.stream) {
        return <div>empty stream</div>
    } else {
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                    initialValues={props.stream}
                    onSubmit={(formValues) => onSubmit(props.stream.id, formValues, props.editStream)}
                />
            </div>
        );
    }
};

const onSubmit = (id, formValues, editStream) => {
    let { title, description } = formValues;
    const form = {
        title,
        description
    }

    editStream(id, form);
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[`${ownProps.match.params.id}`] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)