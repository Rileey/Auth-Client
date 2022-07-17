import './App.css';
import axios from 'axios'
import image  from './images/abbey.png'
import solution from './images/solution.svg'
import React, { useEffect, useRef, useState } from 'react';
import UserDetails from './components/userDetails';
import UserPassword from './components/userPassword';
import UserSuccess from './components/userSuccess';
import UserList from './components/userList';
import { TailSpin } from 'react-loader-spinner';

function App() {
  const [data, setData] = useState({})
  const [message, setMessage] = useState('')
  const [page, setPage] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const buttonRef = useRef()

  const title = ['Sign In to Abbey Mortgage Bank', 'Input the correct details']

  const handleSubmit = async () => {
    setLoading(true)
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
        setLoading(false)
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
    } else if (page === 2){
      return <UserSuccess data={data} page={page} setPage={setPage}/>
    } else {
      return <UserList />
    }
  }

  const NextLoading = () => {
    if (page < title.length - 1) {
      return 'Next'
    } else if (page === title.length - 1) {
      return 'Submit'
    } 
    if ( page === title.length && loading ){
      return <TailSpin
              height="20"
              width="20"
              color='grey'
              ariaLabel='loading'
            />
    } else {
      return 'Submit'
    }
  } 

  return (
    <section className="App">
      <section className="App-header">
        <section className="left">
          <section className="blue-container">
            <section className="blue-container-top">
            <section className="image-container">
              <img src={image} alt="logo" className="image" />
            </section>
            <span className="abbey">Abbey Mortgage Bank</span>
            </section>
            <section className="blue-container-mid">
              <img src={solution} alt="" className="svg" />
            </section>
            <section className="blue-container-bottom">
              <span className="write-up">
              Plan, Save & Invest in Your Tomorrow
              </span>
            </section>
          </section>
        </section>
        <section className="right">
          <section className="form-container">
          <section className="form">
            <span className="title">
              {title[page]}
            </span>
            
            <section className="inputs">
              {Components()}
            </section>
            <section ref={buttonRef} className="buttons">
              <button className='button'
              onClick={()=>{
                setPage(page - 1)
                if (page !== title.length - 1){
                }
              }}
              disabled={page === 0}>Previous</button>
              
            <button className='button' onClick={handleSubmit}>{NextLoading()}</button>
            </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default App;
