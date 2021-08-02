
var name = "";
var dealsRowcount = 3;
var dealsRowcountall = 3;

$(document).ready(function () {







    if ($(window).width() < 769) {
        $('.navbar-toggle').click(function (event) {
            event.stopPropagation();
            $(".navbar-collapse").toggleClass("in");
            $(".overlay").toggleClass("block");
            $("body").toggleClass("hide-overflow");
        });

        $(document).click(function () {
            $(".navbar-collapse").removeClass("in");
            $(".overlay").removeClass("block");
            $("body").removeClass("hide-overflow");
        });
    }


    $(".pdf-listt li a").click(function (event) {

        $('#myModal').modal('show');

        event.preventDefault();
        var href = event.currentTarget.getAttribute('href')



        $(".test").click(function () {
            window.location = href;
        });


    });

    $(".dealselect").change(function () {

        dataMethod();

    });
    //$(".yearselect").change(function () {


    //    dataMethod();

    //});
    $(".mediaselect").change(function () {

        MediadataMethod();

    });
    $(".sectorselect").change(function () {

        dataMethod();

    });


    if (window.sessionStorage.length == 0) {
        // Retrieve

        dataAllMethod();



    }
    else {
        name = sessionStorage.getItem("Expertise");
        $("#sector option[value=" + name + "]").attr('selected', 'selected');



        dataMethod();

        sessionStorage.clear();

        $('#showmore').css("display", "none");
    }

    MediadataMethod();
    OffDocu_dataMethod();
    TrackRecord_dataMethod();
    $('.topic_hd').css("display", "block");
});


/////////////////////////////////////////////////////////////////////////////////document.ready End

//Bind Offer Document  Data
function OffDocu_dataMethod()
{  
    getdata("OfferDocument.aspx/OfferDocumentData", '', Offer_TrackRecrSuccess, onFailure);
 
}
function Offer_TrackRecrSuccess(response) {

    $("#Offer_Others").html("");
    $("#Offer_Debt").html("");
    $("#Offer_Equity").html("");

    $("#Offer_Others_showmore").html("");
    $("#Offer_Debt_showmore").html("");
    $("#Offer_Equity_showmore").html("");

    var result = JSON.parse(response.d);
    var i_Other = 0;
    var i_Other1 = 0;

    var i_Debt = 0;
    var i_Debt1 = 0;

    var i_Equity = 0;
    var i_Equity1 = 0;
    //result = result.Table;
    

     $.each(result.Table, function () {

         var url = this.Link_Url;
         var url_name = this.Link_Name;
         var Sub_Title = this.Sub_Title;

         if (Sub_Title=="3")
         {
             if (i_Other1 == 0 && i_Other!=10)
             {
                 var articles = $("#Offer_Others");
                 articles.append("<br><li data-toggle='modal' data-target='myModal'>"
                     + "<strong>"
                     + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                     + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal();'>" + url_name + "</a>"
                     + "</strong>"
                     + "</li>");

                
             }

             if (i_Other >= 10)
             {
                 $('#accordion41').css("display", "block");
                 var articles = $("#Offer_Others_showmore");
                 articles.append("<li data-toggle='modal' data-target='myModal'>"
                     + "<strong>"
                     + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                     + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal();'>" + url_name + "</a>"
                     + "</strong>"
                     + "</li><br>");

                 i_Other1++;


             }
             i_Other++
         }
         
         else if (Sub_Title == "2")
         {
             if (i_Debt1 == 0 && i_Debt != 10)
             {
                 var articles = $("#Offer_Debt");
                 articles.append("<br><li data-toggle='modal' data-target='myModal'>"
                     + "<strong>"
                     + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                     + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                     + "</strong>"
                     + "</li>");


             }

             if (i_Debt >= 10) {
                 $('#accordion31').css("display", "block");
                 var articles = $("#Offer_Debt_showmore");
                 articles.append("<li data-toggle='modal' data-target='myModal'>"
                     + "<strong>"
                     + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                     + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                     + "</strong>"
                     + "</li><br>");

                 i_Debt1++;


             }
             i_Debt++
         }
  
         else if (Sub_Title == "1") {
             if (i_Equity1 == 0 && i_Equity != 10) {
                 var articles = $("#Offer_Equity");
                 articles.append("<br><li data-toggle='modal' data-target='myModal'>"
                     + "<strong>"
                     + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                     + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                     + "</strong>"
                     + "</li>");


             }

             if (i_Equity >= 10) {
                 $('#accordion21').css("display", "block");
                 var articles = $("#Offer_Equity_showmore");
                 articles.append("<li data-toggle='modal' data-target='myModal'>"
                     + "<strong>"
                     + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                     + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                     + "</strong>"
                     + "</li><br>");

                 i_Equity1++;


             }
             i_Equity++
         }

     });

}

//////////

//Bind Track Record Data
function TrackRecord_dataMethod()
{
    getdata("TrackRecord.aspx/TrackRecordData", '', TrackRecrSuccess, onFailure);

}

function TrackRecrSuccess(response) {

    $("#Track_Others").html("");
    $("#Track_Debt").html("");
    $("#Track_Equity").html("");

    $("#Track_Others_showmore").html("");
    $("#Track_Debt_showmore").html("");
    $("#Track_Equity_showmore").html("");

    var result = JSON.parse(response.d);
    var i_Other = 0;
    var i_Other1 = 0;

    var i_Debt = 0;
    var i_Debt1 = 0;

    var i_Equity = 0;
    var i_Equity1 = 0;
    //result = result.Table;


    $.each(result.Table, function () {

        var url = this.Link_Url;
        var url_name = this.Link_Name;
        var Sub_Title = this.Sub_Title;

        if (Sub_Title == "3") {
            if (i_Other1 == 0 && i_Other != 10) {
                var articles = $("#Track_Others");
                articles.append("<br><li data-toggle='modal' data-target='myModal'>"
                    + "<strong>"
                    + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                    + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                    + "</strong>"
                    + "</li>");


            }

            if (i_Other >= 10) {
                $('#Track_accordion41').css("display", "block");
                var articles = $("#Track_Others_showmore");
                articles.append("<li data-toggle='modal' data-target='myModal'>"
                    + "<strong>"
                    + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                    + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                    + "</strong>"
                    + "</li><br>");

                i_Other1++;


            }
            i_Other++
        }

        else if (Sub_Title == "2") {
            if (i_Debt1 == 0 && i_Debt != 10) {
                var articles = $("#Track_Debt");
                articles.append("<br><li data-toggle='modal' data-target='myModal'>"
                    + "<strong>"
                    + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                    + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                    + "</strong>"
                    + "</li>");


            }

            if (i_Debt >= 10) {
                $('#Track_accordion31').css("display", "block");
                var articles = $("#Track_Debt_showmore");
                articles.append("<li data-toggle='modal' data-target='myModal'>"
                    + "<strong>"
                    + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                    + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                    + "</strong>"
                    + "</li><br>");

                i_Debt1++;


            }
            i_Debt++
        }

        else if (Sub_Title == "1") {
            if (i_Equity1 == 0 && i_Equity != 10) {
                var articles = $("#Track_Equity");
                articles.append("<br><li data-toggle='modal' data-target='myModal'>"
                    + "<strong>"
                    + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                    + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                    + "</strong>"
                    + "</li>");


            }

            if (i_Equity >= 10) {
                $('#Track_accordion21').css("display", "block");
                var articles = $("#Track_Equity_showmore");
                articles.append("<li data-toggle='modal' data-target='myModal'>"
                    + "<strong>"
                    + "<img src='/images/default-source/default-album/ys-pdf.jpg' data-displaymode='Original' alt='ys-pdf' title='ys-pdf'/>"
                    + "<a href='" + url + "' title='" + url_name + "' onclick='OpenOfferModal(event);'>" + url_name + "</a>"
                    + "</strong>"
                    + "</li><br>");

                i_Equity1++;


            }
            i_Equity++
        }

    });

}

