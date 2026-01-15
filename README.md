# To-do List
- Full-stack application built with JavaScript and NodeJS
- Allows users to create, update and delete tasks
- Database persistence and user authentication
- This project is an evolution of https://github.com/ykiak/to-do-list (frontend-only)

## Features
- Create and authenticate users using JWT
- Create, edit and delete tasks
- Mark tasks as done or undone
- Use database to persist data (users and tasks)
- Filter tasks by status (all, completed, pending)
- Display the number of active tasks and their states (completed or pending)

## Technical Decisions
- Modularized architecture to simulate professional development
- User passwords stored as encrypted strings
- Use Prisma (v6) as ORM to simplify database access
- Main features (create/auth users and CRUD task system) handled by the API
- Secondary features (counter and filter) derived from sync client state

## Stack
- HTML/CSS
- JavaScript
- Node.js
- Express
- CORS
- JWT
- Bcryptjs
- SQLite
- Prisma

## Dev Dependencies
- Nodemon
- Sucrase

## Status
- This project is under development

## Dev
- Kaíky Rodrigues
- GitHub: https://github.com/ykiak
- LinkedIn: https://www.linkedin.com/in/ka%C3%ADky-rodrigues-de-oliveira-08547529a/