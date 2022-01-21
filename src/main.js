function addNumbers() {
    var val1 = Number(document.getElementById("item1p").value);
    var val2 = Number(document.getElementById("item2p").value);
    var val3 = Number(document.getElementById("item3p").value);
    var val4 = Number(document.getElementById("item4p").value);
    var val5 = Number(document.getElementById("item5p").value);
    var val6 = Number(document.getElementById("item6p").value);
    var val7 = Number(document.getElementById("item7p").value);
    var val8 = Number(document.getElementById("item8p").value);
    var val9 = Number(document.getElementById("item9p").value);
    var val10 = Number(document.getElementById("item10p").value);
    var val11 = Number(document.getElementById("tax").value);
    var total = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8 + val9 + val10;
    document.getElementById("demo").innerHTML = total + "&nbsp;&nbsp;Rs";
    
    var tbt = total+((total*val11)/100);
    document.getElementById("final").innerHTML = Math.round(tbt).toFixed(2) + "&nbsp;&nbsp;Rs"; 
}

function refresh(){
    window.location.reload();
}

function print_page() {
    var ButtonControl = document.getElementById("print-btn");
    ButtonControl.style.visibility = "hidden";
    var ButtonControl = document.getElementById("calculate-btn");
    ButtonControl.style.visibility = "hidden";
    window.print();
}

$(document).ready(function(){
    $("#calculate-btn").click(function(){
      $("#top-line").hide();
    });
});

///$(document).ready(function() {
///    $('#calculate-btn').click(function() {

///        if (!$('#item1').val() && !$('#item2').val() && !$('#item3').val() && !$('#item4').val() && !$('#item5').val() && !$('#item6').val() && !$('#item7').val() && !$('#item8').val() && !$('#item9').val() && !$('#item10').val()){
///            alert('List is empty')
///        }

///    })
///});

$(document).ready(function() {
    $('#calculate-btn').click(function() {
        if (!$('#item1').val() && !$('#item2').val() && !$('#item3').val() && !$('#item4').val() && !$('#item5').val() && !$('#item6').val() && !$('#item7').val() && !$('#item8').val() && !$('#item9').val() && !$('#item10').val()){
            alert('Dear User, You have not filled item details');
        }
        else{
            if (!$('#item1').val()) {
                $("#i1").hide();
                $("#ip1").hide();
            }
            if (!$('#item2').val()) {
                $("#i2").hide();
                $("#ip2").hide();
            }
            if (!$('#item3').val()) {
                $("#i3").hide();
                $("#ip3").hide();
            }
            if (!$('#item4').val()) {
                $("#i4").hide();
                $("#ip4").hide();
            }
            if (!$('#item5').val()) {
                $("#i5").hide();
                $("#ip5").hide();
            }
            if (!$('#item6').val()) {
                $("#i6").hide();
                $("#ip6").hide();
            }
            if (!$('#item7').val()) {
                $("#i7").hide();
                $("#ip7").hide();
            }
            if (!$('#item8').val()) {
                $("#i8").hide();
                $("#ip8").hide();
            }
            if (!$('#item9').val()) {
                $("#i9").hide();
                $("#ip9").hide();
            }
            if (!$('#item10').val()) {
                $("#i10").hide();
                $("#ip10").hide();
            }
            
        }
        
    })

});
