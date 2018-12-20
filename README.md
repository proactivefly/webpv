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
        'uid':'xxx',//非必传,default：0
        'isSPA':true/false//非必传 default:false
    })
    
    //【实例化过程会自动  统计页面 pv 和 页面停留时间(当页面卸载后才发送统计请求)】 
    如果是单页应用需要实例化时isSPA设置为true，需要在页面卸载钩子中手动触发统计页面时间
    vue 在destroyed钩子中
    react在componentWillUnmount钩子中
    ```  
  

统计点击pv功能方法 
    时机：放入点击事件中执行

    ```
     mypv.clickPv(arg1,arg2)
     //参数： arg1：必填，点击标识（ String类型 )
     //参数2：arg2: 非必填，用户uid ，如果穿了会覆盖掉初始化中传入的uid
    ```
    
   

点击产生的请求如下：
http://dataimage.xxx.com/smallpic/t.gif?i_nlj5ss=1545039631133&pf=2&page=index&pvtype=xxx&uid=10086&durtime=0

页面离开产生的请求如下：
https://dataimage.xxx.com/smallpic/h.gif?i_uj273j=1543480101896&pf=2&page=index&pvtype=0&uid=0&durtime=8711

服务端log参数key说明：

pf： 应用名称
page 页面标识
durtime：页面停留时间（毫秒数）
pvtype：用户行为
uid:用户id

以上参数key对应的value为调用者定义的

bjevpv.js 为开发板
bjevpv.min.js 为压缩加密版