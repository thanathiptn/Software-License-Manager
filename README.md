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

## Running locally

1. Clone the repository
2. Create a `.env` file in the `backend` folder with `MONGO_URI`, `JWT_SECRET` and `PORT`
3. Run `npm run install-all`
4. Run `npm start`
5. Open http://localhost:3000

## Deployment

Deployed on AWS EC2: [add URL after deployment]

---

**Prerequisite:** Please install the following software and create account in following web tools** **

* **Nodejs [**[https://nodejs.org/en](https://nodejs.org/en)]** **
* **Git [**[https://git-scm.com/](https://git-scm.com/)]** **
* **VS code editor** [[https://code.visualstudio.com/](https://code.visualstudio.com/)]** **
* **MongoDB Account** [[https://account.mongodb.com/account/login](https://account.mongodb.com/account/login)]** - In tutorial, we have also showed how can you create account and database: follow step number 2.**
* **GitHub Account** [[https://github.com/signup?source=login](https://github.com/signup?source=login)]** **

---
