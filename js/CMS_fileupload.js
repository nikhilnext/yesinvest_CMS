var fileName;
var filetype;
var filedata;

var FileUploadcheck = function (event) {
    var input = event.target;
    fileName = event.target.files[0].name;
    filetype = event.target.files[0].type;
    var reader = new FileReader();
    reader.onload = function () {
        var text1 = reader.result;
        filedata = text1;
        console.log(text1);
    };
    reader.readAsDataURL(input.files[0]);

};

function setupload_filetype()
{
    var settype = $("#file_type").val();
    if (settype == "image") {

        $("#file_upload").val("");
        $("#file_upload").removeAttr("accept");
        $("#file_upload").attr("accept", "image/*");
    }
    else {
        $("#file_upload").val("");
        $("#file_upload").removeAttr("accept");
        $("#file_upload").attr("accept", ".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf");
    }
}


$(document).ready(function () {

    $("#file_type").change(function () {
        setupload_filetype();
    });

});





function fileupload()
{

   // http://localhost/test%20yes/api/FileUpload/Upload
    var Getuser = localStorage.getItem("CMS_userid");
    var upload_category = $("#file_category").val();
    var Upload_filename = fileName;
    var filebases64 = "";
    var userid = "nikhil";
    var Upload_filetype = filetype;
    var Upload_data = filedata.split(",")[1];

    var paramsHTML = {};
    paramsHTML.data = Upload_data;
    paramsHTML.filename = Upload_filename;
    paramsHTML.filetype = Upload_filetype;
    paramsHTML.userid = Getuser;
    paramsHTML.category = upload_category;
    paramsHTML = JSON.stringify(paramsHTML);

    APIcall("http://localhost/test%20yes/api/FileUpload/Upload", paramsHTML, fileuploadSuccess, fileuploadFail);

    // file upload API and get path 


}

function fileuploadSuccess(response)
{
    var result = response;
    if (result.status == "success")
    {

        var upload_path = result.path;
        var upload_category = $("#file_category").val();
        Upload_filetype = $("#file_type").val();
        var Upload_filename = fileName;
        var Getuser = localStorage.getItem("CMS_userid");
        // call db save API

        var paramsHTML = {};
        
        paramsHTML.filename = Upload_filename;
        paramsHTML.filetype = Upload_filetype;
        paramsHTML.filepath = upload_path;
        paramsHTML.userid = Getuser;
        paramsHTML.category = upload_category;
        paramsHTML = JSON.stringify(paramsHTML);

        APIcall("CMS_Fileupload.aspx/CMS_Upload_File", paramsHTML, CMS_UploadSuccess, CMS_UploadFail);

    
    }

}

function fileuploadFail(response) {
    console.log(response);
}


function CMS_UploadSuccess(response)
{
    console.log(response);
}

function CMS_UploadFail(response) {
    console.log(response);
}






function savefileDB()
{
    var month = $("#file_category").val();
    var filename = "";
    var path = "";
    var userid = ""; // from file upload response
    var filetype = "";

}

