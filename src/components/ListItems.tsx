

const ListItems = () => {
  return (
    <div className="flex px-9 justify-between items-center bg-slate-200 py-4 h-16 cursor-pointer">
  <div className="first flex items-center bg-yellow-500 h-16 mr-2 p-2">
    <p className="mr-2">Browse categories</p>
    <div className="bg-yellow-500 h-16 flex items-center p-2">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.42 9.45001L13.9 15.97C13.13 16.74 11.87 16.74 11.1 15.97L4.58002 9.45001" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
  <div className="second flex items-center mr-72 gap-2">
    <ul className="flex items-center">
      <li>Home</li>
      <div className="flex items-center p-2">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.42 9.45001L13.9 15.97C13.13 16.74 11.87 16.74 11.1 15.97L4.58002 9.45001" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <li>Catalog</li>
      <div className="flex items-center p-2">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.42 9.45001L13.9 15.97C13.13 16.74 11.87 16.74 11.1 15.97L4.58002 9.45001" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <li>Blog</li>
      <div className="flex items-center p-2">
      </div>
      <li>Pages</li>
      <div className="flex items-center p-2 text-black">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.42 9.45001L13.9 15.97C13.13 16.74 11.87 16.74 11.1 15.97L4.58002 9.45001" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <li>About us</li>
      <div className="flex items-center p-2">
      </div>
    </ul>
  </div>
  <div className="third">
    <p className="text-blue-950 font-bold">30 Days Free Return</p>
 </div>

</div>

  

  )
}

export default ListItems
