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

function add_video(select_element,create_element, before=null, url)
{
    const parent_element = document.querySelector(`${select_element}`)
    const created_element = document.createElement('video')
    create_element.setAttribute("id", "bg-video")
    const new_element = document.createElement('source')

    new_element.attributes.src = url
    new_element.attributes.types = "video/mp4"
    created_element.append(new_element)

    if (before != null)
    {
        parent_element.insertBefore(before, created_element)
    }
    else
    {
        parent_element.append(new_element)
    }
}

export {navigate, add_video};