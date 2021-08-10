<%@ Page Title="" Language="C#" MasterPageFile="~/CMSMaster.master" AutoEventWireup="true" CodeFile="CMS_Alluploads.aspx.cs" Inherits="CMS_Alluploads" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <script src="js/CMS_alluploads.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

     <div class="container">
        <div class="maincontainer">
            <section class="banner_container">
                <div class="breadcrumb_sec"><span class="main_menu"><a href="home.aspx">Home</a> &gt; <span class="sub_menu">All Uploads</span></span> </div>

            </section>


            <div class="securities_sec ">


                <div class="sec01 row container_sec text-center">

               <h1 class="article_title">All Uploads</h1>
                     </div>

               


                <div class="sec01 row container_sec">


                     <div class="col-sm-12 col-md-12 tab-content">

                          <button onclick="location.href='CMS_Fileupload.aspx'"; style="margin-bottom: 20px;" class="btn btn-success">Upload New</button>
                         </div>


                     <div class="col-sm-12 col-md-12 tab-content" style="margin-bottom: 10px;">

                           
                       
                            <span style="margin-right: 20px;">File Type : </span>
                             <select name="filetype" id="file_type">
                                    <option value="image">Image</option>
                                    <option value="document">Document</option>
                                    
                                   </select>
                    
                       
                        
                         </div>


                    <div class="col-sm-12 col-md-12 tab-content">


                        
                       

                       
                       <%-- <button onclick="location.href='CMS_article.aspx'"; style="margin-bottom: 20px;" class="button button_new">Add New</button>--%>

                         <div class="all_upload_list">

                     

                          
                           
                             </div>
                        
                          
                            </div>
                        
                       
                    </div>
                </div>
            </div>


            


        </div>


</asp:Content>

