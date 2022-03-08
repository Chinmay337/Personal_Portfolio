// deployment = git , react , aws , dynamodb ,

// aws-ml = git , aws , dynamodb , vue , es , lambda , python

// datadog = datadog , github , git , js , html , css

// linuxtool = html , css , js ,

// reactvideo = react , youtube

// pythonbot = selenium , python

const datasources = document.querySelector(".project-1");
const dummystock = document.querySelector(".project-2");
const awsml = document.querySelector(".project-3");
const deploymentTracker = document.querySelector(".project-4");
const datadogTool = document.querySelector(".project-5");
const linuxTool = document.querySelector(".project-6");
const reactVideo = document.querySelector(".project-7");
const pythonBot = document.querySelector(".project-8");

const projects = [
  datasources,
  dummystock,
  awsml,
  deploymentTracker,
  datadogTool,
  linuxTool,
  reactVideo,
  pythonBot,
];
const projectDescription = document.querySelector(".project-description");
const title = document.querySelector(".head-title");
const icons = document.querySelector(".tech-stack").children;
const prod = document.querySelector(".production");

for (let i = 0; i < icons.length; i++) {
  console.log(icons[i]);
}

function updateIcons(newClass, showProd) {
  for (let i = 0; i < icons.length; i++) {
    if (icons[i].classList.contains(newClass)) {
      icons[i].classList.remove("inactive");
    } else {
      icons[i].classList.add("inactive");
    }
  }

  if (showProd) {
    prod.classList.remove("inactive");
  } else {
    prod.classList.add("inactive");
  }
}

function highlightProject(newProject, newContents) {
  projects.forEach((project) => {
    project.classList.add("faded");
  });
  newProject.classList.remove("faded");
  title.innerHTML = newProject.querySelector("span").innerHTML;

  projectDescription.style.opacity = 0;
  // Wait for the transition
  setTimeout(function () {
    projectDescription.innerHTML = newContents;
    projectDescription.style.opacity = 1;
  }, 500);
}
datasources.addEventListener("click", () => {
  updateIcons("datasources", true);
  highlightProject(
    datasources,
    `Created a UI to interface with data using TypeScript and React. </br>
    Introduced a build process hosted on an Amazon Linux 2 server to dynamically update the UI. </br>
    Used a NodeJS script using ZX to parse from a file staged on the repo , rebuild the app, and deploy whenever the script is kicked off. </br>
    Implemented a minimalist mode and a color rich mode for the UI which can be toggled from a button. </br>
    Used Redux to hook the selected data sources to Global State to easily integrate with features introduced in the future.
    `
  );
});

dummystock.addEventListener("click", () => {
  updateIcons("dummystock", false);
  highlightProject(
    dummystock,
    `Created a full stack web app using a VueJS Frontend and a NodeJS Express Server for the backend. </br>
    Users can log in and buy or sell stock tickers and view their portfolio. Implemented an admin functionality which can add/remove/update users in the application and add Balance to their accounts. </br>
    Pulls data in real time using the Yahoo finance API and visualizes profit loss for users.
    `
  );
});

