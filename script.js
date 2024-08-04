document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: [
            "Java Full Stack Developer",
            "Web Developer",
            "Backend Developer",
            "Frontend Developer",
            "SQL Developer"
        ],
        typeSpeed: 50, // Speed in milliseconds to type each character
        backSpeed: 30, // Speed in milliseconds to delete each character
        backDelay: 2000, // Time before starting to delete the text
        loop: true, // Repeat the typing animation
        showCursor: true, // Show the blinking cursor
        cursorChar: '|', // Character for the cursor
    };

    var typed = new Typed(".text", options);

function showSection(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
                section.style.display = 'block';
            } else {
                section.classList.remove('active');
                section.style.display = 'none';
            }
        });
    }

    // Initially show the home section
    showSection('home');

    // Attach the showSection function to the global scope
    window.showSection = showSection;

    // Show the about content when more-btn is clicked
    const moreBtn = document.querySelector('.more-btn');
    if (moreBtn) {
        moreBtn.addEventListener('click', () => showSection('about'));
    }

    // Project details view and close functionality
    window.viewProject = function(projectId) {
        const projectDetails = document.querySelectorAll('.project-details');
        projectDetails.forEach(detail => {
            detail.style.display = 'none';
        });

        const project = document.getElementById(projectId);
        if (project) {
            project.style.display = 'block';
        }
    };

    window.closeProjectDetails = function() {
        const projectDetails = document.querySelectorAll('.project-details');
        projectDetails.forEach(detail => {
            detail.style.display = 'none';
        });
    };
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const contactData = {
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            };

            let storedMessages = localStorage.getItem('contactMessages');
            if (storedMessages) {
                storedMessages = JSON.parse(storedMessages);
            } else {
                storedMessages = [];
            }

            storedMessages.push(contactData);
            localStorage.setItem('contactMessages', JSON.stringify(storedMessages));

            alert('Message sent successfully!');

            // Optionally, clear the form fields
            contactForm.reset();
        });
    }
});
