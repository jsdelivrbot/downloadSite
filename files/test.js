var changeStyle;
var vprint;

function changeStyleSheet(sheet) {
    document.getElementById('feuilleStyle').setAttribute('href', sheet);
	console.log("changeStyleSheet");
    if (changeStyle != null) {
		console.log("changeStyleSheet test ok");
        clearTimeout(changeStyle);
        changeStyle = null;
    }
}

function articleToPdf2() {
    changeStyleSheet("/_layouts/15/skema.internet.2016/site/branding/css/skema-internet-pdf.css");
    console.log("ok1");
    setTimeout(function() { 
		window.print();
		console.log("printWindow");
	}, 2000);
    console.log("ok2");
    setTimeout(function() { 
		console.log("changeStyleSheet");
		document.getElementById('feuilleStyle').setAttribute('href', sheet);
	}, 7000);
    console.log("ok3");
}

function printWindow() {
    if (vprint != null) {
		console.log("printWindow test ok");
        clearTimeout(vprint);
        vprint = null;
    }
}