import { FaFingerprint } from 'react-icons/fa'

const UserPassword = ({data, setData}) => {
    return(
        <div className="password-container">
            <div className="container">
                <FaFingerprint style={{width: "15px", position: "absolute", top: "15px", left: "10px"}}/>
                <input type="password" name="" value={data.password} placeholder="password" className="input" onChange={(e)=>setData({...data, password: e.target.value})}/>
            </div>
            <div className="container">
                <FaFingerprint style={{width: "15px", position: "absolute", top: "15px", left: "10px"}}/>
                <input type="password" name="" value={data.confirmpassword} placeholder="confirm your password" className="input" onChange={(e)=>setData({...data, confirmpassword: e.target.value})}/>
            </div>
        </div>
    )
}

export default UserPassword