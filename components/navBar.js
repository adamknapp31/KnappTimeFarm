document.addEventListener("DOMContentLoaded", function(){
    var navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: rgba(0, 0, 0, 0.5);">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html" style="color: #FFFFFF;">
                    <img src="images/FarmLogo.svg" alt="Farm logo showing the brand identity" style="max-height: 80px; filter: brightness(0) invert(1);">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" style="border-color: rgba(255, 255, 255, 0.5);">
                    <span class="navbar-toggler-icon" style="background-image: url('data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(255, 255, 255, 0.8)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E');"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html" style="color: #FFFFFF;">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="story.html" style="color: #FFFFFF;">Story</a></li>
                        <!-- Add more navbar items here -->
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
});
