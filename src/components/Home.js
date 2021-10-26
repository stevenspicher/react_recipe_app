import DataList from "./DataList";
const info = [
  { title: 'Description', body: 'A classic Chinese-American menu item, beef and broccoli is a dish that I am particularly obsessed with.  The sauce in this version uses ingredients that I always have on hand in my kitchen - garlic, broth, soy sauce, lime juice, and Sriracha. While not traditional, this recipe hits the spot. If you are looking to dive deeper into beef and broccoli, our Senior Food Producer, June Xie, says hoisin, a fermented bean paste, is an essential addition for that trademark Chinese-American flavor. (Her Beef & Broccoli Stir-Fry is absolutely incredible and you should 100% try it.)  Curious to learn more or eager to make substitutions? Read on for tips for getting perfect results every time.', link: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-beef-and-broccoli-horizontal-1-1541521938.jpg?crop=1.00xw:0.752xh;0.00160xw,0.132xh&resize=768:*', id: 1 },
  { title: 'Ingredients', body: '2/3 c. low-sodium soy sauce, divided Juice of 1/2 lime 3 tbsp. packed brown sugar, divided 2 tbsp. cornstarch, divided Kosher salt Freshly ground black pepper 1 lb. sirloin steak, sliced thinly against grain 2 tbsp. vegetable oil 3 cloves garlic, minced 1/3 c. low-sodium beef (or chicken) broth 2 tsp. Sriracha (optional)  1 head broccoli, cut into florets Sesame seeds, for garnish  Thinly sliced green onions, for garnish ', link: 'https://www.delish.com/cooking/recipe-ideas/a24489879/beef-and-broccoli-recipe/', id: 2 },
  { title: 'Instruction', body: 'In a medium bowl, whisk 1/3 cup soy sauce, lime juice, 1 tablespoon brown sugar, and 1 tablespoon cornstarch until combined. Add steak, season with salt and pepper, and toss until steak is coated. Marinate 20 minutes. In a large skillet over medium-high heat, heat oil. Add steak in a single layer, working in batches if needed, and cook until seared, about 2 minutes per side. Remove steak and set aside. Stir in garlic and cook until fragrant, about 1 minute. Stir in remaining 1 tablespoon cornstarch until garlic is coated, then stir in broth, remaining 2 tablespoons brown sugar, remaining 1/3 cup soy sauce, and Sriracha. Bring mixture to a simmer. Add broccoli and simmer until tender, about 5 minutes. Season sauce with salt and pepper (if necessary), then return steak to skillet. Garnish with sesame seeds and green onions before serving.', link: '', id: 3 },
  
]



const Home = () => {

  return (
    <div>    
        <DataList info={info} />                 
    </div>
  );
}
 
export default Home;
