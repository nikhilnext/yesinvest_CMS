function getDetailArticle(urlID)
{
   // var id = $(obj).attr("data-articleid");
    var paramsHTML = {};
    paramsHTML.id = urlID;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("article_list.aspx/GetArticleListdata", paramsHTML, DetailArticledataSuccess, DetailArticledataFail);

}

function DetailArticledataSuccess(response)
{

    var result = JSON.parse(response.d);

    if (result.Table != 0) {

        //var result = CheckEditArticle;
        $.each(result.Table, function () {
            var id = this.id;
            var title = this.title;
            var date = this.date;
            var short_desc = this.short_desc;
            var long_desc = this.long_desc;
            var long_desc_html = atob(long_desc);
            var author = this.author;
            var img = this.banner_img;



            $("#article_bread").append(title);
            $("#article_date_author").append(" <span>Author : <b> " + author + "</b>  </span> |   <span> Published on :  <b> " + date + "</b></span> ");
           // $("#article_date").append(author);
            $("#article_banner").append("<img alt='" + title + "' class='img-responsive' src='" + img + "' width='100%' height='70%' />");

            $("#article_title").append(title);
            $("#article_shortdesc").append(short_desc);
            $("#article_longdesc").append(long_desc_html);




        });
    }


}

function DetailArticledataFail(response) {

}


$(document).ready(function () {

    var urlID = GetUrlID();
    getDetailArticle(urlID[1]);
    //id = urlparams[urlparams.length - 1];
    //var pos = id.indexOf("?");
    //id = pos > -1 ? id.substring(0, pos) : id;
	
});

function GetUrlID() {
    var hashes = window.location.href.split('=').slice();
   
    return hashes;
}

//var field = 'id';
//var url = window.location.href;
//if(url.indexOf('?' + field + '=') != -1)
//    return true;
//else if(url.indexOf('&' + field + '=') != -1)
//    return true;
//return false