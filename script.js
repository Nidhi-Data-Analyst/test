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
            <div class="vertical-line-small"></div>
            <a href="${linkedin}" target="_blank">
                <img src="${githubBaseUrl}linkedin-icon.png?raw=true" alt="LinkedIn" class="linkedin-logo" style="width: 15px; height: 15px;">
            </a>
            `;
        }

        const signatureHtml = `
        <div class="signature-container">
            <div class="left-column">
                <img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic">
                <img src="${githubBaseUrl}school-logo.png?raw=true" alt="School Logo" class="school-logo">
                <div class="school-locations">
                    <span style="font-weight: ${bolds.Noida};">Noida</span> | 
                    <span style="font-weight: ${bolds.Gurgaon};">Gurgaon</span> | 
                    <span style="font-weight: ${bolds.Faridabad};">Faridabad</span> | 
                    <span style="font-weight: ${bolds.Delhi};">Delhi</span> | 
                    <span style="font-weight: ${bolds.Chennai};">Chennai</span>
                </div>
            </div>
            <div class="signature-details">
                <div class="name-linkedin">
                    <span class="name">${name}</span>
                    ${linkedinHtml}
                </div>
                <span class="designation">${designation}</span>
                <div class="contact-info">
                    <div>
                        <img src="${githubBaseUrl}phone-icon.png?raw=true" alt="Phone Icon"> 
                        <a href="tel:${phone}">${phone}</a>
                    </div>
                    <div>
                        <img src="${githubBaseUrl}email-icon.png?raw=true" alt="Email Icon"> 
                        <a href="mailto:${email}">${email}</a>
                    </div>
                    <div>
                        <img src="${githubBaseUrl}website-icon.png?raw=true" alt="Web Icon"> 
                        <a href="https://shivnadarschool.edu.in/">https://shivnadarschool.edu.in/</a>
                    </div>
                </div>
                <div class="social-icons">
                    <a href="https://www.facebook.com/shivnadarschool"><img src="${githubBaseUrl}facebook-icon.png?raw=true" alt="Facebook"></a>
                    <a href="https://www.instagram.com/shivnadarschool"><img src="${githubBaseUrl}instagram-icon.png?raw=true" alt="Instagram"></a>
                    <a href="https://www.youtube.com/shivnadarschool"><img src="${githubBaseUrl}youtube-icon.png?raw=true" alt="YouTube"></a>
                    <a href="https://www.linkedin.com/school/shiv-nadar-school/"><img src="${githubBaseUrl}linkedin-icon.png?raw=true" alt="LinkedIn"></a>
                    <a href="https://www.twitter.com/shivnadarschool"><img src="${githubBaseUrl}twitter-icon.png?raw=true" alt="Twitter"></a>
                </div>
            </div>
        </div>
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
