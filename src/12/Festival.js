

export default function Festival({imgUrl,title,ptitle,ktag}) {

    // console.log("gdata=",gdata);
    // const imgUrl=gdata.galWebImageUrl;
    // const title=gdata.galTitle;
    // const ptitle=gdata.galPhotographyLocation;
    // let ktag=gdata.galSearchKeyword.includes(',');
    // let ktag = gdata.galSearchKeyword;
    
    if(ktag.includes(',')){
        ktag = ktag.split(',').map(item => 
            <span   key={item}
                    className="inline-block
                                 bg-gray-200 rounded px-3 py-1 
                                 text-sm font-semibold text-gray-700 
                                 mr-2 mb-2">
                {item}
            </span>
        )
    }else{
        ktag = <span  className="inline-block
                                bg-gray-200 rounded px-3 py-1 
                                text-sm font-semibold text-gray-700 
                                mr-2 mb-2">
                    {ktag}
                </span>
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imgUrl} alt={imgUrl} />
            <div className="px-6 py-4">
                <div class="font-bold text-xl mb-2">{title}</div>
                    <p class="text-gray-700 text-base">
                        {ptitle} 
                    </p>
             </div>
            <div className="px-6 pt-4 pb-2">
                {ktag}
            </div>
        </div>
  )
}
