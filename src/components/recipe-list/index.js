import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const RecipeList = ({ recipeList }) => {
	console.log(recipeList);

	return (
		<>
			<div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
				<div className="text-gray-800 text-4xl font-bold mb-12 flex items-center justify-between flex-wrap">
					<h2>Recipe</h2>
					<Link href={"/"}>Home</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{recipeList && recipeList.length > 0
						? recipeList.map((recipe) => (
								<Link href={`/recipe-list/${recipe.id}`}>
									<Card className="transition-transform transform hover:scale-105 hover:shadow-lg">
										<CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer">
											<div className="w-full aspect-auto lg:h-80">
												<img
													src={recipe.image}
													alt={recipe.name}
													className="h-48 w-full object-cover"
												/>
												<div className="p-8">
													<h3 className="text-lg font-bold text-gray-900">
														{recipe.name}
													</h3>
													<div className="mt-4 flex flex-wrap items-center gap-2">
														<p className="text-lg text-gray-600">
															Rating:{" "}
															{recipe.rating}
														</p>
														<div className="ml-auto">
															<p className="text-lg text-gray-600 font-bold">
																{recipe.cuisine}
															</p>
														</div>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</Link>
						  ))
						: null}
				</div>
			</div>
		</>
	);
};

export default RecipeList;
