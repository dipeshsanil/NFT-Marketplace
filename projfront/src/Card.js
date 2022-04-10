import React from 'react';

const Card = ()=>{
    return(
        <div class="col-12 col-md-3 gy-4">
        <div class="card shadow-sm"  style={{borderRadius:20}}>
          <img   style={{borderTopLeftRadius:20,borderTopRightRadius:20,minHeight:"200px"}} src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80" class="card-img-top" alt="..." />
          <div class="card-body ">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title">Card title</h5>
              <a href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <svg width="25" height="11" viewBox="0 0 57 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5.5" cy="5.5" r="5.5" fill="black"/>
                  <circle cx="28.5" cy="5.5" r="5.5" fill="black"/>
                  <circle cx="51.5" cy="5.5" r="5.5" fill="black"/>
              </svg>
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Open</a></li>
                
              </ul>
            </div>
            <p class="card-text text-muted">@diveshS</p>
            <p class="card-text pb-2">5.5 ETH</p>
          </div>
        </div>
      </div>
    );
}

export default Card;