import jquery from 'https://code.jquery.com/jquery-3.5.1.min.js';
function scriptIframe(){
    	var myFrame = $("#iframes").contents().find('body');
      	var scropr = '<script src="https://bencar.geoloup.com/modify.js">' + "<" + "/" + "script>";
    	myFrame.html(scropr);
}
