import RecipeList from "@/components/recipe-list";

const getRecipesList = async () => {
	try {
		const apiResponse = await fetch("https://dummyjson.com/recipes");
		const result = await apiResponse.json();
		return result?.recipes;
	} catch (error) {
		throw new Error(error);
	}
};

export default async function Recipes() {
	const recipeList = await getRecipesList();

	return <RecipeList recipeList={recipeList} />;
}
