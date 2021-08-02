<%@ Page Title="" Language="C#" MasterPageFile="~/CMSMaster.master" AutoEventWireup="true" CodeFile="CMS_detail_page.aspx.cs" Inherits="CMS_detail_page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script src="js/CMS_detail_page.js"></script>

     <script>
$('.summernote').summernote({
  height: 150,   //set editable area's height
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

        <div id="CMS_modify" class=" hidden" style="margin: 20px;text-align: center;">
            <button id="edit" class="btn btn-primary" onclick="edit()" type="button">Edit</button>
            <button id="save" class="btn btn-primary" onclick="save()" type="button">Save</button>
        <button id="pagepublish" class="btn btn-success" onclick="Pagepublish()" type="button">Publish</button> 
        </div>

     <div id="CMS_detail_page" class="maincontainer click2edit">


   



         </div>

        
         	
         </div>
</asp:Content>

