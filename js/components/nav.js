class CustomNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="container pt-5 pb-4">
        <div class="row justify-content-between">
            <div class="col-md-8 order-md-last">
                <div class="row">
                    <div class="col-md-6 text-center">
                        <img src="./images//Logo.png" height="150px" />
                        <!-- <a class="navbar-brand" href="index.html">Lawn<span>Care</span></a> -->
                    </div>
                    <!-- <div class="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                        <form action="#" class="searchform order-lg-last">
                            <div class="form-group d-flex">
                                <input type="text" class="form-control pl-3" placeholder="Search" />
                                <button type="submit" placeholder="" class="form-control search"><span class="fa fa-search"></span></button>
                            </div>
                        </form>
                    </div> -->
                </div>
            </div>
            <div class="col-md-4 d-flex">
                <div class="social-media">
                    <p class="mb-0 d-flex">
                        <a href="https://business.facebook.com/PatricksLawnMaintenance" class="d-flex align-items-center justify-content-center"
                            ><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a
                        >
                        <a href="https://www.instagram.com/patrickslawnmaintenance/" class="d-flex align-items-center justify-content-center"
                            ><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="fa fa-bars"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="about.html" class="nav-link">About us</a></li>
                    <li class="nav-item"><a href="services.html" class="nav-link">Services</a></li>
                    <li class="nav-item"><a href="gallery.html" class="nav-link">Gallery</a></li>
                    <!-- <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li> -->
                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>`;
    }
}

window.customElements.define('custom-nav', CustomNav);
