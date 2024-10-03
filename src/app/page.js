import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="text-center mt-[15rem]">
				<h1 className="text-gray-900 text-3xl font-bold mb-4">
					Welcome to RecipeGuru App
				</h1>
				<Link href={"/recipe-list"}>
					<button className="bg-green-400 text-white border-white border-[1px] text-2xl px-4 py-2 rounded-lg">
						Explore
					</button>
				</Link>
			</div>
		</>
	);
}
