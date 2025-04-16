
function CardComponent()
{
    return ( 
        <div className="border-2 border-gray-300 rounded-lg shadow-md p-4 m-4 w-1/4">
            <img src="https://via.placeholder.com/150" alt="Recipe" className="w-full h-32 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-semibold mb-2">Recipe Title</h2>
            <p className="text-gray-600 mb-4">Short description of the recipe goes here.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">View Recipe</button>

        </div>
    )
}

export default CardComponent;