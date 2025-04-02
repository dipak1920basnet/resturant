function navigate(element)
{
    const button = document.createElement('button')
    button.textContent = element;


    const nav = document.querySelector("header nav");
    if (nav)
    {
        nav.appendChild(button);
    }
    else
    {
        alert("No nav element found")
    }
}

function content(page_content)
{
    let content_element = document.querySelector("#content")

    content_element.appendChild(page_content)
}
// Make a create function named create_functions_list

// function create_function_list(function_names)
// {
//     for (let i = 0; i < function_names.length; i++)
//     {
//         function function_template(title, content)
//         {
//             // insert templates or the content here
//             let contents = document.createElement("div")
//             contents.setAttribute("class",".contents")
//             let new_title = document.createElement("title")
//             let new_content = document.createElement("p")
//             new_title.innerText = title
//             new_content.innerText = content
//             contents.appendChild(new_title)
//             contents.appendChild(new_content)
//         }
//         global[function_names[i]] = function_template
//     }
// }
// This functions should build functions from a loop of list of strings:
// Export that functions

export {navigate,content, create_function_list};