import { useEffect, useState } from "react"
import axios from 'axios'


const UserList = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    useEffect(()=> {
        const getUsers = async () => {
            const { data } = await axios.get(`/users`)
            setData(data)
        }
        getUsers()
    }, [])

    if (data.length === 0 || data === []){
        return null
    } else {
        console.log(data)
    }

    return (
        <section className="userlist-container">
            <section className="search">
                <input className="search-bar" type="search" name="" id="" placeholder="Enter email or name" onChange={(e)=>setSearch(e.target.value)}/>
            </section>

            <section className="user-container">
            <section className="user-list">
                <span className="user-list-item">Firstname</span>
                <span className="user-list-item">Lastname</span>
                <span className="user-list-item">Email</span>
            </section>
            {data.filter(result=>{
                if (search === ''){
                    //if search input is empty
                    return result
                    //return everything
                } else if (result.email.toLowerCase().includes(search.toLowerCase()) || result.firstname.toLowerCase().includes(search.toLowerCase()) || result.lastname.toLowerCase().includes(search.toLowerCase())){
                    //if the lastname of the data includes the values in
                    return result
                }
            })
            .map(result=>(
            <section className="user-list" key={result.user_id}>
                <span className="user-list-item">{result.firstname}</span>
                <span className="user-list-item">{result.lastname}</span>
                <span className="user-list-item">{result.email}</span>
            </section>
            ))}
            
            </section>
        </section>
    )
}

export default UserList