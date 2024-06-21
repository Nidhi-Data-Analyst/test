function generateSignature() {
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const profilePic = document.getElementById('profilePic').files[0];
    const campus = document.getElementById('campus').value;

    if (!name || !designation || !phone || !email || !profilePic || !campus) {
        alert('Please fill in all mandatory fields.');
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(profilePic);
    reader.onloadend = function () {
        const profilePicUrl = reader.result;
        const githubBaseUrl = 'https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/';

        const bolds = {
            "Noida": "normal",
            "Gurgaon": "normal",
            "Faridabad": "normal",
            "Delhi": "normal",
            "Chennai": "normal",
        };
        bolds[campus] = "bold";

        let linkedinHtml = '';
        if (linkedin) {
            linkedinHtml = `
            <td style="vertical-align: middle; padding-left: 5px;">
                <a href="${linkedin}" target="_blank">
                    <img src="${githubBaseUrl}linkedin-icon.png?raw=true" alt="LinkedIn" style="width: 15px; height: 15px;">
                </a>
            </td>
            `;
        }

        const signatureHtml = `
        <table cellpadding="0" cellspacing="0" border="0" style="width: fit-content; font-family: Poppins, Arial, sans-serif; color: #a6a6a6; border: 1px solid #e0e0e0; padding: 2px; border-radius: 5px; margin-left: 5px;">
            <tr>
                <td style="vertical-align: top; padding-right: 10px;">
                    <img src="${profilePicUrl}" alt="Profile Picture" style="border-radius: 50%; width: 70px;">
                    <br>
                    <img src="${githubBaseUrl}school-logo.png?raw=true" alt="School Logo" style="width: 60px; margin-top: 10px;">
                    <br>
                    <div style="font-size: 5px; color: #0d56a2; text-align: center; margin-top: 3px;">
                        <span style="font-weight: ${bolds.Noida};">Noida</span> | 
                        <span style="font-weight: ${bolds.Gurgaon};">Gurgaon</span> | 
                        <span style="font-weight: ${bolds.Faridabad};">Faridabad</span> | 
                        <span style="font-weight: ${bolds.Delhi};">Delhi</span> | 
                        <span style="font-weight: ${bolds.Chennai};">Chennai</span>
                    </div>
                </td>
                <td style="vertical-align: top; padding: 0 10px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td style="font-weight: bold; color: #a6a6a6; font-size: 14px;">${name}</td>
                            ${linkedinHtml}
                        </tr>
                        <tr>
                            <td style="color: #a6a6a6; font-size: 12px;">${designation}</td>
                        </tr>
                        <tr>
                            <td style="padding-top: 10px; font-size: 10px;">
                                <img src="${githubBaseUrl}phone-icon.png?raw=true" alt="Phone Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;"> 
                                <a href="tel:${phone}" style="color: #a6a6a6; text-decoration: none;">${phone}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 2px; font-size: 10px;">
                                <img src="${githubBaseUrl}email-icon.png?raw=true" alt="Email Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;"> 
                                <a href="mailto:${email}" style="color: #a6a6a6; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 2px; font-size: 10px;">
                                <img src="${githubBaseUrl}website-icon.png?raw=true" alt="Web Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;"> 
                                <a href="https://shivnadarschool.edu.in/" style="color: #a6a6a6; text-decoration: none;">https://shivnadarschool.edu.in/</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 3px;">
                                <a href="https://www.facebook.com/shivnadarschool" style="margin-right: 10px;">
                                    <img src="${githubBaseUrl}facebook-icon.png?raw=true" alt="Facebook" style="width: 15px;">
                                </a>
                                <a href="https://www.instagram.com/shivnadarschool" style="margin-right: 10px;">
                                    <img src="${githubBaseUrl}instagram-icon.png?raw=true" alt="Instagram" style="width: 15px;">
                                </a>
                                <a href="https://www.youtube.com/shivnadarschool" style="margin-right: 10px;">
                                    <img src="${githubBaseUrl}youtube-icon.png?raw=true" alt="YouTube" style="width: 15px;">
                                </a>
                                <a href="https://www.linkedin.com/school/shiv-nadar-school/" style="margin-right: 10px;">
                                    <img src="${githubBaseUrl}linkedin-icon.png?raw=true" alt="LinkedIn" style="width: 15px;">
                                </a>
                                <a href="https://www.twitter.com/shivnadarschool">
                                    <img src="${githubBaseUrl}twitter-icon.png?raw=true" alt="Twitter" style="width: 15px;">
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        `;
        document.getElementById('signature-result').innerHTML = signatureHtml;
    };
}

function copyToClipboard() {
    const signatureResult = document.getElementById('signature-result');
    const range = document.createRange();
    range.selectNode(signatureResult);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // to deselect
    alert('Signature copied to clipboard. You can now paste it into your Gmail signature settings.');
}

function copyToSignatureRescue() {
    const signatureHtml = document.getElementById('signature-result').innerHTML;
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = signatureHtml;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    alert('HTML copied to clipboard for Signature Rescue.');
}
