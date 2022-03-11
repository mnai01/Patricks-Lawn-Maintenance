class CustomContactBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
    <section class="ftco-intro bg-primary py-5">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-6">
                    <h2>Contact with us</h2>
                    <p>Do you have any comments or questions about our services then contact us.</p>
                </div>
                <div class="col-md-5 text-md-right">
                    <span class="contact-number">(845) 750-3760</span>
                </div>
            </div>
        </div>
    </section>`;
    }
}

window.customElements.define('custom-contact-bar', CustomContactBar);