awsml.addEventListener("click", () => {
  updateIcons("aws-ml", true);
  highlightProject(
    awsml,
    `  Worked in a team of 2 to create a Web Application with a Vue.JS
  Frontend utilizing AWS Machine Learning and AI API's such as
  Rekognition , Elemental SageMaker, and AWS Transcribe (to name a
  few).
  <br /><br />
  The application ingests video through the Vue frontend , which is
  passed and stored to an S3 bucket. The S3 bucket triggers a Lambda
  step function which converts the video using MediaConvert , adds the
  title and description to an ES index , then runs the Rekognition
  API's on the video to create a JSON object with elements in the
  video and their respective timestamps.
  <br /><br />
  This application was tested and used by our internal marketing team
  at Infinitive which used the application to upload videos of
  recorded meetings. Previously , an intern was tasked to make a note
  of the discussions in meetings and be present for them; this
  application created value because the entire meetings were indexed
  and timestamped with all discussions being converted to timestamped
  strings of text.
  <br /><br />
  Later, we added additional features to the application such as being
  able to generate clips from the frontend using the timestamps as
  reference. To achieve this, I created a Lambda function utilizing a
  feature of <b>MediaConvert</b> which generates an extract from the provided
  video according to the timestamp provided. The video already exists
  in the AWS account, so the Lambda function simply requires the
  timestamps and a reference to the original video location stored in
  S3 , it then generates the clip , uploads the video file to a new S3
  bucket , and finally changes the meta data attributes of the clip
  stored in S3 such that the browser downloads the clip instead of
  playing it. <br/><br/>
  The clips generated could be of varying length, so I
  decided to isolate the Generate Clip and Download Clip functionality
  instead of adding a timeout to the Generate Clip button and
  automatically downloading the clip upon clip generation. The
  Generate Clip button on the frontend triggered the Lambda which
  created the clip and stored the clip , and the Download Clip button
  on the frontend downloaded the clip from an S3 bucket. Once the
  Lambda function completed, I added a last step to the function that
  sent a request to the frontend using API Gateway which updated the
  HTML to display the Download Clip button.
  <br />
  <br />
  This application was also used by our clients HBO Max and Time
  Warner.`
  );
});

deploymentTracker.addEventListener("click", () => {
  updateIcons("deployment", true);
  highlightProject(
    deploymentTracker,
    ` Created a React frontend to track the status of deployment
    activities for production - level activities to be used by
    several internal and external stakeholders. Previously this was
    being tracked through an Excel sheet which was creating a lot of
    problems and acting as a bottleneck.<br/><br/>
     We had 6 teams with
    interdependencies on each team's activities - I created this
    project on my own and presented it to management and made some
    changes and used it in a demo run before it was used in
    production. The architecture of the app was simple - it was a
    to-do list application with a React frontend and state stored in
    DynamoDB.`
  );
});

datadogTool.addEventListener("click", () => {
  updateIcons("datadog", true);
  highlightProject(
    datadogTool,
    `Created a tool to increase productivity for the team - there was
  an internal process to be able to check data flow for particular
  sources which involed around ~50 clicks and navigation to 5
  different locations before a team member could check the data
  flow and confirm source health.<br/><br/> I created a simple JS/HTML/CSS
  frontend and hosted it on internal Github Pages for various team
  members to use - which significantly improved the time to check
  health for data sources from ~50 clicks to 3 clicks.`
  );
});

linuxTool.addEventListener("click", () => {
  updateIcons("linuxtool", true);
  highlightProject(
    linuxTool,
    `Created a simple tool using JS, HTML, and CSS to solve some
  problems my team was having during deployments. It involved
  checking a file on 2 different servers to ensure they contain
  the exact same values and the file was very long; and there were
  instances where this validation was done incorrectly due to
  constraints. <br/><br/>
  I created a simple tool that was hosted on an S3
  bucket which had 2 boxes - the individual simply has to paste
  the file content from the server to the boxes. The box was a
  HTML input box that triggered a function which removed all
  whitespace and newline, and compared the 2 values and
  highlighted the frontend in a green theme if validations passed
  or a red theme if validations failed.`
  );
});

reactVideo.addEventListener("click", () => {
  updateIcons("reactvideo");
  highlightProject(
    reactVideo,
    `Created a simple React application utilizing the Youtube API to
  return a list of videos and display them. Also added
  authentication to the application using OAuth using Google.`
  );
});

pythonBot.addEventListener("click", () => {
  updateIcons("pythonbot");
  highlightProject(
    pythonBot,
    `My love of investing led me to create this project. Created a
  python application that upon launching, scrapes the web with
  the information related to the S&P 500 index. It then asks the
  user to choose between their desired industry to invest in,
  desired market cap, and desired P/E Ratio. <br/><br/>Based on these
  criteria, I filter out and create an array of companies and
  return it to the user. My plan is to migrate this project to run
  as a serverless function and then call it using a Frontend.`
  );
});
