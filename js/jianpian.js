/*
 * @Author: bestpvp bestpvp@sina.com
 * @Date: 2023-10-05 16:37:17
 * @LastEditors: bestpvp bestpvp@sina.com
 * @LastEditTime: 2023-10-06 17:21:09
 * @FilePath: /lintech/docs/static/tvbox/js/码上看_荐片.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var rule = {
    title: '荐片',
    host: 'http://api2.rinhome.com',
    // homeUrl:'https://yjpapipxblwdohpakljwg.hxhzs.com/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',//网站的首页链接,用于分类获取和推荐获取
    homeUrl: '/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',//网站的首页链接,用于分类获取和推荐获取
    // url:'/api/crumb/list?area=0&category_id=fyclass&page=fypage&type=0&limit=24&fyfilter',
    url: '/api/crumb/list?area=0&page=fypage&type=0&limit=24&fyfilter',
    class_name: '全部&电影&电视剧&动漫&综艺',     // 筛选 /api/term/ad_fenlei?limit=10&page=1
    class_url: '0&1&2&3&4',
    detailUrl: '/api/node/detail?channel=wandoujia&token=&id=fyid',//二级详情拼接链接(json格式用)
    searchUrl: '/api/video/search?key=**&page=fypage',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter: {
        "0": [{ "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }],
        "1": [{ "key": "cateId", "name": "分类", "value": [{ "n": "全部", "v": "1" }, { "n": "首推", "v": "5" }, { "n": "动作", "v": "6" }, { "n": "喜剧", "v": "7" }, { "n": "战争", "v": "8" }, { "n": "恐怖", "v": "9" }, { "n": "剧情", "v": "10" }, { "n": "爱情", "v": "11" }, { "n": "科幻", "v": "12" }, { "n": "动画", "v": "13" }] }, { "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }],
        "2": [{ "key": "cateId", "name": "分类", "value": [{ "n": "全部", "v": "2" }, { "n": "首推", "v": "14" }, { "n": "国产", "v": "15" }, { "n": "港台", "v": "16" }, { "n": "日韩", "v": "17" }, { "n": "海外", "v": "18" }] }, { "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }],
        "3": [{ "key": "cateId", "name": "分类", "value": [{ "n": "全部", "v": "3" }, { "n": "首推", "v": "19" }, { "n": "海外", "v": "20" }, { "n": "日本", "v": "21" }, { "n": "国产", "v": "22" }] }, { "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }],
        "4": [{ "key": "cateId", "name": "分类", "value": [{ "n": "全部", "v": "4" }, { "n": "首推", "v": "23" }, { "n": "国产", "v": "24" }, { "n": "海外", "v": "25" }, { "n": "港台", "v": "26" }] }, { "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }]
    },
    // filter_url:'sort={{fl.sort or "hot"}}&year={{fl.year or "0"}}',
    filter_url: 'sort={{fl.sort or "update"}}&year={{fl.year or "0"}}&category_id={{fl.cateId}}',
    filter_def: {
        0: { cateId: '0' },
        1: { cateId: '1' },
        2: { cateId: '2' },
        3: { cateId: '3' },
        4: { cateId: '4' }
    },
    headers: {
        'User-Agent': 'jianpian-android/350',
        'JPAUTH': 'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
    },
    timeout: 5000,
    limit: 8,
    play_parse: true,
    play_json: [{
        re: '*',
        json: {
            parse: 0,
            jx: 0
        }
    }],
    lazy: '',
    // double:true,
    图片来源: '@Referer=www.jianpianapp.com@User-Agent=jianpian-version353',
    // 推荐:'json:data;room;*;cover;*;*',
    推荐: 'json:.video;*;*;*;*',
    一级: 'json:data;title;path;playlist.title;id',
    二级: {
        // title:'data.title',
        title: 'data.title;data.types[0].name',
        // desc:';data.description;data.id',
        desc: 'data.score;data.year.title;data.area.title;data.actors[0].name;data.directors[0].name',
        img: 'data.thumbnail',
        // content:'data.thumbnail',
        content: 'data.description',
        is_json: 1,
        tabs: `js:
            TABS = [];
            if (html.data.have_ftp_ur == 1) {
                TABS.push("边下边播蓝光版（东辰影视）")
            }
            if (html.data.have_m3u8_ur == 1) {
                TABS.push("在线点播普清版")
            }
        `,
        lists: `js:
            log(TABS);
            LISTS = [];
            TABS.forEach(function(tab) {
                if (/边下边播/.test(tab)) {
                    let ftp = html.data.new_ftp_list;
                    let d = ftp.map(function(it) {
                        return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                    });
                    LISTS.push(d)
                } else if (/在线点播/.test(tab)) {
                    let m3u = html.data.new_m3u8_list;
                    let d = m3u.map(function(it) {
                        return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                    });
                    LISTS.push(d)
                }
            });
        `,
    },
    搜索: 'json:data;*;thumbnail;mask;*',
}
    // host:'https://ddys.mov',
    url:'/fyclass/page/fypage/',
    searchUrl:'/?s=**&post_type=post',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{
        'User-Agent':'MOBILE_UA',
    },
    class_parse:'#primary-menu li.menu-item;a&&Text;a&&href;\.pro/(.*)',
    cate_exclude:'站长|^其他$|关于|^电影$|^剧集$|^类型$',
    play_parse:true,
    // lazy:'js:let purl=input.split("|")[0];let referer=input.split("|")[1];let zm=input.split("|")[2];print("purl:"+purl);print("referer:"+referer);print("zm:"+zm);let myua="okhttp/3.15";if(/ddrkey/.test(purl)){let ret=request(purl,{Referer:referer,withHeaders:true,"User-Agent":myua});log(ret);input=purl}else{let html=request(purl,{headers:{Referer:referer,"User-Agent":myua}});print(html);try{input=JSON.parse(html).url||{}}catch(e){input=purl}}',
    lazy:lazy,
    limit:6,
    推荐:'*',
    double:true, // 推荐内容是否双层定位
    一级:'.post-box-list&&article;a:eq(-1)&&Text;.post-box-image&&style;a:eq(0)&&Text;a:eq(-1)&&href',
    二级:{
        "title":".post-title&&Text;.cat-links&&Text",
        "img":".doulist-item&&img&&data-cfsrc",
        "desc":".published&&Text",
        "content":".abstract&&Text",
        // "tabs":"js:TABS=['国内','海外(貌似不能播放)']",
        "tabs":"js:TABS=['国内(改Exo播放器)','国内2']",
        // "lists":"js:log(TABS);let d=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;if(typeof play_url===\"undefined\"){var play_url=\"\"}function getLists(html){let src=pdfh(html,\".wp-playlist-script&&Html\");src=JSON.parse(src).tracks;let list1=[];let list2=[];src.forEach(function(it){let src0=it.src0;let src1=it.src1;let src2=it.src2;let title=it.caption;let url1=\"https://ddys.tv/getvddr/video?id=\"+src1+\"&dim=1080P+&type=mix\";let url2=\"https://w.ddys.tv\"+src0+\"?ddrkey=\"+src2;let zm=\"https://ddys.tv/subddr/\"+it.subsrc;list1.push({title:title,url:url1,desc:zm});list2.push({title:title,url:url2,desc:zm})});return{list1:list1,list2:list2}}var data=getLists(html);var list1=data.list1;var list2=data.list2;let nums=pdfa(html,\"body&&.post-page-numbers\");nums.forEach(function(it){let num=pdfh(it,\"body&&Text\");log(num);let nurl=input+num+\"/\";if(num==1){return}log(nurl);let html=request(nurl);let data=getLists(html);list1=list1.concat(data.list1);list2=list2.concat(data.list2)});list1=list1.map(function(item){return item.title+\"$\"+play_url+urlencode(item.url+\"|\"+input+\"|\"+item.desc)});list2=list2.map(function(item){return item.title+\"$\"+play_url+urlencode(item.url+\"|\"+input+\"|\"+item.desc)});LISTS=[list1,list2];",
        // lists:'js:log(TABS);let d=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;if(typeof play_url==="undefined"){var play_url=""}function getLists(html){let src=pdfh(html,".wp-playlist-script&&Html");src=JSON.parse(src).tracks;let list1=[];let list2=[];src.forEach(function(it){let src0=it.src0;let src1=it.src1;let src2=it.src2;let title=it.caption;let url1="https://ddys.pro/getvddr/video?id="+src1+"&dim=1080P+&type=mix";let url2="https://w.ddys.pro"+src0+"?ddrkey="+src2;let zm="https://ddys.pro/subddr/"+it.subsrc;list1.push({title:title,url:url1,desc:zm});list2.push({title:title,url:url2,desc:zm})});return{list1:list1,list2:list2}}var data=getLists(html);var list1=data.list1;var list2=data.list2;let nums=pdfa(html,"body&&.post-page-numbers");nums.forEach(function(it){let num=pdfh(it,"body&&Text");log(num);let nurl=input+num+"/";if(num==1){return}log(nurl);let html=request(nurl);let data=getLists(html);list1=list1.concat(data.list1);list2=list2.concat(data.list2)});list1=list1.map(function(item){return item.title+"$"+play_url+urlencode(item.url+"|"+input+"|"+item.desc)});list2=list2.map(function(item){return item.title+"$"+play_url+urlencode(item.url+"|"+input+"|"+item.desc)});LISTS=[list1,list2];',
        "lists":lists
    },
    搜索:'#main&&article;.post-title&&Text;;.published&&Text;a&&href'
}