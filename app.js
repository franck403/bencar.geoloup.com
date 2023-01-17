function scriptIframe(){
    	var myFrame = $("#iframes").contents().find('body');
      	var scropr = '<script src="https://bencar.geoloup.com/modify.js">' + "<" + "/" + "script>";
    	myFrame.html(scropr);
}
var myFrame = $("#iframes").contents().find('body');
var scropr = '<script src="https://bencar.geoloup.com/modify.js">' + "<" + "/" + "script>";
console.log("script added")
myFrame.html(scropr);
