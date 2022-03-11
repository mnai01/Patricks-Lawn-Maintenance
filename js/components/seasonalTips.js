class CustomSeasonalTips extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-md-10 text-center heading-section ftco-animate">
                    <span class="subheading">Tips &amp; Techniques</span>
                    <h2 class="mb-4">Seasonal Lawn Care Tips</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="carousel-seasonal owl-carousel ftco-owl">
                        <div class="item">
                            <div class="wrap">
                                <div
                                    class="seasonal img d-flex align-items-center justify-content-center"
                                    style="background-image: url(images/seasonal-1.jpg)"
                                ></div>
                                <div class="text text-center px-4">
                                    <h3><a href="#">Spring</a></h3>
                                    <p>Fertilize with premium lawn foods for quick green up and extended feeding for up to three months.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="wrap">
                                <div
                                    class="seasonal img d-flex align-items-center justify-content-center"
                                    style="background-image: url(images/seasonal-2.jpg)"
                                ></div>
                                <div class="text text-center px-4">
                                    <h3><a href="#">Summer</a></h3>
                                    <p>Water according to your weather and fertilize warm-season grasses every four to eight weeks during active growth</p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="wrap">
                                <div
                                    class="seasonal img d-flex align-items-center justify-content-center"
                                    style="background-image: url(images/seasonal-3.jpg)"
                                ></div>
                                <div class="text text-center px-4">
                                    <h3><a href="#">Winter</a></h3>
                                    <p>Sharpen and clean mowers and tools so they're ready for spring.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="wrap">
                                <div
                                    class="seasonal img d-flex align-items-center justify-content-center"
                                    style="background-image: url(images/seasonal-4.jpg)"
                                ></div>
                                <div class="text text-center px-4">
                                    <h3><a href="#">Fall</a></h3>
                                    <p>
                                        Seed and overseed cool-season lawns to renovate, thicken and strengthen
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    }
}

window.customElements.define('custom-seasonal-tips', CustomSeasonalTips);
