import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Logout() {
    // return (
        // <div>
        //     {/* <h2> logout</h2> */}
           
        // </div>
        let history=useHistory()
        console.log(history)
        return (
            <div>
    
                <button onClick={()=>{
                   
                    history.push("/home")
                }}>LOG OUT</button>
            </div>
        // )
    )
}