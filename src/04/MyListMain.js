
import listData from "./MyListData.json"
import MyList from "./MyList";
export default function MyListMain() {
  console.log(listData)

  const myItems = listData.map( item  =>
    <MyList key = {item.title}
            title = {item.title} 
            imgUrl = {item.imgUrl} 
            content = {item.content}
            />
  );
  return (
    <div className="w-10/12 grid md:grid-cols-2 grid-cols-1 gap-4">
      {myItems}
    </div>
  )
}
