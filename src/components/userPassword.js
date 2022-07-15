import { FaFingerprint } from 'react-icons/fa'

const UserPassword = ({data, setData, message}) => {
    return(
        <div className="password-container">
            <div className="message">{message}</div>
            <div className="container">
                <FaFingerprint className='icons'/>
                <input type="password" name="" value={data.password} placeholder="password" className="input" onChange={(e)=>setData({...data, password: e.target.value})}/>
            </div>
            <div className="container">
                <FaFingerprint className='icons'/>
                <input type="password" name="" value={data.confirmpassword} placeholder="confirm your password" className="input" onChange={(e)=>setData({...data, confirmpassword: e.target.value})}/>
            </div>
        </div>
    )
}

export default UserPassword