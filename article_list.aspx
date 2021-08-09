<%@ Page Title="" Language="C#" MasterPageFile="~/YesInvest.master" AutoEventWireup="true" CodeFile="article_list.aspx.cs" Inherits="article_list" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <script src="js/article_list_all.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div class="container">
        <div class="maincontainer">
            <section class="banner_container">
                <div class="breadcrumb_sec"><span class="main_menu"><a href="home.aspx">Home</a> &gt; <span class="sub_menu">Article List</span></span> </div>

            </section>


            <div class="securities_sec">


                 <div class="sec01 row container_sec text-center">

                <h1 id="article_title">Article's List</h1>
                     </div>
              

            </div>

            <section class="container_sec">


                <!-- 1st tab -->
                <div id="press_releases" class="row tab-content">

                    <div id="article_list" class=" mrt40">
                    </div>




                </div>

            </section>

        </div>
    </div>
        

</asp:Content>

