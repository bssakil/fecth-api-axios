/* Frist Create 
<div class="posts">
        <div class="post">
            <h4 class="title">Html</h4>
            <p class="dis">Full Course</p>
        </div>
</div>

 posts=[
    {
        id:101,
        Name:"Html"
    },
    {
        id:102,
        Name:"Css"
    },
    {
        id:103,
        Name:"Javascript"
    },
    {
        id:104,
        Name:"Talwinecss"
    },
    {
        id:105,
        Name:"React"
    },
    {
        id:106,
        Name:"Node.Js"
    },
    {
        id:107,
        Name:"MongoDB"
    },
    {
        id:108,
        Name:"MySqeule"
    }
];

const postsElements=document.querySelector(".posts");

const loadAllData=()=>{
    posts.map((post) =>{
        const postElements=document.createElement("div");
        postElements.classList.add("post");
        postElements.innerHTML=`
            <h4 class="title">id: ${post.id}</h4>
            <p class="dis">Name: ${post.Name}</p>`
        postsElements.appendChild(postElements);
    })
}
loadAllData(); */

// Data Load Fecth Api
const fecthData = async(config) =>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("Data Loding")
    }
}
//fecthData("https://jsonplaceholder.typicode.com/posts");

const postsElements=document.querySelector(".posts");

const loadAllData= async()=>{
    const posts = await fecthData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) =>{
        const postElements=document.createElement("div");
        postElements.classList.add("post");
        postElements.innerHTML=`
            <h4 class="title">id: ${post.id}</h4>
            <p class="dis">Name: ${post.Name}</p>`
        postsElements.appendChild(postElements);
    })
}
loadAllData();