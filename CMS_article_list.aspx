<%@ Page Title="" Language="C#" MasterPageFile="~/CMSMaster.master" AutoEventWireup="true" CodeFile="CMS_article_list.aspx.cs" Inherits="CMS_article_list" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <script src="js/article_list.js"></script>
    <style>
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.button_new {background-color: #4CAF50;} /* Green */
.button_edit {background-color: #008CBA;} /* Blue */
.button_delete {background-color: #d20505;} /* Blue */
</style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">



     <div class="container">
        <div class="maincontainer">
            <section class="banner_container">
                <div class="breadcrumb_sec"><span class="main_menu"><a href="home.aspx">Home</a> &gt; <span class="sub_menu">Article List</span></span> </div>

            </section>


            <div class="securities_sec ">


                <div class="sec01 row container_sec text-center">

               <h1 class="article_title">Article's List Page</h1>
                     </div>

               


                <div class="sec01 row container_sec">

                    <div class="col-sm-12 col-md-12 ">

                        <button onclick="location.href='CMS_article.aspx'"; style="margin-bottom: 20px;" class="button button_new">Add New</button>

                         <div class="article_list">

                     

                          
                           
                             </div>
                        
                          
                            </div>
                        
                       
                    </div>
                </div>
            </div>


            


        </div>
    

</asp:Content>

