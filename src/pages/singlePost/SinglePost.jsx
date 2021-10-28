import { useLocation } from "react-router-dom";

import "./singlePost.css"

export default function SinglePost() {
    const location = useLocation()
    const body = location?.state?.item

    // console.log('------>>', body)
   
    return (
        <div className="single">
            <div className="singlePicture">
                <img src="https://images.pexels.com/photos/9705684/pexels-photo-9705684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className="singleParagraph">
                <h1>{body.title}</h1>
                <p> {body.body }</p>
            </div>
        </div>
    )
}
