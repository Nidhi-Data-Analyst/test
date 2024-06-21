document.getElementById("generate").onclick = function() {
    generateSignature();
};

document.getElementById("copyToClipboard").onclick = function() {
    copyToClipboard();
};

document.getElementById("copyToSignatureRescue").onclick = function() {
    copyToSignatureRescue();
};

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
        <div class="signature-container" style="font-family: Poppins, Arial, sans-serif; line-height: 1.5; color: #a6a6a6; display: flex; align-items: flex-start; border: 1px solid #e0e0e0; padding: 2px; border-radius: 5px; margin-left: 5px; width:100%; max-width:300px;">
            <div class="left-column" style="display:block; margin:0px auto; text-align:center;">
                <img src="${profilePicBase64}" alt="Profile Picture" class="profile-pic" style="border-radius: 50%; width: 70px;">
                <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/school-logo.png?raw=true" alt="School Logo" class="school-logo" style="max-width: 60px; width:100%; margin-top: 10px; display:block; margin:0px auto; ">
                <div class="school-locations" style="font-size: 5px; color: #0d56a2; text-align: center; margin-top: 3px;">
                    <span style="font-weight: normal;">Noida</span> |
                    <span style="font-weight: normal;">Gurgaon</span> |
                    <span style="font-weight: normal;">Faridabad</span> |
                    <span style="font-weight: normal;">Delhi</span> |
                    <span style="font-weight: normal;">Chennai</span>
                </div>
            </div>
            <div class="vertical-line" style="width: 1.5px; background-color: #a6a6a6; height: 130px; margin: 0 10px;"></div>
            <div class="signature-details" style="display:block; text-align:center;">
                <div class="name-linkedin" style="align-items: center;">
                    <span class="name" style="font-weight: bold; color: #a6a6a6; font-size: 14px;">${name}</span>
                    <div class="vertical-line-small"></div>
                    <a href="${linkedin}" target="_blank">
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn" class="linkedin-logo" style="width: 15px; height: 15px;">
                    </a>
                </div>
                <span class="designation" style="color: #a6a6a6; font-size: 12px; margin-top: 0px;">${designation}</span>
                <div class="contact-info" style="margin-top: 10px; display:block; clear:both; font-size: 10px;">
                    <div style="display:block; align-items: center; margin-bottom: 2px;">
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/phone-icon.png?raw=true" alt="Phone Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                        <a href="tel:${phone}" style="color: #a6a6a6; font-size: 10px; margin-left: 5px; text-decoration: none;">${phone}</a>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 2px;">
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/email-icon.png?raw=true" alt="Email Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                        <a href="mailto:${email}" style="color: #a6a6a6; font-size: 10px; margin-left: 5px; text-decoration: none;">${email}</a>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 2px;">
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/website-icon.png?raw=true" alt="Web Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                        <a href="https://shivnadarschool.edu.in/" style="color: #a6a6a6; font-size: 10px; margin-left: 5px; text-decoration: none;">https://shivnadarschool.edu.in/</a>
                    </div>
                </div>
                <div class="social-icons" style="margin-top: 3px; display: flex;">
                    <a href="https://www.facebook.com/shivnadarschool" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/facebook-icon.png?raw=true" alt="Facebook" style="width: 15px;"></a>
                    <a href="https://www.instagram.com/shivnadarschool" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/instagram-icon.png?raw=true" alt="Instagram" style="width: 15px;"></a>
                    <a href="https://www.youtube.com/@shivnadarschools" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/youtube-icon.png?raw=true" alt="YouTube" style="width: 15px;"></a>
                    <a href="https://www.linkedin.com/school/shiv-nadar-school/" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn" style="width: 15px;"></a>
                    <a href="https://www.twitter.com/shivnadarschool" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/twitter-icon.png?raw=true" alt="Twitter" style="width: 15px;"></a>
                </div>
            </div>
        </div>
        `;

        document.getElementById("signature-preview").innerHTML = signatureHTML;
        document.getElementById("generated-signature").value = signatureHTML;
    };

    if (profilePic) {
        reader.readAsDataURL(profilePic);
    } else {
        var profilePicBase64 = "https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/default-profile-pic.png?raw=true";
        var signatureHTML = `
        <div class="signature-container" style="font-family: Poppins, Arial, sans-serif; line-height: 1.5; color: #a6a6a6; display: flex; align-items: flex-start; border: 1px solid #e0e0e0; padding: 2px; border-radius: 5px; margin-left: 5px; width:100%; max-width:300px;">
            <div class="left-column" style="display:block; margin:0px auto; text-align:center;">
                <img src="${profilePicBase64}" alt="Profile Picture" class="profile-pic" style="border-radius: 50%; width: 70px;">
                <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/school-logo.png?raw=true" alt="School Logo" class="school-logo" style="max-width: 60px; width:100%; margin-top: 10px; display:block; margin:0px auto; ">
                <div class="school-locations" style="font-size: 5px; color: #0d56a2; text-align: center; margin-top: 3px;">
                    <span style="font-weight: normal;">Noida</span> |
                    <span style="font-weight: normal;">Gurgaon</span> |
                    <span style="font-weight: normal;">Faridabad</span> |
                    <span style="font-weight: normal;">Delhi</span> |
                    <span style="font-weight: normal;">Chennai</span>
                </div>
            </div>
            <div class="vertical-line" style="width: 1.5px; background-color: #a6a6a6; height: 130px; margin: 0 10px;"></div>
            <div class="signature-details" style="display:block; text-align:center;">
                <div class="name-linkedin" style="align-items: center;">
                    <span class="name" style="font-weight: bold; color: #a6a6a6; font-size: 14px;">${name}</span>
                    <div class="vertical-line-small"></div>
                    <a href="${linkedin}" target="_blank">
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn" class="linkedin-logo" style="width: 15px; height: 15px;">
                    </a>
                </div>
                <span class="designation" style="color: #a6a6a6; font-size: 12px; margin-top: 0px;">${designation}</span>
                <div class="contact-info" style="margin-top: 10px; display:block; clear:both; font-size: 10px;">
                    <div style="display:block; align-items: center; margin-bottom: 2px;">
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/phone-icon.png?raw=true" alt="Phone Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                        <a href="tel:${phone}" style="color: #a6a6a6; font-size: 10px; margin-left: 5px; text-decoration: none;">${phone}</a>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 2px;">
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/email-icon.png?raw=true" alt="Email Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                        <a href="mailto:${email}" style="color: #a6a6a6; font-size: 10px; margin-left: 5px; text-decoration: none;">${email}</a>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 2px;">
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/website-icon.png?raw=true" alt="Web Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                        <a href="https://shivnadarschool.edu.in/" style="color: #a6a6a6; font-size: 10px; margin-left: 5px; text-decoration: none;">https://shivnadarschool.edu.in/</a>
                    </div>
                </div>
                <div class="social-icons" style="margin-top: 3px; display: flex;">
                    <a href="https://www.facebook.com/shivnadarschool" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/facebook-icon.png?raw=true" alt="Facebook" style="width: 15px;"></a>
                    <a href="https://www.instagram.com/shivnadarschool" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/instagram-icon.png?raw=true" alt="Instagram" style="width: 15px;"></a>
                    <a href="https://www.youtube.com/@shivnadarschools" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/youtube-icon.png?raw=true" alt="YouTube" style="width: 15px;"></a>
                    <a href="https://www.linkedin.com/school/shiv-nadar-school/" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn" style="width: 15px;"></a>
                    <a href="https://www.twitter.com/shivnadarschool" style="margin-right: 10px;"><img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/twitter-icon.png?raw=true" alt="Twitter" style="width: 15px;"></a>
                </div>
            </div>
        </div>
        `;

        document.getElementById("signature-preview").innerHTML = signatureHTML;
        document.getElementById("generated-signature").value = signatureHTML;
    }
}

function copyToClipboard() {
    var signatureHTML = document.getElementById("generated-signature").value;
    navigator.clipboard.writeText(signatureHTML).then(function() {
        alert("Signature copied to clipboard!");
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
}

function copyToSignatureRescue() {
    var signatureHTML = document.getElementById("generated-signature").value;
    var blob = new Blob([signatureHTML], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "signature.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
