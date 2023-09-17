
 import UseFetch from './UseFetch'

const Home = ({category,title,subTitle}:{category:string,title:string,subTitle?:string}) => {
  const {assets,loading,error} = UseFetch(`https://fakestoreapi.com/products/category/${category}?limit=4`);

    if(loading){
      return  <div className='flex absolute z-20 left-1/2 top-1/2'>
                  <svg className="animate-spin h-5 w-5 mr-3 bg-blue-500 rounded-xl border-2 border-dashed" viewBox="0 0 24 24">
        
                  </svg>Loading...
              </div>;
      
    }
    if (error) {
      return <p>Error: {error}</p>;
    }
 
  return (
          <div className='grid grid-cols-2 gap-5 justify-center items-center p-5 relative mb-2.5 bg-white border-2 border-white-300 w-80'>
          <h3 className='text-black text-2xl leading-9 capitalize'><span className='text-blue-500'>{subTitle}</span> {title}</h3>
            {assets.map((product:any)=>{
                return (
                        <img key={product.title} src={product.image} alt={product.title} loading='lazy' className='w-28 drop-shadow-lg p-4 rounded-lg cursor-pointer '/>
                          
                )
            })}
            <button className='text-left hover:underline active:text-blue-700' >show more</button>
          </div>
  )
}

export default Home;