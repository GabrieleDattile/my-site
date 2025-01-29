document.addEventListener('DOMContentLoaded', () => {
    const username = 'GabrieleDattile'; // Sostituisci con il tuo username GitHub
    const projectsContainer = document.getElementById('github-projects');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Nessuna descrizione disponibile.'}</p>
                    <a href="${repo.html_url}" target="_blank">Vai al progetto</a>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => {
            console.error('Errore nel caricamento dei progetti:', error);
        });
});