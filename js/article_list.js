
function GetArticleListdata(article_id) {

    // API call to get article list and bid on page 
    var paramsHTML = {};
    paramsHTML.id = article_id;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("CMS_article_list.aspx/GetArticleListdata", paramsHTML, ArticleListdataSuccess, ArticleListdataFail);
}

function ArticleListdataSuccess(response)
{
    // bind data on page
    console.log(response);
    $(".article_list").html("");
    var result = JSON.parse(response.d);

    if (result.Table != 0) {

        $.each(result.Table, function () {
            var id = this.id;
            var title = this.title;
            var short_desc = this.short_desc;
            var author = this.author;

            var nodata = $(".article_list");
            var data = "Private Equity";
            nodata.append("<div class='row' style='margin-bottom: 10px;'> <div class='col-md-8'><span><b>" + title + "</b> </span> <br /> <span><i>Uploaded by : " + author + " </i></span></div> <div class='col-md-4'> <button data-articleid=" + id + " onclick='Preview_article(this);' class='btn btn-success' title='view'>View</button>  <button data-articleid=" + id + " onclick='Edit_article(this);' class='btn btn-primary' title='Edit'>Edit</button> <button data-articleid=" + id + " onclick='Delete_article(this);' class='btn btn-danger' title='delete'>Delete</button>  </div></div>");
    


            

        });
    }


}

function ArticleListdataFail(response) {
    console.log(response);
}

$(document).ready(function () {

    GetArticleListdata(0);
});


function Edit_article(obj)
{
    var id = $(obj).attr("data-articleid");
    var paramsHTML = {};
    paramsHTML.id = id;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("CMS_article_list.aspx/GetArticleListdata", paramsHTML, EditArticledataSuccess, EditArticledataFail);

}

function EditArticledataSuccess(response)
{
    var result = JSON.parse(response.d);
    var jsonresultdata = JSON.stringify(result);
  
    //sessionStorage.setItem('EditArticle', jsonresultdata);
    localStorage.setItem('EditArticle', jsonresultdata);
    console.log(response);
    window.location.href = "CMS_article.aspx";  //Redirect(CMS_article.aspx);
}

function EditArticledataFail(response) {
    console.log(response);
}

function Delete_article(obj)
{
    var article_id = $(obj).attr("data-articleid");
    article_id = parseInt(article_id);
    action = "delete";

    var Getuser = localStorage.getItem("CMS_userid");

    var paramsHTML = {};
    paramsHTML.user = Getuser;
    paramsHTML.action = action;
    paramsHTML.article_id = article_id;
    paramsHTML.article_title = "";
    paramsHTML.article_shortdesc = "";
    paramsHTML.article_banner = "";
    paramsHTML.article_longdesc = "";
    paramsHTML.article_author = "";
    paramsHTML = JSON.stringify(paramsHTML);

    APIcall("CMS_article_list.aspx/ModifyArticleListdata", paramsHTML, deletearticleSuccess, deletearticleFail);
}

function deletearticleSuccess(response)
{

    console.log(response);
    GetArticleListdata(0);
}

function deletearticleFail(response) {
    console.log(response);

}

//----- Pre view detail page

function Preview_article(obj) {
    var id = $(obj).attr("data-articleid");
    var url = "article-detail.aspx?id=" + id;
   // window.location.href = "article-detail.aspx?id=" + id;
    window.open(url, "_blank")
   // ('https://support.wwf.org.uk', "_blank")

}

