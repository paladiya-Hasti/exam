import postdata from "../api/post.js"
import navbar from "../comopenet/navbar.js"
import display from "../comopenet/uimaker.js"
document.getElementById("navbar").innerHTML=navbar()
const addque=(e)=>{
    e.preventDefault()

    let data={
        qye:document.getElementById("que").value,
        Options:{
            qye1:document.getElementById("a-que").value,
            qye2:document.getElementById("b-que").value,
            qye3:document.getElementById("c-que").value,
            qye4:document.getElementById("d-que").value,
        },
        correct:document.getElementById("correct").value,
    }
    postdata("http://localhost:3000/questions",data)
    console.log(data);
    display(data)
}
document.getElementById("data").addEventListener("submit",addque)