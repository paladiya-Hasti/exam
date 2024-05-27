const  display=(data)=>{
    data.map((ele,index)=>{
        let th=document.createElement("td")
        th.innerHTML=index+1
        th.setAttribute("class","")

        let que=document.createElement("h5")
        que.innerHTML=ele.question

        let div2=document.createElement("div")
        div2.append(th,que)

        let A=document.createElement("p")
        A.innerHTML="A : " +ele.options.A

        let B=document.createElement("p")
        B.innerHTML="B : " +ele.options.B

        let C=document.createElement("p")
        C.innerHTML="C : " +ele.options.C

        let D=document.createElement("p")
        D.innerHTML="D : " +ele.options.D

        let correct=document.createElement("p")
        correct.innerHTML="correct: " +ele.correct

       A.addEventListener("click",()=>{
        if(ele.options.A == ans){ 
            ele.options.A.style.color="green"
        }
        else{
            A.style.color="red"
        }
       })

    let btn1=document.createElement("button")
    btn1.innerHTML=ele.options.A

    let btn2=document.createElement("button")
    btn2.innerHTML=ele.options.B

    let btn3=document.createElement("button")
    btn3.innerHTML=ele.options.C
    let btn4=document.createElement("button")
    btn4.innerHTML=ele.options.D

    let ans=ele.answer
    btn1.addEventListener("click",()=>{
        if(ele.options.A === ans){
            btn1.style.color="green"
        }
        else{
            btn1.style.color="red"
        }
    })
    btn2.addEventListener("click",()=>{
        if(ele.options.B=== ans){
            btn2.style.color="green"
        }
        else{
            btn2.style.color="red"
        }
    })

    btn3.addEventListener("click",()=>{
        if(ele.options.C === ans){
            btn3.style.color="green"
        }
        else{
            btn3.style.color="red"
        }
    })

    btn4.addEventListener("click",()=>{
        if(ele.options.D === ans){
            btn4.style.color="green"
        }
        else{
            btn4.style.color="red"
        }
    })


        let div=document.createElement("div")
        div.append(div2,btn1,btn2,btn3,btn4)

        document.getElementById("box").append(div)
    })

}
export default display