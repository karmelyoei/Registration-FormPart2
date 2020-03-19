# Registration-form

This is a simple registration/login form part two for understanding these subjects (database, validation, Errors, Testing, hash)

## so :

in part one you will find how we created the registration form with validation, here this is the continuation of part one which includes the login form

You will find a login form includes :

- email
- password

I have checked if the user is already in the database after that checked the password if it's correct. **BUT BEFORE THAT** I have checked the validation.

## Validation:

in the validation part (_Check it out' >>>>src/helper/validation.js'_):

- email must be valid and required
- password must be longer than 6 characters and required
  must include 1 uppercase and 1 lowercase character

## Error Handling:

in the project you will see how it handled as these following (Check it out >>> 'src/controllers/errors.js'):

- If validation fails, return a message to the user, with status code 400
- if the user tries to use an endpoint that doesn’t exist return a 404 page.
- If something goes wrong in the server to return a 500 page.

## Testing:

I couldn't do the testing for the loging form which is supposed to be like this:
[] user logs in successfully
[] user uses invalid input or missing cookie (error 400)
[] user receives error 404

# Using myApp

1. clone this Repo
1. npm init - y
1. npm i
1. Create your local database through these commands at the terminal

```css
CREATE DATABASE (name of database);
CREATE USER (name of the user) WITH SUPERUSER PASSWORD (put password);
GRANT ALL PRIVILEGES ON DATABASE <database name here> TO <desired username entered previously>;
```

5. Create .env file and add the DATABASE_URL
6. npm start
7. npm run test

# ThankYou @karmelyoei
