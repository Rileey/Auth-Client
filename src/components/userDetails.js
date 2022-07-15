import { FaEnvelope } from 'react-icons/fa'
import { FaUserEdit } from 'react-icons/fa'

const UserDetails = ({data, setData}) => {
    return (
        <div className="details-container">
            <div className="container">
                <FaEnvelope className='icons'/>
                <input type="email" name="" value={data.email} placeholder="email" className="input" required onChange={(e)=>setData({...data, email: e.target.value})}/>
            </div>
            <div className="container">
                <FaUserEdit className='icons'/>
                <input type="text" name="" value={data.firstname} placeholder="firstname" className="input" onChange={(e)=>setData({...data, firstname: e.target.value})}/>
            </div>
            <div className="container">
                <FaUserEdit className='icons'/>
                <input type="text" name="" value={data.lastname} placeholder="lastname" className="input" onChange={(e)=>setData({...data, lastname: e.target.value})}/>
            </div>
        </div>
    )
}

export default UserDetails