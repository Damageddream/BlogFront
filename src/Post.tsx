import IPost from "./interfaces/IPost";
import { useParams } from "react-router-dom";

interface Params {
    id?: string;
}

const Post: React.FC = () => {
    const params: Params  = useParams()
    console.log(params)
    return <div className="post">
        <div className="titleP">{params.id}</div>
        <div className="textP"></div>
        <div className="dateP"></div>
    
    </div>
}

export default Post;