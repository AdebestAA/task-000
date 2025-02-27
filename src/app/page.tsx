import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
  <p>  frontend-task</p>
<Link href={"/register"}>register</Link>
<br />
<Link href={"/congratulation"}>congratulation</Link>
   </div>
  );
}