//////////////////

//////// Open the PDF onclick of Oferrdocu & Track Record
function OpenOfferModal(e)
{
    e.preventDefault();
    $("#myModal").modal("show");

    var href = e.currentTarget.getAttribute('href');

    $(".test").click(function () {
        window.open(href, '_blank');
    });

}
//////////

function MediadataMethod() {
    var MediaType = $("#media_type option:selected").val();

    getdata("Media.aspx/MediaData", '{"MediaType": "' + MediaType + '"}', MediaSuccess, onFailure);
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
        nodata.append("<h2 class='topic_hd mr0' style='font-size: 25px;font-weight: 300;color: #808080;padding-left: 32px;padding-bottom: 10px;'>" + data + "</h2>");
    }
    else if (media_typetype === "Coverage") {
        var type = $(".equal-heightsmedia");
        var data = " Coverage";
        type.append("<h2 class='topic_hd mr0' style='font-size: 25px;font-weight: 300;color: #808080;padding-left: 32px;padding-bottom: 10px;'>" + data + "</h2>");
    }
    else if (media_typetype === "Articles") {
        var type1 = $(".equal-heightsmedia");
        var data = " Articles";
        type1.append("<h2 class='topic_hd mr0' style='font-size: 25px;font-weight: 300;color: #808080;padding-left: 32px;padding-bottom: 10px;'>" + data + "</h2>");

    }
    var i = 0;
    $.each(result.Table, function () {

        var url = this.Link_URL;
        var url_name = this.Link_Name;
       
            var articles = $(".equal-heightsmedia");
        articles.append("<div class='col-md-12'>"
            + "<li><a style='font - weight: 300; color: #105CB6; padding: 0px;font-size: 16px;' target='_blank' href='" + url + "' >" + url_name + "</a></li>"
            + "</div>");

    });

    if (result.Table.length <= 0) {
        $(".topic_hd").hide();
        var nodata1 = $(".equal-heightsmedia");
        var data1 = "NO DATA";
        nodata1.append("<h2 class='topic_hd mr0 mrt40 mrb40'>" + data1 + "</h2>");
    }

}

$(".col-sm-3").click(function () {

    // var sectorid = document.getElementById("0");
    var i = $(this).attr("id");


    //  window.location.href = "http://www.w3schools.com";
    //var id = this.id;

    ////or if you want to keep using the object
    //var $img = $(this);
    //var id = $img.attr("id")
    //alert($(this).attr("id"));

    // Check browser support
    if (typeof (Storage) !== "undefined") {
        // Store
        sessionStorage.setItem("Expertise", +i);

    }

});



$(".one").keypress(function (e) {
    var key = e.keyCode;
    if ((key >= 0 && key <= 64 && key !== 32) || (key === 94) || (key >= 123 && key <= 126) || (key >= 91 && key <= 96)) {
        e.preventDefault();
    }
});



$(".two").keypress(function (evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
});




function validateEmail(sEmail) {
    var regex = /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    if (regex.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}








$('.maincontainer_sec').click(function (e) {
    if (!$(e.target).is('a')) {
        $('.collapse').collapse('hide');
    }
});

$(".header-bottom a").each(function () {
    //
    if (this.href === window.location.href) {

        $(this).closest('li').addClass('active');
    }
});

$(window).load(function () {

    $('#hpbanner.flexslider').flexslider({
        animation: "slide"
    });

    if ($(window).width() > 480) {

        $('#expertise_slider,#clients_slider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 220,
            itemMargin: 10
        });


    }
    if ($(window).width() < 480) {
        $('#expertise_slider,#clients_slider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 300,
            itemMargin: 10
        });
    }

});

$(window).load(function () {
    $('#expertise_slider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 220,
        itemMargin: 10
    });

    $('#awards_slider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 300,
        itemMargin: 10
    });
});

$(window).load(function () {
    $('#expertise_slider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 220,
        itemMargin: 10
    });

    $('#awards_slider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 300,
        itemMargin: 10
    });
});

$(window).load(function () {
    $('#expertise_slider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 220,
        itemMargin: 10
    });

    $('#awards_slider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 300,
        itemMargin: 10
    });
});




