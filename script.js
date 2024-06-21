document.getElementById('generate-signature').addEventListener('click', generateSignature);
document.getElementById('copy-to-clipboard').addEventListener('click', copyToClipboard);
document.getElementById('copy-to-signature-rescue').addEventListener('click', copyToSignatureRescue);

function generateSignature() {
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const campus = document.getElementById('campus').value;
    const profilePic = document.getElementById('profile-pic').files[0];

    const reader = new FileReader();
    reader.onloadend = function() {
        const profilePicBase64 = reader.result;

        const signatureHtml = `
            <div class="signature-container" style="font-family: Poppins, Arial, sans-serif; line-height: 1.5; color: #a6a6a6; display: flex; align-items: center; border: 1px solid #e0e0e0; padding: 10px; border-radius: 5px; width: 600px;">
                <div class="left-column" style="text-align: center; margin-right: 20px;">
                    <img src="${profilePicBase64}" alt="Profile Picture" class="profile-pic" style="border-radius: 50%; width: 70px; height: 70px;">
                    <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/school-logo.png?raw=true" alt="School Logo" class="school-logo" style="width: 60px; margin-top: 10px;">
                    <div class="school-locations" style="font-size: 10px; color: #0d56a2; text-align: center; margin-top: 3px;">
                        <span style="font-weight: normal;">Noida</span> |
                        <span style="font-weight: normal;">Gurgaon</span> |
                        <span style="font-weight: normal;">Faridabad</span> |
                        <span style="font-weight: normal;">Delhi</span> |
                        <span style="font-weight: normal;">Chennai</span>
                    </div>
                </div>
                <div class="vertical-line" style="width: 1px; background-color: #a6a6a6; height: 100px; margin-right: 20px;"></div>
                <div class="signature-details" style="flex-grow: 1;">
                    <div class="name-linkedin" style="margin-bottom: 10px;">
                        <span class="name" style="font-weight: bold; color: #a6a6a6; font-size: 16px;">${name}</span>
                        <a href="${linkedin}" target="_blank" style="margin-left: 10px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn" class="linkedin-logo" style="width: 15px; height: 15px;">
                        </a>
                    </div>
                    <span class="designation" style="color: #a6a6a6; font-size: 14px; margin-bottom: 10px; display: block;">${designation}</span>
                    <div class="contact-info" style="font-size: 12px;">
                        <div style="margin-bottom: 5px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/phone-icon.png?raw=true" alt="Phone Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                            <a href="tel:${phone}" style="color: #a6a6a6; text-decoration: none;">${phone}</a>
                        </div>
                        <div style="margin-bottom: 5px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/email-icon.png?raw=true" alt="Email Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                            <a href="mailto:${email}" style="color: #a6a6a6; text-decoration: none;">${email}</a>
                        </div>
                        <div style="margin-bottom: 5px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/website-icon.png?raw=true" alt="Web Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                            <a href="https://shivnadarschool.edu.in/" style="color: #a6a6a6; text-decoration: none;">https://shivnadarschool.edu.in/</a>
                        </div>
                    </div>
                    <div class="social-icons" style="margin-top: 10px;">
                        <a href="https://www.facebook.com/shivnadarschool" style="margin-right: 10px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/facebook-icon.png?raw=true" alt="Facebook" style="width: 15px;">
                        </a>
                        <a href="https://www.instagram.com/shivnadarschool" style="margin-right: 10px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/instagram-icon.png?raw=true" alt="Instagram" style="width: 15px;">
                        </a>
                        <a href="https://www.youtube.com/@shivnadarschools" style="margin-right: 10px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/youtube-icon.png?raw=true" alt="YouTube" style="width: 15px;">
                        </a>
                        <a href="https://www.linkedin.com/school/shiv-nadar-school/" style="margin-right: 10px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn" style="width: 15px;">
                        </a>
                        <a href="https://www.twitter.com/shivnadarschool" style="margin-right: 10px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/twitter-icon.png?raw=true" alt="Twitter" style="width: 15px;">
                        </a>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('signature-preview').innerHTML = signatureHtml;
    };

    if (profilePic) {
        reader.readAsDataURL(profilePic);
    } else {
        reader.onloadend();
    }
}

function copyToClipboard() {
    const signatureHtml = document.getElementById('signature-preview').innerHTML;
    const tempInput = document.createElement('textarea');
    tempInput.value = signatureHtml;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Signature copied to clipboard!');
}

function copyToSignatureRescue() {
    const signatureHtml = document.getElementById('signature-preview').innerHTML;
    const tempInput = document.createElement('textarea');
    tempInput.value = signatureHtml;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    window.open('https://www.signaturerescue.com/', '_blank');
}
