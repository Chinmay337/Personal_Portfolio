const scale = document.querySelector(".heading-1");
const distributed = document.querySelector(".heading-2");
const cloud = document.querySelector(".heading-3");
const spa = document.querySelector(".heading-4");
const mobile = document.querySelector(".heading-5");

//const description = document.querySelector(".project-description");
const title = document.querySelector(".heading-title");

const headings = document.querySelector(".heading-container").children;

console.log(headings);
const content = document.querySelector(".heading-content");

function highlightHeading(newHeading, newContents){
  for (let i = 0; i < headings.length; i++) {
    headings[i].classList.add("faded");
  }

  newHeading.classList.remove("faded"); 
  title.innerHTML = newHeading.innerHTML;

  content.style.opacity = 0;
  // Wait for the transition 
  setTimeout(function(){ 
    content.innerHTML = newContents;
    content.style.opacity = 1;
  }, 500);
}

scale.addEventListener("click", () => {

  highlightHeading(scale,`Today, technology is the most accessible it has ever been and
  infrastructure has developed over the last decades to provide stable
  internet access to people throughout the globe. A good idea can take
  off in the blink of an eye, and this makes it extremely important to
  develop applications with scalability in mind. An application
  designed as a prototype and one that is designed to scale look
  almost nothing alike - the correct decisions have to be made
  regarding data structures & algorithms, infrastructure , and system
  design. My goal is to be proficient and comfortable designing
  technology and writing code that is scalable.`);
});

distributed.addEventListener("click", () => {
  highlightHeading(distributed,`Distributed programming and Scalability go hand in hand - scalable
      infrastructure needs to be programmed using unique concepts that can
      be grouped under distributed programming. Distributed programming is
      when a compute and functionality from physically isolated machines
      can be combined and this produces a new set of challenges for
      engineers. Front end web servers are a critical challenge to
      distributed programming and my goal is to be proficient in designing
      and engineering these kinds of systems. More information on
      distributed systems and the types of these systems can be found
      <a
        href="https://aws.amazon.com/builders-library/challenges-with-distributed-systems/"
        >here</a
      >`);
});

cloud.addEventListener("click", () => {
  highlightHeading(cloud, `In the current technology landscape, cloud computing is an integral
  aspect of any organization and is typically an integral aspect of
  technology growth and strategy for companies. No matter what my role
  is - be it a Full Stack Developer, DevOps Engineer, or Mobile
  Developer ; the cloud will undoubtedly be a critical aspect in any
  of these roles. Expanding upon my current Cloud Knowledge and
  understanding the intricacies and best design principles and
  patterns for Cloud Engineering is an important goal of mine. I am
  currently working on expanding my knowledge domain from AWS to
  incorporate multi cloud and master the JAM Stack. I want to be able
  to make the best multi-cloud decision and understand the tradeoffs
  and advantages between the main cloud providers such as Amazon Web
  Services, Google Cloud, and Microsoft Azure.`);
});

spa.addEventListener("click", () => {
  highlightHeading(spa, `The natural step for me to become an effective and valuable Software
  Engineer and expand upon my JS knowledge is to master a Server Side
  Rendering Framework such as Next.JS or Gatsby, preferably both. My
  goal is to work on multiple production level global applications in
  the next 5 years and mastering a SSR framework such as Next.JS and
  understand the intricacies behind the implementations so I can
  easily pick up the next JS framework whenever it hits the world of
  web development. My goal is to fully understand the benefits and
  disadvantages of client side vs server side rendering and how to use
  a combination of both of these techniques.`);
});

mobile.addEventListener("click", () => {
  highlightHeading(mobile, ` I think Mobile devices form an integral aspect of human lives and I
  can personally see my own mobile usage grow over time. I have always
  wanted to develop mobile applications and this is the next step for
  me. My goal is to be able to bring my ideas to vision and be a
  proficient mobile programmer. I am debating whether to dive into
  Swift or Flutter and engaged in doing research on the tradeoffs of
  both. I am already familiar with React so React-Native is a natural
  choice, but after doing some research and understanding the
  performance tradeoffs with React Native, my current plan is to dive
  deep into Swift and choose it as my mobile programming language for
  iOS Devices.`);
});
