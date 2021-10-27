import  {useState, useEffect} from "react"
import Title from "../../Title/Title"
import "./home.css"

export default function Home() {

    const [posts, setPosts] = useState([]);
    console.log(posts);
    const postsImages = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const jsonData = await response.json();
        console.log(jsonData)
        const values = jsonData.filter((post) => post.id % 5 === 0);
            setPosts(values)
    }
    
    useEffect(() => {
        postsImages();
    },[])

  
        return (
        <>
        <div className="home">
            <Title />
            <div className="homeHomeItems">
            <div className="homeImg">
                <img className="homeHomeImg"src="https://images.pexels.com/photos/9705684/pexels-photo-9705684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
                <div className="homeParagraph">
                    <span className="homeDate">26 October 2021</span>
                    <span className="homeBody">African Love has been <br></br>Among the best given <br></br>allover the gloge</span>
                    <span className="homeComment">Never try to rush, life is not easy; follow your dreamsNever try to rush, <br></br>life is not easy; follow your dreams Never try <br></br>to rush, life is not easy; follow your dreams</span>
                </div>
                </div>
                </div>
            <div className="postsPost">
                
                {posts.map((values) => {
                    return (
                        <>
                         <div className="posts">
                        <div className="homePosts">
                          <img src="https://images.pexels.com/photos/9705763/pexels-photo-9705763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </div>
                        <div className="postDate">Tuesday 26 Octover 2021</div>
                        <div className="postTitle">
                         <h2>{values.title}</h2>
                        </div>
                     <div className="postBody">
                                    <p>{ values.body}</p>
                </div>
                </div>
                        
                        </>
                    )
                })}
           
            </div>
                
            
            </>
    )
}
