import React from 'react';
import emailjs from '@emailjs/browser';

export default function Emailer() {
    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            fname: e.target.fname.value,
            lname: e.target.lname.value,
            phone: e.target.phone.value,
            useremail: e.target.useremail.value,
            message: e.target.message.value
        }

        emailjs
    .send('service_6vxq8mb', 'template_goic5rl', templateParams, 'WBQoTDACygAY2_JI8')
    .then(
        (response) => {
            // Assuming you have an element with the id "successMessage" in your HTML
            const successMessageElement = document.getElementById('successMessage');

            // Check if the element exists before updating its content
            if (successMessageElement) {
                // successMessageElement.innerHTML = 'Success! ' + response.status + ' ' + response.text;
                successMessageElement.innerHTML = 'Thanks for contact us, We will contact you shortly';

            }
        },
        (err) => {
            document.write('Failed!', err); 
        }
    );

    } 

    return (
        <div className="col-lg-8 mb-5" >
            <form action="#" method="post" onSubmit={sendEmail}>
                <div className="form-group row">
                    <div className="col-md-6 mb-4 mb-lg-0">
                        <input type="text" className="form-control" placeholder="First name" name="fname" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Last name" name="lname" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Email address" name="useremail" />
                    </div>
                </div>

                
                <div className="form-group row">
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="phone" name="phone"/>
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-md-12">
                        <textarea name="message" id="" className="form-control" placeholder="Write your message." cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6 mr-auto">
                        <div id="successMessage"></div>
                        <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Send Message" />
                    </div>
                </div>
            </form>
        </div>
    )
}
