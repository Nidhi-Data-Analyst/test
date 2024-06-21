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
        const signatureHtml = `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <table>
                <tr>
                    <td style="padding: 10px;">
                        <img src="${profilePicUrl}" alt="Profile Picture" style="border-radius: 50%; width: 70px;">
                    </td>
                    <td style="padding: 10px;">
                        <strong style="font-size: 14px;">${name}</strong><br>
                        <span style="font-size: 12px;">${designation}</span><br>
                        <a href="${linkedin}" style="font-size: 12px; color: #007bff;">LinkedIn</a><br>
                        <img src="phone-icon-url" alt="Phone Icon" style="width: 12px;"> <span style="font-size: 12px;">${phone}</span><br>
                        <img src="email-icon-url" alt="Email Icon" style="width: 12px;"> <a href="mailto:${email}" style="font-size: 12px; color: #333;">${email}</a><br>
                        <img src="website-icon-url" alt="Website Icon" style="width: 12px;"> <a href="https://shivnadarschool.edu.in/" style="font-size: 12px; color: #333;">https://shivnadarschool.edu.in/</a><br>
                        <div style="margin-top: 10px;">
                            <a href="facebook-url"><img src="facebook-icon-url" alt="Facebook" style="width: 12px;"></a>
                            <a href="instagram-url"><img src="instagram-icon-url" alt="Instagram" style="width: 12px;"></a>
                            <a href="youtube-url"><img src="youtube-icon-url" alt="YouTube" style="width: 12px;"></a>
                            <a href="linkedin-url"><img src="linkedin-icon-url" alt="LinkedIn" style="width: 12px;"></a>
                            <a href="twitter-url"><img src="twitter-icon-url" alt="Twitter" style="width: 12px;"></a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 10px;">
                        <img src="school-logo-url" alt="School Logo" style="width: 100px;">
                        <div style="font-size: 10px; color: #999;">
                            Noida | Gurgaon | Faridabad | Delhi | Chennai | Core Office
                        </div>
                    </td>
                </tr>
            </table>
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
