interface RepoItemProps {
    repos: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepoItemn(props: RepoItemProps) {

    return (
       <li>
        <strong>{props.repos.name}</strong>
        <p>{props.repos.description}</p>
        <a href={props.repos.html_url}>Access repo</a> 
       </li>
    )
}