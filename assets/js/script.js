function prepare_template(template_id, deck_name) {
    let template = document.getElementById(template_id).innerHTML;
    fetch("../src/" + deck_name + ".json")
        .then(response => response.json())
        .then(data => {
            const rendered = Mustache.render(template, data);
            document.getElementById(template_id).innerHTML = rendered;
        });
}


function toogle_mode() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-bs-theme", newTheme);
}


window.onload = function () {
    // se o sistema estive em darkmode, torna doc darkmode ao carregar pagina
    const prefersDark = window.matchMedia('(prefers-color-scheme: light)');
    
    if (prefersDark.matches) {
        const body = document.body;
        const currentTheme = body.getAttribute("data-bs-theme");
        body.setAttribute("data-bs-theme", "light");
    }

};