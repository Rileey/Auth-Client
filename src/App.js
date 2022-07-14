import './App.css';
import React, { useState } from 'react';
import UserDetails from './components/userDetails';
import UserPassword from './components/userPassword';
import UserSuccess from './components/userSuccess';

function App() {

  const [data, setData] = useState({})
  const [page, setPage] = useState(0)
  const title = ['User Details', 'User Password', 'Success']
  const Components = () => {
    if (page === 0) {
      return <UserDetails/>
    } else if (page === 1) {
      return <UserPassword/>
    } else {
      return <UserSuccess/>
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="left">

        </div>
        <div className="right">
          <div className="form-container">
            <div className="header">
              Sign-In
            </div>
            <div className="title">
              {title[page]}
            </div>
            <div className="inputs">
              {Components()}
            </div>
            <div className="buttons">
              <button className='previous'
              onClick={()=>setPage(page - 1)}
              disabled={page === 0}
              >Previous</button>
              <button className='next' 
              onClick={()=>{
                if (page === title.length - 1){
                  console.log('data inputed')
                } else {
                  setPage(page + 1)
                }
                setPage(page + 1)
              }}
              >{page === title.length - 1 ? 'Submit' : 'Next'}</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
