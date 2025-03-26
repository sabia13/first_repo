// Scroll to Mentors Section
document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('#mentors').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Dynamic Message in the Console
  console.log("Welcome to the Students-Alumni Mentorship Platform!");

//ye where to add this login and registratration from in above website ka answer h

// Toggle between forms
document.querySelectorAll('.toggle-form').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      const targetForm = e.target.getAttribute('data-target');
      document.querySelector('.form.active').classList.remove('active');
      document.getElementById(targetForm).classList.add('active');
    });
  });
  
  // Handle Registration Form Submission
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('registerName').value,
      email: document.getElementById('registerEmail').value,
      password: document.getElementById('registerPassword').value,
      role: document.getElementById('registerRole').value,

    };
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Registration successful! You can now log in.");
      } else {
        alert(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  });
  
  // Handle Login Form Submission
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      email: document.getElementById('loginEmail').value,
      password: document.getElementById('loginPassword').value,
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Login successful!");
        // Save token to localStorage for future authenticated requests
        localStorage.setItem("authToken", result.token);
        // Redirect or load the dashboard page
      } else {
        alert(result.message || "Invalid login credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  });



  // Toggle Navbar Menu for Mobile View
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Sample Mentors Data
const mentors = [
  {
    name: "Manju  Jhunjhunwala",
    expertise: "Computer Architecture | Networking ",
    image: "images/mentor1.jpg", 
    imagewidth: 100,
    imageheight: 100,
    bio: "10+ years of experience in teaching in Architecture, Networking, and Hardware design.",
  },
  {
    name: "Priyadarshini",
    expertise: "Programming | Website Design",
    image: "images/mentor2.jpg",
    bio: "Programming languages expert  and website developer for 15 years.",
  },
  {
    name: "Sabitri Sharma",
    expertise: "Programming Languages | Big Data",
    image: "images/mentor3.jpg",
    bio: "Expert in C, VB.NET, C++ and visualization, transforming raw data into actionable insights.",
  },
  {
    name: "Shamit Sherkhel",
    expertise: "UI/UX Designer | Frontend Developer",
    image: "images/mentor4.jpg",
    bio: "Specialized in creating beautiful and functional user interfaces.",
  },
];

// Function to Render Mentor Profiles
const renderMentors = () => {
  const mentorsContainer = document.getElementById("mentors-container");
  mentors.forEach((mentor) => {
    const mentorCard = document.createElement("div");
    mentorCard.classList.add("mentor-card");

    mentorCard.innerHTML = `
      <img src="${mentor.image}" alt="${mentor.name}">
      <h3>${mentor.name}</h3>
      <p>${mentor.expertise}</p>
      <p>${mentor.bio}</p>
    `;

    mentorsContainer.appendChild(mentorCard);
  });
};

// Call the Render Function
renderMentors();
  
// Fetch Mentor Profiles from Backend API
const fetchMentors = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/mentors"); // Replace with your API endpoint
    const mentors = await response.json();

    const mentorsContainer = document.getElementById("mentors-container");
    mentors.forEach((mentor) => {
      const mentorCard = document.createElement("div");
      mentorCard.classList.add("mentor-card");

      mentorCard.innerHTML = `
        <img src="${mentor.image}" alt="${mentor.name}">
        <h3>${mentor.name}</h3>
        <p>${mentor.expertise}</p>
        <p>${mentor.bio}</p>
      `;

      mentorsContainer.appendChild(mentorCard);
    });
  } catch (error) {
    console.error("Error fetching mentors:", error);
  }
};

// Call the Fetch Function
fetchMentors();


document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log(`Contact Form Submitted by ${name} (${email}): ${message}`);
  alert("Thank you for contacting us! We'll get back to you soon.");
  
  // Optionally, send the data to the backend using fetch or axios.
  // Example:
  // fetch("/api/contact", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ name, email, message }),
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(err => console.error(err));
});


