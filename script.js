document.getElementById("bankAccountForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form data
    const formData = new FormData(event.target);
    const customerId = formData.get("customerId");
    const age = formData.get("age");
    const aadharNumber = formData.get("aadharNumber");
    // You can now process this data further, like sending it to a server for account creation
    console.log("Customer ID:", customerId);
    console.log("Age:", age);
    console.log("Aadhar Number:", aadharNumber);
    // For demonstration purposes, I'm just logging the data to console
});
