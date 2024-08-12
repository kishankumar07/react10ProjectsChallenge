
function Card({name='Kishan',country='India',array=[1,2,3,4]}) {
  return (
    <div>

      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odio.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-50">
        {name}
        {array.map((c,i)=>{return <h3 key={i}>{c}</h3>})}
      </div>
      <div>
        {country }
      </div>
    </figcaption>
  </div>
</figure>

<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odio.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-50">
        {name }
      </div>
      <div>
        {country }
      </div>
    </figcaption>


    
  </div>
</figure>



    </div>

    

        
  )
}

export default Card
