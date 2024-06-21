document.addEventListener("DOMContentLoaded", () => {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if(name && email && message) {
            alert('Merci pour votre message ! Nous vous contacterons bientôt.');
            contactForm.reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });

    // Load forum content dynamically (for example purpose)
    const forumContent = document.getElementById('forumContent');
    forumContent.innerHTML = '<p>Chargement des discussions...</p>';

    setTimeout(() => {
        forumContent.innerHTML = `
            <div class="forum-post">
                <h3>Bienvenue sur le forum</h3>
                <p>Postez vos questions et partagez vos expériences ici.</p>
            </div>
            <div class="forum-post">
                <h3>Événements à venir</h3>
                <p>Découvrez nos prochains événements et inscrivez-vous.</p>
            </div>
        `;
    }, 2000);

    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
