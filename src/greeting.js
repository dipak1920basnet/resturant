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

// Added a page content 
function content(page_content)
{
    let content_element = document.querySelector("#content")
    let titles = Object.keys(page_content)
    for (let i = 0; i < titles.length; i++)
    {
        const new_content = document.createElement('div')
        new_content.setAttribute('class',"new_content")
        const title = document.createElement('h2')
        title.innerText = titles[i]
        new_content.appendChild(title)
        const contents = document.createElement('p')
        contents.innerText = page_content[titles[i]]
        new_content.appendChild(contents)
        content_element.appendChild(new_content)
    }
}
export {navigate,content};