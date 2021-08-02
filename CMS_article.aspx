<%@ Page Title="" Language="C#" MasterPageFile="~/CMSMaster.master" AutoEventWireup="true" CodeFile="CMS_article.aspx.cs" Inherits="CMS_article" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    
     <script>
$('.summernote').summernote({
    height: 200,   //set editable area's height
    width : 600,
  codemirror: { // codemirror options
    theme: 'monokai'
  }
});

var edit = function() {
  $('.click2edit').summernote({focus: true});
};

var save = function() {
  var markup = $('.click2edit').summernote('code');
  $('.click2edit').summernote('destroy');
};

</script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div class="container">
        <div class="maincontainer">
            <section class="banner_container">
                <div class="breadcrumb_sec"><span class="main_menu"><a href="home.aspx">Home</a> &gt; <span class="sub_menu">Article Entry</span></span> </div>

            </section>


            <div class="securities_sec">

                <h1 class="what_we_are_hd">Article Entry Page</h1>


                <div class="sec01 row container_sec">

                    <div class="col-sm-12 col-md-12 ">

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Article ID : </span></div>
                        <div class="col-md-4"><input type="text" disabled id="article_id" name=""/></div>
                        </div>

                       <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Title : </span></div>
                        <div class="col-md-4"><input type="text" id="article_title" name="fname"/></div>
                        </div>

                         <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Short Description (Text) : </span></div>
                        <div class="col-md-4"> <textarea id="article_shortdesc" name="short description" rows="2" cols="50"></textarea></div>
                        </div>

                         <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Banner Image : </span></div>
                        <div class="col-md-4"><input type="file" id="article_banner" name="img" onchange="loadFile(event)" accept="image/*"/></div>
                        </div>

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Long Description : </span></div>
                        <div id="long_description" class="col-md-8 ">
                            <textarea id="article_longdesc" class="click2edit" name="shott description" rows="2" cols="50"></textarea>
                        </div>
                        </div>

                        <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"></div>
                        <div  class="col-md-8 ">
                              <button id="edit" class="btn btn-primary" onclick="edit()" type="button">Edit</button>
                         <button id="save" class="btn btn-primary" onclick="save()" type="button">Save</button>
                        </div>
                        </div>

                       

                         <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"><span>Author : </span></div>
                        <div class="col-md-4"><input type="text" id="article_author" name="Author"/></div>
                        </div>

                         <div class="row" style="margin-bottom: 10px;">
                        <div class="col-md-4"></div>
                        <div  class="col-md-8 ">
                              <button id="article_publish" class="publish_button" onclick="article_publish()" type="button">Publish</button>
                        
                        </div>
                        </div>

                        
                       
                    </div>
                </div>
            </div>




           
            


        </div>
    </div>
</asp:Content>

