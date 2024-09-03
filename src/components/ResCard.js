import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
        const {resData} = props;
        const {
            id,
            name,
            cuisines,
            costForTwo,
            sla,
            avgRating,
            cloudinaryImageId
        } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400">
            <img className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="my-0.5">{cuisines.join(", ")}</h4>
            <h4 className="my-0.5">{costForTwo}</h4>
            <h4 className="my-0.5">{avgRating} stars</h4>
            <h4 className="my-0.5">{sla.deliveryTime} mins</h4>
        </div> 
    )
}

export default ResCard;