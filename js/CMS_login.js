

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
    APIcall("CMS_login.aspx/login", paramsHTML, loginSuccess, loginFail);
    }

}




function loginSuccess(response) {

    console.log(response);

    var result = JSON.parse(response.d);
    var valid = result.Table[0].result;

    if (valid == "authenticated") {
        var loginsession = "true";
        localStorage.setItem("login_session", loginsession);
        //   redirect to CMS home page
    }
    else {
        $("#login_error").text("Invalid Username or Password");
    }
   

}

function loginFail(response) {

    console.log(response);

}



$(document).ready(function () {

 
});