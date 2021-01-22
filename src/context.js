import axios from 'axios'
import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {

    state = {
        track_list: [],
        heading: 'Top 10 Tracks'
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=a7c153ed392fc137cb5af3277d01dc9a`)
        .then(res => {
            //console.log(res.data)
            this.setState({...this.state, track_list: res.data.message.body.track_list})
        })
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