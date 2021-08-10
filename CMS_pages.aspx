<%@ Page Title="" Language="C#" MasterPageFile="~/CMSMaster.master" AutoEventWireup="true" CodeFile="CMS_pages.aspx.cs" Inherits="CMS_pages" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="js/CMS_pages.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

     <div class="container">
        <div class="maincontainer">
            <section class="banner_container">
                <div class="breadcrumb_sec"><span class="main_menu"><a href="home.aspx">Home</a> &gt; <span class="sub_menu">Pages</span></span> </div>

            </section>


            <div class="securities_sec ">


                <div class="sec01 row container_sec text-center">

               <h1 class="article_title">Page List</h1>
                     </div>

               


                <div class="sec01 row container_sec">

                    <div class="col-sm-12 col-md-12 ">

                       <%-- <button onclick="location.href='CMS_article.aspx'"; style="margin-bottom: 20px;" class="button button_new">Add New</button>--%>

                         <div class="all_page_list tab-content">

                     

                          
                           
                             </div>
                        
                          
                            </div>
                        
                       
                    </div>
                </div>
            </div>


            


        </div>

</asp:Content>

