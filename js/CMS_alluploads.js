function GetUploadList() {

    var file_type = $("#file_type").val();
    var paramsHTML = {};
    paramsHTML.filetype = file_type;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("CMS_Fileupload.aspx/CMS_GetAllFiles", paramsHTML, GetUploadListSuccess, GetUploadListFail);
}

function GetUploadListSuccess(response) {
    // bind data on page
    console.log(response);
    $(".all_upload_list").html("");
    var result = JSON.parse(response.d);

    if (result.Table != 0) {

        $.each(result.Table, function () {
            var id = this.fileid;
            var name = this.filename;
            var path = this.filepath;
            var category = this.category;
            var uploaddate = this.date;
            var uploadby = this.userid;
            

            var nodata = $(".all_upload_list");

            nodata.append("<div class='row' style='margin-bottom: 10px;'> <div class='col-md-8'><span><b>" + name + "</b> </span> <br /> <span style='background: blanchedalmond;'><b>" + path + "</b> </span> <br> <span><i> Uploded by : " + uploadby + "  / date : " + uploaddate + " </i></span> </div>   <div class='col-md-4'> <a class='btn btn-success' target='_blank' href='" + path + "'>View</a> </div></div>");





        });
    }


}

function GetUploadListFail(response) {
    console.log(response);
}


$(document).ready(function () {

    GetUploadList();

    $("#file_type").change(function () {
        GetUploadList();
    });
});



