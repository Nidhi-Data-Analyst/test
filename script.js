function generateSignature() {
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const profilePicInput = document.getElementById('profilePic');
    const profilePic = profilePicInput.files[0];
    const campus = document.getElementById('campus').value;

    const reader = new FileReader();
    reader.onload = function(e) {
        const profilePicBase64 = e.target.result;

        const signatureHtml = `
            <div class="signature-container" style="font-family: Poppins, Arial, sans-serif; line-height: 1.5; color: #a6a6a6; display: flex; align-items: flex-start; border: 1px solid #e0e0e0; padding: 2px; border-radius: 5px; margin-left: 5px;
            width:100%; max-width:300px;">
                <div class="left-column" style="display:block; margin:0px auto; text-align:center;">
                    <img src="${profilePicBase64}" alt="Profile Picture" class="profile-pic" style="border-radius: 50%; width: 70px;">
                    <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/school-logo.png?raw=true" alt="School Logo" class="school-logo" style="max-width: 60px; width:100%; margin-top: 10px; display:block; margin:0px auto;">
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

        document.getElementById('signature-result').innerHTML = signatureHtml;
    };

    if (profilePic) {
        reader.readAsDataURL(profilePic);
    } else {
        // Handle case where no profile picture is uploaded
        const signatureHtml = `
            <div class="signature-container" style="font-family: Poppins, Arial, sans-serif; line-height: 1.5; color: #a6a6a6; display: flex; align-items: flex-start; border: 1px solid #e0e0e0; padding: 2px; border-radius: 5px; margin-left: 5px;
            width:100%; max-width:300px;">
                <div class="left-column" style="display:block; margin:0px auto; text-align:center;">
                    <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/profile-pic-placeholder.png?raw=true" alt="Profile Picture" class="profile-pic" style="border-radius: 50%; width: 70px;">
                    <img src="https://github.com/Nidhi-Data-Analyst/Email-Signature/blob/main/school-logo.png?raw=true" alt="School Logo" class="school-logo" style="max-width: 60px; width:100%; margin-top: 10px; display:block; margin:0px auto;">
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

        document.getElementById('signature-result').innerHTML = signatureHtml;
    }
}
