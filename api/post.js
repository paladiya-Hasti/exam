const postdata=(data,url)=>{
    fetch(url,{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(data)
    })
}
export default postdata