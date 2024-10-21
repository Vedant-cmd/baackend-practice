require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
    "login": "Vedant-cmd",
    "id": 114465149,
    "node_id": "U_kgDOBtKZfQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/114465149?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vedant-cmd",
    "html_url": "https://github.com/Vedant-cmd",
    "followers_url": "https://api.github.com/users/Vedant-cmd/followers",
    "following_url": "https://api.github.com/users/Vedant-cmd/following{/other_user}",
    "gists_url": "https://api.github.com/users/Vedant-cmd/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Vedant-cmd/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Vedant-cmd/subscriptions",
    "organizations_url": "https://api.github.com/users/Vedant-cmd/orgs",
    "repos_url": "https://api.github.com/users/Vedant-cmd/repos",
    "events_url": "https://api.github.com/users/Vedant-cmd/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Vedant-cmd/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 1,
    "following": 3,
    "created_at": "2022-09-27T05:41:08Z",
    "updated_at": "2024-10-21T14:32:24Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('@vedantb2004')
})
app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h2>')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>chai aur code</h2>')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})