import { useState, useEffect } from "react"

import '../../style/repos.scss'
import { RepoItemn } from "../RepoItemn/RepoItemn";

interface Repos {
    name: string;
    description: string;
    html_url: string;

}

export function RepoList() {

    const [repos, setRepos] = useState<Repos[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error(error));
    }, [])

    return (
        <section className="repos-list">
            <h1>Repos List</h1>

            <ul>
                {
                    repos.map( repo => {
                        return <RepoItemn 
                                    key={repo.name}
                                    repos={repo}
                                />
                    })
                }
            </ul>
        </section>
    )
}