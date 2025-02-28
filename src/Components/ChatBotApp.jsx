import React from 'react'
import './ChatBotApp.css'
const ChatBotApp = () => {
  return (
    <div className ='chat-app'>
        <div className = 'chat-list'>
            <div className = 'chat-list-header'>
                <h2>Chat List</h2>
                <i className="bx bx-edit-alt new-chat"></i>
            </div>
        <div className="chat-list-item active">
            <h4>Chat 27/02/2025 11:49:32 PM</h4>
            <i className="bx bx-x circle"></i>
        </div>
        <div className="chat-list-item">
            <h4>Chat 27/02/2025 11:49:32 PM</h4>
            <i className="bx bx-x circle"></i>
        </div>
        <div className = 'chat-window'>
            <div className='chat-title'><h3>Chat with AI</h3>
        <i className="bx-bx-arrow-back arrow"></i> 
        </div>
        </div>
        <div className = 'Chat'>
            <div className='prompt'> Hi, how are you
                <span>11:49:52 PM</span>
            </div>
            <div className='response'> Hello! I am just a generative AI so I don't have emotions, but I'm here and happy to help
                <span>11:49:52 PM</span></div>
            <div className = "typing">Typing...</div>
            <form className = "msg-form">
                <i className="fa-solid fa-face smile emoji"></i>
                <input type="text" className='msg-input' placeholder='Ask me a question...'/>
                <i className="fa-solid fa-paper-plane"></i>
            </form>
        </div>
    </div>
    </div>
  )
}

export default ChatBotApp