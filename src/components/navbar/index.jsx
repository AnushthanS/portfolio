import Image from "next/image"
import Menu from "./Menu"

function Nav() {
  return (
    <>
      <section className="relative h-[50px] text-white flex py-2">
        <div className="absolute left-4 top-2 text-2xl md:text-3xl font-thin brightness-90 hover:brightness-100">
          {/* todo: Animate this for hover */}
          AnushthanS
        </div>


        <div className="absolute right-4 flex justify-between top-2 gap-2">
          <a href="https://linkedin.com/in/anushthan-saxena" target="_blank">
            <Image src={'/linkedin.svg'} alt="linked-in" width={32} height={32} className="brightness-90 hover:brightness-100" />
          </a>
          <a href="https://github.com/AnushthanS" target="_blank">
            <Image src={'/github.svg'} alt="github" width={32} height={32} className="brightness-90 hover:brightness-100" />
          </a>
        </div>
      </section>

    {/* Toggle menu section */}
      <Menu />
    </>
  )
}

export default Nav