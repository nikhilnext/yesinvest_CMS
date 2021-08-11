
function APIcall(url, data, successEvent, failureEvent) {

    $.ajax({

        type: "POST",

        crossDomain: true,

        url: url,

        data: data,

        contentType: "application/json; charset=utf-8",

        datatype: "jsondata",

        success: successEvent,

        error: failureEvent,

        async: "true"


    });
}

function Redirect(url) {
    location.href = url;
}


function publish(pagename, classname)
{
	var gethtml =  $("." + classname).html();
console.log(gethtml);

var base64convert = window.btoa(unescape(encodeURIComponent(gethtml)))
	var paramsHTML = {};
    paramsHTML.PageName = pagename;
    paramsHTML.PageData = base64convert;
    paramsHTML = JSON.stringify(paramsHTML);
	
	
	 APIcall("publish.aspx/PublishPageData", paramsHTML,publishSuccess, publishFail);
 
}

function publishSuccess(response)
{}

function publishFail ()
{}



//var article_banner



var article_banner="";
var loadFile = function (event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var text1 = reader.result;
        article_banner = text1
        console.log(article_banner);
    };
    reader.readAsDataURL(input.files[0]);
   
};


  

function article_publish()
{
    var action = "";
	var article_id = $("#article_id").val();
	var article_title = $("#article_title").val();
	var article_shortdesc = $("#article_shortdesc").val();
	//var article_banner = article_banner;

	
	//var article_longdesc = $("#article_longdesc").html();; // base 64 convert 

	//var e = document.getElementById("article_longdesc");
	//var longhtml = e.innerHTML;
	var longhtml = $("#article_longdesc").val();

	//var longhtml = $("#article_longdesc").innerHTML();
	var base64_logdesc = window.btoa(unescape(encodeURIComponent(longhtml)))
	var article_author = $("#article_author").val();
	
	if (article_title == "" || article_shortdesc == "") {
	    return false
	}
	else
	{
	    if (article_id == "") {
	        article_id = 1;
	        action = "new";
	    }
	    else {
	        article_id = parseInt(article_id);
	        action = "update";
	    }
        
	    var Getuser = localStorage.getItem("CMS_userid");

	    var paramsHTML = {};
	    paramsHTML.user = Getuser;
	    paramsHTML.action = action;
	    paramsHTML.article_id = article_id;
	    paramsHTML.article_title = article_title;
	    paramsHTML.article_shortdesc = article_shortdesc;
	    paramsHTML.article_banner = article_banner;
	    paramsHTML.article_longdesc = base64_logdesc;
	    paramsHTML.article_author = article_author;
	    paramsHTML = JSON.stringify(paramsHTML);

	    APIcall("CMS_article_list.aspx/ModifyArticleListdata", paramsHTML, article_publishSuccess, article_publishFail);
        // call api to insert
	    
	}
	
	
}


function ToastPopup(popuptype, msg) {
    switch (popuptype) {
        case "success":
            BootstrapAlert.success({
                title: "Success!",
                message: msg,
                dissmissible: true,
            });
            break;
        case "error":
            BootstrapAlert.alert({
                title: "Error!",
                message: msg,
                dissmissible: true,
            });
            break;
        case "info":
            BootstrapAlert.info({
                title: "Info!",
                message: msg,
                dissmissible: true,
            });
            break;
        case "warning":
            BootstrapAlert.warning({
                title: "Warning!",
                message: msg,
                dissmissible: true,
            });
            break;
    }
}

function article_publishSuccess(response)
{
    var result = response.d;
    if (result == "success") {
        $("#article_id").val("");
        $("#article_title").val("");
        $("#article_shortdesc").val("");
        $("#article_longdesc").val("");
        $("#article_longdesc").html();
        $('#article_banner').val('');
        $("#article_author").val("");


        $("#popup_msg").text("Article update successfully");
        $("#check").find(":button").attr("onclick", "window.location.href = 'CMS_article_list.aspx'");
        $('#check').modal('show');

       // onclick = " window.location.href = 'CMS_article_list.aspx'"
        //window.location.href = "CMS_article_list.aspx";
       

    }

    else if (result == "unuthorized")
    {
        $('#popup_msg').text('Session invalidated.');
        $("#check").find(":button").attr("onclick", "SessionExpity();");
        $('#check').modal('show');
      //  SessionExpity();
        return false;
    }
    else {

        $("#popup_msg").text(" fail to update Article");
        $('#check').modal('show');
        console.log(response);
        window.location.href = "CMS_article_list.aspx";


    }

   
  
    //ToastPopup("Success", "Article added successfully");
   // window.location.href = "CMS_article.aspx";
    // on success show submit msg and redirect to the listing page.
   // Redirect(CMS_article_list.aspx);
}

function article_publishFail(response) {
    console.log(response);
}




///---------------------------------///

$(document).ready(function () {


    var Check_login = localStorage.getItem("login_session");
    if (Check_login == "true") {

        var url = $(location).attr("href");
        if (url.includes("CMS_article")) {



            var CheckEditArticle = localStorage.getItem("EditArticle");
            localStorage.removeItem('EditArticle'); // clear local storage

            if (CheckEditArticle != null || CheckEditArticle != undefined) {
            }
            CheckEditArticle = jQuery.parseJSON(CheckEditArticle);
            var result = CheckEditArticle;
            $.each(result.Table, function () {
                var id = this.id;
                var title = this.title;
                var short_desc = this.short_desc;
                var long_desc = this.long_desc;
                var long_desc_html = atob(long_desc);
                var author = this.author;

                $("#article_id").val(id);
                $("#article_title").val(title);
                $("#article_shortdesc").val(short_desc);
                $("#article_longdesc").html(long_desc_html);
                $("#article_author").val(author);



            });
        }
        
    }

    else {
        SessionExpity();
    }

    
    
});


function SessionExpity()
{
    localStorage.clear();
    window.location.href = "CMS_Login.aspx";
}


function CMS_logout()
{

    var Check_user = localStorage.getItem("CMS_userid");
    //  API call to remove session 

    var paramsHTML = {};
    paramsHTML.user = Check_user;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("CMS_login.aspx/CMS_logout", paramsHTML, CMS_logoutSuccess, CMS_logoutFail);
}

function CMS_logoutSuccess(response)
{
    var result = response;
    if (result == "success")
    {
        SessionExpity();
    }
   
}

function CMS_logoutFail(response)
{
    console.log(response);

}

function CMS_tokencheck()
{
    var Check_user = localStorage.getItem("CMS_userid");
    var paramsHTML = {};
    paramsHTML.user = Check_user;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("CMS_login.aspx/CMS_checktoken", paramsHTML, CMS_tokencheckSuccess, CMS_tokencheckFail);

}

function CMS_tokencheckSuccess(response)
{
    var result = response;
    if (result != "success")
    {
        SessionExpity();
    }

}

function CMS_tokencheckFail(response)
{
    SessionExpity();
}

