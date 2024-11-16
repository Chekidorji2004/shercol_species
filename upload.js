document.getElementById("photoUploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display success message
    document.getElementById("successMessage").style.display = "block";

    // Optionally, you can reset the form after showing the success message
    this.reset();
});
