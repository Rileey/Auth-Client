import { useState } from 'react'
import { FaFingerprint } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'

const UserPassword = ({data, setData, message}) => {

    const [password, setPassword] = useState(false)
    const [confirm, setConfirm] = useState(false)
    return(
        <section className="password-container">
            <span className="message">{message}</span>
            {
                password ? (
                <section className="container">
                    <FaFingerprint className='icons'/>
                    <FaEyeSlash className='eye' onClick={()=>setPassword(false)}/>
                    <input type="text" name="" value={data.password} placeholder="password" className="input" onChange={(e)=>setData({...data, password: e.target.value})}/>
                </section>
                ) : (
                <section className="container">
                    <FaFingerprint className='icons'/>
                    <FaEye className='eye' onClick={()=>setPassword(true)}/>
                    <input type="password" name="" value={data.password} placeholder="password" className="input" onChange={(e)=>setData({...data, password: e.target.value})}/>
                </section>
                )
            }

            {
                confirm ? (
                <section className="container">
                    <FaFingerprint className='icons'/>
                    <FaEyeSlash className='eye' onClick={()=>setConfirm(false)}/>
                    <input type="text" name="" value={data.confirmpassword} placeholder="confirm your password" className="input" onChange={(e)=>setData({...data, confirmpassword: e.target.value})}/>
                </section>
                ) : (
                <section className="container">
                    <FaFingerprint className='icons'/>
                    <FaEye className='eye' onClick={()=>setConfirm(true)}/>
                    <input type="password" name="" value={data.confirmpassword} placeholder="confirm your password" className="input" onChange={(e)=>setData({...data, confirmpassword: e.target.value})}/>
                </section>
                )
            }
        </section>
    )
}

export default UserPassword