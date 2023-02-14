import React from 'react'
import "./styles/Usercard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <div className='box'>
        <article>
            <h3 className='card_title'>{user.first_name} {user.last_name}</h3>
            <hr />
            <ul>
              <li className='card_list'><span><b>Email:</b></span> {user.email}</li>
              <li className='card_list'><span><b>Birthday:</b></span> <i className='bx bx-gift'></i>{user.birthday}</li>
            </ul>
            <hr />
            <footer>
              <button className='btn' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
              <button className='btn' onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
            </footer>
          </article>
    </div>
  )
}

export default UserCard
