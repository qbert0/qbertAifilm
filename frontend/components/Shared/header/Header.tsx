import Link from "next/link"
import { headerLink } from "./HeaderContain"
import Image from "next/image"
import logo from "@/public/image/logo.png"

interface Props {

}

const Header =() => {

    return (
        <div className="w-full flex gap-16 items-center justify-start px-2 py-4  bg-black">
            <div className="ml-6">
                <Link href={"/"} className="flex  items-center gap-4">
                    <Image src={logo} alt="logo"  className=" object-cover h-12 w-full" />
                </Link>
            </div>
            {
                headerLink.map((item, index) => {

                    return (
                        <div key={index} className="text-3xl text-white font-bold">
                            <Link href={item.path}>{item.name}</Link>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Header