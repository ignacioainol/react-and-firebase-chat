import React, {Component} from 'react';
import {render} from 'react-dom';

//Components
import ChatRoom from './components/ChatRoom';

class App extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-primary">
                    <a className="navbar-brand text-white">Chat React</a>
                </nav>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            Chat
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
render(
    <App/>,
    document.getElementById('app')
); 