import "./style.css"
import {navigate,content,create_function_list} from "./greeting.js";

// import {videoSrc} from "./assets/video.mp4"

// const nav_bar = ["Home", "Menu", "Reservation"]

const nav_key_content = {"Home":"Welcome to Savory Haven, a warm and inviting family-owned restaurant where every dish is crafted with passion and care. Located in the heart of the city, we take pride in serving fresh, flavorful meals made from locally sourced ingredients. Our menu offers a delightful mix of classic comfort foods and creative new flavors, ensuring there's something for everyone—from hearty breakfasts to gourmet lunches and indulgent dinners. Whether you're stopping by for a quick bite, a leisurely meal with loved ones, or a special celebration, our cozy atmosphere and friendly staff make you feel right at home. With a rustic yet modern décor, handcrafted beverages, and a commitment to quality, Savory Haven is more than just a place to eat—it’s an experience to savor. Come join us and let us treat you to a meal you won’t forget!",
    "Menu":{"Appetizers":{}, "Main Course":{}, "Dessert":{},"Bevrages":{}},
    "reservation":null}
const nav_bar = Object.keys(nav_key_content);
for (let i = 0; i < nav_bar.length; i++)
{
    navigate(nav_bar[i]);
}

// Build a dict with a key from a nav bar and content with customization

// Get a function named create_function_list
create_function_list(nav_bar)
// pass nav_bar contents using for loop to create_function_list 
for (let i = 0; i < nav_bar.length; i++)
    {
        //Give content to create function list

        /* Here i is a dict key*/
        /* here nav_key_content[nav_bar[i]] is a dict content*/
        // then each functions should be passed to content function
        content(global[nav_bar[i]](/*title*/global[nav_bar[i]], /*content*/nav_key_content[nav_bar[i]]))
        // Pass this global variable to content functions
    }
