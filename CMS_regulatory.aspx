<%@ Page Title="" Language="C#" MasterPageFile="~/CMSMaster.master" AutoEventWireup="true" CodeFile="CMS_regulatory.aspx.cs" Inherits="CMS_regulatory" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <script src="js/CMS-sebidata.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


       <div class="container">
        <div class="maincontainer">
            <section class="banner_container">
                <div class="breadcrumb_sec"><span class="main_menu"><a href="home.aspx">Home</a> &gt; <span class="sub_menu">Regulatory Entry</span></span> </div>

            </section>


            <div class="securities_sec">

                <h1 class="what_we_are_hd">Regulatory disclosure Entry Page</h1>


                <div class="sec01 row container_sec">

                    <div class="col-sm-12 col-md-12 ">

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Month : </span></div>
                            <div class="col-md-4">

                                <select name="month" id="month">
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>

                            </div>
                        </div>

                       <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>At the beginning of the month : </span></div>
                        <div class="col-md-4"><input type="number" id="begin" name="fname"/></div>
                        </div>

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Received during the month : </span></div>
                        <div class="col-md-4"><input type="number" id="during" name="fname"/></div>
                        </div>

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Resolved during the month : </span></div>
                        <div class="col-md-4"><input type="number" id="resolve" name="fname"/></div>
                        </div>

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Pending at the end of the month : </span></div>
                        <div class="col-md-4"><input type="number" id="pending" name="fname"/></div>
                        </div>

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Resaons for Pendency : </span></div>
                        <div class="col-md-4"> <textarea id="reason" name="reason" rows="2" cols="50"></textarea></div>
                        </div>

                        

                         <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"></div>
                        <div  class="col-md-8 ">
                              <button id="article_publish" class="publish_button" onclick="sebi_change()" type="button">Publish</button>
                        
                        </div>
                        </div>

                        
                       
                    </div>
                </div>
            </div>




           <%-- <section class="modal fade" id="check" role="dialog">
    <div class="modal-dialog login-dialog" style="margin-top: 21px;">
        <div class="modal-content">
           
            <div class="modal-body login-body">
                
               <p> success </p>

                <button type="button" class="btn btn-primary text-uppercase margint10 btnmpMobileUpdated" data-dismiss="modal">
                                    Close
                                </button>
            </div>
        </div>
    </div>
</section>--%>
            


        </div>
    </div>
</asp:Content>

