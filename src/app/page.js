import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Welcome to RecipeGuru App</h1>
			<Link href={"/recipe-list"}>Explore</Link>
		</>
	);
}
