import React, { useState } from 'react'
import './ChatBotApp.css'
const ChatBotApp = ({onGoBack, chats, setChats}) => {
  const[inputVal, setinputVal] = useState('')
  const[messages, setMessages] = useState(chats[0]?.messages || [] )
  
  const handleInputChange = (e) => {
    setinputVal(e.target.value)
  }

  const sendMessage = () => {
    if(inputVal.trim() === '') return


    const newMessage = {
        type: "prompt",
        text: inputVal,
        timestamp: new Date().toLocaleDateString(),

    }

    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    setinputVal('')


    const updatedChats = chats.map((chat, index) => {
        if (index === 0) {
            return { ...chat, messages: updatedMessages };
        }
        return chat;
    });
    setChats(updatedChats)

  }

  return (
    <div className ='chat-app'>
        <div className = 'chat-list'>
            <div className = 'chat-list-header'>
                <h2>Chat List</h2>
                <i className="bx bx-edit-alt new-chat"></i>
            </div>
            {chats.map((chat, index) => (
    <div key={index} className={`chat-list-item ${index === 0 ? 'active' : ''}`}>
        <h4>{chat.id}</h4>
        <i className="bx bx-x circle"></i>
    </div>
))}
        </div>
        <div className = 'chat-window'>
            <div className='chat-title'><h3>Chat with Enigma</h3>
            <i className="bx bx-arrow-back arrow" onClick={onGoBack}></i> 
        </div>
        <div className = 'Chat'>
            {messages.map((message,index) =>(
                <div key = {index} className={message.type === "prompt" ? 'prompt' : 'response'}> {message.text}
                <span>{message.timestamp}</span>
            </div>
            ))}
            <div className = "typing">Typing...</div>
            </div>
            <form className = "msg-form" onSubmit={(e) =>e.preventDefault()}>
                <i className="fa-solid fa-face-smile emoji"></i>
                <input type="text" className='msg-input' placeholder='Ask me a question...' value={inputVal} onChange ={handleInputChange}/>
                <i className="fa-solid fa-paper-plane" onClick={sendMessage}></i>
            </form>
        </div>
    </div>
  )
}

export default ChatBotApp