# DG-interview

Dependencies and Installation 
---
## Install node > 17.0.x

1. Make sure you are in the root directory

2. Install node_modules from package.json

```
> npm i
```

3. Store test user email, API token & base URL in environment variables. Store in a .env file (example below)

```
API_TOKEN="aS5zb3d1bm1pOTdAZ21haWwuY29tOjY3MjA2NmM5ZDEwYThlNGIxNDdmNjdjODQwMTE0NTIwNjdkZDg4YTQ1MGZkMTc4ZjgyY2IwMmZmZmRiZjI5NGM="
TEST_EMAIL="i.sowunmi97@gmail.com"
BASE_URL="https://helpibs.gorgias.com"
```

4. To execute 
```
node main.js
```

**Overview**
1. HTTP Axios is used to send post requests to gorgias
2. Email messages/internal notes are attached to a ticket


## Potential Areas for Improvement
* Get userID from only the email
* Take separate input for email for subject and body using https://www.npmjs.com/package/readline-sync


 