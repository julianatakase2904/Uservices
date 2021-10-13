import React from "react";

export default function Footer(){
    return (
        <div ><footer className="w3-padding-64 w3-grey w3-small w3-center" id="footer">
            <div className="w3-row-padding">
                <div className="w3-col s4">
                    <h4>Contact</h4>
                    <p>Questions? Go ahead.</p>
                    <form action="/action_page.php" target="_blank">
                        <p><input className="w3-input w3-border" type="text" placeholder="Name" name="Name" required /></p>
                        <p><input className="w3-input w3-border" type="text" placeholder="Email" name="Email" required /></p>
                        <p><input className="w3-input w3-border" type="text" placeholder="Subject" name="Subject" required /></p>
                        <p><input className="w3-input w3-border" type="text" placeholder="Message" name="Message" required /></p>
                        <button type="submit" className="w3-button w3-block w3-black">Send</button>
                    </form>
                </div>
                <div class="w3-col s4">
                    <h4>About</h4>
                    <p><a href="#">Uservices</a></p>
                    <p><a href="#">Our Team</a></p>
                    <br />
                    <h4>Problems</h4>
                    <p><i className="fa fa-fw fa-wechat" /> Online Chat</p>
                    <p><i className="fa fa-fw fa-phone" /> 555-555-5555</p>
                    <p><i className="fa fa-fw fa-envelope" /> help@uservices.ca</p>
                </div>
                <div className="w3-col s4 w3-justify">
                  <h4>Pay Services with</h4>
                  <p><i className="fa fa-fw fa-cc-amex" /> Amex</p>
                  <p><i className="fa fa-fw fa-cc-visa" /> Visa</p>
                  <p><i className="fa fa-fw fa-cc-mastercard" /> Mastercard</p>
                  <p><i className="fa fa-fw fa-cc-paypal" /> Paypal</p>
                  <br />
                  <i className="fa fa-facebook-official w3-hover-opacity w3-large" />
                  <i className="fa fa-instagram w3-hover-opacity w3-large" />
                  <i className="fa fa-snapchat w3-hover-opacity w3-large" />
                  <i className="fa fa-pinterest-p w3-hover-opacity w3-large" />
                  <i className="fa fa-twitter w3-hover-opacity w3-large" />
                  <i className="fa fa-linkedin w3-hover-opacity w3-large" />
                </div>
            </div>
        </footer>
            <div className="w3-black w3-center w3-padding-24"><a href="https://www.uservices.ca" title="Uservices.ca" target="_blank" className="w3-hover-opacity">www.uservices.ca</a></div>
        </div>
    )
}