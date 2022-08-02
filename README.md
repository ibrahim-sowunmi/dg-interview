# DG-interview

Dependencies and Installation 
---
## Gmail Integration setup

1. Create a temporary or use a throwaway Gmail account with 2-factor authentication enabled

2. Follow https://support.google.com/accounts/answer/185833?hl=en for a less secure app password

3. Add a test email password in .env file

4. Add an email or create another .env variable in Gmail helper 

```
TEST_EMAIL_PASS="random16characterstring"
```

## Install node > 17.0.x

1. Make sure you are in the root directory

2. Install node_modules from package.json

```
npm i
```

3. Store test user email, API token & base URL in environment variables. Store in a .env file (example below)(sharing information that should normally never be shared!!)

```
API_TOKEN="aS5zb3d1bm1pOTdAZ21haWwuY29tOjY3MjA2NmM5ZDEwYThlNGIxNDdmNjdjODQwMTE0NTIwNjdkZDg4YTQ1MGZkMTc4ZjgyY2IwMmZmZmRiZjI5NGM="
TEST_EMAIL="example@gmail.com"
BASE_URL="https://example.gorgias.com"

```

4. To execute 
```
node main.js
```

**Overview**
1. HTTP Axios is used to send requests to gorgias
2. Nodemailer is used with Gmail to send email
3. Two functions that correspond to the two tasks in the main.js


## Potential Areas for Improvement

* Unwrap all other responses for a ticket when sending an email (email chain) with better formatting (sender, date time, grouping)
* Pass in the Axios instance as a parameter one time instead of constant instantiation
* Ability to differentiate between agents from email support
* Cross-reference if customer/agent data exists within the Gorgias before sending Email or posting an internal ticket
* Use js middleware to make promise handling cleaner

