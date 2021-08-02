$(document).ready(function () {

    var urlID = GetUrlID();
    getPageHTML(urlID);
    

});

function GetUrlID() {
    var pageN =  document.location.href.match(/[^\/]+$/)[0]
    console.log(pageN);
    pageN = pageN.split('.')[0];

    return pageN+"_page";
}

function getPageHTML(pagename) {
    // var id = $(obj).attr("data-articleid");
    var paramsHTML = {};
    paramsHTML.pagename = pagename;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("pagedata.aspx/Getpagedata", paramsHTML, getPageHTMLSuccess, getPageHTMLdataFail);

}

function getPageHTMLSuccess(response)
{
    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var id = result.Table[0].page_name;
        var CurrentHTML = atob(result.Table[0].current_content);

        $("#" + id).append(CurrentHTML);

    }
}

function getPageHTMLdataFail(response)
{
    console.log(response);
}