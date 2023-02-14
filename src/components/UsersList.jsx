import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  return (
    <div>
      <section>
      {users.map((user) => (
        <UserCard 
          key={user.id} 
          user={user} 
          deleteUser={deleteUser} 
          setUpdatingUser={setUpdatingUser}
          handleClickShowModal={handleClickShowModal}
          />
      ))}
    </section>
    </div>
  )
}

export default UsersList
