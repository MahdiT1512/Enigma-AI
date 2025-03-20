import React, { useState } from 'react'
import ChatBotStarting from './Components/ChatBotStarting.jsx'
import ChatBotApp from './Components/ChatBotApp.jsx'

const App = () => {
  const[isChatting, setIsChatting] =useState(false)
  const[chats,setChats] =useState([])

  const handleStartChat = () =>{
    setIsChatting(true)

    if(chats.length ==0){
      const newChat = {
        id: `Chat ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString()}`,
        msgs: [],
      }
      setChats([newChat]);

    }
  }
  const handleBack=()=>{
    setIsChatting(false)
  }


  return (
    <div className ='Container'>
      {isChatting ? <ChatBotApp onGoBack={handleBack} chats={chats} setChats={setChats}/>
      : <ChatBotStarting onStartChat={handleStartChat}/>}
      
      
      
    </div>
  )
}

export default App