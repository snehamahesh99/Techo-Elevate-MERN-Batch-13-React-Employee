import React from 'react'

export default function Employeelist() {
    return (
        <div className="card bg-light" id="tab" >
            <h1 className="mt-3">Employee List</h1>

        <div className="card bg-dark mt-3" style={{height:'250px',width:'100%'}} >
              <table className="table text-light " rules="all">
              <tr className=" text-primary" >
              <th>Employee ID</th>
              <th>Name </th>
              <th>Designation </th>
              <th>Salary </th>
              </tr>
              <tr>
              <td>1</td>
              <td>Sneha</td>
              <td>Developer</td>
              <td>40000</td>
              </tr>
              <tr>
              <td>2</td>
              <td>Bhavya</td>
              <td>Tester</td>
              <td>20000</td>
              </tr>
              <tr>
              <td>3</td>
              <td>Laira</td>
              <td>Developer</td>
              <td>25000</td>
              </tr>
              <tr>
              <td>4</td>
              <td>Latha</td>
              <td>Designer</td>
              <td>35000</td>
              </tr>

              </table>
        </div>
        </div>

    )
}