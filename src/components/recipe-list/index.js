import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const RecipeList = ({ recipeList }) => {
	console.log(recipeList);

	return (
		<>
			<div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
				<h2 className="text-gray-800 text-4xl font-bold mb-12">
					Recipe
				</h2>
			</div>
		</>
	);
};

export default RecipeList;
