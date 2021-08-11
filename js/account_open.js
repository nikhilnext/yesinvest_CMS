$(document).ready(function () {
    $('#yes').click(function () {
        $('.new_customer').hide();
        $('.existing_customer').show();
    });
    $('#no').click(function () {
        $('.existing_customer').hide();
        $('.new_customer').show();
    });

});

function contactme ()
{

    var fullname = $("#fullname").val();
    var contact = $("#number").val();
    var email = $("#emailid").val();
    var city = $("#city").val();
    var state = $("#state").val();

    $("#FullName_erroryes").text("");
    $("#City_erroryes").text("");
    $("#State_erroryes").text("");
    $("#Email_erroryes").text("");
    $("#contact_erroryes").text("");
    $("#No_erroryes").text("");
    $('#erroryes').text("");


    if ((fullname).trim() == "") {
        $("#FullName_erroryes").text("Enter Your FullName");

        return false;
    }
    if ((city).trim() == "") {
        $("#City_erroryes").text("Enter Your City");

        return false;
    }
    if ((state).trim() == "") {
        $("#State_erroryes").text("Enter Your City");

        return false;
    }

    if (email.length <= 0) {
        $("#Email_erroryes").text("Enter Email ID");

        return false;
    }

    if (email.length > 0) {
        if (!validateEmail(email)) {
            $("#Email_erroryes").text("Enter Valid Email ID");

            return false;
        }
    }

    if (contact.length <= 0) {
        $("#contact_erroryes").text("Please Enter Contact Number");

        return false;
    }


    if (fullname === "" || city === "" || email === "" || contact === "") {
        $('#erroryes').text("Please enter all details");

    }

    else {

        //SaveContactData(fullname, city, email, contact);

        CreateToken(fullname, city, contact, email, state); // Commented 20210108 For Celision Lead api issue as its not working so donot call this api for now
    }
		
}


function CreateToken(fullname, city, contact, email, state) {
    var params = {};
    params.fullname = fullname;
    params.city = city;
    params.number = contact;
    params.email = email;
    params.state = state;
    params = JSON.stringify(params);
    //$("#WaitingForResponse").modal("show");
    APIcall("open_account.aspx/saveData", params, CreateTokenSuccess, CreateTokenFail);
}

function CreateTokenSuccess(response) {


    var resultOfSaveDB = (response.d);
    if (resultOfSaveDB == "Success") {
        
        $("#fullname").val('');
        $("#number").val('');
        $("#emailid").val('');
        $("#city").val('');
        $("#state").val('');
        
        $("#popup_msg").text("Thank you for contacting us");
        $('#check').modal('show');
        
    }
}

function CreateTokenFail(response)
{
    console.log(response);
}

function validateEmail(sEmail) {
    var regex = /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    if (regex.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}