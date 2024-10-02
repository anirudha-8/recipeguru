import Link from "next/link";

export default function NotFound() {
	return (
		<div className="text-center mt-[15rem]">
			<h1 className="text-red-500 text-3xl font-bold mb-4">
				This page does not exist!
			</h1>
			<Link href={"/"}>
				<button className="border-black border-[1px] p-2 rounded-lg">
					Goto Home Page
				</button>
			</Link>
		</div>
	);
}
