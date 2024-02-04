import { toast } from "react-toastify";
import "./all.css";
import Logout from "./logout";

const PaymentRecipet = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const patientName = sessionStorage.getItem("patient FirstName");
  const PatientLastName = sessionStorage.getItem("Patient LastName");
  const state = sessionStorage.getItem("Patient State");
  const city = sessionStorage.getItem("Patient City");
  const address = sessionStorage.getItem("Patient Address");
  const email = sessionStorage.getItem("Patient Email");
  const firstName = sessionStorage.getItem("firstName");
  const lastName = sessionStorage.getItem("lastName");

 

  const pdfgenerate=() =>{
	  toast.success("Your Payment Reciept Will Download Soon...")

  }

  return (
    <>
      <div class="receipt-content">
        <div class="container bootstrap snippets bootdey">
          <div class="row">
            <div class="col-md-12">
              <div class="invoice-wrapper">
                <div class="intro">
                  Hi{" "}
                  <strong>
                    {firstName} {lastName}
                  </strong>
                  ,<br></br>
                  <b> This is the receipt for a successful payment for your test </b>
                </div>

                <div class="payment-info">
                  <div class="row">
                    <div class="col-sm-6">
                      <span>Payment No.</span>
                      <strong>******236</strong>
                    </div>
                    <div class="col-sm-6 text-right">
                      <span>Payment Date</span>
                      <strong>{date}</strong>
                    </div>
                  </div>
                </div>

                <div class="payment-details">
                  <div class="row">
                    <div class="col-sm-6">
                      <span>
                        <strong>Patient Details-</strong>
                      </span>
                      <strong>
                        {patientName} {PatientLastName}
                      </strong>
                      <p>
                        {address} <br></br>
                        {city} <br></br>
                        {state} <br></br>
                        Email-
                        <a href="abc">{email}</a>
                      </p>
                    </div>
                    <div class="col-sm-6 text-right">
                      <span>Payment To</span>
                      <strong>E-Pathology</strong>
                      <p>
                        {" "}
                        40/8147, C II Floor,
                        <br></br>
                        Main Road <br></br>
                        Opposite SBI Bank, <br></br>
                        Khargar, Mumbai,Maharashtra 000555<br></br>
                        Email-
                        <a href="abc">pathology@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <hr></hr>

                <div class="line-items">
                  <div class="items">
                    <div class="row item">
                      <div class="col-xs-4 desc"></div>
                      <div class="col-xs-3 qty"></div>
                      <div class="col-xs-5 amount text-right"></div>
                    </div>
                    <div class="row item">
                      <div class="col-xs-4 desc"></div>
                      <div class="col-xs-3 qty"></div>
                      <div class="col-xs-5 amount text-right"></div>
                    </div>
                    <div class="row item">
                      <div class="col-xs-4 desc"></div>
                      <div class="col-xs-3 qty"></div>
                      <div class="col-xs-5 amount text-right"></div>
                    </div>
                  </div>
                  <div class="total text-right">
                    <center>
                      <p class="extra-notes">
                        <strong>Address</strong>
                        <strong>
                        Main Road 
                        Opposite SBI Bank, 
                        Khargar, Mumbai,Maharashtra 000555
                        </strong>
                      </p>
                    </center>
                  </div>

                  <div class="print btn-btn-primary">
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <Logout/>
                  </div>
                </div>
              </div>

              <div class="footer"></div>
            </div>
          </div>
        </div>
      </div>
   
    
    
    </>
   
  );
};

export default PaymentRecipet;
