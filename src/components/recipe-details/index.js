export default function RecipeDetailsItem({ recipeData }) {
	return (
		<>
			<div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
				<div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="w-full lg:sticky top-0 sm:flex gap-2">
						<img
							src={recipeData?.image}
							alt={recipeData?.name}
							className="w-4/5 rounded object-cover"
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
							<p className="mt-1">
								{recipeData?.ingredients.map(
									(ingredient, index) =>
										` (${index + 1})${ingredient}`
								)}
							</p>
						</div>
						<div className="mt-4">
							<h3 className="text-xl font-bold text-gray-700">
								Instructions:
							</h3>
							<p className="mt-1">
								{recipeData?.instructions.map((instruction) => (
									<li>{instruction}</li>
								))}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
