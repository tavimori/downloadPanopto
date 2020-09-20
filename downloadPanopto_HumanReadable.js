javascript:(function()
	{
	if(window.location.href.indexOf("panopto.com") < 1 && window.location.href.indexOf("video.cuhk.edu.cn") < 1) 
	{ 
		alert("No Panopto video detected!"); 
		exit(); 
	}
	var metas = document.getElementsByTagName('meta'); 
	for (var i=0; i<metas.length; i++) 
		if (metas[i].getAttribute("name") == "twitter:player:stream") 
		{ 
			console.log(metas[i].getAttribute("content"));
			window.open(metas[i].getAttribute("content").split('?')[0]);
		} 
	}
	/*v1.0,20171116,DF,GPLv3*/
)();

