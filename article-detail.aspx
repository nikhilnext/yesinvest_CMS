<%@ Page Title="" Language="C#" MasterPageFile="~/YesInvest.master" AutoEventWireup="true" CodeFile="article-detail.aspx.cs" Inherits="article_detail" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="js/article-detail.js"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


     <div class="articles">
        <div class="maincontainer">



            <section class="banner_container">
                <div class="breadcrumb_sec"><span class="main_menu"><a href="home.aspx">Home</a> &gt; <span id="article_bread" class="sub_menu"></span></span> </div>

            </section>

             

            <div class="securities_sec">

                 <div class="sec01 row container_sec text-center">

                <h1 id="article_title"></h1>
                     </div>


                <div class="sec01 row container_sec">

                    <div class="col-sm-12 col-md-12 ">
                        <div class="container_sec_cont">
                            <p id="article_date_author"></p>

                            <p id="article_shortdesc"> </p>

                        </div>
                    </div>
                </div>

               
                    <div class="sec01 row container_sec">

                        <div class="col-sm-12 col-md-12 ">
                            <div id="article_banner" class="container_sec_cont">
                               
                            </div>
                        </div>
                    </div>

                

                 <div class="sec01 row container_sec">

                    <div id="article_longdesc" class="col-sm-12 col-md-12 ">
                     

                       
                    </div>
                </div>
            </div>

           







        </div>
    </div>

</asp:Content>

