# 🎬 Movie Submission App

A simple web application built with **Node.js**, **Express.js**, and **EJS** that allows users to submit their favorite movies and rate them!

## 🌟 Features

- Submit your favorite movie with a rating from 1 to 10.
- View success or failure pages based on submission validation.
- Stylish UI with pure CSS and gradient background.
- Validations to ensure:
  - Movie name is required.
  - Rating must be between 1 and 10.
- Clean and minimal UI for smooth user experience.

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript Templates)**
- **Pure CSS** for styling
- **Body-parser** and **Morgan** middleware

## 📂 Project Structure
```
  /public
    /images
      popcorn.png
  /views
    index.ejs
    success.ejs
    failed.ejs
    movies.ejs
  index.js
  submit-form.js
  README.md
```
## 🚀 Getting Started

### 1. Clone the Repository
    git clone git@github.com:SaeqaSultani/Movie-Submission.git
    cd Movie-Submission

### 2.  Install Dependencies 
    npm install

### 3. Run the App
    node index.js
