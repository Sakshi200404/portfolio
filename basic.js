document.addEventListener('DOMContentLoaded', () => {
    // Skills Section
    const skills = [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 70 },
        { name: 'React', level: 65 },
        { name: 'Node.js', level: 60 }
    ];

    const skillSet = document.querySelector('.skill-set');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill');
        skillItem.innerHTML = `
            <p>${skill.name}</p>
            <div class="skill-bar" style="width: ${skill.level}%;"></div>
        `;
        skillSet.appendChild(skillItem);
    });

    // Portfolio Section - Fetch GitHub Repositories
    const portfolioGallery = document.querySelector('.portfolio-gallery');
    const username = 'Sakshi200404'; // Replace with your GitHub username

    async function fetchGitHubProjects() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const projects = await response.json();

            projects.slice(0, 6).forEach(project => { // Limit to 6 projects
                const projectItem = document.createElement('div');
                projectItem.classList.add('portfolio-item');
                projectItem.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description || 'No description available'}</p>
                    <a href="${project.html_url}" target="_blank">View Project</a>
                `;
                portfolioGallery.appendChild(projectItem);
            });
        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
            portfolioGallery.innerHTML = '<p>Unable to load projects.</p>';
        }
    }

    fetchGitHubProjects();
});
