

function GetSebiData()
{
    var month = $("#month").val();

    var paramsHTML = {};
    paramsHTML.month = month;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("regulatory_disclosures.aspx/GetSebidata", paramsHTML, SebiDataSuccess, SebiDataFail);

}

$("#month").change(function () {
    GetSebiData();
});


function SebiDataSuccess (response)
{

    console.log(response);
  
    var result = JSON.parse(response.d);
    if (result.Table != 0) {

        $.each(result.Table, function () {
            var begin = this.Beginning_of_Month;
            var during = this.Received_during_Month;
            var pending = this.Pending_End_of_Month;
            var reason = this.Reasons_for_Pendency;
            var resolve = this.Resolved_during_Month;


            $("#begin").val(begin);
            $("#during").val(during);
            $("#pending").val(pending);
            $("#reason").val(reason);
            $("#resolve").val(resolve);
            
        });
    }

}

function SebiDataFail(response) {

    console.log(response);

}


function sebi_change()
{

    var month1 = $("#month").val();
    var begin1  = $("#begin").val();
    var during1  = $("#during").val();
    var pending1  = $("#pending").val();
    var  reason1 = $("#reason").val();
    var resolve1 = $("#resolve").val();
    var Getuser = localStorage.getItem("CMS_userid");

    var paramsHTML = {};
    paramsHTML.user = Getuser;
    paramsHTML.month = month1;
    paramsHTML.begin = begin1;
    paramsHTML.during = during1;
    paramsHTML.pending = pending1;
    paramsHTML.reason = reason1;
    paramsHTML.resolve = resolve1;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("CMS_regulatory.aspx/ModifySebidata", paramsHTML, sebi_changeSuccess, sebi_changeFail);
}

function sebi_changeSuccess(response)
{

    var result = response.d;
    if (result == "success") {
        $('#popup_msg').text('Data updated successfully.');
        $("#check").find(":button").attr("onclick", "GetSebiData()");
        $('#check').modal('show');


    }

    //console.log(response);
    

    //$('#check').modal('show');
   // GetSebiData();
   // ToastPopup("Success", "Article added successfully");

}

function sebi_changeFail(response) {
    console.log(response);
}















$(document).ready(function () {

    GetSebiData();


    $("#month").change(function () {
        GetSebiData();
    });
});