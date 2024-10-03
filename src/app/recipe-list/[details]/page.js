import RecipeDetailsItem from "@/components/recipe-details";

async function getRecipeDetails(currentRecipeId) {
	try {
		const apiResponse = await fetch(
			`https://dummyjson.com/recipes/${currentRecipeId}`
		);
		const result = await apiResponse.json();
		return result;
	} catch (error) {
		throw new Error(error);
	}
}

export default async function RecipeDetails({ params }) {
	const recipeData = await getRecipeDetails(params?.details);
	return (
		<>
			<RecipeDetailsItem recipeData={recipeData} />
		</>
	);
}
