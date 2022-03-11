class CustomServices extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 py-5 order-md-last">
                        <div class="heading-section ftco-animate">
                            <span class="subheading">Services</span>
                            <h2 class="mb-4">Lawn Services</h2>
                            <p>Other services available, please feel free to contact me and get a quote.</p>
                            <p><a href="/contact.html" class="btn btn-primary py-3 px-4">Get a Quote</a></p>
                        </div>
                    </div>
                    <div class="col-lg-9 services-wrap px-4 pt-5">
                        <div class="row pt-md-3">
                            <div class="col-md-4 d-flex align-items-stretch">
                                <div class="services text-center">
                                    <div class="icon d-flex justify-content-center align-items-center">
                                        <span class="flaticon-fence"></span>
                                    </div>
                                    <div class="text">
                                        <h3>Garden Care</h3>
                                        <p>
                                            Plants, transplants, fertilizes, applies chemicals, waters, prunes, and weeds flower beds and plant areas. Maintains
                                            flowers, bushes, trees, and shrubs. Implements detailed landscape plans.
                                        </p>
                                    </div>
                                    <a href="/contact.html" class="btn-custom d-flex align-items-center justify-content-center"
                                        ><span class="ion-ios-arrow-round-forward"></span
                                    ></a>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex align-items-stretch">
                                <div class="services text-center">
                                    <div class="icon d-flex justify-content-center align-items-center">
                                        <span class="flaticon-lawn-mower"></span>
                                    </div>
                                    <div class="text">
                                        <h3>Lawn mowing</h3>
                                        <p>
                                            Immense knowledge of cutting grass, trimming hedge, uprooting weeds and removing garbage. Extensive knowledge of
                                            using grass and hedge cutting machinery and related gardening tools. Familiarity with planting, protection and
                                            maintenance of seeds, saplings and flower-beds.
                                        </p>
                                    </div>
                                    <a href="/contact.html" class="btn-custom d-flex align-items-center justify-content-center"
                                        ><span class="ion-ios-arrow-round-forward"></span
                                    ></a>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex align-items-stretch">
                                <div class="services text-center">
                                    <div class="icon d-flex justify-content-center align-items-center">
                                        <span class="flaticon-natural-resources"></span>
                                    </div>
                                    <div class="text">
                                        <h3>Lawn Care</h3>
                                        <p>
                                            mow grass, seed lawns, apply fertilizers and pest controls, trim hedges and trees, and advise on maintenance
                                            practices.
                                        </p>
                                    </div>
                                    <a href="/contact.html" class="btn-custom d-flex align-items-center justify-content-center"
                                        ><span class="ion-ios-arrow-round-forward"></span
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define('custom-services', CustomServices);
