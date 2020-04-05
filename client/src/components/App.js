import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './Header';

export default class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                <Header/>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/edit" exact component={StreamEdit}/>
                <Route path="/streams/delete" exact component={StreamDelete}/>
                <Route path="/streams/list" exact component={StreamList}/>
                <Route path="/streams/show" exact component={StreamShow}/>
                </BrowserRouter>
            </div>
        );
    }
}