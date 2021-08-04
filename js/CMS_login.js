

function login_check() {
    var id = $("#userid").val();
    var pass = $("#password").val();

    if (id == "" || pass == "")
    {
        $("#login_error").text("Please enter Username and Password");

    }

    else {
    pass = window.btoa(unescape(encodeURIComponent(pass)))

    var paramsHTML = {};
    paramsHTML.userid = id;
    paramsHTML.pass = pass;
    paramsHTML = JSON.stringify(paramsHTML);
    LoginAPIcall("CMS_login.aspx/login", paramsHTML, loginSuccess, loginFail);
    }

}




function loginSuccess(response) {

    console.log(response);

    var result = JSON.parse(response.d);
    var valid = result.Table[0].result;

    if (valid == "authenticated") {
        var loginsession = "true";
        var usertype = result.Table[0].usertype;
        var user = result.Table[0].userid;

        localStorage.setItem("login_session", loginsession);
        localStorage.setItem("CMS_usertype", usertype);
        localStorage.setItem("CMS_userid", user);

        $("#userid").val("");
        $("#password").val("");
        $("#login_error").text("");

        window.location.href = "CMS_pages.aspx";

        

        //   redirect to CMS home page
    }
    else {
        $("#login_error").text("Invalid Username or Password");
    }
   

}

function loginFail(response) {

    console.log(response);

}

function LoginAPIcall(url, data, successEvent, failureEvent) {

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



$(document).ready(function () {

    localStorage.clear();
});