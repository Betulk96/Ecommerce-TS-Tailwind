
const Search = () => {
  return (
    <div className="hidden md:flex flex-1">
        <input className="py-2 px-3 rounded  outline-none flex flex-1" type="text" placeholder="Arama Yap..."/>
        <button className="ms-1 p-2 bg-orange-800 text-sm rounded border border-transparent">Ara</button>
    </div>
  )
}

export default Search