function getdata(url, data, successEvent, failureEvent) {

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




function GetDataSuccess(response) {




    $(".equal-heights1").html("");
    var result = JSON.parse(response.d);
    var dealtype1 = $("#deal_type option:selected").text();
    // var DealType = $("#deal_type option:selected").text();


    if (dealtype1 === "Private Equity")
    {
            var nodata = $(".equal-heights1");
            var data = " Private Equity";
            nodata.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data + "</h2>");
        }
        else if (dealtype1 === "Capital Market – Equity") {
            var type = $(".equal-heights1");
            var dataEqu = "Capital Market – Equity";
            type.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + dataEqu + "</h2>");
        }
        else if (dealtype1 === "Mergers & Acquisitions") {
            var type1 = $(".equal-heights1");
            var dataMerg = " Mergers & Acquisitions";
            type1.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + dataMerg + "</h2>");

        }
        else if (dealtype1 === "Capital Markets - Advisory") {
            var type2 = $(".equal-heights1");
            var dataCapital = "Capital Markets - Advisory";
            type2.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + dataCapital + "</h2>");

        }
        else if (dealtype1 === "Capital Markets - Debt") {
            var type3 = $(".equal-heights1");
            var dataCapitalDebt = "Capital Markets - Debt";
            type3.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + dataCapitalDebt + "</h2>");

        }

        //else if (dealtype1 === "Public Offers") {
        //    var type4 = $(".equal-heights1");
        //    var dataPublic = " Public Offers";
        //    type4.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + dataPublic + "</h2>");

        //}
        else if (dealtype1 === "FCCB") {
            var type5 = $(".equal-heights1");
            var datafccb = " FCCB";
            type5.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + datafccb + "</h2>");

        }
        //else if (dealtype1 === "Buyback and Delisting") {
        //    var type7 = $(".equal-heights1");
        //    var databuyback = " Buyback and Delisting";
        //    type7.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + databuyback + "</h2>");

        //}
        else if (dealtype1 === "GDR Issuance") {
            var type8 = $(".equal-heights1");
            var datagdr = " GDR Issuance";
            type8.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + datagdr + "</h2>");

        }
        else if (dealtype1 === "ECM-Block Sale") {
            var type9 = $(".equal-heights1");
            var dataecm = " ECM & Block Sale";
            type9.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + dataecm + "</h2>");

        }
        else if (dealtype1 === "Acquisition Financing") {
            var type10 = $(".equal-heights1");
            var datacq = " Acquisition Financing";
            type10.append("<h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + datacq + "</h2>");

        }
    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;
        var year = this.Year;


        if (sector === "1") {
                sector = "Food & Agribusiness";
            }
            else if (sector === "2") {
                sector = "Media & Entertainment";
            }
            else if (sector === "3") {
                sector = "Renewable Energy and Cleantech";
            }
            else if (sector === "4") {
                sector = "Healthcare Life Sciences";
            }
            else if (sector === "5") {
                sector = "Industrials";
            }
            else if (sector === "6") {
                sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
            }
            else if (sector === "7") {
                sector = "Financial Services";
            }
            else if (sector === "8") {
                sector = "Technology Internet";
            }
            else if (sector === "9") {
                sector = "Education";
            }
            else if (sector === "10") {
                sector = "Chemicals";
            }
            else if (sector === "11") {
                sector = "Real Estate & Hospitality";
            }
            else if (sector === "12") {
                sector = "Telecom";
            }
            else if (sector === "13") {
                sector = "Logistics";
            }
            else if (sector === "14") {
                sector = "Consumer Goods";
            }
            else if (sector === "15") {
                sector = "Technology, Media and Telecom";
            }
            else if (sector === "16") {
                sector = "Core Infrastructure and Real Estate";
            }
            else if (sector === "17") {
                sector = "Food  & Agri and Consumer Goods";
            }
            else if (sector === "18") {
                sector = " Pharmaceuticals and Chemicals";
            }
            ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
           



        if (i == 0 || i % dealsRowcount == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;
    });

    if (result.length <= 0) {
        $(".topic_hd").hide();
        var nodata1 = $(".equal-heights1");
        var data1 = "NO DATA";
        nodata1.append("<h2 class='topic_hd mr0 mrt40 mrb40'>" + data1 + "</h2>");
    }

}



function onFailure(response) {

    console.log("Error__" + response);
    // alert(response.status + ' ' + response.statusText);

}



function dataMethod() {
    var DealType = $("#deal_type option:selected").text();
    //var Year = $("#year option:selected").text();
    var Sector1 = $("#sector option:selected").val();

   // getdata("DealsData.aspx/Data", '{"DealType": "' + DealType + '","Year":"' + Year + '","Sector":"' + Sector1 + '"}', GetDataSuccess, onFailure);

    if (DealType == "All" && Sector1 == 0)
    {
        $(".equal-heights1").html("");
        getdata("DealsData.aspx/AllDataPriEqu", '{"DealType": "Private Equity","Sector":"","Type": ""}', GetDataSuccess1, onFailure);
        getdata("DealsData.aspx/dataqryEquCap", '{"DealType": "Capital Market – Equity","Sector":"","Type": ""}', GetDataSuccess2, onFailure);
        getdata("DealsData.aspx/AllDataMergAcq", '{"DealType": "Mergers & Acquisitions","Sector":"","Type": ""}', GetDataSuccess3, onFailure);
        getdata("DealsData.aspx/AllDataCapMarAdv", '{"DealType": "Capital Markets - Advisory","Sector":"","Type": ""}', GetDataSuccess4, onFailure);
        getdata("DealsData.aspx/AllDataCapMarket", '{"DealType": "Capital Markets - Debt","Sector":"","Type": ""}', GetDataSuccess5, onFailure);
        getdata("DealsData.aspx/AllDataFCCB", '{"DealType": "FCCB","Sector":"","Type": ""}', GetDataSuccess7, onFailure);
        getdata("DealsData.aspx/AllDataGDR", '{"DealType": "GDR Issuance","Sector":"","Type": ""}', GetDataSuccess9, onFailure);
        getdata("DealsData.aspx/AllDataECM", '{"DealType": "ECM & Block Sale","Sector":"","Type": ""}', GetDataSuccess10, onFailure);
        getdata("DealsData.aspx/AllDataAcqFinc", '{"DealType": "Acquisition Financing","Sector":"","Type": ""}', GetDataSuccess11, onFailure);
 }
    else if (DealType == "All")
    {
        $(".equal-heights1").html("");
        getdata("DealsData.aspx/AllDataPriEqu", '{"DealType": "Private Equity","Sector":"' + Sector1 + '","Type": "AllType"}', GetDataSuccess1, onFailure);
        getdata("DealsData.aspx/dataqryEquCap", '{"DealType": "Capital Market – Equity","Sector":"' + Sector1 + '","Type": "AllType"}', GetDataSuccess2, onFailure);
        getdata("DealsData.aspx/AllDataMergAcq", '{"DealType": "Mergers & Acquisitions","Sector":"' + Sector1 + '","Type": "AllType"}', GetDataSuccess3, onFailure);
        getdata("DealsData.aspx/AllDataCapMarAdv", '{"DealType": "Capital Markets - Advisory","Sector":"' + Sector1 + '","Type": "AllType"}', GetDataSuccess4, onFailure);
        getdata("DealsData.aspx/AllDataCapMarket", '{"DealType": "Capital Markets - Debt","Sector":"' + Sector1 + '","Type": "AllType"}', GetDataSuccess5, onFailure);
        getdata("DealsData.aspx/AllDataFCCB", '{"DealType": "FCCB","Sector":"' + Sector1 + '","Type": "AllType"}', GetDataSuccess7, onFailure);
        getdata("DealsData.aspx/AllDataGDR", '{"DealType": "GDR Issuance","Sector":"' + Sector1 + '","Type": "AllType"}', GetDataSuccess9, onFailure);
        getdata("DealsData.aspx/AllDataECM", '{"DealType": "ECM & Block Sale","Sector":"' + Sector1 + '","Type": "AllType"}', GetDataSuccess10, onFailure);
        getdata("DealsData.aspx/AllDataAcqFinc", '{"DealType": "Acquisition Financing","Sector":"' + Sector1 + '","Type": "AllType"}', GetDataSuccess11, onFailure);

    }
    else
    {
        getdata("DealsData.aspx/Data", '{"DealType": "' + DealType + '","Sector":"' + Sector1 + '"}', GetDataSuccess, onFailure);

    }

    $('#showmore').css("display", "none");


}

