function submitFeedback(event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Get the form elements
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var feedbackField = document.getElementById("feedback");
    var submitButton = document.getElementById("submitButton");
    var feedbackForm = document.getElementById("feedbackForm");

    // Hide name and email fields after submission
    nameField.style.display = "none";
    emailField.style.display = "none";

    // Change the submit button text and style to indicate success
    submitButton.classList.add("submitted");
    submitButton.textContent = "Feedback Submitted!";
    alert("Your comment accepted!")

    // Optionally, clear the feedback input field
    feedbackField.value = "";

    // Create a timeout to reset the form after a short delay
    setTimeout(function() {
        // Reset the form (make name and email visible again)
        nameField.style.display = "block";
        emailField.style.display = "block";

        // Reset the feedback and button text
        submitButton.classList.remove("submitted");
        submitButton.textContent = "Submit Feedback";

        // Reset the form fields
        feedbackForm.reset();
    }); 
}
