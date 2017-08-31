import React, { Component } from 'react';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      chatMessage: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const options = {
    //   url: CONTACT_ENDPOINT,
    //   data: JSON.stringify({
    //     emailAddress: this.state.emailAddress,
    //     firstName: this.state.firstName,
    //     lastName: this.state.lastName,
    //     contactUsNote: this.state.contactUsNote,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };
    // $.post(options)
    //   .then(data => {
    //     if (data.statusCode === 200) {
    //       this.setState({
    //         sentStatus: 'sent',
    //         emailAddress: '',
    //         firstName: '',
    //         lastName: '',
    //         contactUsNote: '',
    //       });
    //     } else {
    //       this.setState({
    //         sentStatus: 'error',
    //       });
    //     }
    //   })
    //   .catch(() => this.setState({ sentStatus: 'error' }));
  }

  render() {
    return (
      <div className="chatbox-container">
        <div className="chatbox-container-inner">
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Message the other player"
                name="Chatbox"
                value={this.state.chatMessage}
                className="input"
              />
              <input
                className="send-button"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBox;
