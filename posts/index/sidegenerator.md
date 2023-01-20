---
imgtitle: "Side Generator"
title: 'Static Side Generator'
metaTitle: 'Basic Information'
socialImage: images/ssg.png
date: '2022-06-09'
tags:
  - staticsidegenerator
  - general information
---

## Static side generator

# What is a static site generator?

A static site generator is a tool that generates a full static HTML website based on raw data and a set of templates. Essentially, a static site generator automates the task of coding individual HTML pages and gets those pages ready to serve to users ahead of time. Because these HTML pages are pre-built, they can load very quickly in users' browsers.

Static site generators are an alternative to content management systems (CMS) — another type of tool for managing web content, generating webpages, and implementing templates. (A template is a reusable format for web content; developers use templates to avoid writing the same formatting over and over.) Static site generators are typically part of a JAMstack web development approach.

# What is a static website?

A static website is made up of one or more HTML webpages that load the same way every time. Static websites contrast with dynamic websites, which load differently based on any number of changing data inputs, such as the user's location, the time of day, or user actions. While static webpages are simple HTML files that can load quickly, dynamic webpages require the execution of JavaScript code within the browser in order to render.
What is the difference between a static site generator and a CMS?

In the early days of the Internet, websites were stored as static HTML sites, with all webpages laid out and hard coded in advance. This was inefficient because it required developers to code each webpage manually.

Content management systems (CMS) emerged as a way for developers to avoid all that manual setup. Instead of coding the pages ahead of time, content is stored in a CMS database, and when a user requests a page, the server does the following:

    Queries the database for the right content
    Identifies the template the content will fit into
    Generates the page
    Serves the page to the user

Content in the CMS has to fit in one of the fields offered by the CMS database, but as long as it does, it should appear in its proper place on the website every time.

A static site generator is a compromise between these two approaches. Like a CMS, it allows developers to use templates and automatically generates webpages — but it does the latter ahead of time, instead of in response to a user's request. This makes for faster website performance, because the webpages are instantly ready for delivery to end users. It also offers greater customization to developers, since they are not limited by the database fields offered by the CMS.
# What are the pros and cons of using a static site generator?
# Pros

    Performance: Because static site generators create webpages in advance instead of on demand (as with a CMS), webpages load slightly faster in users' browsers.
    Customization: Developers can create any template they want. They are not limited by the fields provided by a CMS, nor by a CMS's built-in templates.
    Lighter backend: Static websites are lightweight and do not require as much code to run on the server side, whereas CMS-based websites constantly query the server side for content.

# Cons

    Few or no pre-built templates: The downside of unlimited customization is that it can take longer to get started. Many static site generators do not come with templates, and developers will have to spend a lot of time building them from scratch at first.
    No user-friendly interface: It is harder for non-developer users to publish content using a static site generator. There is no CMS interface, and working with raw unformatted data may be intimidating for users. In addition, developer support is often necessary for making website updates.
