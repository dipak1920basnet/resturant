import "./style.css"
import {navigate,content,create_function_list} from "./greeting.js";

// import {videoSrc} from "./assets/video.mp4"

const nav_bar = ["Home", "Menu", "Reservation"]
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

        global[nav_bar[i/* Here in place of i there should be dict key*/]](/* here should be dict content*/)
        // Pass this global variable to content functions
    }
// then each functions should be passed to content
