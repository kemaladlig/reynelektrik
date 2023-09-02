function sendMail() {
    var params = {
        name: document.getElementsByName("name")[0].value,
        email: document.getElementsByName("email")[0].value,
        subject: document.getElementsByName("subject")[0].value,
        message: document.getElementsByName("message")[0].value
    };

    const serviceID = "service_hgrcyln";
    const templateID = "template_wmla3qn";

    emailjs.send(serviceID, templateID, params).then(
        res => {
            document.querySelector(".email-form").reset();
            console.log(res);
            alert("Mesajınız başarıyla gönderildi.");
        }
    )
}
