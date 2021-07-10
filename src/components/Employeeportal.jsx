import React from 'react'
import "../App.css"
export default function Employeeportal() {
    return (
        <div className="div-portal">
            <div className="port-main">
           
                <div>
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327__340.jpg" alt="img" />
                </div>
                 
                <p>
                <h3>Learning to Code</h3>
                <h5>OPENING A DOOR TO THE FUTURE</h5>
                    You should import individual components like: react-bootstrap/Button rather than the entire library. Doing so pulls in only the
                     specific components that you use, which can significantly reduce the amount of code you end up sending to the client.
                </p>
            </div>
            <div className="port-main">
                
                <p>
                <h3>Learning to Code</h3>
                <h5>OPENING A DOOR TO THE FUTURE</h5>
                You should import individual components like: react-bootstrap/Button rather than the entire library. Doing so pulls in only the specific components
                 that you use, which can significantly reduce the amount of code you end up sending to the client.
                </p>
                <div>
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327__340.jpg" alt="img" />
                </div>
            </div>
        </div>
    )
}