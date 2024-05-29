import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import RepoList from './components/RepoList';
import Loading from './components/Loading'
import Home from './components/Home';
import Features from './components/Features';

const App = () => {

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) throw new Error('User not found');
      const userData = await userResponse.json();
      setUser(userData);

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {!user && <Home />}
      <SearchBar onSearch={fetchUserData} />
      {!user && <Features />}
      {loading && <Loading />}
      {error && <p className="text-red-500">{error}</p>}
      {user && <UserProfile user={user} />}
      {repos.length > 0 && <RepoList repos={repos} user={user}/>}
    </div>
  );
};

export default App;
