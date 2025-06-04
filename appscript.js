document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let doctor = document.getElementById("doctor").value;

    if (name && email && phone && date && doctor) {
        document.getElementById("confirmation").innerHTML = 
            ` Appointment Confirmed! <br> Patient: ${name} <br> Doctor: ${doctor} <br> Date: ${date}`;
    } else {
        document.getElementById("confirmation").innerHTML = 
            " Please fill all the fields!";
    }
});
