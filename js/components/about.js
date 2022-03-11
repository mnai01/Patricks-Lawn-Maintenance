class CustomAbout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `       
        <section class="ftco-section ftco-no-pt ftco-no-pb bg-light">
            <div class="container">
                <div class="row d-flex">
                    <div class="col-md-6 d-flex">
                        <div
                            class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end"
                            style="background-image: url(images/about.jpg)"
                        >
                            <!-- <a href="https://vimeo.com/45830194" class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                            <span class="icon-play"></span>
                            </a> -->
                        </div>
                    </div>
                    <div class="col-md-6 pl-md-5">
                        <div class="row justify-content-start py-5">
                            <div class="col-md-12 heading-section ftco-animate">
                                <span class="subheading">Welcome to Patrick's Lawn Maintenance</span>
                                <h2 class="mb-4">Welcome to Patrick's Lawn Maintenance</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                <div class="services-wrap">
                                    <a href="/services.html" class="services-list"
                                        >Gutter cleaning
                                        <div class="btn-custom d-flex align-items-center justify-content-center">
                                            <span class="ion-ios-arrow-round-forward"></span>
                                        </div>
                                    </a>
                                    <a href="/services.html" class="services-list"
                                        >Organinc fertilization and weed control
                                        <div class="btn-custom d-flex align-items-center justify-content-center">
                                            <span class="ion-ios-arrow-round-forward"></span>
                                        </div>
                                    </a>
                                    <a href="/services.html" class="services-list"
                                        >Compost top dressing &amp; compost tea application
                                        <div class="btn-custom d-flex align-items-center justify-content-center">
                                            <span class="ion-ios-arrow-round-forward"></span>
                                        </div>
                                    </a>
                                    <a href="/services.html" class="services-list"
                                        >New lawn installation
                                        <div class="btn-custom d-flex align-items-center justify-content-center">
                                            <span class="ion-ios-arrow-round-forward"></span>
                                        </div>
                                    </a>
                                    <a href="#" class="services-list"
                                        >Mulch and other services available
                                        <div class="btn-custom d-flex align-items-center justify-content-center">
                                            <span class="ion-ios-arrow-round-forward"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
`;
    }
}

window.customElements.define('custom-about', CustomAbout);
