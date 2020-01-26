function filterAllProjects() {
    let projects = document.getElementsByClassName("project");
    
    for(i = 0; i < projects.length; i++) {
        projects[i].classList.add("visible");
    }
    
    activeButton("all");
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
    
    activeButton("technical");
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
    
    activeButton("design");
}

function activeButton(type) {
    let all = document.getElementById("all-button");
    let technical = document.getElementById("technical-button");
    let design = document.getElementById("design-button");
    
    if (type === "all") {
        all.classList.add("active");
        technical.classList.remove("active");
        design.classList.remove("active");
    } else if (type === "technical") {
        all.classList.remove("active");
        technical.classList.add("active");
        design.classList.remove("active");
    } else {
        all.classList.remove("active");
        technical.classList.remove("active");
        design.classList.add("active");
    }
}