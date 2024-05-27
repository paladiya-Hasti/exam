import getdata from "../api/get.js"
import navbar from "../comopenet/navbar.js"
import display from "../comopenet/uimaker.js"
display
document.getElementById("navbar").innerHTML=navbar()


const get=async()=>{
    let data=await getdata("http://localhost:3000/questions")
    // console.log(res);
    display(data,"box")
}
get()