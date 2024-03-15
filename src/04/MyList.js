
export default function MyList({ title, imgUrl, content }) {
  return (
    <div className="w-450">
      <div className="border-2 rounded m-3">
        <div className="flex">
          <div className="w-1/3 m">
            <img src={imgUrl} alt={title}  />
          </div>
          <div className="w-2/3 m-3 ">
            <h1 className="p-2 text-2xl font-bold text-stone-600">{title}</h1>
            <span className="text-sm m-3 text-stone-600">{content}</span>
          </div>
        </div>
        <div className="flex justify-end font-bold m-3">
          <span className="text-1xl">🧡</span>
          <span className="mx-2">좋아요</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
