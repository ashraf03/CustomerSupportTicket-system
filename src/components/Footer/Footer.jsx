import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#000] text-[#fff]">
            <div className='grid grid-cols-5 w-[1200px] mx-auto mt-10 pt-10'>
                <div>
                    <h3 className="mb-10">CS — Ticket System</h3>
                    <p>A ticket system is used in customer support to track, manage, and resolve user issues efficiently..</p>
                </div>
                <div>
                    <h3 className="mb-10">Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-10">Services</h3>
                    <ul>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-10">Information</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-10">Information</h3>
                    <ul>
                        <li><i class="fa-brands fa-linkedin-in"></i> @CS — Ticket System</li>
                        <li><i className="fa-brands fa-facebook"></i>  @CS — Ticket System</li>
                        <li><i class="fa-brands fa-linkedin-in"></i> @CS — Ticket System</li>
                        <li><i class="fa-regular fa-envelope"></i> support@cst.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;