/* 定义首页卖座公告接口 */
/* 
 https://m.maizuo.com
 /v4/api/billboard/home
 ?__t=1530186516861
 */
const  ANNOUNCEMENT_API = '/v4/api/billboard/home' 


/* 定义首页热映接口 */
/* 
https://m.maizuo.com
/v4/api/film/now-playing
?__t=1530186516872
&page=1&count=5
 */
const  NOWPLAYING_API = '/v4/api/film/now-playing' 


/* 定义首页即将上映接口 */
/* 
https://m.maizuo.com
/v4/api/film/coming-soon
?__t=1530186516878
&page=1
&count=3
 */
const  COMINGSOON_API = '/v4/api/film/coming-soon' 


export default{
	ANNOUNCEMENT_API,
	NOWPLAYING_API,
	COMINGSOON_API
}