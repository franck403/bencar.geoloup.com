function scriptIframe(){
    	var myFrame = $("#iframes").contents().find('body');
      	var scropr = '<script src="https://bencar.geoloup.com/modify.js">' + "<" + "/" + "script>";
    	myFrame.html(scropr);
}
