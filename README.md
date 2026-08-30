**Software Licence Manager Overview: The software licence manager application is designed to help an organisation keep track of its software licences in one place instead of using spreadsheets. It provides secure user authentication with role based access, so that only a Licence Admin can manage licence records and assign licences, while an Authorised User can view only the licences assigned to them. Every change to licence data is written to an audit log that records who performed the action, what was changed, and when it occurred, which helps the organisation monitor usage and respond to a vendor compliance audit.**

This app contains the following features:

* Signup
* Login
* Logout
* View licence records
* Role based access control
* Assign a licence to a user
* View my assigned licences
* Audit log

## Prerequisites

Please install the following software and create accounts with the following web tools:

* Node.js — https://nodejs.org/en
* Git — https://git-scm.com/
* VS Code editor — https://code.visualstudio.com/
* MongoDB Account — https://account.mongodb.com/account/login
* GitHub Account — https://github.com/signup?source=login

## Running locally

1. Clone the repository
2. Create a `.env` file in the `backend` folder with `MONGO_URI`, `JWT_SECRET` and `PORT`
3. Run `npm run install-all`
4. Run `npm start`
5. Open http://localhost:3000

## Deployment

Deployed on AWS EC2: http://3.27.248.38:3000

The app is kept running with pm2, so it stays online even when the SSH
session is closed, and restarts automatically if the instance reboots.

Note: the EC2 instance's public IP can change if the instance is stopped and
restarted. If the link above does not work, the current IP can be checked
in the EC2 console under the instance's Public IPv4 address.
