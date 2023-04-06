const url = "https://api.github.com/users/"
const section = document.querySelector("section")
const searchBox = document.querySelector("#searchUser").value
const form = document.querySelector("#myForm")

const getUser = async(username) => {
    const response = await fetch(url + username)
    const data = await response.json()
    
    const card = `
        <div class="card">
            <div>
                <img id="profile-pic" src="${data.avatar_url}" alt="user profile picture" class="avatar">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
            </div>
            <div class="userInfo">
                <ul class="userInf">
                    <li>${data.followers} <span>Followers</span></li>
                    <li>${data.following} <span>Following</span></li>
                    <li>${data.public_repos} <span>Repos</span></li>
                </ul>

                <div>
                    <h3>Repositories</h3>
                    <div id="userRepos">
                    
                    </div>
                </div>
                <div class="profile">
                    <button>
                        <a href="${data.html_url}" target="_blank">Go to prefile</a>
                    </button>
                </div>
            </div>
        </div>
    `
    section.innerHTML = card;
    getRepos(username)
}

const getRepos = async(username) => {
    const repos = document.querySelector("#userRepos")
    const response = await fetch(url + username + '/repos')
    const data = await response.json()
    
    data.forEach( item => {
        const element = document.createElement("a")
        const icon = document.createElement("img")

        element.classList.add("repo")
        element.href = item.html_url
        element.innerText = `${item.name}`
        element.target = "_blank"

        icon.src = "./assets/folder.svg"

        element.appendChild(icon)
        repos.appendChild(element)

        
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const inputValue = document.querySelector("#searchUser").value
    const originalName = inputValue.split(' ').join('')
    fetch(url + originalName)
        .then(getUser(inputValue))
        .catch(error => console.error(error))
})


// getUser("abouba03")