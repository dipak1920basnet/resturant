import "./style.css"
import {navigate,content,make_reservation,insert_image} from "./greeting.js";

// Gpt code starts
const images = require.context('./', false, /\.png$/); 

let loadedImages = [];

for (let i = 1; i <= 10; i++) {
    const imagePath = `./img-${i}.png`; 
    if (images.keys().includes(imagePath)) {
        loadedImages.push(images(imagePath));
        console.log(`Loaded: ${imagePath}`);
    } else {
        console.error(`Image ${imagePath} not found.`);
    }
}


// Gpt code ends 

const nav_key_content = {"Home":`Welcome to Savory Haven, a warm and inviting family-owned restaurant where every dish is crafted with passion and care. 
    Located in the heart of the city, we take pride in serving fresh, flavorful meals made from locally sourced ingredients. 
    Our menu offers a delightful mix of classic comfort foods and creative new flavors, ensuring there's something for everyone—from hearty breakfasts to gourmet lunches and indulgent dinners. 
    Whether you're stopping by for a quick bite, a leisurely meal with loved ones, or a special celebration, our cozy atmosphere and friendly staff make you feel right at home. 
    With a rustic yet modern décor, handcrafted beverages, and a commitment to quality, Savory Haven is more than just a place to eat—it’s an experience to savor. 
    Come join us and let us treat you to a meal you won’t forget!`,

    "Menu":["Appetizers", 
        "Main Course", 
        "Dessert bevrages"],

    "About Us":`Full cleaning and housekeeping services for companies and households.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text.
    Lorem Ipsum is simply`,

    "Our Galary":`Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book.
    It has`,

    "Services":`Typesetting industry lorem Ipsum is simply dummy text of the`,
    "Testimonial":`Eeven slightly believable. If you are going to use a passage of Lorem Ipsum, you need to`,
    "Contact Us":null,
    }
const nav_bar = Object.keys(nav_key_content);
for (let i = 0; i < nav_bar.length; i++)
{
    navigate(nav_bar[i],"header",".nav_bar");
}
content(nav_key_content)

for (let i = 0; i < nav_bar.length; i++)
    {
        navigate(nav_bar[i],"footer",".nav_bar");
    }

loadedImages.forEach(imgPath => {
    insert_image('.Galary_', imgPath)
});

let content_element = document.querySelector("#content")
content_element.appendChild(make_reservation())