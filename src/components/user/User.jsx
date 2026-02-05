import React from 'react'
import { Link } from 'react-router-dom'

export default function User({user}) {
  return (
    <div>
       <div className="col-md-4">
          <div className="card">
            <img src={user.imageUrl} alt={user.name} className="card-img-top" />
           
          </div>
          <div>{user.name}</div>
        <Link to={`/user/${user.id}`} className='btn btn-primary'>Details</Link>
        </div>
    </div>
  )
}
