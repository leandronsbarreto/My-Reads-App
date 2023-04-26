## Project's name

MyReads: A Book Tracking App

## Description

This project was made in the scope of Udacity's React Fundamentals course. With aim to provide students with the chance of developing an application by using React, I had to build a customer-oriented interactive library which consists of two pages - main and search page. The first one is divided into three bookshelves allowing users to move books of their choice at any time through three different manageable categories (bookshelves themselves) - Currently read, Want to read, and Read. This application was furthemore developed in a way that gives users the possibility to refresh the browser and visualize the same information as before refresh. 

The main page has also a button located on right corner at the bottom to add more books into the main page. By clicking on this button, users are led to the search page containing a search bar. With this search UI they can insert queries such as author, title, or ISBN to receive reading options from a backend server. Before selecting a book and returning to the main page, users should categorize their selection. In order to return, they just have to click on the arrow located on the top left corner.

![myreads_main_page_localhost_3000_](https://user-images.githubusercontent.com/97767502/202022376-3d490923-d48a-4889-b40d-eac49f0ada44.png)

![myreads_search_page_localhost_3000_](https://user-images.githubusercontent.com/97767502/202022440-228ef58d-0ab0-46de-b379-bfd545195ffb.png)


## Table of Contents

```bash
├── .gitattributes
├── CODEOWNERS 
├── LICENSE.txt
├── package.json 
├── package-lock.json 
├── public
│   ├── favicon.ico 
│   └── index.html
├── README.md
├── screenshots
|   ├── myreads_main_page_localhost_3000_.png
|   ├── myreads_search_page_localhost_3000_.png
└── src
    ├── App.css
    ├── App.js 
    ├── App.test.js
    ├── BooksAPI.js 
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── appcomponents
    │   ├── BookItem.js
    │   ├── BooksCatalogue.js
    |   ├── BookShelves.js
    │   └── Finder.js
    ├── index.css 
    └── index.js
└── yarn.lock
```

## Requirements

A modern updated browser, knowledge of HTML, CSS, and JavaScript, ability to scaffold a new React project, knowledge of props and ability to pass them into components, ability to manage components state and events.

## Installation

Please check Udacity's guidelines below.

## Credits

- HTML and CSS files by Udacity;

- React design and JavaScript by Leandro Barreto.


## Credits

- <a href="https://www.udacity.com/">Udacity</a></li>

- <a href="https://www.masterschool.com/">Masterschool</a>

## Bugs

I have not detected any bugs.

<hr> 

**Please find Udacity's guidelines below**

# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) to bootstrap the project.

## TLDR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You are Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
