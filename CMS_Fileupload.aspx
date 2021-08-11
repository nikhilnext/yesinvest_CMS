<%@ Page Title="" Language="C#" MasterPageFile="~/CMSMaster.master" AutoEventWireup="true" CodeFile="CMS_Fileupload.aspx.cs" Inherits="CMS_Fileupload" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="js/CMS_fileupload.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


      <div class="container">
        <div class="maincontainer">
            <section class="banner_container">
                <div class="breadcrumb_sec"><span class="main_menu"><a href="home.aspx">Home</a> &gt; <span class="sub_menu">Article Entry</span></span> </div>

            </section>


            <div class="securities_sec">

                <h1 class="what_we_are_hd">File Upload</h1>


                <div class="sec01 row container_sec">

                    <div class="col-sm-12 col-md-12 tab-content">

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>File category : </span></div>
                        <div class="col-md-4">
                             <select name="category" id="file_category">
                                    <option value="media">Media</option>
                                    <option value="research">Research</option>
                                    <option value="article">Article</option>
                                    <option value="other">Other</option>
                                   </select>
                        </div>
                        </div>

                         <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>File Type : </span></div>
                        <div class="col-md-4">
                             <select name="filetype" id="file_type">
                                    <option value="image">Image</option>
                                    <option value="document">Document</option>
                                    
                                   </select>
                        </div>
                        </div>

                       

                         <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Select File : </span></div>
                        <div class="col-md-4"><input type="file" id="file_upload" name="img" onchange="FileUploadcheck(event)" accept="image/*" /></div>
                        </div>

                         <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"></div>
                        <div  class="col-md-8 ">
                              <button id="file_upload_button" class="publish_button" onclick="fileupload()" type="button">Upload</button>
                        
                        </div>
                        </div>

                        
                       
                    </div>
                </div>
            </div>




           
            


        </div>
    </div>

</asp:Content>

