import './App.css';
import image  from './images/abbey.png'
import solution from './images/solution.svg'
import React, { useState } from 'react';
import UserDetails from './components/userDetails';
import UserPassword from './components/userPassword';
import UserSuccess from './components/userSuccess';


function App() {

  const [show, setShow] = useState(true)
  const [data, setData] = useState({})
  const [page, setPage] = useState(0)
  const title = ['Sign In to Abbey Mortgage Bank', 'Input the correct details']
  const Components = () => {
    if (page === 0) {
      return <UserDetails data={data} setData={setData}/>
    } else if (page === 1) {
      return <UserPassword data={data} setData={setData}/>
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
            <div className="buttons">
            {
                show && (
              <>
              <button className='button'
              onClick={()=>{
                setPage(page - 1)
                if (page !== title.length - 1){
                  setShow(true)
                }
              }}
              disabled={page === 0}
              >Previous</button>
              
                  <button className='button' 
                  style={{}}
                  onClick={()=>{
                    if (page === title.length - 1){
                      setShow(false)
                      console.log('data inputed')
                    } else {
                      setPage(page + 1)
                    }
                    setPage(page + 1)
                  }}
                  >{page === title.length - 1 ? 'Submit' : 'Next'}</button>
                  </>
                )
              }
            </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
