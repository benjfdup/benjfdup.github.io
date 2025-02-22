document.addEventListener("DOMContentLoaded", function () {
    loadComponent("components/navbar.html", "navbar-container");
    loadComponent("components/footer.html", "footer-container");
});

function loadComponent(file, containerId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}
