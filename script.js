document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button[onclick='generateSignature()']").onclick = generateSignature;
    document.querySelector("button[onclick='copyToClipboard()']").onclick = copyToClipboard;
    document.querySelector("button[onclick='copyToSignatureRescue()']").onclick = copyToSignatureRescue;
});

function generateSignature() {
    var name = document.getElementById("name").value;
    var designation = document.getElementById("designation").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin").value;
    var profilePic = document.getElementById("profilePic").files[0];
    var campus = document.getElementById("campus").value;

    var reader = new FileReader();
    reader.onloadend = function () {
        var profilePicBase64 = reader.result;
        var signatureHTML = `
        <div class="signature-container">
            <div class="left-column">
                <img src="${profilePicBase64}" alt="Profile Picture" class="profile-pic">
                <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/school-logo.png?raw=true" alt="School Logo" class="school-logo">
                <div class="school-locations">
                    <span>Noida</span> |
                    <span>Gurgaon</span> |
                    <span>Faridabad</span> |
                    <span>Delhi</span> |
                    <span>Chennai</span>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div class="signature-details">
                <div class="name-linkedin">
                    <span class="name">${name}</span>
                    <div class="vertical-line-small"></div>
                    <a href="${linkedin}" target="_blank">
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn" class="linkedin-logo">
                    </a>
                </div>
                <span class="designation">${designation}</span>
                <div class="contact-info">
                    <div>
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/phone-icon.png?raw=true" alt="Phone Icon">
                        <a href="tel:${phone}">${phone}</a>
                    </div>
                    <div>
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/email-icon.png?raw=true" alt="Email Icon">
                        <a href="mailto:${email}">${email}</a>
                    </div>
                    <div>
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/website-icon.png?raw=true" alt="Web Icon">
                        <a href="https://shivnadarschool.edu.in/">https://shivnadarschool.edu.in/</a>
                    </div>
                </div>
                <div class="social-icons">
                    <a href="https://www.facebook.com/shivnadarschool"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/facebook-icon.png?raw=true" alt="Facebook"></a>
                    <a href="https://www.instagram.com/shivnadarschool"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/instagram-icon.png?raw=true" alt="Instagram"></a>
                    <a href="https://www.youtube.com/@shivnadarschools"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/youtube-icon.png?raw=true" alt="YouTube"></a>
                    <a href="https://www.linkedin.com/school/shiv-nadar-school/"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn"></a>
                    <a href="https://www.twitter.com/shivnadarschool"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/twitter-icon.png?raw=true" alt="Twitter"></a>
                </div>
            </div>
        </div>
        `;

        document.getElementById("signature-preview").innerHTML = signatureHTML;
    };

    if (profilePic) {
        reader.readAsDataURL(profilePic);
    } else {
        reader.onloadend();
    }
}

function copyToClipboard() {
    var signatureHTML = document.getElementById("signature-preview").innerHTML;
    var tempInput = document.createElement("textarea");
    tempInput.value = signatureHTML;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Signature copied to clipboard!");
}

function copyToSignatureRescue() {
    var signatureHTML = document.getElementById("signature-preview").innerHTML;
    var tempInput = document.createElement("textarea");
    tempInput.value = signatureHTML;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Signature copied to clipboard! Now paste it into Signature Rescue.");
}
