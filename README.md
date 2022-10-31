# Toolhub Record Managemment and Editing Web Application (ToolEdit)

## Introduction
[Toolhub](https://toolhub.wikimedia.org/) is a catalog of tools hosted and managed by the wikimedia organization. It's a project I carried out in the contribution phase for the [Outreachy December, 2022 Internship ](https://www.outreachy.org)

### Project Description
The project which I decided to name **ToolEdit** is a project given during [Outreachy December, 2022 Internship ](https://www.outreachy.org) contribution phase. I contributed to the wikimedia organization in the internship which owns the tools on [Toolhub](https://toolhub.wikimedia.org/). The major task was to design and implement a web application to update tools with missing fields in other to make tools more relevant to users and developers who need the tools. 
This web application provides the name and description of a tool, it then asks the user to find the requested missing field. 

There are three main pages in this web application; which are:
1. The Homepage: Where users can edit tools information
2. The Dashboard: Here, users can see the analytics and how information about tools are recorded.
3. The Leaderboard: Where users are ranked according to their scores.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667173150536/cg0_eVUtP.png)


**Note:** Most of the task here are front-end task with little or no interactivity.

## Setup

### Pre-requisites
* This project was built with react application. You need to have [node.js](https://www.nodejs.org) installed on your computer and have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) working also. Check [here](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac) for installation process. 
* Have basic knowledge of working with [React](https://reactjs.org/docs) and [TailwindCSS](https://tailwindcss.com/docs) for styling. 

### Local Development
[Fork](https://help.github.com/en/articles/fork-a-repo) the project repository and [clone](https://help.github.com/en/articles/cloning-a-repository) your forked repository to your machine to work locally.

Install dependencies on the `package.json` file by running:
```
npm install
``` 

After successful installation, run:
```
npm start
```
To view the app on the browser at `localhost:3000`

This project is a function component based react application.

### Tests
All tests are written on `/tests/App.test.js` file.

To run tests, type the command below:
```
npm test
```
## Deployment Instructions.
This software is deployed on Netlify, [here](https://toolhub-edit.netlify.app/). 

To deploy, push to code hosting platform like Github or Bitbucket and then host on any hosting platform of your choice e.g netlify, vercel, firebase e.t.c.

## Author (s)
Njoku Nneka Sandra

## Acknowledgement
I am grateful to God for this opportunity. To the Outreachy team, the wikimedia foundation and to my mentors for their help and review throughout the contribution phase.
