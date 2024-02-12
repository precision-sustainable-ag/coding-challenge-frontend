# Prompt  
**Please schedule a meeting for this week using the link from the original interview email and have your solution prepared 24 hours before the meeting so we can review your solution ahead of time. If you have any questions, concerns, or need anything at all please do not hesitate to contact awsmit14@ncsu.edu or mspinega@ncsu.edu** 

> This is not pass / fail. Your program will be assessed for how you go about solving the problem.  
> Not completing the challenge is not an automatic disqualification.  
> You should attempt to create reusable components.
> You should attempt to reduce the logic as much as possible.
> You should attempt to simplify styling.
> You should attempt to simplify logic.
> You should attempt to improve styling.

## Overview

You are given a legacy react app and tasked with refactoring it.    
  
This app was created using CRA, see below for instructions on how to build it locally. 
  
The app is comprised of 4 files: index.js, App.js, and About.js
  
index.js renders App.js.
  
App.js has one route, `/` which renders About.js
  
The About.js file is very long (700+ lines) and not structured logically, this is the main file that needs to be refactored.
    
## Git Usage
To ensure a clear history of your development process, please follow these guidelines for using Git:
1. **Fork this repository**: Create a fork of this repo and grant read access to @mikahpinegar and @Adamws33 so we can review your commit history
2. **Main Branch**: Maintain a `main` branch that will serve as the primary branch for the project. This branch should contain your project's most stable and final version of the code.
3. **Feature Branches**: For each new feature or significant change, create a new branch from `main`. Name these branches with a prefix of `feature/` followed by a short descriptor of the feature (e.g., `feature/add-loan-calculation`).
4. **Bug Fix Branches**: If you need to fix a bug, create a branch with a prefix of `bugfix/` followed by a short descriptor of the bug fix (e.g., `bugfix/fix-input-validation`).
5. **Commit Messages**: Write clear and descriptive commit messages. This helps in understanding the purpose of each change and makes the project history more readable.
6. **Pull Requests**: Once a feature or bug fix is complete, create a pull request (PR) to merge your branch back into `main`. Provide a brief description of the changes and any other relevant information for the review. Once a PR is ready, merge it into the main branch. There is no need for code review in this project.

Following these guidelines will help us understand your approach to solving the challenge and assess your skills in version control management.

## Instructions

- [Prompt](#prompt)
  - [Overview](#overview)
  - [Git Usage](#git-usage)
  - [Instructions](#instructions)
    - [Building Locally](#building-locally)
    - [Refactoring the About File](#refactoring-the-about-file)
    - [Creating Reuseable Subcomponents](#creating-reuseable-subcomponents)
    - [Removing Unneeded Logic](#removing-unneeded-logic)
    - [Removing Unneeded Styles](#removing-unneeded-styles)
    - [Improving Styles](#improving-styles)

### Building Locally
This project was created with [Create React App](https://github.com/facebook/create-react-app).

To build locally, you will need to run

`npm install`

`npm start`

This will install the necessary dependencies and run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Refactoring the About File
The About.js file is very long (700+ lines) and not structured logically. This file shouold be broken up into reuseable subcomponents. Tere is also unneded logic and styles that can be removed or simplified. 

### Creating Reuseable Subcomponents
Examine the file and identify components that can be created to reduce the complexity of the About file. Try to think beyond just this file and create components that could be used in the future.

### Removing Unneeded Logic
The logic in this file is not optimized. How could you structure the data in a way that could more easily be mapped over?

### Removing Unneeded Styles
There is some styling that is superfluous in the About.js file. See how you can simplify the styling of this file.

### Improving Styles
This is a very basic file that could be designed better. Examine the file and update the styling however you think would improve the user experience.
  


