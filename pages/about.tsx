import Link from "next/link";
import LayoutDark from "../components/layout/LayoutDark";
import LayoutMain from "../components/layout/LayoutMain";

export default function About() {
	return (
		<>
			<p>About</p>
			<h1 className={"title"}>
				Ir a <Link href="/">Home</Link>
			</h1>

			<p className={"description"}>
				Get started by editing <code className={"code"}>pages/about.js</code>
			</p>
		</>
	);
}

About.getLayout = function getLayout(page: JSX.Element) {
	return (
		<LayoutMain>
			<LayoutDark>{page}</LayoutDark>
		</LayoutMain>
	);
};
