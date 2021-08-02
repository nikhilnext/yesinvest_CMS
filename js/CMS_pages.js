function GetPageList(name) {

    // API call to get article list and bid on page 
    var paramsHTML = {};
    paramsHTML.pagename = name;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("CMS_pages.aspx/CMS_pagelist", paramsHTML, GetPageListSuccess, GetPageListFail);
}

function GetPageListSuccess(response) {
    // bind data on page
    console.log(response);
    $(".all_page_list").html("");
    var result = JSON.parse(response.d);

    if (result.Table != 0) {

        $.each(result.Table, function () {
            var name = this.page_name;
            var date = this.change_date;
            var modifyby = this.changed_by;
            var status = this.pending_approval;
            if (status == "yes")
            {
                status = "<br /> <span><i style='color: red;'>Status : awaiting approval</i></span>";
            }
            else if (status == "approved")
            { status = "<br /> <span><i style='color: green;'>Status : Approved </i></span>"; }

            else 
            {  status = ''}

            var nodata = $(".all_page_list");
           
            nodata.append("<div class='row' style='margin-bottom: 10px;'> <div class='col-md-8'><span><b>" + name + "</b> </span> <br /> <span><i>last changed by : " + modifyby + " </i></span> <br /> <span><i>last changed date : " + date + " </i></span> "+ status +"</div> <div class='col-md-4'> <button data-pagename=" + name + " data-pageview=1 onclick='Preview_page(this);' class='btn btn-success' title='view'>View</button> <button data-pagename=" + name + " data-pageview=2 onclick='Preview_page(this);' class='btn btn-primary' title='view'>Modified</button> </div></div>");





        });
    }


}

function GetPageListFail(response) {
    console.log(response);
}

$(document).ready(function () {

    GetPageList("");
});


function Preview_page(obj)
{
    var name = $(obj).attr("data-pagename");
    var view = $(obj).attr("data-pageview");

    var page_session = name + "-" + view;

    //sessionStorage.setItem('EditArticle', jsonresultdata);
    localStorage.setItem('Editdetailpage', page_session);
    //console.log(response);
    window.location.href = "CMS_detail_page.aspx";  //Redirect(CMS_article.aspx);
}

