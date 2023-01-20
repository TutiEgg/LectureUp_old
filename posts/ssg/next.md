---
imgtitle: "Next"
title: 'Next'
metaTitle: 'Basic Information'
socialImage: images/ssg.png
date: '2022-06-09'
tags:
  - staticsidegenerator
  - general information
  - next
---

## Next 

Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites. React documentation mentions Next.js among "Recommended Toolchains" advising it to developers as a solution when "Building a server-rendered website with Node.js".Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.

The copyright and trademarks for Next.js are owned by Vercel, formerly ZEIT, which also maintains and leads its open-source development.

# Background

Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.Developers recognize several problems with this strategy however, such as not catering to users who do not have access to JavaScript or have disabled it, potential security issues, significantly extended page loading times, and it can harm the site's overall search engine optimization. Frameworks such as Next.js sidestep these problems by allowing some or all of the website to be rendered on the server-side before being sent to the client. Next.js is one of the most popular frameworks for React. It is one of several recommended "toolchains" available when starting a new app, all of which provide a layer of abstraction to aid in common tasks. Next.js requires Node.js and can be initialized using Node Package Manager.

Google has donated to the Next.js project, contributing 43 pull requests in 2019, where they helped in pruning unused JavaScript, reducing loading time, and adding improved metrics. As of March 2020, the framework is used by many large websites, including Netflix, GitHub, Uber, Ticketmaster, and Starbucks. In early 2020, it was announced that Vercel had secured twenty-one million dollars in Series A funding to support improvements to the software. The framework's original author, Guillermo Rauch, is currently the CEO of Vercel, and the project's lead developer is Tim Neutkens.
# Development history

Next.js was first released as an open-source project on GitHub on October 25, 2016; 5 years ago. It was originally developed based on six principles: out-of-the-box functionality requiring no setup, JavaScript everywhere, all functions are written in JavaScript, automatic code-splitting and server-rendering, configurable data-fetching, anticipating requests, and simplifying deployment. Next.js 2.0 was announced in March 2017 including several improvements that made it easier to work with small websites. It also increased the build efficiency and improved the scalability of the hot-module replacement feature.Version 7.0 was released in September 2018 with improved error handling and support for React's context API for improved dynamic route handling. This was also the first version to upgrade to webpack 4. Version 8.0 was released in February 2019 and was the first version to offer serverless deployment of applications, in which the code is split up into lambda functions that are run on demand. The version also reduced the time and resources required for static exports and improved prefetch performance. Version 9.3, announced in March 2020, included various optimizations and global Sass and CSS module support. On July 27, 2020 Next.js version 9.5 was announced, adding new capabilities including incremental static regeneration, rewrites, and redirect support. On June 15, 2021 Next.js version 11 was released, introducing among others: Webpack 5 support, preview of real-time collaborative coding functionality "Next.js Live", and experimental function of automatic conversion from Create React App to Next.js compatible form "Create React App Migration". On October 26, 2021, Next.js 12 was released, adding a Rust compiler, making the compilation faster, AVIF support, Edge Functions & Middleware, and Native ESM & URL Imports.
# Styling and features

Next.js supports styling with CSS as well as precompiled Scss and Sass, CSS-in-JS, and styled JSX. In addition, it is built with TypeScript support and smart bundling. The open-source transpiler Babel is used to transform and compile code into JavaScript usable by a browser. Webpack, another open-source tool, is used to bundle the modules afterward. All of these tools are used with npm in a terminal.

The main feature of Next.js is its use of server-side rendering to reduce the burden on web browsers and provide enhanced security[citation needed]. This can be done for any part of the application or the entire project, allowing for content-rich pages to be singled out for server-side rendering. It can also be done only for first-time visitors, to reduce the burden on web browsers that have yet to download any of the site's assets. The "hot reloading" feature detects changes as they are made and re-renders the appropriate pages so the server avoids the need to be restarted. This allows changes made to the application code to be immediately reflected in the web browser, though some browsers will require the page to be refreshed. The software uses page-based routing for developer convenience and includes support for dynamic routing. Other features include hot-module replacement so that modules can be replaced live, automatic code splitting, which only includes code necessary to load the page, and page prefetching to reduce load time.

Next.js also supports Incremental Static Regeneration (ISR) and static site generation (SSG) - A compiled version of the website is usually built during build time and saved as a .next folder. When a user makes a request, the pre-built version which are static HTML pages are cached and sent to them. This makes the load time very fast, but it's not suitable for every website because for interactive sites that change often and utilize a lot of user input will not be suitable. 