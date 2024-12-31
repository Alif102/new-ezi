import React from 'react'
import UserStat from './UserStat'
import UsersTable from './UsersTable'


const UserList = ({isDarkMode}) => {
  return (
   <div>

    <UserStat isDarkMode={isDarkMode}/>

    <UsersTable isDarkMode={isDarkMode}/>

   </div>
  )
}

export default UserList
