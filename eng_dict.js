
let btn1=document.querySelector(".search");
let btn2=document.querySelector(".close");
let inp=document.querySelector("input");

let p=document.querySelector("p");
btn1.addEventListener("click",async()=>{
    let word=inp.value.trim();
    if(word){
        let ans=await getFact(word);
        p.innerText=ans;
    }
    else{
        p.innerText="Enter a valid word";
    }
});
btn2.addEventListener("click",async()=>{
    
    inp.value="";
    p.innerText="";
});


async function getFact(word){
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try{
        let res=await axios.get(url);
        return res.data[0].meanings[0].definitions[0].definition;
        inp.value="";
    }catch(err){
        console.log("ERROR",err);
        return "No Data Found";
    }
}
