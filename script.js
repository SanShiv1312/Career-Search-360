var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

const jobs = [
    {
      title: "Software Engineer",
      image: "images/software-engineer.png",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
      link: "https://resources.workable.com/software-engineer-job-description",
    },
  
    {
      title: "Data Scientist",
      image: "images/data-scientist.png",
      details:
        "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
      link: "https://resources.workable.com/data-scientist-job-description",
    },
  
    {
      title: "Project Manager",
      image: "images/project-manager.svg",
      details:
        "Responsible for planning, executing and closing projects on time and within budget.",
      link: "https://resources.workable.com/project-manager-job-description",
    },
  
    {
      title: "Product Manager",
      image: "images/product-manager.svg",
      details:
        "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
      link: "https://resources.workable.com/product-manager-job-description",
    },
  
    {
      title: "Sales Representative",
      image: "images/sales-representative.svg",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
      link: "https://resources.workable.com/sales-representative-job-description",
    },
  
    {
      title: "Marketing Manager",
      image: "images/marketing-manager.svg",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
      link: "https://resources.workable.com/marketing-manager-job-description",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  /*
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  */
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });
  