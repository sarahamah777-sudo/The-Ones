// ===========================================
// A & S REAL ESTATE
// CONTACT US FORM
// ===========================================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    const contactConsent =
        document.getElementById("contactConsent");

    const marketingConsent =
        document.getElementById("marketingConsent");

    const submitButton =
        document.getElementById("submitButton");

    const formStatus =
        document.getElementById("formStatus");


    // Check that the required HTML elements exist.
    if (
        !form ||
        !contactConsent ||
        !marketingConsent ||
        !submitButton ||
        !formStatus
    ) {
        console.error(
            "Contact form elements were not found. Check the IDs in Contactus.html."
        );

        return;
    }


    // ===========================================
    // CONTROL THE SUBMIT BUTTON
    // ===========================================

    function updateSubmitButton() {

        const fieldsAreValid = form.checkValidity();

        const consentIsGiven = contactConsent.checked;

        submitButton.disabled = !(
            fieldsAreValid && consentIsGiven
        );

    }


    // Update the button when a visitor types or changes a field.
    form.addEventListener("input", updateSubmitButton);

    form.addEventListener("change", updateSubmitButton);


    // ===========================================
    // HANDLE FORM SUBMISSION
    // ===========================================

    form.addEventListener("submit", function (event) {

        // Stop the browser from reloading the page.
        event.preventDefault();

        formStatus.textContent = "";
        formStatus.className = "";


        // Check that required fields are valid.
        if (!form.checkValidity()) {

            form.reportValidity();

            formStatus.textContent =
                "Please complete all required fields correctly.";

            formStatus.className = "form-error";

            updateSubmitButton();

            return;
        }


        // The first consent checkbox is required.
        if (!contactConsent.checked) {

            formStatus.textContent =
                "Please consent to being contacted about your property enquiry.";

            formStatus.className = "form-error";

            updateSubmitButton();

            return;
        }


        // Collect the form information.
        const enquiry = {

            fullName:
                form.elements.fullName.value.trim(),

            email:
                form.elements.email.value.trim(),

            phone:
                form.elements.phone.value.trim(),

            enquiryType:
                form.elements.enquiryType.value,

            location:
                form.elements.location.value.trim(),

            propertyType:
                form.elements.propertyType.value,

            message:
                form.elements.message.value.trim(),

            feedback:
                form.elements.feedback.value.trim(),

            contactConsent:
                contactConsent.checked,

            marketingConsent:
                marketingConsent.checked,

            submittedAt:
                new Date().toISOString()

        };


        // DEMONSTRATION ONLY:
        // This displays the form data in the browser console.
        // It does not send the enquiry to your email or a server.

        console.log(
            "Demo enquiry data — not sent to a server:",
            enquiry
        );


        // Tell the visitor the real status of the form.
        formStatus.textContent =
            "Your form passed validation, but it has not been sent yet. A backend or form service must be connected to receive your enquiry.";

        formStatus.className = "form-success";

    });


    // ===========================================
    // TEMPORARY CONTACT LINK PLACEHOLDERS
    // ===========================================

    const placeholderLinks = document.querySelectorAll(
        '[data-placeholder-link="true"]'
    );

    placeholderLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            alert(
                "Please add your actual business contact details or social media link to this button in Contactus.html."
            );

        });

    });


    // Set the correct button state when the page loads.
    updateSubmitButton();

});
console.log("A & S REAL ESTATE JavaScript is working!");
alert("JavaScript is connected!");