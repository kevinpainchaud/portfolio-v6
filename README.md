# Portfolio v6

## Environment

### Prerequisites to work on the project

-   A recent version of [Node.js](https://nodejs.org/)
-   [Python 3](https://www.python.org) (only required for the [`fetch-linkedin`](#fetch-linkedin) task)

### Main technologies

-   [Preact](https://preactjs.com)
-   [Styled components](https://styled-components.com)
-   [Photoswipe](https://photoswipe.com)

### Branching model

I'm using the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) branching model.

## Local development with dev server

`npm run start`

## Build the website for production

`npm run build`

Pages are pre-rendered via [react-snap](https://github.com/stereobooster/react-snap).

## Deploy to preprod/production

GitLab CI/CD is used to build & deploy the website with GitFlow.

### Deploy to preprod:

Push to a `release/*-*-*` branch

URL: [https://preprod.kevinpainchaud.fr](https://preprod.kevinpainchaud.fr)

### Deploy to production:

Push a tag to the `master` branch

URL: [https://www.kevinpainchaud.fr](https://www.kevinpainchaud.fr)

## <a name="fetch-linkedin"></a>Fetch experience & education data from LinkedIn

`npm run fetch-linkedin`

This command run a script to update the `src/data/experience.json` & `src/data/education.json` files with data fetched from my LinkedIn profile.

## Find and fix problems in the JavaScript code

`npm run lint`

## Serve the dist directory

`npm run serve`

## Analyse the webpack bundle content

`npm run analyze-bundle`

## Feedback

If you have any question/suggestion/bug, please feel free to create an issue or email me.
