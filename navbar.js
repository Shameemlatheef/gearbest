   function navbar1(){
       return `
      <div class="container" style=" width:250px; margin-left: 5px;">
        <a class="navbar-brand" href="./index.html">
          <div>
            <img
              style="width: 230px; height: 50px; margin: 25px 0px"
              src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png?imbypass=true"
            />
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        </div>

<div class="d-flex " style="margin-right: 30px; width: 780px;" >
  <li class="nav-item dropdown" style="">
      <a  style ="color: black; border: 1px ; margin-top: 20px;"class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        All
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="#">MARKETPLACE</a></li>
        <li><a class="dropdown-item" href="#">Gearbestselection</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Appliances</a></li>
        <li><a class="dropdown-item" href="#">Women's bags</a></li>
        <li><a class="dropdown-item" href="#">Computer</a></li>
        <li><a class="dropdown-item" href="#">Tablet</a></li>
        <li><a class="dropdown-item" href="#">Appliances</a></li>
      </ul>
    </li>
  
    <form class="d-flex" style="border: 1px ;">
      <input
        class="form-control me-2 rounded-pill"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style="width: 400px; border: 1px solid yellow;  margin-top: 40px ;margin-left: -10px;
        " 
       
      />
  
      <button
        style="
          background-color: #ffff00;
          border: none;
          position: relative;
          left: -48px;
          margin-top: 40px;
          text-align: center;
        "
        class="btn btn-outline-success"
        type="submit"

      >
        <i style="color: black;" class="fa-solid fa-magnifying-glass" ></i>
      </button>
    
    </form>
   <div style=" width: 300px; display: flex; justify-content: space-between; margin-top: 40px;border: 1px ;margin-left: 40px; ">
      <a href="./signin.html" style="text-decoration: none;"><i class="fa-solid fa-user-plus" style="margin-left: -30px; " ></i></a>
      <label ><a href="./signin.html" style="text-decoration: none ; color: black;">Sign In</a></label>

      <i class="fa-regular fa-heart"></i>
      <label>Favorites</label>
      <i class="fa-solid fa-cart-arrow-down"></i>
      <label><a href="./cart.html" style="text-decoration: none; color:black ;">cart</a></label>
   </div>
</div>
</div>
</div>
`};

export {navbar1};
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light" ></nav></nav> */}