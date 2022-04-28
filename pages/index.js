import Link from "next/link";
import LayoutMain from "../components/layout/LayoutMain";

export default function Home() {
	return (
		<LayoutMain>
			<p>Home</p>
			<h1 className={"title"}>
				Ir a <Link href="/about">About</Link>
			</h1>

			<p className={"description"}>
				Get started by editing{" "}
				<code className={"code"}>pages/index.js</code>
			</p>
		</LayoutMain>
	);
}
