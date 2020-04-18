import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import StreamForm from './Streams/StreamForm';
import Header from './Header';
import history from '../history';
import ErrorStream from './Streams/ErrorStream';

export default class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/list" exact component={StreamList} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </Router>
            </div >
        );
    }
}