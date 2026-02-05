import React from 'react'

export default function User({user}) {
  return (
    <div>
       <div className="col-md-4">
          <div className="card">
            <img src={user.imageUrl} alt={user.name} className="card-img-top" />
           
          </div>
          <div>{user.name}</div>
        </div>
    </div>
  )
}
