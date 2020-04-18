import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

import StreamItem from './StreamItem';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }


    renderList() {
        return this.props.streams.map(stream => {
            return (
                <StreamItem
                    key={stream.id}
                    streamId={stream.id}
                    streamUserId={stream.userId}
                    currentUserId={this.props.currentUserId}
                    title={stream.title}
                    description={stream.description}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <div className="ui celled list">
                    {this.renderList()}
                </div >
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.stream),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)