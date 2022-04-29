import Link from "next/link";
import LayoutMain from "../../components/layout/LayoutMain";

export default function Pricing() {
	return (
		<LayoutMain>
			<p>Pricing</p>
			<h1 className={"title"}>
				Ir a <Link href="/">Home</Link>
			</h1>

			<p className={"description"}>
				Get started by editing <code className={"code"}>pages/pricing/index.js</code>
			</p>
		</LayoutMain>
	);
}
