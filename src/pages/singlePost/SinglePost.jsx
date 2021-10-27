import "./singlePost.css"
import { useState } from "react"

export default function SinglePost() {

    const [single, setSingle] = useState([]);
    console.log(single)
    const getSinglePost = async (id) => {
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const response = await post.json();
        localStorage.setItem('currentPost', JSON.stringify(response));
        // console.log(response)
        setSingle()
    }

    const showCurrentPost = (id) => {
        const currentPost = JSON.parse(localStorage.getItem('currentPost'));
    }

    showCurrentPost()
    
    return (
        <div onClick={getSinglePost}
            className="single">
            <div className="singlePicture">
                <img src="https://images.pexels.com/photos/9705684/pexels-photo-9705684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            
            {currentPost.posts.id((response) => {
                <></>
            })}
            <div className="singleParagraph">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia error mollitia qui sint eligendi voluptates nobis tempora quod laboriosam. Tempora neque excepturi ipsam suscipit saepe
                    dolor sit amet consectetur adipisicing elit. Ipsum officia error mollitia qui
                    dolor sit amet consectetur adipisicing elit. Ipsum officia error mollitia qui
                    dolor sit amet consectetur adipisicing elit. Ipsum officia error mollitia quivelit dolorum iure obcaecati!</p>
            </div>
        </div>
    )
}


// const getSinglePost = async (id) => {
//     const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//         const response = await post.json();
//     localStorage.setItem('currentPost', JSON.stringify(response));
//     window.location.href = 'blog.html';
// };  
// const showCurrentPost = () => {
//     const currentPost = JSON.parse(localStorage.getItem('currentPost'));
//     let body = '';
//     body += `
//     <div class="paragraph1">
//     <img src="/asset/pexels-greta-hoffman-9706062.jpg" alt="">
//     <h1>${currentPost.title}</h1>
//         <div class="para">
//             <p class="pppp"> Comments
//             </p>
//         </div>
//        <div class="para2">
//         <p class="para2">${currentPost.body}
//     </p>
//        </div>
// </div>
//        `;
    
//        blogApp.innerHTML = body;
// };
