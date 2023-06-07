# Site Documentation

## Contents
+ [Overview](#overview)
+ [Phase 1](#phase-1) 
+ [Phase 2](#phase-2)
+ [Phase 3](#phase-3)
+ [Phase 4](#phase-4)

## Links
+ [Home](../README.md)

<hr>

## Overview

+ [Phase 1](#phase-1) 
   + *Develop site design as static HTML/CSS/JS pages hosted on GitHub*
   + *Obtain domain name and (if possible) map to GitHub site with HTTPS*
+ [Phase 2](#phase-2)
   + *Use finalized site design as a template for local development of server-side website with [database](database.md)*
   + *Obtain SMTP (email) account for contact and mailing list (etc)* 
+ [Phase 3](#phase-3)
   + *Obtain server-side hosting capability and deploy software and database* 
+ [Phase 4](#phase-4) 
   + *Develop ecommerce solution for online selling of tickets*

[Back to top](#site-documentation)

<hr>

## Phase 1

Developing the site design as static HTML/CSS/JS pages hosted on GitHub.

### Suggested site map

```
Home 
├───About
├───Upcoming productions
│   ├───<upcoming 1>
│   ├───<upcoming 2>
│   ...
├───Past productions
│   ├───<past 1>
│   ├───<past 2>
│   ...
└───People (sort by production or person)
    ├───<profile 1>
    ├───<profile 2>
    ...
```

### Upcoming/past productions pages
It is suggested that the upcoming/past productions pages follow a generic format so that (eventually) they can be generated automatically.

#### Suggested format

+ **About**
+ **if** (*past-production*)
   + **Reviews**
+ **else if** (*now-booking*)
   + **Link to booking**
+ **People** 
   + *links to profile pages*

### People pages
 
#### Suggested format

+ **Photo**
+ **Bio**
+ *Scrollable element showing more pictures*
+ **Productions**
   + *links to productions + external links*

[Back to top](#site-documentation)

<hr>

## Phase 2

Using finalized site design as a template for local development of server-side website with database. The proposed technology will be NodeJS (for server-side functionality) with either a MySQL.

See [Database](database.md) for a proposed schema for the database.

[Back to top](#site-documentation)

<hr>

## Phase 3

Obtaining server-side hosting capability and deploy software and database. The easiest options (least work) would be Azure or AWS. These would also be good for future scalability. However, these may not be the cheapest options.

[Back to top](#site-documentation)

<hr>

## Phase 4

Developing ecommerce solution for online selling of tickets.

[Back to top](#site-documentation)

<hr>

