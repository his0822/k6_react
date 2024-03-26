import GallaryCard from "./GallaryCard";
import gdata from "./GallaryData.json";


export default function GallaryMain() {

    console.log("gdata=",gdata);
    const imgUrl=gdata.galWebImageUrl;
    const title=gdata.galTitle;
    const ptitle=gdata.galPhotographyLocation;
    let ktag = gdata.galSearchKeyword;
    // let ktag=gdata.galSearchKeyword.includes(',');

  return (
    <div>
      <GallaryCard imgUrl={imgUrl}
                    title={title}
                    ptitle={ptitle}
                    ktag={ktag}/>
    </div>
  )
}
