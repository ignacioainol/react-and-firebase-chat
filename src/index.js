import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-primary">
                    <a className="navbar-brand text-white">Chat React</a>
                </nav>
            </div>
        )
    }
}
render(
    <App/>,
    document.getElementById('app')
); 