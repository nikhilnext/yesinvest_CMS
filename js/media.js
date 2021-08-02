$(document).ready(function () {

GetMediadata();
});

$(".mediaselect").change(function () {
GetMediadata();
});


function Ajaxcall(url, data, successEvent, failureEvent) {

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


function GetMediadata() {
    var MediaType = $("#media_type option:selected").val();

    Ajaxcall("media.aspx/GetMediaData", '{"MediaType": "' + MediaType + '"}', MediaSuccess, onFailure);
   // $('#showmore').css("display", "none");


}

function MediaSuccess(response) {

    $(".equal-heightsmedia").html("");
    var result = JSON.parse(response.d);
    var media_typetype = $("#media_type option:selected").text();
    // var DealType = $("#deal_type option:selected").text();


    if (media_typetype === "Press Releases") {
        var nodata = $(".equal-heightsmedia");
        var data = "Press Release";
        nodata.append("<h2 class='topic_hd mrt40' style='font-size: 25px;font-weight: 300;color: #808080;padding-left: 32px;padding-bottom: 10px;'>" + data + "</h2>");
    }
    else if (media_typetype === "Coverage") {
        var type = $(".equal-heightsmedia");
        var data = " Coverage";
        type.append("<h2 class='topic_hd mrt40' style='font-size: 25px;font-weight: 300;color: #808080;padding-left: 32px;padding-bottom: 10px;'>" + data + "</h2>");
    }
    else if (media_typetype === "Articles") {
        var type1 = $(".equal-heightsmedia");
        var data = " Articles";
        type1.append("<h2 class='topic_hd mrt40' style='font-size: 25px;font-weight: 300;color: #808080;padding-left: 32px;padding-bottom: 10px;'>" + data + "</h2>");

    }
    var i = 0;
    $.each(result.Table, function () {

        var url = this.Link_URL;
        var url_name = this.Link_Name;
       
            var articles = $(".equal-heightsmedia");
        articles.append("<div class='col-md-12'>"
            + "<li><a style='font - weight: 300; color: #105CB6; padding: 20px;font-size: 16px;' target='_blank' href='" + url + "' >" + url_name + "</a></li>"
            + "</div>");

    });

    if (result.Table.length <= 0) {
        $(".topic_hd").hide();
        var nodata1 = $(".equal-heightsmedia");
        var data1 = "NO DATA";
        nodata1.append("<h2 class='topic_hd mr0 mrt40 mrb40'>" + data1 + "</h2>");
    }

}


function onFailure(response) {

    console.log("Error__" + response);
    // alert(response.status + ' ' + response.statusText);

}