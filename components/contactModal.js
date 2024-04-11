document.addEventListener("DOMContentLoaded", function() {
    var contactModelHTML = `
    <div class="modal fade" id="contactFormModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Contact Us</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- Form Inside Modal -->
                    <form action="https://formspree.io/f/moqgpkyv" method="POST">
                        <div class="form-group">
                            <label for="email">Your email:</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Your message:</label>
                            <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                        </div>
                        <!-- your other form fields go here -->
                        <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;

    // Appends the modal to the body of the document
    document.body.insertAdjacentHTML('beforeend', contactModelHTML);
});
