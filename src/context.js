import axios from 'axios'
import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {

    state = {
        track_list: [
            {track: {tracl_name: 'abc'}},
            {track: {tracl_name: '123'}}
        ],
        heading: 'Top 10 Tracks'
    }

    componentDidMount() {
        axios.get(``)
        .then(res => console.log(res.dat))
        .catch(err => console.log(err))
    }
    

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer