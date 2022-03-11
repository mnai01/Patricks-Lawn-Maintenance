class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="ftco-footer ftco-bg-dark ftco-section">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-6 col-lg">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="logo">
                            <a href="#">Patrick's <span>Lawn Maintenance</span></a>
                        </h2>
                        <p>We are a privately owned and operated lawn maintenance company servicing Westchester and Putnam County, New York, with over 10 years of experience. Our services include: weekly maintenance, mulching, pruning, spring and fall clean-ups.</p>
                        <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li class="ftco-animate">
                                <a href="https://business.facebook.com/PatricksLawnMaintenance"><span class="icon-facebook"></span></a>
                            </li>
                            <li class="ftco-animate">
                                <a href="https://www.instagram.com/patrickslawnmaintenance/"><span class="icon-instagram"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg">
                    <div class="ftco-footer-widget mb-4 ml-md-5">
                        <h2 class="ftco-heading-2">Services</h2>
                        <ul class="list-unstyled">
                            <li>
                                <a href="/services.html" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>Garden Care</a>
                            </li>
                            <li>
                                <a href="/services.html" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>Lawn Mowing</a>
                            </li>
                            <li>
                                <a href="/services.html" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>Lawn Care</a>
                            </li>
                            <li>
                                <a href="/services.html" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>Gutter Cleaning</a>
                            </li>
                            <li>
                                <a href="/services.html" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>New Lawn Installation</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Contact information</h2>
                        <div class="block-23 mb-3">
                            <ul>
                                <li>
                                    <span class="icon icon-map-marker"></span
                                    ><span class="text">Westchester and Putnam County, New York, USA</span>
                                </li>
                                <li>
                                    <a href="tel:8457503760"><span class="icon icon-phone"></span><span class="text">(845) 750-3760</span></a>
                                </li>
                                <li >
                                    <a href="mailto:patrickslawnmaintenance@gmail.com" ><span class="icon icon-envelope"></span><span class="text px-2" >
                                    patrickslawnmaintenance@gmail.com</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Business Hours</h2>
                        <div class="opening-hours">
                            <h4>Opening Days:</h4>
                            <p class="pl-3">
                                <span>Monday – Friday : 9am to 5pm</span>
                                <span>Saturday : 9am to 5pm</span>
                            </p>
                            <h4>Vacations:</h4>
                            <p class="pl-3">
                                <span>All Sunday Days</span>
                                <span>All Official Holidays</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <p>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright &copy;
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        All rights reserved | This template is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by
                        <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </p>
                </div>
            </div>
        </div>
    </footer>`;
    }
}

window.customElements.define('custom-footer', CustomFooter);
