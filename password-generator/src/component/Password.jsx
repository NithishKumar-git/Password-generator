import React from 'react'
import { useState } from 'react'
import './Password.css'

const Password = () => {
const [length, setLength] = useState(8)
const [includeUpper, setIncludeUpper] = useState(true)
const [includeLower, setIncludeLower] = useState(true)
const [includeNumber, setIncludeNumber] = useState(true)
const [includeSymbol, setIncludeSymbol] = useState(true)
const [password, setPassword] = useState("")
const [copyClipBoard, setCopyClipBoard] = useState("")
const generatePassword = () =>{
    let charset = ""
    if(includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if(includeNumber) charset += "0123456789";
    if(includeSymbol) charset += "!@#$%^&*()_+{}:>?</;'[]-=";

    let generatePasswords = ""
    for (let i = 0; i<length ; i++){
        let generatedIndex = Math.floor(Math.random() * charset.length)
        generatePasswords  +=charset[generatedIndex]
    }

    setPassword(generatePasswords)
    
    
}
const copyToClipBoard = () => {

    if (password.trim() === "") {
        return; 
    }

    navigator.clipboard.writeText(password)
    setCopyClipBoard("! Copied to Clipboard")
}

const clearPassword = () =>{
        setPassword("")
        setCopyClipBoard("")
}


   return (

    <div className='password-generator'>
        
        <div className="generator-container">
            <h2>Strong Password Generator </h2>
            <div className='name-group'>
            <input type="number" name='num'  placeholder='Password Length' value={length} onChange={(e) => setLength(e.target.value)}/></div>
            <div className="checkbox-group">
            <input type="checkbox" id='upper' checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)}/> <label htmlFor="upper" > Include UpperCase </label></div>

            <div className="checkbox-group">
             <input type="checkbox" id='lower'  checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)}/> <label htmlFor="lower"> Include LowerCase </label></div>

              <div className="checkbox-group">
              <input type="checkbox" id='number' checked={includeNumber} onChange={(e) => setIncludeNumber(e.target.checked)}/> <label htmlFor="number"> Include Numbers </label></div>

               <div className="checkbox-group">
              <input type="checkbox" id='symbol' checked={includeSymbol} onChange={(e) => setIncludeSymbol(e.target.checked)}/> <label htmlFor="symbol"> Include Symbols </label> </div>


              <button className='generator-btn' onClick={generatePassword}> Generate Password </button>
              <div className='result'>
              <input type="text" readOnly value={password} /> <button className='copy' onClick={copyToClipBoard}>Copy</button><button className='clear' onClick={clearPassword}>Clear</button>  <p>{copyClipBoard} </p></div> 
        </div>
    </div>
  )
}

export default Password
