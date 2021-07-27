### Heroku Hosting

Heroku cli

herko logout
heroku login


heroku git:remote -a crwn-clothing-devapps

heroku buildpacks:remove heroku/nodejs
heroku buildpacks:set mars/create-react-app


// Build pack is used for static serving react files
heroku create crwn-clothin --buildpack mars/create-react-app

heroku create crwn-clothin --buildpack https://github.com/mars/create-react-app-buildpack.git

## Git
git branch -a

git branch -d heroku

git checkout master

### In Deployed App

We need to add domain to firebase otherwise it will be unauthorized
Authentication/Authorized domains

### process.env.NODE_ENV is set by create-react-app

logger need to displayed only in development