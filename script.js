document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generate-signature-btn').onclick = generateSignature;
    document.getElementById('copy-to-clipboard-btn').onclick = copyToClipboard;
    document.getElementById('copy-to-signature-rescue-btn').onclick = copyToSignatureRescue;
});

function generateSignature() {
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedinUrl = document.getElementById('linkedin').value;
    const campus = document.getElementById('campus').value;
    const profilePicInput = document.getElementById('profile-pic');
    const profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);

    let linkedinHtml = '';
    if (linkedinUrl) {
        linkedinHtml = `<a href="${linkedinUrl}" target="_blank">
            <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/linkedin-icon.png?raw=true" alt="LinkedIn" style="width: 15px;">
        </a>`;
    }

    const signatureHtml = `
        <div style="font-family: Poppins, Arial, sans-serif; line-height: 1.5; color: #a6a6a6; border: 1px solid #e0e0e0; padding: 2px; border-radius: 5px; width: 100%; max-width: 600px;">
            <table style="width: 100%; border-spacing: 0;">
                <tr>
                    <td style="width: 70px; text-align: center;">
                        <img src="${profilePicUrl}" alt="Profile Picture" style="border-radius: 50%; width: 70px;">
                        <br>
                        <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/school-logo.png?raw=true" alt="School Logo" style="max-width: 60px; width: 100%; margin-top: 10px;">
                        <div style="font-size: 5px; color: #0d56a2; text-align: center; margin-top: 3px;">
                            <span style="font-weight: normal;">Noida</span> |
                            <span style="font-weight: normal;">Gurgaon</span> |
                            <span style="font-weight: normal;">Faridabad</span> |
                            <span style="font-weight: normal;">Delhi</span> |
                            <span style="font-weight: normal;">Chennai</span>
                        </div>
                    </td>
                    <td style="width: 1.5px; background-color: #a6a6a6;"></td>
                    <td style="padding-left: 10px;">
                        <div style="font-weight: bold; color: #a6a6a6; font-size: 14px;">${name}</div>
                        <div style="color: #a6a6a6; font-size: 12px;">${designation}</div>
                        <br>
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
    navigator.clipboard.writeText(signatureHtml).then(function() {
        alert('Signature copied to clipboard!');
    }, function(err) {
        alert('Failed to copy signature: ', err);
    });
}

function copyToSignatureRescue() {
    const signatureHtml = document.getElementById('signature-preview').innerHTML;
    const blob = new Blob([signatureHtml], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'signature.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
