# GitMatch

## Description

GitMatch is a social media app that enables users to explore and connect with developers. Users can view details such as a bio, location, email, and company (if available). Selected developers are added to a personalized list, where they can be easily managed or removed as needed. GitMatch streamlines the process of discovering, tracking, and engaging with developers for networking, collaboration, or project-based opportunities.

[![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Save the repository code to your computer
2. Invoke npm install
3. Invoke npm run dev

## Usage

- Application Site [https://git-match.netlify.app/](https://git-match.netlify.app/)
- Application Walkthrough [https://drive.google.com/file/d/1DaNCH0hk9JsUXpNuMz5Tam8Dypamwy68/view](https://drive.google.com/file/d/1DaNCH0hk9JsUXpNuMz5Tam8Dypamwy68/view)

## License

MIT License

Copyright (c) 2024 David Umana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

I am open to any feedback and improvements that others may have!

## Tests

### Home Page

- **Scenario:** User searches from the homepage
  - **Given:** The user is viewing the app on any device
  - **When:** The user land on the homepage
  - **Then:** They will be presented with a random GitHub Developer
 
- **Scenario:** GitHub Developer Card
  - **Given:** The user is viewing the app on any device
  - **When:** The user land on the homepage
  - **Then:** The Developer card will be displayed with an avatar and username, Optional (Bio, Location, Email, Company)
 
- **Scenario:** Rejecting a Developer
  - **Given:** The user is viewing the app on any device
  - **When:** The user click on the reject button (-)
  - **Then:** A new Developer card will be displayed with an avatar and username, Optional (Bio, Location, Email, Company)
 
- **Scenario:** Adding a Developer
  - **Given:** The user is viewing the app on any device
  - **When:** The user click on the add button (+)
  - **Then:** The developer will be added to the list of added developers that can be found in the Match page, a New Developer will also be displayed.

### Match Page

- **Scenario:** Match Page
  - **Given:** The user is viewing the app on any device
  - **When:** The user land on the Match page
  - **Then:** They will see a table of all the developers they have added
 
- **Scenario:** Removing a Developer - Match Page
  - **Given:** The user is viewing the app on any device
  - **When:** The user clicks on the remove button (-)
  - **Then:** the developer will be removed from the table
 
- **Scenario:** Sorting - Match Page
  - **Given:** The user is viewing the app on any device
  - **When:** The user clicks on A or Z
  - **Then:** The list of developers will be sorted A-Z or Z-A
 
- **Scenario:** Searching by username - Match Page
  - **Given:** The user is viewing the app on any device
  - **When:** The user clicks on the search bar and enters a username
  - **Then:** The table will filter on the search bar input

## Authors and acknowledgment

- Badge information was pulled from [https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Questions

For any questions, please contact me using the information below:

GitHub: [DevUmana](https://github.com/DevUmana)

Email: [dumana92@gmail.com](mailto:dumana92@gmail.com)