function dataAllMethod() {
    var DealType = $("#deal_type option:selected").text();
    var Year = $("#year option:selected").text();
    var Sector1 = $("#sector option:selected").val();

  
    getdata("DealsData.aspx/AllDataPriEqu", '{"DealType": "Private Equity","Sector":"","Type": ""}', GetDataSuccess1, onFailure);
    getdata("DealsData.aspx/dataqryEquCap", '{"DealType": "Capital Market – Equity","Sector":"","Type": ""}', GetDataSuccess2, onFailure);
    getdata("DealsData.aspx/AllDataMergAcq", '{"DealType": "Mergers & Acquisitions","Sector":"","Type": ""}', GetDataSuccess3, onFailure);

}
$("#showmore").click(function (e) {
    showmore();
    e.preventDefault();

});

function showmore() {
    getdata("DealsData.aspx/AllDataCapMarAdv", '{"DealType": "Capital Markets - Advisory","Sector":"","Type": ""}', GetDataSuccess4, onFailure);
    getdata("DealsData.aspx/AllDataCapMarket", '{"DealType": "Capital Markets - Debt","Sector":"","Type": ""}', GetDataSuccess5, onFailure);
    //getdata("DealsData.aspx/AllDataPubOff", '{"DealType": "Public Offers","Sector":""}', GetDataSuccess6, onFailure);
    getdata("DealsData.aspx/AllDataFCCB", '{"DealType": "FCCB","Sector":"","Type": ""}', GetDataSuccess7, onFailure);
    //getdata("DealsData.aspx/AllDataBuyBack", '{"DealType": "Buyback and Delisting","Sector":""}', GetDataSuccess8, onFailure);
    getdata("DealsData.aspx/AllDataGDR", '{"DealType": "GDR Issuance","Sector":"","Type": ""}', GetDataSuccess9, onFailure);
    getdata("DealsData.aspx/AllDataECM", '{"DealType": "ECM & Block Sale","Sector":"","Type": ""}', GetDataSuccess10, onFailure);
    getdata("DealsData.aspx/AllDataAcqFinc", '{"DealType": "Acquisition Financing","Sector":"","Type": ""}', GetDataSuccess11, onFailure);

    $('#showmore').css("display", "none");
}


function GetDataSuccess1(response) {

    //$(".equal-heights1").html("");
    var result = JSON.parse(response.d);
    // var dealtype1 = $("#deal_type option:selected").text();
    // var DealType = $("#deal_type option:selected").text();

    
    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data = "Private Equity";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40 show' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data + "</h2></div>");
    }
    var i = 0;

    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector == "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector == "2") {
            sector = "Media & Entertainment";
        }
        else if (sector == "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector == "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector == "5") {
            sector = "Industrials";
        }
        else if (sector == "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector == "7") {
            sector = "Financial Services";
        }
        else if (sector == "8") {
            sector = "Technology Internet";
        }
        else if (sector == "9") {
            sector = "Education";
        }
        else if (sector == "10") {
            sector = "Chemicals";
        }
        else if (sector == "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector == "12") {
            sector = "Telecom";
        }       
        else if (sector == "13") {
            sector = "Logistics";
        }     
        else if (sector == "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }

        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;

        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;

    });



}


function GetDataSuccess2(response) {

    //$(".equal-heights1").html("");
    var result = JSON.parse(response.d);
    // var dealtype1 = $("#deal_type option:selected").text();
    // var DealType = $("#deal_type option:selected").text();


    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data = "Capital Market – Equity";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40 show' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data + "</h2> </div>");
    }

    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }       
        else if (sector === "13") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;

        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;

    });



}

function GetDataSuccess3(response) {

    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data = "Mergers & Acquisitions";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40 show' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data + "</h2></div>");

    }

    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }
        else if (sector === "14") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;





        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;

    });



}
function GetDataSuccess4(response) {

    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data4 = "Capital Markets - Advisory";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data4 + "</h2></div>");
    }
    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }
        else if (sector === "13") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;







        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;

    });



}


function GetDataSuccess5(response) {

    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data5 = "Capital Markets - Debt";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data5 + "</h2></div>");
    }

    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }
        else if (sector === "13") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;







        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;

    });



}


function GetDataSuccess6(response) {

    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data6 = " Public Offers";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data6 + "</h2></div>");
    }

    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }
        else if (sector === "13") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;





        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;

    });



}


function GetDataSuccess7(response) {

    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data7 = "FCCB";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data7 + "</h2></div>");
    }

    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }
        else if (sector === "13") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;








        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;


    });



}

function GetDataSuccess8(response) {

    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data8 = "Buyback and Delisting";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data8 + "</h2></div>");
    }

    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }
        else if (sector === "13") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;





        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;

    });



}

function GetDataSuccess9(response) {

    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data9 = "GDR Issuance";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data9 + "</h2></div>");
    }

    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }
        else if (sector === "13") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;







        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;

    });



}

function GetDataSuccess10(response) {

    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data10 = "ECM & Block Sale";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data10 + "</h2></div>");
    }

    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }
        else if (sector === "13") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;






        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px; font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;


    });



}

