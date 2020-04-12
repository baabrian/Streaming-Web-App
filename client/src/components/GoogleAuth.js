import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        //gapi only exists on window scope, that's why window has to reference gapi
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "585352437648-pb2pk1pvi3609jt7hmr02taib3ptfa39.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                let auth = window.gapi.auth2.getAuthInstance();
                //this.setState({ isSignedIn: auth.isSignedIn.get() })
                this.onAuthChange(auth, auth.isSignedIn.get());
                auth.isSignedIn.listen(() => this.onAuthChange(auth, auth.isSignedIn.get()));
            });
        });
    }

    onAuthChange = (auth, isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
        //this.setState({ isSignedIn: auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        let auth = window.gapi.auth2.getAuthInstance();
        auth.signIn();
    }

    onSignOutClick = () => {
        let auth = window.gapi.auth2.getAuthInstance();
        auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (null);
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign In with google
                </button>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    };
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);