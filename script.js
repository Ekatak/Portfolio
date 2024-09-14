// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing effect
const typedTextElement = document.getElementById('typed-text');
const phrases = ['Web Developer', 'Problem Solver', 'Innovative Thinker', 'Creative Designer'];
let phraseIndex = 0;
let letterIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let newPhraseDelay = 2000;

function type() {
    if (letterIndex < phrases[phraseIndex].length) {
        typedTextElement.textContent += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newPhraseDelay);
    }
}

function erase() {
    if (letterIndex > 0) {
        typedTextElement.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, newPhraseDelay);
});

// Project card flip effect and overlay
const projectsData = {
    project1: {
        title: "Project 1: Real Time Chat Messanging App",
        description: "This is an interactive portfolio with smooth scrolling, animated transitions, and project showcases.",
        technologies: "HTML, CSS, JavaScript, Animation",
        link: "https://github.com/Ekatak/Chat-App"
    },
    project2: {
        title: "Project 2: Waste Management System",
        description: "Create a waste management system with a user-friendly interface, tracking, scheduling, compliance features, and secure data handling.",
        technologies: "HTML, CSS, JavaScript, PHP, MySQL",
        link: "https://github.com/Ekatak/Waste-ManageMent-System"
    },
    project3: {
        title: "Project 3: Blog Website",
        description: "A responsive blog website with a user-friendly interface and real-time updates.",
        technologies: "MongoDB, React, Express.js, Node.js",
        link: "https://github.com/Ekatak/Blog"
    },
    project4: {
        title: "Project 4: Tic Tac Toe",
        description: "A simple yet engaging Tic Tac Toe game built using HTML, CSS, and JavaScript. It demonstrates game logic and user interaction on the web, suitable for both beginners and hobbyists.",
        technologies: "HTML, CSS, JavaScript",
        link: "https://github.com/Ekatak/Tic-Tac-Toe"
    }
};

// Add hover effect on project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('click', function() {
        const projectKey = `project${index + 1}`;
        const project = projectsData[projectKey];

        // Resetting the content for new typing
        document.getElementById('project-title').textContent = "";
        document.getElementById('project-description').textContent = "";
        document.getElementById('project-technologies').textContent = "";

        typeText(project.title, 'project-title');
        setTimeout(() => {
            document.getElementById('project-description').textContent = project.description;
            typeText(project.technologies, 'project-technologies');
            // Set project link
            document.getElementById('project-link').href = project.link;
            document.getElementById('project-link').textContent = "View Project";
        }, 2000); // Adjust delay to sync with typing effect

        // Show overlay with project details
        const overlay = document.querySelector('.project-overlay');
        overlay.style.display = 'flex';
        overlay.style.animation = 'fadeIn 0.5s ease forwards';
    });
});

// Typing effect for project details
function typeText(text, elementId) {
    let letterIndex = 0;
    function type() {
        if (letterIndex < text.length) {
            document.getElementById(elementId).textContent += text.charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 100); // Typing speed
        }
    }
    type();
}

// Close overlay animation
document.getElementById('close-overlay').addEventListener('click', function() {
    const overlay = document.querySelector('.project-overlay');
    overlay.style.animation = 'fadeOut 0.5s ease forwards';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500); // Wait for fade-out animation to complete
});

// Adding hover effects on navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.transition = 'color 0.4s ease, transform 0.4s ease';
        this.style.color = '#ff6347'; // Highlight color on hover
        this.style.transform = 'translateY(-5px)';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = ''; // Reset color
        this.style.transform = ''; // Reset position
    });
});

// Add smooth scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.display = 'none'; // Initially hidden
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.opacity = '0';
        setTimeout(() => {
            scrollToTopBtn.style.display = 'none';
        }, 500);
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
