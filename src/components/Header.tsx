import { useState } from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/store'
import UseFetch from './UseFetch'
import debounce from 'lodash/debounce';
interface searchItem {
    id:number;
    title:string[]
}
const Header = () => {
    const user = useSelector((state:RootState)=> state.User.user)
    console.log(user)
    const count = useSelector((state:RootState)=> state.Counter.count)
    const [toggle,setToggle]=useState(false)
    const [searchInput, setSearchInput] = useState('');
    const { assets, loading, error } = UseFetch(
          `https://fakestoreapi.com/products/`  
        );
        if (loading) {
            return <div className='flex absolute z-20 left-1/2 top-1/2'>
                <svg className="animate-spin h-5 w-5 mr-3 bg-blue-500 rounded-xl border-2 border-dashed" viewBox="0 0 24 24"></svg>Loading...
            </div>;
        }
    
        if (error) {
            return <p>Error: {error}</p>;
        }
        const filteredData:searchItem[] = assets.filter((item: { title: string }) =>
            searchInput? item.title.toLowerCase().includes(searchInput.toLowerCase()) : ''         
        );
        
        const debouncedSearch = debounce((query: string) => {
            setSearchInput(query);
          }, 300);

          //bug while resizing to web view while the toggler is opened
        window.addEventListener('resize',()=>{
            let size = window.innerWidth;
            if(size > 700){
                console.log('hello')
                setToggle(false)
            }
        })
      
    return (
        //  <header className={`fixed w-screen bg-blue-500 z-10 ${toggle ? 'h-screen': ''}`}>
         <header>

            <nav className='lg:flex justify-stretch p-3 bg-slate-500'>
                <div className='m-auto'>
                    <button className='lg:hidden sm:block p-2' onClick={()=>setToggle(!toggle)}
                    ><i className='fa-solid fa-bars'></i>
                    </button>
                    <Link to='/' className='p-2 text-md lg:flex items-start sm:hidden xs:hidden '>
                        Global Goods
                    </Link>
                </div>
                <div className='m-auto lg:flex sm:hidden relative'>
                    <ul className='lg:flex sm:hidden xs:hidden justify-center gap-3'>
                        <Link to='/'>
                            <li className='text-lg'>
                                Home
                            </li>
                        </Link>
                        <Link to='/products' className='hover:underline decoration-white'>
                            <li className='text-lg'>
                                Products
                            </li>
                        </Link>
                        <li>
                            {/* Search */}
                           <input type='text' value={searchInput} onChange={(e)=>debouncedSearch(e.target.value)} className='rounded-lg h-7 p-2' style={{width:'24rem'}}/>
                           <div className='searchProducts absolute overflow-scroll h-28 rounded'>
                           {filteredData.map((item:searchItem)=>
                            <ul className='bg-black p-2' style={{backgroundColor: '#f79696',
                                top: '30px'}}>
                              <li key={item.id} className='text-black hover:text-white' onClick={()=>{debouncedSearch('')}}><Link to={`/product/${item.id}`}>{item.title}</Link></li>                          
                            </ul>
                            )}
                           </div>
                           
                        </li>
                    </ul>
                </div>
                <div className='m-auto relative lg:flex justify-between items-end sm:hidden xs:hidden gap-4'>
                    <Link to='/cart'>
                    <span className='absolute left-4 bottom-4 text-red-600'>{count}</span>
                    <button type="submit" className='text-lg'><i className='fa-solid fa-shopping-cart'></i></button>
                    </Link>

                    
                    <Link to={'/login'}>
                    <button type="submit" className='text-lg pl-5'><i className="fa-solid fa-right-to-bracket text-md mr-3"></i>Log In</button>
                    </Link>
                     {user? <span>{user.displayName}</span> : ''}
                    
                </div>
                {/* mobile view */}
                <div className={`bg-gray-400 w-96 h-96 p-10 relative ${toggle? 'block' : 'hidden'}`}>
                    <ul>
                       <Link to={'/'}> <li className='text-md mb-3 cursor-pointer'>Home</li></Link>
                        <Link to={'/products'}><li className='text-md cursor-pointer'>Products</li></Link>
                    </ul>
                    <input type='text' value={searchInput} onChange={(e)=>debouncedSearch(e.target.value)} className='mt-2 rounded-sm border-blue-300 w-full'/>
                           <div className='searchProducts relative overflow-scroll h-28 rounded'>
                            {filteredData.map((item:searchItem)=>
                            
                            <ul className='bg-black p-2' style={{backgroundColor: '#f79696',
                                top: '30px'}}>
                              <li key={item.id} className='text-black hover:text-white' onClick={()=>{setToggle(false);debouncedSearch('')}}><Link to={`/product/${item.id}`}>{item.title}</Link></li>                          
                            </ul>
                            
                            )}
                           </div>
                        <br/>
                    <Link to={'/cart'}>
                    <span className='relative -top-4 text-red-600'>{count}</span>
                    <button type="submit" className='text-lg cursor-pointer'><i className='fa-solid fa-shopping-cart mt-10'></i></button>
                    </Link>
                    <br/>
                    <Link to={'/login'}>
                    <button type="submit" className='text-lg cursor-pointer'><i className="fa-solid fa-right-to-bracket text-md mr-3"></i>Log In</button>
                    </Link>
                    {user? <span>{user.displayName}</span> : ''}
                </div>
            </nav>
            
                
                
            
        </header>
    )
  
}

export default Header