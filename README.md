# About the app

The app follows all the spec mentioned in the challenge
- [x] Can upload a new cat image
- [x] Can view the cat images uploaded
- [x] Can favourite and unfavourite a cat
- [x] Can vote a cat up or down 
- [x] Can view a score on each cat based on votes

# Tech used

The app is created using `create-react-app` template and uses ReactJs, Javascript and Typescript to power the app on the browser. The is an SPA with 2 routes - one is Home ( `/`) and the other a screen for uploading images (`/upload`).
`react-router` is used to achieve navigation ad redirection elegantly. React Hooks are used wherever they seem fit to handle state in the components

  ## Network Calls
  Network calls are done using a open source library called `react-query`. The reason I chose react-query is because it is very much declarative in that I just need    to specify where to get the data from with very minimal configuration. It works very well with async/await so it is easier to not only fetch data but also          process the data easily avoiding the use of things like reducers for simple requirements. All it needs it a function to resolve on data fetching.
  `axios` is used as a library for making network calls and getting responses
  
  ## Strongly typed 
  With the use of typescript almost all run time issues are captured during build time thanks to strong type support. 
  
  ## State management
  I have used React hooks in most of the components as it gives 2 benefits. 1. Easier and clearer state management with in components 2. Write functional components as opposed to class components
  
  ## Design
  I've used Tailwind css for designing the UI for this app. It is very easy to set up and has most of what I needed. Most of the styles are available out of the box
  and also makes it easier for responsive design. The app scales very neatly in Desktop and mobile views
  
  ## Uploader
  - [x] `react-images-upload` is used to upload the image as it has some really nice features. It is a bit lagging in terms of updates and I may hesitate to use it in production but for the sake of this challenge it does not present any challenges. It works well for trivial use cases especially with a variety of props
  - [x] Validation messages such as when trying to upload an image over allowed size limit, invalid format etc are handled and appropriate error message is shown.
  - [x] A preview is shown before the image is actually uploaded
  - [x] On error from the image upload API, the actual friendly error message is shown to the user
  - [x] The api uses image classification techniques to chek if the user has actually uploaded a cat image and the same response from API is handled in the app 
  
  
  ## Testing
  I've used React Testing Library to unit test the components. All components have basic unit tests to ensure compnenents load and render correctly. 



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
