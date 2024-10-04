import Link from "next/link";

export default function RecipeDetailsItem({ recipeData }) {
	return (
		<>
			<div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
				<div className="text-gray-800 text-4xl font-bold mb-12 flex items-center justify-between flex-wrap">
					<Link href={"/recipe-list"}>Back</Link>
					<Link href={"/"}>Home</Link>
				</div>
				<div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="sm:w-full lg:w-4/5 flex justify-center gap-2">
						<img
							src={recipeData?.image}
							alt={recipeData?.name}
							className="w-full lg:w-4/5 rounded object-contain"
						/>
					</div>
					<div>
						<h2 className="text-3xl font-extrabold text-gray-950">
							{recipeData?.name}
						</h2>
						<div className="text-2xl text-gray-700">
							<p>{recipeData?.mealType[0]}</p>
						</div>
						<div className="mt-4 text-xl text-gray-800">
							<p>{recipeData?.cuisine}</p>
						</div>
						<div className="mt-4">
							<h3 className="text-xl font-bold text-gray-700">
								Ingredients:
							</h3>
							<p className="mt-2">
								{recipeData?.ingredients.map(
									(ingredient, index) =>
										` (${index + 1}) ${ingredient}`
								)}
							</p>
						</div>
						<div className="mt-4 text-gray-700">
							<h3 className="text-xl font-bold">Instructions:</h3>
							<ul className="mt-2 space-y-3 list-disc pl-4">
								{recipeData?.instructions.map((instruction) => (
									<li>{instruction}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
