import { useState, useRef } from "react"


const UserSuccess = ({data}) => {
    const detailRef = useRef()

    const [show, setShow] = useState(false)
    return(
        <div className="success-container">
            <div className="success-title">
                Registration complete
            </div>
            <div className="user">Welcome {data.firstname} 🙌🏾</div>
            <div className="success-details">
                <button ref={detailRef} className="button" onClick={()=>{
                    detailRef.current.style.display = 'none';
                    setShow(true)
                    }}>
                    View Details
                </button>
                {
                    show && (
                <div className="user-details-container">
                <div className="user-details">
                    <span className="key">email</span>  
                    <span className="data">{data.email}</span>
                </div>
                <div className="user-details">
                    <span className="key">name</span>  
                    <span className="data">{data.firstname} {data.lastname}</span>
                </div>
                </div>
                    )
                }
            </div>
        </div>
    )
}

export default UserSuccess