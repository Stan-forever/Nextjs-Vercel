export const recipes = [
    {
      id: 'greek-salad',
      name: '希腊沙拉',
      ingredients: ['西红柿', '黄瓜', '洋葱', '油橄榄', '羊奶酪'],
    },
    {
      id: 'hawaiian-pizza',
      name: '夏威夷披萨',
      ingredients: ['披萨饼皮', '披萨酱', '马苏里拉奶酪', '火腿', '菠萝'],
    },
    {
      id: 'hummus',
      name: '鹰嘴豆泥',
      ingredients: ['鹰嘴豆', '橄榄油', '蒜瓣', '柠檬', '芝麻酱'],
    },
  ];
  
function Recipe({ id, name, ingredients }) {
    return (
        <>
            <h2>{name}</h2>
            <ul>
            {ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </>
    )
}

export default function RecipeList() {
  return (
    <div>
      <h1>菜谱</h1>
      {recipes.map(recipe =>
        // <div key={recipe.id}>
        //   <h2>{recipe.name}</h2>
        //   <ul>
        //     {recipe.ingredients.map(ingredient =>
        //       <li key={ingredient}>
        //         {ingredient}
        //       </li>
        //     )}
        //   </ul>
        // </div>
        <Recipe key={recipe.id} {...recipe} />
      )}
    </div>
  );
}
