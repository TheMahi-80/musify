# musify
A backend music streaming platform

I made this to learn how a real backend works, using Node.js and Express. So far it's only the backend. I'm keeping this README as a note of what I built and what I learned along the way.

## The APIs

| Method | Endpoint | Who can use it | What it does |
| --- | --- | --- | --- |
| POST | `/api/auth/register` | Anyone | Register an account |
| POST | `/api/auth/login` | Anyone | Log in |
| POST | `/api/auth/logout` | Anyone | Log out |
| POST | `/api/music/upload` | Artist | Upload a music file |
| POST | `/api/music/album` | Artist | Create an album |
| GET | `/api/music` | User | Get all music |
| GET | `/api/music/albums` | User | Get all albums |
| GET | `/api/music/albums/:albumId` | User | Get one album |

## Tokens

This is the part I'd point to first, because the whole login system depends on it.

When someone registers or logs in, I create a JWT with their id and role and save it in a cookie. On every protected route, my middleware reads that cookie, verifies the token and checks the role. No token means a 401. Wrong role means a 403. So an artist can upload music and create albums, and a normal user can't. Logging out just clears the cookie.

## What else I did

I kept the code in a production-ready folder structure: `routes`, `controllers`, `models`, `middlewares`, `services` and `db` are all separate, so it's easy to find things.

This project is also where I learned middlewares. I wrote `authUser` and `authArtist` myself, and used `multer` for file uploads and `cookie-parser` to read the cookies.

For the database I used MongoDB with Mongoose. It stores the users, music and albums, and it's connected and working.

Music files go to ImageKit, which is the cloud service I used for storage.

Passwords are hashed with bcrypt before they're saved, so no plain text passwords sit in the database.

I tested the APIs with Postman.
