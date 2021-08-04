<%@ Page Title="" Language="C#" MasterPageFile="~/YesInvest.master" AutoEventWireup="true" CodeFile="open_account.aspx.cs" Inherits="create_lead" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="js/account_open.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div class="container">
        <div class="maincontainer">


            
                    <div class="row">
                        <div class=" col-md-12 col-sm-6">

                            <div class="maincontainer" style="background: #ffffff">

                                <div class="login_sec" style="padding: 20px 80px 70px">

                                    <h1 class="login_hd">Open An Account</h1>

                                    <div class="login_inner_sec" style="padding-top: 40px">

                                        <div class="row">

                                            <div class="col-sm-5">

                                                <div class="login_form">

                                                    <div class="form-group">
                                                        <label>Existing YES BANK customer</label>
                                                        <div class="radio" style="margin-bottom: 0px">
                                                            <input name="existing_customer" class="magic-radio k-valid" id="yes" style="border-width: medium medium 1px; border-style: none none solid; border-color: currentcolor currentcolor #979797; padding-left: 0px; margin-left: 0px" type="radio" checked="checked" value="Yes">
                                                            <label style="color: #808080; padding-right: 20px; font-size: 14px; font-weight: normal" for="yes">Yes</label>
                                                            <input name="existing_customer" class="magic-radio k-valid" id="no" style="border-width: medium medium 1px; border-style: none none solid; border-color: currentColor currentColor #979797; padding-left: 0px; margin-left: 0px" type="radio" value="No">
                                                            <label style="color: #808080; padding-right: 20px; font-size: 14px; font-weight: normal" for="no">No</label>
                                                        </div>
                                                    </div>


                                                    <div class="existing_customer" >
                                                        <button class="btn btn-primary login_btn login_btn_mobresp e_kyc" style="padding: 8px 45px; border: 1px solid #ffffff; font-size: 20px; background-image: linear-gradient(284deg, #008aa8, #0062a8)" type="submit"><a href="http://digi.ysil.in/app/Account/Register?ReturnUrl=%2Fapp%2F" style="color: #ffffff">Proceed to E-KYC</a></button>
                                                    </div>


                                                    <div class="new_customer" style="display: none;">
                                                        <div class="form-group" style="margin-bottom: 20px">
                                                            <label for="name">Name</label>
                                                            <input name="txtOnly" class="txtOnly form-control k-valid" id="fullname" type="text">
                                                            <span class="error-message pull-right" id="FullName_erroryes" style="color: #ff3030"></span>
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 20px">
                                                            <label for="mobile">Mobile</label>
                                                            <input class="form-control two k-valid" id="number" type="text" maxlength="10">
                                                            <span class="error-message pull-right" id="contact_erroryes" style="color: #ff3030"></span>
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 20px">
                                                            <label for="email">Email Id</label>
                                                            <input class="form-control k-valid" id="emailid" type="email" maxlength="50">
                                                            <span class="error-message pull-right" id="Email_erroryes" style="color: #ff3030"></span>
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 20px">
                                                            <label for="city">City</label>
                                                            <input name="txtOnly" class="txtOnly form-control k-valid" id="city" type="text">
                                                            <span class="error-message pull-right" id="City_erroryes" style="color: #ff3030"></span>
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 20px">
                                                            <label for="state">State</label>
                                                            <input name="txtOnly" class="txtOnly form-control k-valid" id="state" type="text">
                                                            <span class="error-message pull-right" id="State_erroryes" style="color: #ff3030"></span>
                                                        </div>
                                                        <button onclick="contactme();" class="btn btn-primary login_btn" id="contactme_no" style="padding: 8px 45px; border: 1px solid #ffffff; font-size: 20px; background-image: linear-gradient(284deg, #008aa8, #0062a8)" type="submit">Contact Me</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-1">&nbsp;</div>

                                            <div class="col-sm-6" >
                                                <span class="font20" style="font-size: 20px">Trouble Opening An Account?</span><br>
                                                You can mail us at <a href="mailto:customer.service@ysil.in">customer.service@ysil.in</a><br>
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
               

        </div>
    </div>

</asp:Content>

