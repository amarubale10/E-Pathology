import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { toast } from 'react-toastify';
const Contact = () => {
    const notify = () => {
        toast.success("Thanks for your Response");
    }
  return (
    <>
    <div className="container">


<section className="mb-4">


    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
   
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

              
                <div className="row">

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label className="">Your name</label>
                        </div>
                    </div>
                    

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label className="">Your email</label>
                        </div>
                    </div>
                    
                    
                </div>
              
                  <br/>
              
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label  className="">Subject</label>
                           
                        </div>
                    </div>
                </div>
              
                <br/>
              
                <div className="row">

                    
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label >Your message</label>
                        </div>

                    </div>
                </div>
              

            </form>

            <div className="text-center text-md-left">
                <button  type="submit"
                    className="btn btn-primary btn-lg"
                    Style="padding-left: 2.5rem; padding-right: 2.5rem;"
                    onClick={notify}>Send</button>
            </div>
            <div className="status"></div>
        </div>
        

        
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <strong>Address</strong>
                <p><b>E-Pathology</b></p>   
                    <p>Main Road  <br></br>
                    Opposite SBI Bank, 
                        Khargar, Mumbai, <br></br>
                        Maharashtra 000555</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 22336699 </p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p><strong>For technical support, please contact:</strong></p>
                    <p>patholgy@gmail.com</p>
                    
                </li>
            </ul>
        </div>
       

    </div>

</section>
<br/><br/><br/>


    </div>
    <hr/>
    </>
  )
}

export default Contact