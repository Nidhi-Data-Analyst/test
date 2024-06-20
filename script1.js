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
            <div style="height: 15px; width: 1.5px; background-color: #999; margin: 0 2px;"></div>
            <a href="${linkedin}" target="_blank">
                <img src="data:image/png;base64,YOUR_BASE64_LINKEDIN_IMAGE" alt="LinkedIn" style="width: 15px; height: 15px;">
            </a>
            `;
        }

        const signatureHtml = `
        <div style="font-family: Poppins, Arial, sans-serif; line-height: 1.5; color: #a6a6a6; display: flex; align-items: flex-start; padding: 2px; border-radius: 5px; margin-left: 5px;">
            <div style="display: flex; flex-direction: column; align-items: center; margin-right: 10px;">
                <img src="${profilePicUrl}" alt="Profile Picture" style="border-radius: 50%; width: 70px;">
                <img src="data:image/png;base64,YOUR_BASE64_SCHOOL_LOGO" alt="School Logo" style="width: 60px; margin-top: 10px;">
                <div style="font-size: 5px; color: #0d56a2; text-align: center; margin-top: 3px;">
                    <span style="font-weight: ${bolds.Noida};">Noida</span> | 
                    <span style="font-weight: ${bolds.Gurgaon};">Gurgaon</span> | 
                    <span style="font-weight: ${bolds.Faridabad};">Faridabad</span> | 
                    <span style="font-weight: ${bolds.Delhi};">Delhi</span> | 
                    <span style="font-weight: ${bolds.Chennai};">Chennai</span>
                </div>
            </div>
            <div style="width: 1.5px; background-color: #a6a6a6; height: 130px; margin: 0 10px;"></div>
            <div style="display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center;">
                    <span style="font-weight: bold; color: #a6a6a6; font-size: 14px; margin-right: 5px; margin-bottom: 1px;">${name}</span>
                    ${linkedinHtml}
                </div>
                <span style="color: #a6a6a6; font-size: 12px; margin-top: 0px;">${designation}</span>
                <div style="margin-top: 10px; display: flex; flex-direction: column; font-size: 10px;">
                    <div style="display: flex; align-items: center; margin-bottom: 2px;">
                        <img src="data:image/png;base64,YOUR_BASE64_PHONE_ICON" alt="Phone Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;"> 
                        <a href="tel:${phone}" style="color: #a6a6a6; font-size: 10px; margin-left: 5px; text-decoration: none;">${phone}</a>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 2px;">
                        <img src="data:image/png;base64,YOUR_BASE64_EMAIL_ICON" alt="Email Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;"> 
                        <a href="mailto:${email}" style="color: #a6a6a6; font-size: 10px; margin-left: 5px; text-decoration: none;">${email}</a>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 2px;">
                        <img src="data:image/png;base64,YOUR_BASE64_WEBSITE_ICON" alt="Web Icon" style="width: 16px; vertical-align: middle; margin-right: 5px;"> 
                        <a href="https://shivnadarschool.edu.in/" style="color: #a6a6a6; font-size: 10px; margin-left: 5px; text-decoration: none;">https://shivnadarschool.edu.in/</a>
                    </div>
                </div>
                <div style="margin-top: 3px; display: flex;">
                    <a href="https://www.facebook.com/shivnadarschool" style="margin-right: 10px;"><img src="data:image/png;base64,YOUR_BASE64_FACEBOOK_ICON" alt="Facebook" style="width: 15px;"></a>
                    <a href="https://www.instagram.com/shivnadarschool" style="margin-right: 10px;"><img src="data:image/png;base64,YOUR_BASE64_INSTAGRAM_ICON" alt="Instagram" style="width: 15px;"></a>
                    <a href="https://www.youtube.com/@shivnadarschools" style="margin-right: 10px;"><img src="data:image/png;base64,YOUR_BASE64_YOUTUBE_ICON" alt="YouTube" style="width: 15px;"></a>
                    <a href="https://www.linkedin.com/school/shiv-nadar-school/" style="margin-right: 10px;"><img src="data:image/png;base64,YOUR_BASE64_LINKEDIN_ICON" alt="LinkedIn" style="width: 15px;"></a>
                    <a href="https://www.twitter.com/shivnadarschool" style="margin-right: 10px;"><img src="data:image/png;base64,YOUR_BASE64_TWITTER_ICON" alt="Twitter" style="width: 15px;"></a>
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
