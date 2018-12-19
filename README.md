web页面统计调用

说明：为准确计算页面停留时间，请在页面加载时实例化BJEVPV对象

第一步：引入jssdk 
```
    <script src='xxxxxxxxx/bjevpv.min.js'></script>
```
第二步：实例化pv对象
    
    ```
    var mypv=new BJEVPV({
        'pf':'xxx', //必填
        'page':'xxx' //必填
    })
    //【实例化过程会自动  统计页面 pv 和 页面停留时间(当页面卸载后才发送统计请求)】 
    ```  
  

统计点击pv功能方法 
    时机：放入点击事件中执行

    ```
     mypv.clickPv(arg1,arg2)
     //参数： arg1：必填，点击标识（ String类型 )
     //参数2：arg2: 非必填，用户uid
    ```
    
   

点击产生的请求如下：
http://dataimage.qingxiangchuxing.com/t.gif?i_duhqj6=1543479566521&pf=vip&page=index&pvtype=goEvent

页面离开产生的请求如下：
http://dataimage.qingxiangchuxing.com/h.gif?i_uj273j=1543480101896&pf=vip&page=index&durtime=8711

服务端log参数key说明：

pf： 应用名称
page 页面标识
durtime：页面停留时间（毫秒数）
pvtype：用户行为

以上参数key对应的value为调用者定义的

bjevpv.js 为开发板



#注意修改为自己网页的域名  在bjevpv.js里