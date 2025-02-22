class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Extract attributes
        const image = this.getAttribute("image");
        const title = this.getAttribute("title");
        const description = this.getAttribute("description");
        const link = this.getAttribute("link") || "#"; // Default to "#" if no link is provided

        // Card template with padding added inside the wrapper
        this.shadowRoot.innerHTML = `
            <style>
                /* Wrapper to add spacing */
                .card-wrapper {
                    padding: 0px; /* Adds space around the card */
                    display: inline-block; /* Keeps natural flow */
                    width: 100%;
                }

                .card {
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    text-align: center;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-decoration: none;
                    color: inherit;
                    width: 100%;
                    min-width: 200px;
                    flex-grow: 1;
                }

                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }

                .card img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                    border-radius: 8px;
                }

                .card h3 {
                    font-size: 1.2em;
                    margin: 10px 0;
                    font-weight: bold;
                }

                .card p {
                    font-size: 0.9em;
                    color: #555;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            </style>

            <div class="card-wrapper">
                <a href="${link}" class="card">
                    <img src="${image}" alt="${title}">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </a>
            </div>
        `;
    }
}

// Register the custom component
customElements.define("project-card", ProjectCard);
