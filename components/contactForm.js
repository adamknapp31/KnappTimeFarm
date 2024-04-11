document.addEventListener("DOMContentLoaded", function() {
    var contactFormHTML = `
    <div class="container mt-5 p-3">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                
                <form action="https://formspree.io/f/moqgpkyv" method="POST">
                    <h5 class="card-title">Contact Us</h5>
                    <div class="mb-3">
                        <label for="emailInput" class="form-label">Your email:</label>
                        <input type="email" class="form-control" id="emailInput" name="email" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="messageTextarea" class="form-label">Your message:</label>
                        <textarea class="form-control" id="messageTextarea" name="message" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    </div>
    `;

    // Appends the modal to the body of the document
    document.body.insertAdjacentHTML('beforeend', contactFormHTML);
});
