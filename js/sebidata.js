

function GetSebiData()
{

    var date = new Date();
    // var y = date.getFullYear();
    var month = date.getMonth();
   

    month = parseInt(month) + 1;
   // var month = $("#month").val();

    var paramsHTML = {};
    paramsHTML.month = month;
    paramsHTML = JSON.stringify(paramsHTML);
    APIcall("regulatory_disclosures.aspx/GetSebidata", paramsHTML, SebiDataSuccess, SebiDataFail);

}




function SebiDataSuccess (response)
{

    console.log(response);
  
    var result = JSON.parse(response.d);
    if (result.Table != 0) {

        $.each(result.Table, function () {
            var begin1 = this.Beginning_of_Month;
            var during1 = this.Received_during_Month;
            var pending1 = this.Pending_End_of_Month;
            var reason1 = this.Reasons_for_Pendency;
            var resolve1 = this.Resolved_during_Month;


            $("#begin").text(begin1);
            $("#during").text(during1);
            $("#pending").text(pending1);
            $("#reason").text(reason1);
            $("#resolve").text(resolve1);
            
        });
    }

}

function SebiDataFail(response) {

    console.log(response);

}



$(document).ready(function () {

    GetSebiData();


    $("#month").change(function () {
        GetSebiData();
    });
});