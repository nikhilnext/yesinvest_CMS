<%@ Page Title="" Language="C#" MasterPageFile="~/CMS_Login.master" AutoEventWireup="true" CodeFile="CMS_login.aspx.cs" Inherits="CMC_login" %>

<%--<%@ Page Title="" Language="C#" MasterPageFile="~/CMSMaster.master" AutoEventWireup="true" CodeFile="CMS_login.aspx.cs" Inherits="CMC_login" %>--%>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="js/CMS_login.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


     <div class="container">
        <div class="maincontainer">
            


            <div class="securities_sec">

                <h1 class="what_we_are_hd">CMS Login</h1>


                <div class="sec01 row container_sec">

                    <div class="col-sm-12 col-md-12 tab-content">

                        

                       <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>User ID : </span></div>
                        <div class="col-md-4"><input type="text" id="userid" name="fname"/></div>
                        </div>

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Password : </span></div>
                        <div class="col-md-4"><input type="password" id="password" name="fname"/></div>
                        </div>

                         <div class="row" style="margin-bottom: 10px;">
                             <div class="col-md-4"></div>
                        <div class="col-md-4"><span id="login_error"> </span></div>
                       
                        </div>

                        

                         <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"></div>
                        <div  class="col-md-8 ">
                              <button id="login" class=" button publish_button" onclick="login_check()" type="button">LOGIN</button>
                        
                        </div>
                        </div>

                        
                       
                    </div>
                </div>
            </div>




          
            


        </div>
    </div>

</asp:Content>

