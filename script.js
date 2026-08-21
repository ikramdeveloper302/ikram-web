function showMessage() {

    document.getElementById("welcome").innerHTML =
        "Ikram Web me khush aamdeed!";

    document.getElementById("message").innerHTML =
        "Thank you for visiting Ikram Web!";

    document.getElementById("myButton").innerHTML =
        "Clicked";

}


/* CONTACT FORM */

function sendMessage(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let message =
        document.getElementById("userMessage").value;


    let whatsappMessage =
        "Hello Ikram Web!" +
        "\n\nName: " + name +
        "\nEmail: " + email +
        "\nProject: " + message;


    let whatsappURL =
        "https://wa.me/923295629126?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

}