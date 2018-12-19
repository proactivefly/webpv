function BJEVPV(pvObj){
	if(!pvObj){
		throw new Error('the constructor need parameter and type is Object');
	};
	if(!pvObj.pf){
		throw new Error('missing parameter "pf" and type is Number');
	};
	if(!pvObj.page){
		throw new Error('missing parameter "page" and type is String');
	};
  this.pf=pvObj.pf;
  this.page=pvObj.page;
  this.init()
}	
BJEVPV.prototype.init=function(){
	this.pageStayTime()
};
BJEVPV.prototype.pv=function(log){
  var _params = '';
  for (var key in log) {
      _params += '&' + key + '=' + log[key]
  };
  var domainArr = ['xxx.xxx.com']; //换成自己的域名
  var k = Math.floor(Math.random() * domainArr.length); //向下取整 0
  var _protocol='';
  if(location.protocol=='file:'){_protocol='http:'};
  var domon_url = _protocol+"//"+domainArr[k]+"/smallpic/";//注意修改二级路径  
  var im = "i_" + Math.floor(2147483648 * Math.random()).toString(36);
  var imgArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var n = Math.floor(Math.random() * imgArr.length + 1) - 1;//0-35 的整数
  var url = domon_url + imgArr[n]+".gif?" + im + "=" + new Date().getTime() + _params;
  window[im] = new Image();
  window[im].T = im;
  window[im].onload = window[im].onerror = window[im].onabort = function() {
      try {
          this.onload = this.onerror = this.onabort = null;
          window[this.T] = null
      } catch (e) {}
  };
  window[im].src = url
};
BJEVPV.prototype.clickPv=function(click_key,uid){
	if(!click_key){
		throw new Error('missing parameter and type is String');
	};
  var _obj = {
  	'pf':this.pf,
    'page': this.page,
    'pvtype':click_key,
    'uid':uid,
    'durtime':0
  };
  if(!uid){
  	_obj.uid=0
  };
  this.pv(_obj)
};
BJEVPV.prototype.pageStayTime=function(pageStartTime){
	var pageStartTime=new Date().getTime();
  window.onbeforeunload = function(event) {
      var pageEndTime = new Date().getTime();
      var pageStayTime =pageEndTime - pageStartTime;
      var _page_params = {
      	'pf':this.pf,
        'page': this.page,
        'pvtype':0,
        'uid':0,
        'durtime':pageStayTime
      };
      this.pv(_page_params)
  }.bind(this)
}