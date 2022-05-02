import React from 'react'

export default function UserItem(props) {

  return (
    <li key={props.user.id} className="user-item my-20 mx-10 p-10 flex col-4">
      <img className="mr-10 ml-5" src={props.user.avatar} alt="" />
      <div>
        <p>ID: {props.user.id}</p>
        <p>
          Fullname: {props.user.first_name} {props.user.last_name}
        </p>
        <p>Email: {props.user.email}</p>
      </div>
    </li>
  )
}

