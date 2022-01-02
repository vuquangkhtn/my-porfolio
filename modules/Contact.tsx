import { Button, Input, Icon, TextArea } from 'common';

const Contact = () => {
  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">

          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
              <iframe src="https://maps.google.com/maps?q=Phuong%20tan%20hung,%20quan%207,%20Ho%20chi%20minh%20city&t=&z=13&ie=UTF8&iwloc=&output=embed" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </div>

            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">Say hello</h3>
                <p className="footer-text mb-0">(+84)38 7708 009</p>
                <p><a href="mailto:hello@company.co">vuquangkhtn@gmail.com</a></p>
              </div>

              <ul className="social-links">
                <li><a target="_blank" href="https://github.com/vuquangkhtn" title="github" rel="noreferrer"><Icon icon='uil:github' width="20" /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/ngvuquang/" title="linkedin" rel="noreferrer"><Icon icon='uil:linkedin' width="20" /></a></li>
                <li><a href="mailto:vuquangkhtn@gmail.com" title="email"><Icon icon='uil:google' width="20" /></a></li>
                <li><a href="tel:+84387708009" title="phone"><Icon icon='uil:phone' width="20" /></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">{`Interested to work together? Let's talk`}</h2>

              <form action="" method="get">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <Input type="text" name="name" placeholder="Your Name" />
                  </div>

                  <div className="col-lg-6 col-12">
                    <Input type="email" name="email" placeholder="Email" />
                  </div>

                  <div className="col-12">
                    <TextArea name="message" rows={6} placeholder="Message" />
                  </div>

                  <div className="col-lg-5 col-12">
                    <Button mode="submit">Send Contact</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
