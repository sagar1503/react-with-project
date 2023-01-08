import React,{useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState("")
    const [successCopy, setSucessCopy] = useState("")
    let handleChange=(e)=>{
        setText(e.target.value)
        setSucessCopy("")
    }

    let handleUpperClick=()=>{
        let NewText = text.toUpperCase()
        setText(NewText)
        setSucessCopy("")
    }
    let handleLowerClick=()=>{
        let NewText = text.toLowerCase()
        setText(NewText)
        setSucessCopy("")
    }
    let copyToClipboard=()=>{
        setSucessCopy("Copied text to clipboard")
        navigator.clipboard.writeText(text)
        
    }
    let handleClearCLick=()=>{
        let NewText = ""
        setText(NewText)
    }
    let handleExtractNumberClick=()=>{
        let NewText = text.match(/\d/g).toString().replaceAll(',' , "")
        setText(NewText)
    }

  return (
    < >
    <h1 className='textarea-heading'>Please type your text here</h1>
    <div className='textarea-grid-container'>
        <textarea className={props.mode==='light'?'textarea-grid-item-light':'textarea-grid-item-dark'}  rows={8} placeholder='Enter your text' value={text} onChange={handleChange}></textarea>
    </div>
    <div className='textarea-btn-flex-container'>
        <button className='textarea-btn-flex-item' onClick={handleUpperClick}>To Upper Case</button>
        <button className='textarea-btn-flex-item' onClick={handleLowerClick}>To Lower Case</button>
        <button className='textarea-btn-flex-item' onClick={handleClearCLick}>Clear Text</button>
        <button className='textarea-btn-flex-item' onClick ={handleExtractNumberClick}>Extract Numbers</button>
        <button className='textarea-btn-flex-item' onClick ={handleExtractNumberClick}>Extract Emails</button>
    </div>
    <div className='Preview-area'>
        <h2>Text Summary:</h2>
        <p><span className='Labels'>Word Counts: </span>{text.split(/\s+/).filter((elements)=>{return elements.length !==0}).length}</p>
        <p><span className='Labels'>Character Counts: </span>{text.length}</p>
        <p><span className='Labels'>Reading Time:  </span>{text.split(/\s+/).filter((elements)=>{return elements.length !==0}).length * 0.008} Minutes</p>

        <h2>Text Preview: <span className='ClipBoard' onClick={copyToClipboard} title="Copy to clipboard"><span className="Notify">{successCopy}</span></span></h2>
        
        <p>{text}</p>

    </div>
    
    </>
  )

}
