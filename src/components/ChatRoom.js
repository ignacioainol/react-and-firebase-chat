import React, {Component} from 'react';

class ChatRoom extends Component{
    constructor(){
        super();
        this.updateMessage = this.updateMessage.bind(this);
        this.submitMessage = this.submitMessage .bind(this);
        this.state = {
            message: '',
            messages: [
                {id: 0, text: 'hola'},
                {id: 1, text: 'que tal'},
                {id: 2, text: 'como estas'}
            ]
        }
    }

    updateMessage(e){
        this.setState({
            message: e.target.value
        })
        console.log(e.target.value);
    }

    submitMessage(){
        const message = {
            id: this.state.messages.length,
            text: this.state.message
        };

        let listMessages = this.state.messages;
        listMessages.push(message);
        this.setState({
            messages: listMessages
        })

        this.setState({message:''});
    }

    render(){
        const currentMessages = this.state.messages.map((message,i) => {
            return(
                <li key={message.id} className="list-group-item list-group-item-action">{message.text}</li>
            )
        })
        return(
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {currentMessages}
                    </ul>
                </div>

                <div className="card-footer">
                    <input
                        value={this.state.message}
                        onChange={this.updateMessage}
                        type="text"
                        placeholder="Write a Message"
                        className="form-control"/>
                    <button 
                        onClick={this.submitMessage}
                        className="btn btn-primary btn-block">
                        Send Message
                    </button>
                </div>
            </div>
        )
    }
}

export default ChatRoom;