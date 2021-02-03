import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({friends: users}))
    }

    onSearchChange = (event) => {
        this.setState(state => ({
            searchField: event.target.value
        }));
    }

    render() {
        const {friends, searchField} = this.state;
        const filteredFriends = friends.filter(friend => {
            return friend.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !friends.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList friends={filteredFriends} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}

export default App;