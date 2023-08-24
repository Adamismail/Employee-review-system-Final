# Employee-review-system-Final

## Setup
1. Install Node.js and MongoDB.
2. Clone this repository.
3. Install dependencies: `npm install`.

## Run
- Start the server: `npm start`.

##Folder Structure

Employee-review-system-Final/
├── assets/
│   ├── css
│   ├── images
│   ├── js
|   ├── scss
├── config/
│   ├── flashmiddleware.js
│   ├── mongoose.js
│   ├── passport-local.js
├── controllers/
│   ├── admin_Controller.js
│   ├── home_Controller.js
│   ├── review_Controller.js
│   ├── user_Controller.js
├── models/
│   ├── review.js
│   ├── user.js
├── routes/
│   ├── admin.js
│   ├── index.js
│   ├── review.js
│   ├── users.js
├── views/
│   ├── _header.ejs
│   ├── addEmployee.ejs
│   ├── admin.ejs
│   ├── employee.ejs
│   ├── forget_password.ejs
│   ├── home.ejs
│   ├── layout.ejs
│   ├── sign_in.ejs
│   ├── sign_up.ejs
├── index.js
├── package.json
├── README.md

## Authentication
- Some routes are protected by JWT authentication.

## Tech Stack
- Node.js, Express.js, MongoDB.


*Admin view*
Add/remove/update/view employees
Add/update/view performance reviews
Assign employees to participate in another employee's performance review
*Employee view*
List of performance review requiring feedback
*Submit feedback*
Make 1 login for admin and employee
An employee can register, only admin can make an employee an admin
