//import { getCurrentUser } from "@/app/actions/getCurrentUser"
import CardCount from "./CardCount"
import Logo from "./Logo"
import Search from "./Search"
import User from "./User"
import HamburgerMenu from "./HamburgerMenu"

const Navbar = async () => {
    //const currentUser = await getCurrentUser();
  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px:10 h-16 bg-teal-500 text-slate-100">
        <Logo/>
        <Search/>
        <CardCount/>
        <User />
        <HamburgerMenu/>
    </div>
  )
}

export default Navbar