function GetDataSuccess11(response) {

    var result = JSON.parse(response.d);

    if (result.Table != 0) {
        var nodata = $(".equal-heights1");
        var data11 = "Acquisition Financing";
        nodata.append("<div class='col-md-12'><h2 class='topic_hd mr0 mrt40 mrb40' style='font-size: 36px;font-weight: 300;color: #808080;'>" + data11 + "</h2></div>");
    }

    var i = 0;
    $.each(result.Table, function () {


        var title = this.Title;
        title = title.split('-')[0];
        var price = this.Prices;
        var Disc = this.Discription;
        var sector = this.Sector;
        var dealtype = this.DealType;


        if (sector === "1") {
            sector = "Food & Agribusiness";
        }
        else if (sector === "2") {
            sector = "Media & Entertainment";
        }
        else if (sector === "3") {
            sector = "Renewable Energy and Cleantech";
        }
        else if (sector === "4") {
            sector = "Healthcare Life Sciences";
        }
        else if (sector === "5") {
            sector = "Industrials";
        }
        else if (sector === "6") {
            sector = "Infrastructure & Engineering,Procurement & Construction (EPC)";
        }
        else if (sector === "7") {
            sector = "Financial Services";
        }
        else if (sector === "8") {
            sector = "Technology Internet";
        }
        else if (sector === "9") {
            sector = "Education";
        }
        else if (sector === "10") {
            sector = "Chemicals";
        }
        else if (sector === "11") {
            sector = "Real Estate & Hospitality";
        }
        else if (sector === "12") {
            sector = "Telecom";
        }
        else if (sector === "13") {
            sector = "Logistics";
        }
        else if (sector === "14") {
            sector = "Consumer Goods";
        }
        else if (sector === "15") {
            sector = "Technology, Media and Telecom";
        }
        else if (sector === "16") {
            sector = "Core Infrastructure and Real Estate";
        }
        else if (sector === "17") {
            sector = "Food  & Agri and Consumer Goods";
        }
        else if (sector === "18") {
            sector = " Pharmaceuticals and Chemicals";
        }
        ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Year
        var year = this.Year;





        if (i == 0 || i % dealsRowcountall == 0) {


            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        else {
            var articles = $(".equal-heights1");
            articles.append("<div class='col-sm-4 brd_ct dealmediaqry' style='height:300px;margin-bottom: 15px;'>"
                + "<h4 class='sec_hd_gray mrt0 mrb0' style='font-size: 24px;font-weight: 400;color: #404040;padding: 20px;'>" + title + "</h4>"
                + "<ul class='company_details' style='padding-left: 20px;list - style: disc; margin - bottom: 18px;'>"
                + "<li style='list-style:none;'>" + Disc + "</li>"
                + "<li style='list-style:none;'><strong>" + price + "</strong></li>"
                + "<li style='list-style:none;'>Year : " + year + "</li>"
                + "<li style='list-style:none;'>Sector : " + sector + "</li>"
                + "</ul>"
                + "</div>");
        }
        i++;

    });



}

////////////////////////////////////////////////////////////TrackRecord js start

$("#Track1").click(function () {

    Track1();


});

$("#Track2").click(function () {

    Track2();


});

$("#Track3").click(function () {

    Track3();


});

function Track1()
{
    // show Track

    var ccc = $('#Track_1coll').find('a').hasClass("collapsed");

    if (ccc == true) {

        $('#Track_1coll').find('a').removeClass('collapsed');
        $('#Track_1coll').find('a').removeAttr('aria-expanded', 'false');
        $('#Track_1coll').find('a').attr('aria-expanded', 'true');

        $('#Track_collapse2').removeAttr('aria-expanded', 'false');
        $('#Track_collapse2').attr('aria-expanded', 'true');

        $('#Track_collapse2').removeClass('panel-collapse collapse');
        $('#Track_collapse2').addClass('panel-collapse collapse in');




        // hide offer 2


        $('#Track_2coll').find('a').addClass('collapsed');
        $('#Track_collapse3').removeClass('panel-collapse collapse in');
        $('#Track_collapse3').addClass('panel-collapse collapse');

        $('#Track_collapse3').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');


        // hide offer 3


        $('#Track_3coll').find('a').addClass('collapsed');
        $('#Track_collapse4').removeClass('panel-collapse collapse in');
        $('#Track_collapse4').addClass('panel-collapse collapse');

        $('#Track_collapse4').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');



    }

    else {

        // hide offer

        $('#Track_1coll').find('a').addClass('collapsed');

        $('.panel-heading').find('a').removeAttr('aria-expanded', 'true');
        $('.panel-heading').find('a').attr('aria-expanded', 'false');


        $('#Track_collapse2').removeClass('panel-collapse collapse in');
        $('#Track_collapse2').addClass('panel-collapse collapse');

        $('#Track_collapse2').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');




    }

}

function Track2() {

    // show Track

    var ccc = $('#Track_2coll').find('a').hasClass("collapsed");



    if (ccc == true) {

        $('#Track_2coll').find('a').removeClass('collapsed');
        //  $('.panel-heading').find('a').addClass('empty-content');
        $('#Track_2coll').find('a').removeAttr('aria-expanded', 'false');
        $('#Track_2coll').find('a').attr('aria-expanded', 'true');

        $('#Track_collapse3').removeAttr('aria-expanded', 'false');
        $('#Track_collapse3').attr('aria-expanded', 'true');

        $('#Track_collapse3').removeClass('panel-collapse collapse');
        $('#Track_collapse3').addClass('panel-collapse collapse in');


        // hide offer 1


        $('#Track_1coll').find('a').addClass('collapsed');
        $('#Track_collapse2').removeClass('panel-collapse collapse in');
        $('#Track_collapse2').addClass('panel-collapse collapse');

        $('#Track_collapse2').removeAttr('aria-expanded', 'true');
 
        // hide offer 3

        $('#Track_3coll').find('a').addClass('collapsed');
        $('#Track_collapse4').removeClass('panel-collapse collapse in');
        $('#Track_collapse4').addClass('panel-collapse collapse');

        $('#Track_collapse4').removeAttr('aria-expanded', 'true');

    }



    else {

        // hide offer

        $('#Track_2coll').find('a').addClass('collapsed');

        $('#Track_2coll').find('a').removeAttr('aria-expanded', 'true');
        $('#Track_2coll').find('a').attr('aria-expanded', 'false');


        $('#Track_collapse3').removeClass('panel-collapse collapse in');
        $('#Track_collapse3').addClass('panel-collapse collapse');

        $('#Track_collapse3').removeAttr('aria-expanded', 'true');

    }


}

function Track3() {

    // show offer

    var ccc = $('#Track_3coll').find('a').hasClass("collapsed");



    if (ccc == true) {

        $('#Track_3coll').find('a').removeClass('collapsed');
        //  $('.panel-heading').find('a').addClass('empty-content');
        $('#Track_3coll').find('a').removeAttr('aria-expanded', 'false');
        $('#Track_3coll').find('a').attr('aria-expanded', 'true');

        $('#Track_collapse4').removeAttr('aria-expanded', 'false');
        $('#Track_collapse4').attr('aria-expanded', 'true');

        $('#Track_collapse4').removeClass('panel-collapse collapse');
        $('#Track_collapse4').addClass('panel-collapse collapse in');

        // hide offer 1

        $('#Track_1coll').find('a').addClass('collapsed');
        $('#Track_collapse2').removeClass('panel-collapse collapse in');
        $('#Track_collapse2').addClass('panel-collapse collapse');

        $('#Track_collapse2').removeAttr('aria-expanded', 'true');
   

        // hide offer 2

        $('#Track_2coll').find('a').addClass('collapsed');
        $('#Track_collapse3').removeClass('panel-collapse collapse in');
        $('#Track_collapse3').addClass('panel-collapse collapse');

        $('#Track_collapse3').removeAttr('aria-expanded', 'true');
   
    }



    else {

        // hide offer

        $('#Track_3coll').find('a').addClass('collapsed');

        $('#Track_3coll').find('a').removeAttr('aria-expanded', 'true');
        $('#Track_3coll').find('a').attr('aria-expanded', 'false');


        $('#Track_collapse4').removeClass('panel-collapse collapse in');
        $('#Track_collapse4').addClass('panel-collapse collapse');

        $('#Track_collapse4').removeAttr('aria-expanded', 'true');
 
    }

}

////////////////////////////////////////////////////////////TrackRecord js Ends

///////////////////////////////////////////////////////////////////////////////////////////// TrackRecord show more start

$("#Track_accordion21").click(function () {

    Track_showmore1();


});

$("#Track_accordion31").click(function () {

    Track_showmore2();


});

$("#Track_accordion41").click(function () {

    Track_showmore3();


});


function Track_showmore1()
{

    var aa = $("#Track_show1").text();

    if (aa == "Show More") {


        $('#Track_accordion21').find('a').attr('aria-expanded', 'true');

        $('#Track_collapseTwoOnee').removeClass('panel-collapse collapse');
        $('#Track_collapseTwoOnee').addClass('panel-collapse collapse in');

        $('#Track_collapseTwoOnee').removeAttr('aria-expanded', 'false');
        $('#Track_collapseTwoOnee').attr('aria-expanded', 'true');

        $(".Track_btn1").html('Show Less');

    }

    else {
        $('#Track_accordion21').find('a').removeAttr('aria-expanded', 'true');
        $('#Track_accordion21').find('a').attr('aria-expanded', 'false');

        $('#Track_collapseTwoOnee').removeClass('panel-collapse collapse  in');
        $('#Track_collapseTwoOnee').addClass('panel-collapse collapse');

        $('#Track_collapseTwoOnee').removeAttr('aria-expanded', 'true');
        $('#Track_collapseTwoOnee').attr('aria-expanded', 'false');

        $(".Track_btn1").html('Show More');
    }
}

function Track_showmore2()
{
    var aa = $("#Track_show2").text();

    if (aa == "Show More") {


        $('#Track_accordion31').find('a').attr('aria-expanded', 'true');

        $('#Track_collapseThreeOne').removeClass('panel-collapse collapse');
        $('#Track_collapseThreeOne').addClass('panel-collapse collapse in');

        $('#Track_collapseThreeOne').removeAttr('aria-expanded', 'false');
        $('#Track_collapseThreeOne').attr('aria-expanded', 'true');

        $(".Track_btn2").html('Show Less');

    }

    else {
        $('#Track_accordion31').find('a').removeAttr('aria-expanded', 'true');
        $('#Track_accordion31').find('a').attr('aria-expanded', 'false');

        $('#Track_collapseThreeOne').removeClass('panel-collapse collapse  in');
        $('#Track_collapseThreeOne').addClass('panel-collapse collapse');

        $('#Track_collapseThreeOne').removeAttr('aria-expanded', 'true');
        $('#Track_collapseThreeOne').attr('aria-expanded', 'false');

        $(".Track_btn2").html('Show More');
    }
}

function Track_showmore3()
{
    var aa = $("#Track_show3").text().trim();

    if (aa == "Show More") {


        $('#Track_accordion41').find('a').attr('aria-expanded', 'true');

        $('#Track_collapsefiveOne').removeClass('panel-collapse collapse');
        $('#Track_collapsefiveOne').addClass('panel-collapse collapse in');

        $('#Track_collapsefiveOne').removeAttr('aria-expanded', 'false');
        $('#Track_collapsefiveOne').attr('aria-expanded', 'true');

        $(".Track_btn3").html('Show Less');

    }

    else {
        $('#Track_accordion41').find('a').removeAttr('aria-expanded', 'true');
        $('#Track_accordion41').find('a').attr('aria-expanded', 'false');

        $('#Track_collapsefiveOne').removeClass('panel-collapse collapse  in');
        $('#Track_collapsefiveOne').addClass('panel-collapse collapse');

        $('#Track_collapsefiveOne').removeAttr('aria-expanded', 'true');
        $('#Track_collapsefiveOne').attr('aria-expanded', 'false');

        $(".Track_btn3").html('Show More');
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////TrackRecord more ends


////////////////////////////////////////////////////////////OfferDocu js start

$("#offerd1").click(function () {

    offerd1();


});

$("#offerd2").click(function () {

    offerd2();


});

$("#offerd3").click(function () {

    offerd3();


});



function offerd1() {

    // show offer

    var ccc = $('#1coll').find('a').hasClass("collapsed");



    if (ccc == true) {

        $('#1coll').find('a').removeClass('collapsed');
        //  $('.panel-heading').find('a').addClass('empty-content');
        $('#1coll').find('a').removeAttr('aria-expanded', 'false');
        $('#1coll').find('a').attr('aria-expanded', 'true');

        $('#collapse2').removeAttr('aria-expanded', 'false');
        $('#collapse2').attr('aria-expanded', 'true');

        $('#collapse2').removeClass('panel-collapse collapse');
        $('#collapse2').addClass('panel-collapse collapse in');




        // hide offer 2


        $('#2coll').find('a').addClass('collapsed');
        $('#collapse3').removeClass('panel-collapse collapse in');
        $('#collapse3').addClass('panel-collapse collapse');

        $('#collapse3').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');


        // hide offer 3


        $('#3coll').find('a').addClass('collapsed');
        $('#collapse4').removeClass('panel-collapse collapse in');
        $('#collapse4').addClass('panel-collapse collapse');

        $('#collapse4').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');



    }



    else {

        // hide offer

        $('#1coll').find('a').addClass('collapsed');

        $('.panel-heading').find('a').removeAttr('aria-expanded', 'true');
        $('.panel-heading').find('a').attr('aria-expanded', 'false');


        $('#collapse2').removeClass('panel-collapse collapse in');
        $('#collapse2').addClass('panel-collapse collapse');

        $('#collapse2').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');




    }





    //$("#offerd").on('dblclick', function (event) {
    //        event.preventDefault();
    //        var el = $(this);
    //        el.prop('disabled', true);
    //        setTimeout(function ()
    //        {

    //        el.prop('disabled', false);
    //        }, 2000);
    //    });





    //$("#offerd").on("dblclick", function () {
    //    $(this).attr('disabled', true);
    //    console.log('disabled');
    //});

    //$('#offerd').bind('dblclick', function (e) {
    //    e.preventDefault();
    //});






}

function offerd2() {

    // show offer

    var ccc = $('#2coll').find('a').hasClass("collapsed");



    if (ccc == true) {

        $('#2coll').find('a').removeClass('collapsed');
        //  $('.panel-heading').find('a').addClass('empty-content');
        $('#2coll').find('a').removeAttr('aria-expanded', 'false');
        $('#2coll').find('a').attr('aria-expanded', 'true');

        $('#collapse3').removeAttr('aria-expanded', 'false');
        $('#collapse3').attr('aria-expanded', 'true');

        $('#collapse3').removeClass('panel-collapse collapse');
        $('#collapse3').addClass('panel-collapse collapse in');


        // hide offer 1


        $('#1coll').find('a').addClass('collapsed');
        $('#collapse2').removeClass('panel-collapse collapse in');
        $('#collapse2').addClass('panel-collapse collapse');

        $('#collapse2').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');


        // hide offer 3

        $('#3coll').find('a').addClass('collapsed');
        $('#collapse4').removeClass('panel-collapse collapse in');
        $('#collapse4').addClass('panel-collapse collapse');

        $('#collapse4').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');





    }



    else {

        // hide offer

        $('#2coll').find('a').addClass('collapsed');

        $('#2coll').find('a').removeAttr('aria-expanded', 'true');
        $('#2coll').find('a').attr('aria-expanded', 'false');


        $('#collapse3').removeClass('panel-collapse collapse in');
        $('#collapse3').addClass('panel-collapse collapse');

        $('#collapse3').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');




    }





    //$("#offerd").on('dblclick', function (event) {
    //        event.preventDefault();
    //        var el = $(this);
    //        el.prop('disabled', true);
    //        setTimeout(function ()
    //        {

    //        el.prop('disabled', false);
    //        }, 2000);
    //    });





    //$("#offerd").on("dblclick", function () {
    //    $(this).attr('disabled', true);
    //    console.log('disabled');
    //});

    //$('#offerd').bind('dblclick', function (e) {
    //    e.preventDefault();
    //});






}

function offerd3() {

    // show offer

    var ccc = $('#3coll').find('a').hasClass("collapsed");



    if (ccc == true) {

        $('#3coll').find('a').removeClass('collapsed');
        //  $('.panel-heading').find('a').addClass('empty-content');
        $('#3coll').find('a').removeAttr('aria-expanded', 'false');
        $('#3coll').find('a').attr('aria-expanded', 'true');

        $('#collapse4').removeAttr('aria-expanded', 'false');
        $('#collapse4').attr('aria-expanded', 'true');

        $('#collapse4').removeClass('panel-collapse collapse');
        $('#collapse4').addClass('panel-collapse collapse in');

        // hide offer 1

        $('#1coll').find('a').addClass('collapsed');
        $('#collapse2').removeClass('panel-collapse collapse in');
        $('#collapse2').addClass('panel-collapse collapse');

        $('#collapse2').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');



        // hide offer 2

        $('#2coll').find('a').addClass('collapsed');
        $('#collapse3').removeClass('panel-collapse collapse in');
        $('#collapse3').addClass('panel-collapse collapse');

        $('#collapse3').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');


    }



    else {

        // hide offer

        $('#3coll').find('a').addClass('collapsed');

        $('#3coll').find('a').removeAttr('aria-expanded', 'true');
        $('#3coll').find('a').attr('aria-expanded', 'false');


        $('#collapse4').removeClass('panel-collapse collapse in');
        $('#collapse4').addClass('panel-collapse collapse');

        $('#collapse4').removeAttr('aria-expanded', 'true');
        //$('#collapse2').attr('aria-expanded', 'false');




    }

}

///////////////////////////////////////////////////////////////////////////////////OfferDocu js endss

/////////////////////////////////////////////////////////////////////////////////////////////show more start

$("#accordion21").click(function () {

    showmore1();


});

$("#accordion31").click(function () {

    showmore2();


});

$("#accordion41").click(function () {

    showmore3();


});

$("#accordion21media").click(function () {

    showmoremedia();


});

function showmore1() {
    // var ccc = $('.panel-group').find('a').hasClass("btn");

    //  var aa = $(".btn").text();
    var aa = $("#show1").text();

    if (aa == "Show More") {


        $('#accordion21').find('a').attr('aria-expanded', 'true');

        $('#collapseTwoOnee').removeClass('panel-collapse collapse');
        $('#collapseTwoOnee').addClass('panel-collapse collapse in');

        $('#collapseTwoOnee').removeAttr('aria-expanded', 'false');
        $('#collapseTwoOnee').attr('aria-expanded', 'true');

        $(".btn1").html('Show Less');

    }

    else {
        $('#accordion21').find('a').removeAttr('aria-expanded', 'true');
        $('#accordion21').find('a').attr('aria-expanded', 'false');

        $('#collapseTwoOnee').removeClass('panel-collapse collapse  in');
        $('#collapseTwoOnee').addClass('panel-collapse collapse');

        $('#collapseTwoOnee').removeAttr('aria-expanded', 'true');
        $('#collapseTwoOnee').attr('aria-expanded', 'false');

        $(".btn1").html('Show More');
    }
}

function showmore2() {
    // var ccc = $('.panel-group').find('a').hasClass("btn");

    //  var aa = $(".btn").text();
    var aa = $("#show2").text();

    if (aa == "Show More") {


        $('#accordion31').find('a').attr('aria-expanded', 'true');

        $('#collapseThreeOne').removeClass('panel-collapse collapse');
        $('#collapseThreeOne').addClass('panel-collapse collapse in');

        $('#collapseThreeOne').removeAttr('aria-expanded', 'false');
        $('#collapseThreeOne').attr('aria-expanded', 'true');

        $(".btn2").html('Show Less');

    }

    else {
        $('#accordion31').find('a').removeAttr('aria-expanded', 'true');
        $('#accordion31').find('a').attr('aria-expanded', 'false');

        $('#collapseThreeOne').removeClass('panel-collapse collapse  in');
        $('#collapseThreeOne').addClass('panel-collapse collapse');

        $('#collapseThreeOne').removeAttr('aria-expanded', 'true');
        $('#collapseThreeOne').attr('aria-expanded', 'false');

        $(".btn2").html('Show More');
    }
}

function showmore3() {
    // var ccc = $('.panel-group').find('a').hasClass("btn");

    //  var aa = $(".btn").text();
    var aa = $("#show3").text();

    if (aa == "Show More") {


        $('#accordion41').find('a').attr('aria-expanded', 'true');

        $('#collapsefiveOne').removeClass('panel-collapse collapse');
        $('#collapsefiveOne').addClass('panel-collapse collapse in');

        $('#collapsefiveOne').removeAttr('aria-expanded', 'false');
        $('#collapsefiveOne').attr('aria-expanded', 'true');

        $(".btn3").html('Show Less');

    }

    else {
        $('#accordion41').find('a').removeAttr('aria-expanded', 'true');
        $('#accordion41').find('a').attr('aria-expanded', 'false');

        $('#collapsefiveOne').removeClass('panel-collapse collapse  in');
        $('#collapsefiveOne').addClass('panel-collapse collapse');

        $('#collapsefiveOne').removeAttr('aria-expanded', 'true');
        $('#collapsefiveOne').attr('aria-expanded', 'false');

        $(".btn3").html('Show More');
    }
}




function showmoremedia() {
    // var ccc = $('.panel-group').find('a').hasClass("btn");

    //  var aa = $(".btn").text();
    var aa = $("#showmedia").text();

    if (aa == "Show More") {


        $('#accordion21media').find('a').attr('aria-expanded', 'true');

        $('#collapsefourOnemedia').removeClass('panel-collapse collapse');
        $('#collapsefourOnemedia').addClass('panel-collapse collapse in');

        $('#collapsefourOnemedia').removeAttr('aria-expanded', 'false');
        $('#collapsefourOnemedia').attr('aria-expanded', 'true');

        $(".btnmedia").html('Show Less');

    }

    else {
        $('#accordion21media').find('a').removeAttr('aria-expanded', 'true');
        $('#accordion21media').find('a').attr('aria-expanded', 'false');

        $('#collapsefourOnemedia').removeClass('panel-collapse collapse  in');
        $('#collapsefourOnemedia').addClass('panel-collapse collapse');

        $('#collapsefourOnemedia').removeAttr('aria-expanded', 'true');
        $('#collapsefourOnemedia').attr('aria-expanded', 'false');

        $(".btnmedia").html('Show More');
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////show more ends

////////////////////////////////////////////////////////////////////////////////////////////////////////show more in Services all page start 

$("#accordion212").click(function () {

    showmore4();


});

$("#accordion213").click(function () {

    showmore5();


});

$("#accordion214").click(function () {

    showmore6();


});
$("#accordion215").click(function () {

    showmore7();


});

$("#accordion216").click(function () {

    showmore8();


});


function showmore4() {
    // var ccc = $('.panel-group').find('a').hasClass("btn");

    //  var aa = $(".btn").text();
    var aa = $("#show4").text();

    if (aa == "Show More") {


        $('.panel-group').find('a').attr('aria-expanded', 'true');

        $('#collapseeTwoOne').removeClass('panel-collapse collapse');
        $('#collapseeTwoOne').addClass('panel-collapse collapse in');

        $('#collapseeTwoOne').removeAttr('aria-expanded', 'false');
        $('#collapseeTwoOne').attr('aria-expanded', 'true');

        $(".btn1").html('Show Less');

    }

    else {
        $('panel-group').find('a').removeAttr('aria-expanded', 'true');
        $('.panel-group').find('a').attr('aria-expanded', 'false');

        $('#collapseeTwoOne').removeClass('panel-collapse collapse  in');
        $('#collapseeTwoOne').addClass('panel-collapse collapse');

        $('#collapseeTwoOne').removeAttr('aria-expanded', 'true');
        $('#collapseeTwoOne').attr('aria-expanded', 'false');

        $(".btn1").html('Show More');
    }
}

function showmore5() {
    // var ccc = $('.panel-group').find('a').hasClass("btn");

    //  var aa = $(".btn").text();
    var aa = $("#show5").text();

    if (aa == "Show More") {


        $('.panel-group').find('a').attr('aria-expanded', 'true');

        $('#collapse2Sus').removeClass('panel-collapse collapse');
        $('#collapse2Sus').addClass('panel-collapse collapse in');

        $('#collapse2Sus').removeAttr('aria-expanded', 'false');
        $('#collapse2Sus').attr('aria-expanded', 'true');

        $(".btn1").html('Show Less');

    }

    else {
        $('panel-group').find('a').removeAttr('aria-expanded', 'true');
        $('.panel-group').find('a').attr('aria-expanded', 'false');

        $('#collapse2Sus').removeClass('panel-collapse collapse  in');
        $('#collapse2Sus').addClass('panel-collapse collapse');

        $('#collapse2Sus').removeAttr('aria-expanded', 'true');
        $('#collapse2Sus').attr('aria-expanded', 'false');

        $(".btn1").html('Show More');
    }
}

function showmore6() {
    // var ccc = $('.panel-group').find('a').hasClass("btn");

    //  var aa = $(".btn").text();
    var aa = $("#show6").text();

    if (aa == "Show More") {


        $('.panel-group').find('a').attr('aria-expanded', 'true');

        $('#collapsee3Equ').removeClass('panel-collapse collapse');
        $('#collapsee3Equ').addClass('panel-collapse collapse in');

        $('#collapsee3Equ').removeAttr('aria-expanded', 'false');
        $('#collapsee3Equ').attr('aria-expanded', 'true');

        $(".btn1").html('Show Less');

    }

    else {
        $('panel-group').find('a').removeAttr('aria-expanded', 'true');
        $('.panel-group').find('a').attr('aria-expanded', 'false');

        $('#collapsee3Equ').removeClass('panel-collapse collapse  in');
        $('#collapsee3Equ').addClass('panel-collapse collapse');

        $('#collapsee3Equ').removeAttr('aria-expanded', 'true');
        $('#collapsee3Equ').attr('aria-expanded', 'false');

        $(".btn1").html('Show More');
    }
}

function showmore7() {
    // var ccc = $('.panel-group').find('a').hasClass("btn");

    //  var aa = $(".btn").text();
    var aa = $("#show7").text();

    if (aa == "Show More") {


        $('.panel-group').find('a').attr('aria-expanded', 'true');

        $('#collapsee4Prvi').removeClass('panel-collapse collapse');
        $('#collapsee4Prvi').addClass('panel-collapse collapse in');

        $('#collapsee4Prvi').removeAttr('aria-expanded', 'false');
        $('#collapsee4Prvi').attr('aria-expanded', 'true');

        $(".btn1").html('Show Less');

    }

    else {
        $('panel-group').find('a').removeAttr('aria-expanded', 'true');
        $('.panel-group').find('a').attr('aria-expanded', 'false');

        $('#collapsee4Prvi').removeClass('panel-collapse collapse  in');
        $('#collapsee4Prvi').addClass('panel-collapse collapse');

        $('#collapsee4Prvi').removeAttr('aria-expanded', 'true');
        $('#collapsee4Prvi').attr('aria-expanded', 'false');

        $(".btn1").html('Show More');
    }
}

function showmore8() {
    // var ccc = $('.panel-group').find('a').hasClass("btn");

    //  var aa = $(".btn").text();
    var aa = $("#show8").text();

    if (aa == "Show More") {


        $('.panel-group').find('a').attr('aria-expanded', 'true');

        $('#collapse8Invest').removeClass('panel-collapse collapse');
        $('#collapse8Invest').addClass('panel-collapse collapse in');

        $('#collapse8Invest').removeAttr('aria-expanded', 'false');
        $('#collapse8Invest').attr('aria-expanded', 'true');

        $(".btn1").html('Show Less');

    }

    else {
        $('panel-group').find('a').removeAttr('aria-expanded', 'true');
        $('.panel-group').find('a').attr('aria-expanded', 'false');

        $('#collapse8Invest').removeClass('panel-collapse collapse  in');
        $('#collapse8Invest').addClass('panel-collapse collapse');

        $('#collapse8Invest').removeAttr('aria-expanded', 'true');
        $('#collapse8Invest').attr('aria-expanded', 'false');

        $(".btn1").html('Show More');
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////show more in Services all page ends
