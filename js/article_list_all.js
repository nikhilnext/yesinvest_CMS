
function GetArticleListdata(article_id) {

    // API call to get article list and bid on page 
    var paramsHTML = {};
    paramsHTML.id = article_id;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("article_list.aspx/GetArticleListdata", paramsHTML, ArticleListdataSuccess, ArticleListdataFail);
}

function ArticleListdataSuccess(response)
{
    // bind data on page
    console.log(response);
    var result = JSON.parse(response.d);

    if (result.Table != 0) {

        $.each(result.Table, function () {
            var id = this.id;
            var title = this.title;
            var short_desc = this.short_desc;
            var author = this.author;
            var date = this.date;
            var img = this.banner_img;

            var nodata = $("#article_list");

            var redirect = "detail_article.aspx?id=" + id;
           
            nodata.append("<div class='col-sm-4 mob_pdb40'><div id='article_img' class='article_cart'> <img class='card-img-top img-responsive' src=" + img + "><div class='card-body'><h6 id='article_date' class='card-subtitle'>" + date + "</h6> <a data-articleid=" + id + "  onclick = 'articleDetail(this)' style='cursor: pointer;'><h5 id='article_title' class='card-title'> " + title + "</h5></a><p id ='article_shortdesc' class='card-text'>" + short_desc + "</p></div></div></div>");

           

            

           
    
			});
    }


}

function ArticleListdataFail(response) {
    console.log(response);
}

$(document).ready(function () {

    GetArticleListdata(0);
});


//-------------------- detail page article --------------

function articleDetail(obj)
{
    var id = $(obj).attr("data-articleid");
    window.location.href = "article-detail.aspx?id="+id ;

}





