import React from 'react';
import Navbar from "./navbar";


const Terms = () => {
    return (
        <div className='container text-left'>
            <Navbar/>
            <div className='jumbotron'>
                <h1>AFBR TERMS AND CONDITIONS</h1>
            </div>
            <div className='row'>
                <div className='col-lg-12'>

                    <h1 className='text-underline'> General Terms & Conditions for Online Payments</h1>
                    <ol className='list-group'>
                        <li className='list-group-item'> 1. Once a User has accepted these Terms and Conditions, he/ she may register and avail the Services.
                        </li>
                        <li className='list-group-item'>
                            2. In these Terms and Conditions, the term “Charge Back” shall mean, approved and settled credit card or net banking purchase transaction(s) which are at any time refused, debited or charged back to merchant account (and shall also include similar debits to Payment Service Provider's accounts, if any) by the acquiring bank or credit card company for any reason whatsoever, together with the bank fees, penalties and other charges incidental thereto.

                        </li>
                        <li className='list-group-item'>
                            3.  Server Slow Down/Session Timeout: In case the Website or Payment Service Provider’s webpage, that is linked to the Website, is experiencing any server related issues 
                            like ‘slow down’ or ‘failure’ or ‘session timeout’, the User shall, before initiating the second payment,,
                             check whether his/her Bank Account has been debited or not and accordingly resort to one of the following options:
                            In case the Bank Account appears to be debited, ensure that he/ she does not make the payment twice and immediately thereafter contact  the Institute via e-mail or any other mode of contact as provided by  the Institute to confirm payment.
                            In case the Bank Account is not debited, the User may initiate a fresh transaction to make payment. <br />
                            However, the User agrees that under no circumstances the Payment Gateway Service Provider shall be held responsible for such fraudulent/duplicate transactions and hence no claims should be raised to Payment Gateway Service Provider  No communication received by the Payment Service Provider(s) in this regards  shall be entertained by the Payment Service Provider(s).

                        </li>
                        <li className='list-group-item'>  4. The Institute and the Payment Service Provider(s) assume no liability whatsoever for any monetary or other damage suffered by the User on account of:

                            The delay, failure, interruption, or corruption of any data or other information transmitted in connection with use of the Payment Gateway or Services in connection thereto; and/ or
                           any interruption or errors in the operation of the Payment Gateway.
                        </li>
                        <li className='list-group-item'>
                            5. The User agrees, understands and confirms that his/ her personal data including without limitation details relating to debit card/ credit card transmitted over the Internet may be susceptible to misuse, hacking, theft and/ or fraud and that the Institute or the Payment Service Provider(s) have no control over such matters.

                        </li>
                        <li className='list-group-item'>
                            6. Although all reasonable care has been taken towards guarding against unauthorized use of any information transmitted by the User, the Institute does not represent or guarantee that the use of the Services provided by/ through it will not result in theft and/or unauthorized use of data over the Internet.

                        </li>
                        <li className='list-group-item'>
                            7. The Institute, the Payment Service Provider(s) and its affiliates and associates shall not be liable, at any time, for any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communications line failure, theft or destruction or unauthorized access to, alteration of, or use of information contained on the Website.

                        </li>
                        <li className='list-group-item'>
                            8. The User will be required to login his/ her own User ID and Password, given by the Institute in order to register and/ or use the Services provided by Institute on the Website. By accepting these Terms and Conditions the User aggress that his/ her User ID and Password are very important pieces of information and it shall be the User’s own responsibility to keep them secure and confidential.
                            In furtherance hereof, the User agrees to;

                            Choose a new password, whenever required for security reasons.
                            Keep his/ her User ID & Password strictly confidential.
                            Be responsible for any transactions made by User under such User ID and Password.

                        </li>
                    </ol>



                    <h4 className='mt-5'> Debit/Credit Card, Bank Account Details
                    </h4>
                    <ol className='list-group'>
                        <li className='list-group-item'>1.The User agrees that the debit/credit card details provided by him/ her for use of the aforesaid Service(s) must be correct and accurate and that the User shall not use a debit/ credit card, that is not lawfully owned by him/ her or the use of which is not authorized by the lawful owner thereof. The User further agrees and undertakes to provide correct and valid debit/credit card details.
                        </li>
                        <li className='list-group-item'>
                            2.  The User may pay his/ her fees to the Institute by using a debit/credit card or through online banking account. The User warrants, agrees and confirms that when he/ she initiates a payment transaction and/or issues an online payment instruction and provides his/ her card / bank details:

                            The User is fully and lawfully entitled to use such credit / debit card, bank account for such transactions;
                          <br />  The User is responsible to ensure that the card/ bank account details provided by him/ her are accurate;
                         <br />   The User is authorizing debit of the nominated card/ bank account for the payment of fees selected by such User along with the applicable Fees.
                           <br /> The User is responsible to ensure sufficient credit is available on the nominated card/ bank account at the time of making the payment to permit the payment of the dues payable or the bill(s) selected by the User inclusive of the applicable Fee.
                         <br />   Payment Gateway Disclaimer
                           <br /> The Service is provided in order to facilitate access to view and pay Fees online. The Institute or the Payment Service Provider(s) do not make any representation of any kind, express or implied, as to the operation of the Payment Gateway other than what is specified in the Website for this purpose. By accepting/ agreeing to these Terms and Conditions, the User expressly agrees that his/ her use of the aforesaid online payment Service is entirely at own risk and responsibility of the User.

                        </li>
                    </ol>

                    <h4 className='mt-5'>Cancellation Policy
                    </h4>
                    <p className='list-group-item'>
                        Once the User will be registered and paid the Fee through online Payment Gateway. He/She will not be able to cancel the transaction in any circumstances. No Payment will be refunded to the User.
                        <br />  Payment Refund Policy for Online Payments
                         Refund for Charge Back Transaction: In the event there is any claim for/ of charge back by the User for any reason whatsoever, such User shall immediately approach the Institute with his/ her claim details and claim refund from the Institute alone. Such refund (if any) shall be effected only by the Institute via payment gateway or any other means as the Institute deems appropriate. No claims for refund/ charge back shall be made by any User to the Payment Service Provider(s) and in the event such claim is made it shall not be entertained.
                       <br /> Refund for fraudulent/duplicate transaction(s):  The User shall directly contact the Institute for any fraudulent transaction(s) on account of misuse of Card/ Bank details by a fraudulent individual/party and such issues shall be suitably addressed by the Institute alone in line with their policies and rules.

                    </p>

                </div>
            </div>
        </div>
    );
}

export default Terms;