function previewData() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;

    // Display the preview data
    document.getElementById("previewName").innerText = name;
    document.getElementById("previewAddress").innerText = address;
    document.getElementById("previewContact").innerText = contact;
    document.getElementById("previewEmail").innerText = email;
    document.getElementById("previewGender").innerText = gender;
    document.getElementById("previewDOB").innerText = dob;

    // Show the preview section
    document.getElementById("previewSection").style.display = "block";
}

// Form submission handling
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    // Optionally, you can reset the form or redirect the user after submission
    document.getElementById("registrationForm").reset();
    document.getElementById("previewSection").style.display = "none";
});
