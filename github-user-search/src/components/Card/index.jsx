import React from "react";

import './style.css'

export function UserCard({ data, repos }) {

    return (
        <div className="card">
            <div>
                <img 
                    src={data.avatar_url} 
                    alt="avatar picture" 
                    id="profile-pic"
                />
                <h2>{data.name}</h2>
                <p>{data.bio}</p>
            </div>

            <div className="userInfo">
                <ul className="userInf">
                    <li>{data.followers} <span>Followers</span></li>

                    <li>{data.following} <span>Following</span></li>

                    <li>{data.public_repos} <span>Repos</span></li>
                </ul>

                <div id="user-repos-info">
                    <h3>Repositories</h3>
                    <div id="user-repos">
                        {
                            repos.map(repo => {
                                return (
                                    <div key={repo.name}>
                                        <a className="repo" target="_blank" href={repo.html_url}>
                                            <img src="../../../public/folder.svg" alt="folder image" />
                                            {repo.name}
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="profile">
                    <button>
                        <a href={data.html_url} target="_blank">Go to User Profile</a>
                    </button>
                </div>
            </div>
        </div>
    )
}