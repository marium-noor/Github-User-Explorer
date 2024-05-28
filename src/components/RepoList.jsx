import React from 'react'

function RepoList({repos, user}) {
  return (
    <div className='my-4 w-full text-white'>
      <h3 className='text-xl font-bold'>{user.name}'s Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="border-b py-2">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-300">
            {repo.name}
          </a>
          <p className="text-gray-500">{repo.description}</p>
          <p className="text-gray-300">Stars: {repo.stargazers_count} | Forks: {repo.forks_count}</p>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoList