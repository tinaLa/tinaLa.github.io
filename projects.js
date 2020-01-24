function filterAllProjects() {
    let projects = document.getElementsByClassName("project");
    
    for(i = 0; i < projects.length; i++) {
        projects[i].classList.add("visible");
    }
}

function filterTechnicalProjects() {
    let projects = document.getElementsByClassName("project");
    
    for(i = 0; i < projects.length; i++) {
        if (projects[i].classList.contains("technical")) {
            projects[i].classList.add("visible");
        } else {
            projects[i].classList.remove("visible");
        }
    }
}

function filterDesignProjects() {
    let projects = document.getElementsByClassName("project");
    
    for(i = 0; i < projects.length; i++) {
        if (projects[i].classList.contains("design")) {
            projects[i].classList.add("visible");
        } else {
            projects[i].classList.remove("visible");
        }
    }
}

function activeButton() {
    let all = document.getElementById("all-button");
    let technical = document.getElementById("technical-button");
    let design = document.getElementById("design-button");
}