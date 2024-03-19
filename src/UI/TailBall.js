

export default function TailBall({n}) {

    
    const bcolor = [
        'bg-red-800',
        'bg-orange-800',
        'bg-lime-800',
        'bg-blue-800',
        'bg-purple-800'
    ]

    const ballcolor = `w-16 h-16 p-5 m-2
                        flex justify-center items-center
                        ${bcolor[parseInt(n/10)]} text-white
                        font-bold text-xl
                        rounded-full`

  return (
    <div className={ballcolor} >
      {n}
    </div>
  )
}
