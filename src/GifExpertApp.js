import React, { useState } from "react";
import { AddCategory } from "./compoents/AddCategory";
import { GifGrid } from "./compoents/GifGrid";

export const GifExpertApp = () => {

	const [categories, setCategories] = useState(["Dragon Ball"]);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories}></AddCategory>
			<hr></hr>
			<ol>
				{
					categories.map((category) => (
						<GifGrid
							key={category}
							category={category}>
						</GifGrid>
					))
				}
			</ol>
		</>
	);
};
