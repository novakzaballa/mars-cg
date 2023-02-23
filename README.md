# Camp Gladiator Mars Workouts
This is a code for CampGladiator take-home test called MarsCG.

Some assumptions were made including the following:
- The data is complete or is a representative sample, meaning that it contains all the different shapes and range of values of the real data, for example, it contains all the impact types, and level types.
- The branding, including color and typography has been determine by the developer, prioritizing use of defaults because of the time restriction.

ToDo:
- Due to the restricted time and resources available for this developer. The app will not be published in a CDN to be accesible from anyware. Instead the following link is provided explaining how to do it https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-a-react-based-single-page-application-to-amazon-s3-and-cloudfront.html.
- Due to the time limitation, no KPI were added to the Dashboard, however some of them could include:
  - Total user workouts time.
  - Total user calories burned out.
  - User progress per level.
- Probably allow users to mark some of the workouts as favorites could be a good feature, however that depends on wether they revisit workouts frequently.
- Most of this and features should be improved or developed depending on usage data. Because of that something missing is a way to track the features usage, like Amplitude, Datadog, Hotjar, or another similar tool.

Follow the instructions below to run the app.
## Install dependencies

Once you have cloned/downloaded this code, please install dependencies executing the following command in the command line from the project root directory:
`npm i`


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
