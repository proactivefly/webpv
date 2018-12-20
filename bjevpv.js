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
  this.uid=pvObj.uid?pvObj.uid:0;
  this.isSPA=pvObj.isSPA;// 0不是单页应用，1是单页应用
  this.pageStart=new Date().getTime();
  !this.isSPA && this.init();
}	
BJEVPV.prototype.init=function(){
  this.aotoStTime()
};
BJEVPV.prototype.pv=function(log){
  var _params = '';
  for (var key in log) {
      _params += '&' + key + '=' + log[key]
  };
  var domainArr = ['dataimage.xxx.com'];
  var k = Math.floor(Math.random() * domainArr.length); //向下取整 0
  var _protocol='';
  if(location.protocol=='file:'){_protocol='http:'};
  var domon_url = _protocol+"//"+domainArr[k]+"/smallpic/";
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
BJEVPV.prototype.stPv=function(pv_key,uid){
	if(!pv_key){
		throw new Error('missing parameter and type is String');
	};
  var _obj = {
  	'pf':this.pf,
    'page': this.page,
    'pvtype':pv_key,
    'uid':uid?uid:this.uid,
    'durtime':0
  };
  this.pv(_obj)
};
BJEVPV.prototype.stTime=function(){
  var pageEndTime = new Date().getTime();
  var pageStayTime =pageEndTime - this.pageStart ;
  var _page_params = {
    'pf':this.pf,
    'page': this.page,
    'pvtype':0,
    'uid':this.uid,
    'durtime':pageStayTime
  };
  this.pv(_page_params)
};
BJEVPV.prototype.aotoStTime=function(pageStartTime){
	var pageStartTime=new Date().getTime();
  window.onbeforeunload = function(event) {
      var pageEndTime = new Date().getTime();
      var pageStayTime =pageEndTime - pageStartTime;
      var _page_params = {
      	'pf':this.pf,
        'page': this.page,
        'pvtype':0,
        'uid':this.uid,
        'durtime':pageStayTime
      };
      this.pv(_page_params)
  }.bind(this)
}