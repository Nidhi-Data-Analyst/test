function generateSignature() {
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const campus = document.getElementById('campus').value;

    const profilePicInput = document.getElementById('profilePic');
    let profilePicUrl = '';
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicUrl = e.target.result;
            displaySignature(name, designation, phone, email, linkedin, campus, profilePicUrl);
        }
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        displaySignature(name, designation, phone, email, linkedin, campus, profilePicUrl);
    }
}

function displaySignature(name, designation, phone, email, linkedin, campus, profilePicUrl) {
    const linkedinHtml = linkedin ? `
        <a href="${linkedin}" target="_blank">
            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn" class="linkedin-logo" style="width: 15px; height: 15px;">
        </a>` : '';

    const profilePicHtml = profilePicUrl ? `
        <img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic" style="border-radius: 50%; width: 70px;">
    ` : '<span style="color: #a6a6a6;">No Profile Picture</span>';

    const signatureHtml = `
        <div style="font-family: Poppins, Arial, sans-serif; line-height: 1.5; color: #a6a6a6; border: 1px solid #e0e0e0; padding: 10px; border-radius: 5px;">
            <table style="width: 100%;">
                <tr>
                    <td style="text-align: center; width: 80px;">
                        ${profilePicHtml}
                        <br>
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/school-logo.png?raw=true" alt="School Logo" class="school-logo" style="max-width: 60px; width: 100%; margin-top: 10px;">
                        <div style="font-size: 5px; color: #0d56a2; margin-top: 3px;">
                            <span>Noida</span> |
                            <span>Gurgaon</span> |
                            <span>Faridabad</span> |
                            <span>Delhi</span> |
                            <span>Chennai</span>
                        </div>
                    </td>
                    <td style="vertical-align: top; padding-left: 10px;">
                        <div style="color: #a6a6a6; font-size: 14px; font-weight: bold;">${name}</div>
                        <div style="color: #a6a6a6; font-size: 12px;">${designation}</div>
                        <div style="color: #a6a6a6; font-size: 10px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/phone-icon.png?raw=true" alt="Phone Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                            <a href="tel:${phone}" style="color: #a6a6a6; text-decoration: none;">${phone}</a>
                        </div>
                        <div style="color: #a6a6a6; font-size: 10px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/email-icon.png?raw=true" alt="Email Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                            <a href="mailto:${email}" style="color: #a6a6a6; text-decoration: none;">${email}</a>
                        </div>
                        <div style="color: #a6a6a6; font-size: 10px;">
                            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/website-icon.png?raw=true" alt="Web Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;">
                            <a href="https://shivnadarschool.edu.in/" style="color: #a6a6a6; text-decoration: none;">https://shivnadarschool.edu.in/</a>
                        </div>
                        <br>
                        <div style="text-align: center;">
                            ${linkedinHtml}
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
                    </td>
                </tr>
            </table>
        </div>
    `;

    document.getElementById('signature-preview').innerHTML = signatureHtml;
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
