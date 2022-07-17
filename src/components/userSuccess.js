import { useState, useRef } from "react"


const UserSuccess = ({data, page, setPage}) => {
    const detailRef = useRef()

    const [show, setShow] = useState(false)
    return(
        <section className="success-container">
            <span className="success-title">Registration complete</span>
            <span className="user">Welcome {data.firstname} 🙌🏾</span>
            <section className="success-details">
                <button ref={detailRef} className="button" onClick={()=>{
                    detailRef.current.style.display = 'none';
                    setShow(true)
                    }}>
                    View Details
                </button>
                {
                    show && (
                <section className="user-details-container">
                <section className="user-details">
                    <span className="key">email</span>  
                    <span className="data">{data.email}</span>
                </section>
                <section className="user-details">
                    <span className="key">name</span>  
                    <span className="data">{data.firstname} {data.lastname}</span>
                </section>
                <section className="user-details">
                    <button className="button"
                    onClick={()=>setPage(page + 1)}
                    >User List</button>
                </section>
                </section>
                    )
                }
            </section>
        </section>
    )
}

export default UserSuccess