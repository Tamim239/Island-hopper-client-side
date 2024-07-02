<h1>Set up when you clone</h1>
1. Set Up

```js
//comment following commands
Npm i install
set up MongoDb env in your pc
```

2. create vercel.json file for configuring server

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js",
      "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }
  ]
}
```

website Name : Island Hopper
Live site URL : https://islandhopper.netlify.app/

Selected Category : Southeast Asia

Explore : 
 React-simple-typewriter
 React-tooltip
 Firebase
 PropTypes
 Hot Toast
 React-icons
 React-Helmet
 React-Spinner
 React Hook Form
 Swiper slider

* First you will see a navbar.  There is logo Home, All tourist spot, Add Tourists Spot, My list, and login register button.  

* Below is the banner that will do the slide show.  Below you will see a tourist spot in the form of a card.  Below you will find the review section which will show in slide form.  There is a contact us section and a footer section.  

* If you click on the view details inside the tourist spot record, the details will be shown.  If you click on All tourist spot on navbar, all country data will be shown there.  

* There is a view details button on the card.  Clicking there will show the details of that record.  If you click on My List, it will show in table form, you can see some details.  

* There will be update delete button.  By clicking on Update, the details of the record can be updated.  If you delete again, it will be deleted.
