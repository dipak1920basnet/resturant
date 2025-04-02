function navigate(element)
{
    const button = document.createElement('button')
    button.setAttribute('id',`${element}`)
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
        new_content.setAttribute('class',"new_content")
        const title = document.createElement('h2')
        title.innerText = titles[i]
        new_content.appendChild(title)
        if (titles[i] ===  "reservation")
        {
            new_content.appendChild(page_content[titles[i]]())
        }
        else{
            const contents = document.createElement('p')
            contents.innerText = page_content[titles[i]]
            new_content.appendChild(contents)
        }
        content_element.appendChild(new_content)
    }
}
export {navigate,content, make_reservation};