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
    content_element = document.querySelector("#content")
    content_element.appendChild(page_content)
}
// Make a create function named create_functions_list

function create_function_list(function_names)
{
    for (let i = 0; i < function_names.length; i++)
    {
        function function_template()
        {
            // insert templates or the content here
        }
        global[function_names[i]] = function_template
    }
}
// This functions should build functions from a loop of list of strings:
// Export that functions

export {navigate,content, create_function_list};