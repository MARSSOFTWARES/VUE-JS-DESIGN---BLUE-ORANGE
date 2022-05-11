<template>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
          <a class="navbar-brand" id="logo">
          <span class="first-logo-part">BLUE</span>
          <span class="second-logo-part">ORANGE</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="fas fa-users-class"></i><i class="fas fa-users-class"></i><i class="fas fa-users-class"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav " id="navbar-ul">
              <li class="nav-item">
                <router-link to="/" exact>
                  <a class="nav-link active" aria-current="page">Home</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/COURSES">
                  <a class="nav-link">COURSES</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Services">
                  <a class="nav-link" >SERVICES</a>
                </router-link>
              </li>
              <li class="nav-item">
              <li class="nav-item">
                <router-link to="/about">
                  <a class="nav-link" >About</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Help">
                  <a class="nav-link" tabindex="-1">Help</a>
                </router-link>
              </li>
            </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.navbar {
position: fixed;
z-index: 10;
  min-width: 100%;
  background: rgb(0, 116, 187);
  button {
    border: none;
    outline: none;
  }
  #logo {
    margin-left: 12%;
    font-weight: bold;
    font-size: 24px;
    .first-logo-part {
      color: white;
    }
    .second-logo-part{
      color: #fff700;
    }
  }
  #navbar-ul {
    margin-left: auto;
    margin-right: 12%;
    li {
      margin-right : 5px;
      margin-left: 5px;
      padding: 0;
      a {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 15px;
        color: white;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
      }
      a:hover {
        color : #fff500;
      }
    }
  }
}
</style>
