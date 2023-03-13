# Nugo Gatsby Starter Template

nugo-starter is a starter template for [Gatsby](https://www.gatsbyjs.com/) that includes the following features:

- Basic layout and styling with [SCSS](https://sass-lang.com/)
- [React Helmet](https://github.com/nfl/react-helmet) for managing the document head
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/) for optimizing images
- [gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/) for generating a sitemap
- [gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/) and [gatsby-transformer-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/) for optimizing images
- [gatsby-plugin-facebook-pixel](https://www.gatsbyjs.com/plugins/gatsby-plugin-facebook-pixel/) and [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/) for tracking analytics
- [gatsby-plugin-netlify](https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/) for Netlify-specific features


## Getting Started

To use this template, you can either [create a new Gatsby site](https://www.gatsbyjs.com/docs/tutorial/part-zero/#create-a-new-site) and replace the default starter files with these, or you can [clone the repository](https://github.com/nugo-studio/gatsby-starter-template) directly.


### Prerequisites

To run this project, you need to have [Node.js](https://nodejs.org/) installed on your machine.


### Installing

After cloning the repository or creating a new site with this template, you need to install the dependencies by running the following command in the project directory:
```shell
npm install
```



### Usage

To start the development server, run the following command:

```shell
npm start
```



The site should now be available at `http://localhost:8000/`.

---



To build the production-ready code, run:

```shell
npm run build
```



To serve the production-ready code locally, run:

```shell
npm run serve

```


To clean the cache and public directories, run:

```shell
npm run clean
```



### Deployment

To deploy the site, you can follow the [Gatsby deployment documentation](https://www.gatsbyjs.com/docs/deploying-and-hosting/).

## Configuration

### Environment Variables

This template uses environment variables for configuring certain features. To use environment variables, create a `.env` file in the root directory of your project with the following format:

VARIABLE_NAME=value


Here are the environment variables used in this template:

- `GATSBY_CONTENTFUL_SPACE_ID` and `GATSBY_CONTENTFUL_ACCESS_TOKEN`: These are required if you are using [Contentful](https://www.contentful.com/) as a data source. You can find these values in your Contentful account settings.
- `NODE_ENV`: This should be set to either `development` or `production`, depending on whether you are running the site locally or deploying it.

### Gatsby Config File

The Gatsby configuration file (`gatsby-config.js`) contains the settings and plugins used by the site. You can modify this file to add or remove plugins, or to configure their settings.


In this file, you can set the site metadata, configure plugins, and specify settings such as images, colors, and URLs. You can also add or remove plugins depending on your needs.

To use the environment variables in the configuration file, we use the `dotenv` package to load them from a `.env` file.


## Dependencies
```shell
- "@contentful/rich-text-react-renderer": "^15.16.2"
- "gatsby": "^5.7.0"
- "gatsby-plugin-facebook-pixel": "^1.0.8"
- "gatsby-plugin-google-tagmanager": "^5.7.0"
- "gatsby-plugin-image": "^3.7.0"
- "gatsby-plugin-manifest": "^5.7.0"
- "gatsby-plugin-netlify": "^5.1.0"
- "gatsby-plugin-nprogress": "^5.7.0"
- "gatsby-plugin-react-helmet": "^6.7.0"
- "gatsby-plugin-sass": "^6.7.0"
- "gatsby-plugin-sharp": "^5.7.0"
- "gatsby-plugin-sitemap": "^6.7.0"
- "gatsby-source-contentful": "^8.7.0"
- "gatsby-source-filesystem": "^5.7.0"
- "gatsby-transformer-sharp": "^5.7.0"
- "prop-types": "^15.8.1"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-helmet": "^6.1.0"
- "sass": "^1.59.2"
```

## Dev Dependencies

```shell
- "autoprefixer": "^10.4.13"
- "gatsby-plugin-postcss": "^6.7.0"
- "postcss": "^8.4.21"
- "tailwindcss": "^3.2.7"
```

## License

This project is licensed under the 0BSD License. For more information, see the LICENSE file.

## Bugs

If you find any bugs, please report them at the [issues page](https://github.com/gatsbyjs/gatsby/issues).
