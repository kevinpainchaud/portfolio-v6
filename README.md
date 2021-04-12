# Portfolio v6

## Environment

### Prerequisites to work on the project

-   A recent version of [Node.js](https://nodejs.org/)
-   [Python 3](https://www.python.org) (only required for the [`fetch-linkedin`](#fetch-linkedin) task)

### Main technologies

-   [Preact](https://preactjs.com)
-   [Styled components](https://styled-components.com)

### Branching model

I'm using the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) branching model.

## Local development with dev server

`npm run start`

## Build the website for production

`npm run build`

Pages are pre-rendered via [react-snap](https://github.com/stereobooster/react-snap).

## Deploy to production

[Vercel](https://vercel.com) is used to build, deploy & host the website.

You just have to push to the `master` branch.

## <a name="fetch-linkedin"></a>Fetch experience & education data from LinkedIn

`npm run fetch-linkedin`

This command run a script to update the `src/data/experience.json` & `src/data/education.json` files with data fetched from my LinkedIn profile.

**Required**: A `.env` file with the LinkedIn credentials:

```
LINKEDIN_USERNAME=XXX
LINKEDIN_PASSWORD=XXX
```

## Find and fix problems in the JavaScript code

`npm run lint`

## Serve the build directory

`npm run serve`

## Analyse the webpack bundle content

`npm run analyze-bundle`

## Feedback

If you have any question/suggestion/bug, please feel free to create an issue.
