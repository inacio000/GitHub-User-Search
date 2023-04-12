import React, { useState } from 'react';

import { UserCard } from "../components/Card";
import './style.css'

export function Home() {

    const [data, setData] = useState({});
    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState([]);

    const url = 'https://api.github.com/users/';

    const handleChangeState = e => {
        setUserName(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await fetch(url + userName);
        const data = await response.json();

        const repos = await fetch(data.repos_url);
        const repoData = await repos.json();

        if (data) {
            setData(data);
            setRepos(repoData);
        }
    }

    return (
        <main>
            <form action="">
                <label htmlFor="#">
                    <img src="../../../public/github.svg" alt="" />
                    <h2>Search For a GitHub User</h2>
                </label>

                <input 
                    type="text" 
                    value={userName} 
                    className="form-control"
                    placeholder="username"
                    onChange={handleChangeState}
                />
                <button
                    type="submit"
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </form>

            <section>
                <UserCard
                    data={data}
                    repos={repos}
                />
            </section>
        </main>
    )
}