class CustomTestimonial extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `       
        <section class="ftco-section testimony-section">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-md-7 text-center heading-section ftco-animate">
                        <span class="subheading">Testimonial</span>
                        <h2 class="mb-4">Happy Clients</h2>
                    </div>
                </div>
                <div class="row ftco-animate">
                    <div class="col-md-12">
                        <div class="carousel-testimony owl-carousel ftco-owl">
                            <div class="item">
                                <div class="testimony-wrap py-4">
                                    <div class="text">
                                        <p class="mb-4">
                                            Did a great job mowing my lawn and taking care of all other "lawn care" maintaince. Highly reccomend.
                                        </p>
                                        <div class="d-flex align-items-center">
                                            <!-- <div class="user-img" style="background-image: url(images/person_1.jpg)"></div> -->
                                            <div class="pl-3">
                                                <p class="name">Ian M</p>
                                                <span class="position">Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap py-4">
                                    <div class="text">
                                        <p class="mb-4">Wonderful job, looking forward to having him back!</p>
                                        <div class="d-flex align-items-center">
                                            <!-- <div class="user-img" style="background-image: url(images/person_2.jpg)"></div> -->
                                            <div class="pl-3">
                                                <p class="name">Lindy R</p>
                                                <span class="position">Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap py-4">
                                    <div class="text">
                                        <p class="mb-4">
                                            Didnt have many reviews at the time I booked him, but he ended up doing a good job. Will be staying with his
                                            services.
                                        </p>
                                        <div class="d-flex align-items-center">
                                            <!-- <div class="user-img" style="background-image: url(images/person_3.jpg)"></div> -->
                                            <div class="pl-3">
                                                <p class="name">Thomas G</p>
                                                <span class="position">Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap py-4">
                                    <div class="text">
                                        <p class="mb-4">Pat came and check all the boxes, was very professional</p>
                                        <div class="d-flex align-items-center">
                                            <!-- <div class="user-img" style="background-image: url(images/person_1.jpg)"></div> -->
                                            <div class="pl-3">
                                                <p class="name">Sydne S</p>
                                                <span class="position">Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap py-4">
                                    <div class="text">
                                        <p class="mb-4">Highly reccomend</p>
                                        <div class="d-flex align-items-center">
                                            <!-- <div class="user-img" style="background-image: url(images/person_2.jpg)"></div> -->
                                            <div class="pl-3">
                                                <p class="name">Vladimir P</p>
                                                <span class="position">Customer</span>
                                            </div>
                                        </div>
                                    </div>
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

window.customElements.define('custom-testimonial', CustomTestimonial);
