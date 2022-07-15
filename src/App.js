import './App.css';
import axios from 'axios'
import image  from './images/abbey.png'
import solution from './images/solution.svg'
import React, { useEffect, useRef, useState } from 'react';
import UserDetails from './components/userDetails';
import UserPassword from './components/userPassword';
import UserSuccess from './components/userSuccess';


function App() {
  const [data, setData] = useState({})
  const [message, setMessage] = useState('')
  const [page, setPage] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const buttonRef = useRef()

  const title = ['Sign In to Abbey Mortgage Bank', 'Input the correct details']

  const handleSubmit = async () => {
    if (page < title.length - 1){
      setPage(page + 1)
    }
    if (submitted && !data.email){
      try {
        setMessage('Input your email')
      } catch (err) {
        setMessage(err.response?.data?.message)
      }
    } else if (submitted && !data.firstname){
      try {
        setMessage('Input your name')
      } catch (err) {
        setMessage(err.response?.data?.message)
      }
    } else if (submitted && !data.lastname){
      try {
        setMessage('Input your lastname')
      } catch (err) {
        setMessage(err.response?.data?.message)
      }
    } else if (submitted && !data.password){
      try {
        setMessage('Input your password')
      } catch (err) {
        setMessage(err.response?.data?.message)
      }
    } else if (submitted && !data.confirmpassword){
        setMessage('Confirm your password')
    } else if (data.confirmpassword !== data.password){
        setMessage('Passwords do not match')
    }else {
      try {
        setSubmitted(true)
        await axios.post(`/register`, {email: data.email, firstname: data.firstname, lastname: data.lastname, password: data.password})
        buttonRef.current.style.display = 'none';
        setPage(page + 1)
      } catch (err) {
        setMessage(err.response?.data?.message)
      }
    }
  }

  const Components = () => {
    if (page === 0) {
      return <UserDetails data={data} setData={setData} message={message}/>
    } else if (page === 1) {
      return <UserPassword data={data} setData={setData} message={message}/>
    } else {
      return <UserSuccess data={data}/>
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <div className="blue-container">
            <div className="blue-container-top">
            <div className="image-container">
              <img src={image} alt="logo" className="image" />
            </div>
            <span className="abbey">Abbey Mortgage Bank</span>
            </div>
            <div className="blue-container-mid">
              <img src={solution} alt="" className="svg" />
            </div>
            <div className="blue-container-bottom">
              <span className="write-up">
              Plan, Save & Invest in Your Tomorrow
              </span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="form-container">
          <div className="form">
            <div className="title">
              {title[page]}
            </div>
            
            <div className="inputs">
              {Components()}
            </div>
            <div ref={buttonRef} className="buttons">
              <button className='button'
              onClick={()=>{
                setPage(page - 1)
                if (page !== title.length - 1){
                  // setShow(true)
                }
              }}
              disabled={page === 0}
              >Previous</button>
              
                  <button className='button' 
                  style={{}}
                  onClick={handleSubmit}
                  >{page === title.length - 1 ? 'Submit' : 'Next'}</button>
            </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
