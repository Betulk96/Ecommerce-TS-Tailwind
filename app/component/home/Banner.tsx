import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[237px] bg-black flex items-center justify-center">
      <div className="h-[137px] relative w-full">
          <Image src={"/hepsi.jpeg"} fill alt="" className="object-cover"/>{/* fill bulunduğu alann tamamımını doldurururiımage ile birlikteposition absulute kullanır. o yüzden dive relative verdik */}
      </div>
    </div>
  )
}

export default Banner