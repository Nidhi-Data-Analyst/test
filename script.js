function generateSignature() {
    var name = document.getElementById("name").value;
    var designation = document.getElementById("designation").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin").value;
    var campus = document.getElementById("campus").value;
    var profilePic = document.getElementById("profilePic").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        var profilePicSrc = reader.result;

        var signatureHTML = `
        <div style="font-family: Arial, sans-serif; line-height: 1.4;">
            <table style="width: 100%; max-width: 500px;">
                <tr>
                    <td style="padding: 10px;">
                        <img src="${profilePicSrc}" alt="Profile Picture" style="width: 80px; height: 80px; border-radius: 50%;">
                    </td>
                    <td style="padding: 10px;">
                        <p style="margin: 0; font-size: 18px; font-weight: bold;">${name}</p>
                        <p style="margin: 0; font-size: 14px; color: #666;">${designation}</p>
                        <p style="margin: 0; font-size: 14px;">
                            <a href="${linkedin}" style="color: #007bff; text-decoration: none;">LinkedIn</a>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px;" colspan="2">
                        <img src="https://shivadarschool.edu.in/logo.png" alt="Shiv Nadar School" style="width: 100px;">
                        <p style="margin: 0; font-size: 14px; color: #666;">${campus}</p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px;" colspan="2">
                        <p style="margin: 0; font-size: 14px; color: #666;">
                            <img src="https://example.com/phone-icon.png" alt="Phone" style="width: 14px; vertical-align: middle;"> ${phone}
                        </p>
                        <p style="margin: 0; font-size: 14px; color: #666;">
                            <img src="https://example.com/email-icon.png" alt="Email" style="width: 14px; vertical-align: middle;"> ${email}
                        </p>
                        <p style="margin: 0; font-size: 14px; color: #666;">
                            <img src="https://example.com/web-icon.png" alt="Website" style="width: 14px; vertical-align: middle;">
                            <a href="https://shivadarschool.edu.in" style="color: #007bff; text-decoration: none;">https://shivadarschool.edu.in</a>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px;" colspan="2">
                        <p style="margin: 0;">
                            <a href="https://facebook.com/shivnadar" style="margin-right: 5px;">
                                <img src="https://example.com/facebook-icon.png" alt="Facebook" style="width: 24px;">
                            </a>
                            <a href="https://instagram.com/shivnadar" style="margin-right: 5px;">
                                <img src="https://example.com/instagram-icon.png" alt="Instagram" style="width: 24px;">
                            </a>
                            <a href="https://linkedin.com/shivnadar" style="margin-right: 5px;">
                                <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" style="width: 24px;">
                            </a>
                            <a href="https://youtube.com/shivnadar">
                                <img src="https://example.com/youtube-icon.png" alt="YouTube" style="width: 24px;">
                            </a>
                        </p>
                    </td>
                </tr>
            </table>
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
