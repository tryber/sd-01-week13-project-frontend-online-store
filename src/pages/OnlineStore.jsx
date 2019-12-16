import React, { Component } from 'react';
import './OnlineStore.css';
import SearchBar from '../components/online-store/SearchBar';

export default class OnlineStore extends Component {
    render() {
        return (
            <div className="online-store">
                <header>
                    <h1>Online Store</h1>
                    <SearchBar />
                </header>
            </div>
        );
    }
}