import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div >
  <h1 className="font-bold text-xl">Links to Pages</h1>
<Link href={"/register"} className="hover:text-gray text-primary">register</Link>
<br />
<Link href={"/congratulations"} className="hover:text-gray text-primary">congratulation</Link>
   </div>
  );
}
