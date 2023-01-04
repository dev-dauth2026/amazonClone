import './footer.css'
import Branches from './Branches';
import { useState } from 'react';
const Footer = () => {
    const [branches, setBraches] = useState(Branches);
    return (
        <div className="footerDiv">
            <div className="backToTopToggler">
                <p>Back To Top</p>
            </div>
            <div className="footerLink">
                <div className="col1">
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Corporate Information</li>
                        <li>Press Releases</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>
                <div className="col2">
                    <h4>Make the Money with Us</h4>
                    <ul>
                        <li>Protect and build your brand</li>
                        <li>Independently Publish with Us</li>
                        <li>Sell on Amazon</li>
                        <li>Drive with Amazon Flex</li>
                        <li>Advertise Your Products</li>
                        <li>Associates Program</li>
                        <li>Host an Amazon Hub</li>
                    </ul>
                </div>
                <div className="col3">
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li>COVID-19 and Amazon</li>
                        <li>Your account</li>
                        <li>Your Orders</li>
                        <li>Delivery Rates and Policies</li>
                        <li>Returns and Replacements</li>
                        <li>Manage Your content and devices</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="branches">
                <div className="branchesList">
                    {
                        branches.map((branch, branchIndex) => {
                            const { id, countryName } = branch;
                            if (branchIndex != branches.length - 1) {
                                var bar = " | ";
                            }
                            return (
                                <>
                                    <div className="branch" key={id}>
                                        <small> {countryName} {bar}
                                        </small>
                                    </div>

                                </>

                            )
                        })

                    }
                </div>
                <small>And don't forget:</small>
                <small>Amazon Advertising| Amazon Web Services |Goodreads| Shopbop</small>
            </div>
            <div className="copyright">
            <div className="policies">
                <small>Conditions of Use & Sale</small>
                <small>Privacy Notice</small>
                <small>Interest-Based Ads Notice</small>
            </div>
                
               
                <small>© 1996-2022, Amazon.com, Inc. or its affiliates</small>
            </div>

        </div>
    )
}
export default Footer;