import React from 'react'

const UserProfile = ({ user }) => {
  return (
    <div className='flex flex-col items-center my-6 space-y-2 text-white'>
        <img src={user.avatar_url} alt={user.login} className='rounded-full w-32 h-32 ' />
        <h2 className="text-xl lg:text-2xl font-bold mt-4">{user.name} || {user.login}</h2>
        <p className='text-slate-400'>{user.bio}</p>
        <p className='text-gray-300'>{user.location}</p>
        <p className='text-gray-300'>{user.blog}</p>
        <p className='text-gray-300'><span className='font-bold'>Visit user: </span>{user.html_url}</p>
        <p className="text-gray-300"><span className='font-bold'>Followers:</span> {user.followers}</p>
    </div>
  )
}

export default UserProfile