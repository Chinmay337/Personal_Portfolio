<h1>CS 601 Final Project Chinmay Bhelke </h1>

<h2> Personal Portfolio Project </h2>

<h2> Extra Credit </h2>

- Added async/await and fetch to fetch the list of images from a JSON file in photos.js under the photography file
- The header is on a 12 sec loop to animate through gradient colors to change the color
- Responsive design using flexbox is used everywhere , certifications page has a responsible gridbox using css grid
- Used ES6 everywhere in the JS files

<h2> Overview of Pages <h2>

<h3> 1. Intro Page </h3>

- For the introduction page, I decided to use a minimalist theme with a light font and bold design patterns.
- For my name, I used a gradient overlay and added a CSS animation to transition the name on the font size property. To achieve this, I am using a <code>setTimeout()</code> function that triggers on page load once the DOM is loaded.
- I extensively use flexbox all throughout my project to easily achieve desired layout patterns and align items.
- For the main sections introducing major aspects of my professional life , I use the inbuilt Intersection API in JS to display the content when a percentage of it is detected in the viewport. I also added CSS transition properties to fade in the content when it loads.
- For the CSS graphic displaying my various hats - I am using a <code>setTimeout()</code> function with different values for CSS transition to create the <em>bouncing effect</em>

<h3> 2. Timeline Page</h3>

- Made a design decision to use a transparent header for the Intro and Interest+Hobbies section and a more robust, functional , and visible header for the Timeline , Projects, Tech Goals, Certifications , and Photography section.
- Used the <code>Intersection API</code> to conditionally display content as I am trying to tell my personal story.
- Used CSS transitions to ease in the content from the left and right side of the browser viewport
- Added an active and inactive class to the middle static buttons with the year and timeline and used JS to remove and add the active/inactive classes for them.

<h3> 3. Projects Page</h3>

- Used flexbox and margins to create a layout for the content
- The page design consists of the projects on the left side and project information on the right side
- Used SVG icons and added hover classes to them to add an effect to highlight the items in the Tech stack such as Elasticsearch , Vue.JS , etc.
- Added JS and ES6 functions and event listeners to the project names on the left pane to conditionally display content on the content window to the right. For ex , added a <code>'click'</code> event listener to the project names on the left that call a function which updates the content on the right and updates the classes of the projects to remove the inactive class from itself and add the inactive class to all other projects.

<h3> 4. Technology Goals </h3>

- Used the CSS <code>::before</code> property and the <code>blur</code> property to achieve a gradient border for the content box in the Projects and Technology Goals Section

<h3> 5. Interests and Hobbies </h3>

- Added a parallax effect to this entire page using background images for the headings
- The position is fixed for the background image so this simple trick creates an amazing visual effect
-

<h3> 6. Certifications </h3>

- Used gridbox to create a responsible layout for all screen sizes
- Added a section at the bottom with my thoughts on Certifications (aws) in general

<h3> 7. Photography </h3>

- This is a Vue component and I created a photography album with pictures outside of my house
- Added filters to select Birds, Houses, or Nature images that I own
- Used custom font files to implement custom fonts for the component

<h3><em>Disclaimer</em></h3>

<em><b>All background images, icons , and images used in the project are either free public images or images owned by me or free public SVG icons.</b></em>

<b>Free Sources I used to source Icons and Images </b> :

- https://www.svgrepo.com/
- https://burst.shopify.com/free-images
