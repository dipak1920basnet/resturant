function navigate(element,tag_one, selector)
{
    const button = document.createElement('button')
    button.setAttribute("onclick", `window.location.href='#${element}'`);
    button.textContent = element;

    const nav = document.querySelector(`${tag_one} ${selector}`);
    if (nav)
    {
        nav.appendChild(button);
    }
    else
    {
        alert("No nav element found")
    }
}

// Make a reservation
function make_reservation(){
    let form = document.createElement('form');
    form.setAttribute('class','row g-3');
    form.innerHTML = `
        <div class="row g-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4">
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4">
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Zip</label>
          <input type="text" class="form-control" id="inputZip">
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    `;
    return form;
}

// Added a page content 
function content(page_content)
{
    let content_element = document.querySelector("#content")
    let titles = Object.keys(page_content)
    for (let i = 0; i < titles.length; i++)
    {
        const new_content = document.createElement('div')
        new_content.setAttribute('class',`${titles[i]}_ new_content`)
        const title = document.createElement('h2')
        title.setAttribute('id',`${titles[i]}`)
        title.innerText = titles[i]
        new_content.appendChild(title)
        if (titles[i] === "Menu")
        {
          let unordered_list = document.createElement('ul')
          let available_list = page_content[titles[i]]
          console.log(available_list)
          for (let j =0; j < available_list.length; j++)
          {
            let listing = document.createElement('li')
            listing.innerText = available_list[j]
            unordered_list.appendChild(listing)
          }
          new_content.appendChild(unordered_list)
        }
        else if (typeof page_content[titles[i]] === "string") {
            const contents = document.createElement('div');
            const paragraphs = document.createElement('p')
            paragraphs.innerText = page_content[titles[i]];
            contents.append(paragraphs)
            new_content.appendChild(contents);}
        
        content_element.appendChild(new_content)
    }
}

function insert_image(tag_id_or_class, url)
{
  let one = document.querySelector(`${tag_id_or_class} > div`)
  if (!one) {
    console.error(`Element '${tag_id_or_class} > div' not found.`);
    return;
  }
  let two = document.createElement('div')
  two.setAttribute('class', 'gal')
  let images = document.createElement('img')
  images.src = url
  images.alt = "Images"
  two.appendChild(images)
  one.appendChild(two)
}
export {navigate,content, make_reservation, insert_image};