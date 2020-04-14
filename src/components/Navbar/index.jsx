import React from "react";

function NavBar() {
    return (
        <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light-grey">
        <h4 id="name">Jennifer Kim</h4>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="portfolio.html">Portfolio <span
                        class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="index.html">About me</a>
                <a class="nav-item nav-link" href="contact.html">Contact</a>
                <a class="nav-item nav-link" href="https://www.linkedin.com/in/jennaykim"></a><i
                    class="fab fa-linkedin icon-3x"></i>
                <a class="nav-item nav-link" href="https://github.com/programmerkim"></a><i
                    class="fab fa-github-square icon-3x"></i>
            </div>
        </div>
    </nav>
</header>
    )
};

export default NavBar;