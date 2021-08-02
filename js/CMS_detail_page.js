var pagename;
var action;


function getCMSPageHTML(pagename,action) {
    // var id = $(obj).attr("data-articleid");
    var paramsHTML = {};
    paramsHTML.pagename = pagename;
    paramsHTML.mode = action;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("CMS_detail_page.aspx/CMS_detail_HTML", paramsHTML, getCMSPageHTMLSuccess, getCMSPageHTMLFail);

}

function getCMSPageHTMLSuccess(response) {
    var result = JSON.parse(response.d);
    var CurrentHTML;
    if (result.Table != 0) {
        var id = result.Table[0].page_name;
        if (action == "1")
        {
            CurrentHTML = atob(result.Table[0].current_content);
        }
        else
        {
            CurrentHTML = atob(result.Table[0].modified_content);
            $("#CMS_modify").removeClass("hidden");
         
        }
       

        $("#CMS_detail_page").append(CurrentHTML);

    }
}

function getCMSPageHTMLFail(response) {
    console.log(response);
}



function Pagepublish() {
    var gethtml = $("#CMS_detail_page").html();
    console.log(gethtml);

    var base64convert = window.btoa(unescape(encodeURIComponent(gethtml)))
    var paramsHTML = {};
    paramsHTML.PageName = pagename;
    paramsHTML.PageData = base64convert;
    paramsHTML.userid = "nikhil";
    paramsHTML = JSON.stringify(paramsHTML);


    APIcall("CMS_detail_page.aspx/CMS_detail_ModifyHTML", paramsHTML, PagepublishSuccess, PagepublishFail);

}


function PagepublishSuccess(response)
{
    var result = response.d;
    if (result == "success")
    {
        $('#popup_msg').text('Page published successfully.');
        $('#check').modal('show');
    }
}

function PagepublishFail(response) {
    console.log(response);
}

$(document).ready(function () {

    var ViewEditpage = localStorage.getItem("Editdetailpage");
    //localStorage.removeItem('Editdetailpage'); // clear local storage

    pagename = ViewEditpage.split("-")[0];
    action = ViewEditpage.split("-")[1];

   getCMSPageHTML(pagename, action);

});

