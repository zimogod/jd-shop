import http from './http';
export let login = (data) =>{
    return http.post(data);
}
// 1、首屏 分类 接口 --- 一级分类
export let msiteclassify = () =>{
    return http.get('/msiteclassify');
}
export let classifytwo = (id) =>{
    return http.get(`/classifytwo?id=${id}`)
}
export let allData = () =>{
    return http.get('/allData')
}
