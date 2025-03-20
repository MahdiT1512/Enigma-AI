import React from 'react'
import './ChatBotStarting.css'
const ChatBotStarting = ({onStartChat}) => {
  return (
    <div className = 'starting-page'>
        <button className = "start-page-btn" onClick={onStartChat}> 
            EnigmaAI 
        </button>
    </div>
  )
}

export default ChatBotStarting