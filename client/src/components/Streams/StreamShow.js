import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

import flv from 'flv.js';

const StreamShow = (props) => {
    const { id } = props.match.params;

    const videoRef = React.createRef();

    useEffect(() => {
        props.fetchStream(id);
        const player = flv.createPlayer({
            type: "flv",
            url: `http://localhost:8000/live/${id}.flv`
        });

        console.log(videoRef);
        player.attachMediaElement(videoRef.current);
        player.load();
    }, [])

    if (!props.stream) {
        return (
            <div>LOADING</div>
        );
    } else {
        const { title, description } = props.stream;
        return (
            <div>
                <video ref={videoRef} style={{ width: "100%" }} controls={true} />
                <h5>{title}</h5>
                <h4>{description}</h4>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[`${ownProps.match.params.id}`] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)