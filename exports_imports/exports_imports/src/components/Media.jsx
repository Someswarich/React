import img from '../assets/html.png'
import video1 from '../assets/video.mp3'
function Media(){
    return (
        <>
        <img src={img} alt="" />
        </>
    )
}
export default Media;

export const Video=()=>{
    return(
        <>
        <video controls>
            <source src={video1}/>
        </video>
        </>
    )
};