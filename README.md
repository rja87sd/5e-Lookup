# Project Overview  
This project aims to build a 3-page application that showcases advanced web development skills, including API integration, object-oriented programming with JavaScript, and sophisticated styling using SCSS with a 7-1 architecture. The application will consume an API to display meaningful data tailored to the project's theme, ensuring relevance and coherence in its presentation.  
  
## Project Setup  
Repository Name: 5e Lookup  
File Structure:  
index.html  
style.scss (with 7-1 structure folders)  
script.js  
README.md  

## sass-template
// Setting up the Folder Structure for the 7-1 Pattern  
// base/, components/, layout/, pages/, themes/, abstracts/, vendors/  

// Base Folder  
//_base.scss: // Basic setup, like box-sizing, font-sizes, etc.  
//_typography.scss: // Typography rules such as font-family, font-size, line-height.  

// Components Folder  
//_buttons.scss: // Styles for various buttons.  
//_cards.scss: // Basic card component styles.  

// Layout Folder  
// _header.scss: // Styles for the header section.  
// _footer.scss: // Styles for the footer.  

// Pages Folder  
// _home.scss: // Specific styles for the home page.  
// _about.scss: // Specific styles for the about page.  

// Themes Folder  
// _theme.scss: // Define different themes, like dark mode or alternate color schemes.  

// Abstracts Folder  
// _variables.scss: // Define your color palette, font stacks, etc.  
// _mixins.scss: // Commonly used mixins.  

// Vendors Folder  
// _bootstrap.scss: // If using Bootstrap or any other third-party CSS frameworks.  

// Main SCSS File  
// main.scss: // Import all above files using @import statements.  
  
## Development Log  
### Day 1: Project Initialization and API Selection  
- Created the project repository and initialized with base files.  
- Researched and selected an appropriate API for the project.  
    [https://www.dnd5eapi.co]  
- Outlined the application's 3-page structure.  
  
index.html wireframe:  
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/1b03e2d2-dda8-49f5-a037-6dfce6974406)  

dashboard.html wireframe  
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/89d3ec95-66e5-4acf-9c9e-c60a90c781d9)  

about.html wireframe  
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/f5e33197-b5fa-4f89-a522-05fc41f664d0)  

### Day 2: API Integration and Class Implementation  
- Implemented the DataClass to model API data objects.  
- Developed functions for fetching data from the API.  
- Started integrating API data into the frontend.  
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/c7a0426a-344d-40c7-bcff-a4f58eaea197)
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/fe2c3dff-621f-4c6b-8279-2006aa7a1dec)
  
  
### Day 3: Frontend Development and SCSS Styling  
- Designed the UI for all three pages.  
-- index.html  
  ![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/61d18759-5f3d-4c0a-afbd-6b61e9f13f9c)  
  
-- dashboard.html  
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/685c3ac5-7c85-4384-b0c5-51c6c3801bc0)  
  
-- about.html  
  ![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/20a568a7-53e5-4afd-a8e6-0787f8fe5956)  
  
- Applied SCSS styling using the 7-1 pattern.  
-- Screenshot  
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/6f2b890f-e007-45ee-94e6-3c756617a2e5)  
  
- Tested responsive design.  
-- dashboard responsive design  
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/b3b55be1-ae64-4fef-b3be-1378f495e398)

-- index responsive design  
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/b95ee29f-0bda-45c5-8f62-3df4e94439be)  

-- about responsive design  
![image](https://github.com/rja87sd/5e-Lookup/assets/145504216/93bb9e4a-a7ff-418d-b589-cb50fc3a477b)  
  
