<template>
  <div class="about-body">
    <div class="top-about">
      <div class="container">
        <h1>MEET OUR TEAM</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque possimus cum obcaecati exercitationem dolorum libero, doloremque est ab voluptates. Veritatis incidunt ad sequi explicabo rem nihil itaque repellat mollitia architecto!</p>
        <a href="">CONTACT US</a>
      </div>
    </div>
    <div class="team-image"></div>
    <div class="container-fluid px-2 px-md-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-lg-9 col-xl-8">
            <div class="card card-main border-0 text-center">
                <h5 class="font-weight-bold mb-4">What our clients are saying<br>about us.</h5>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <div class="card border-0 card-0">
                                <div class="card profile py-3 px-4">
                                    <div class="text-center"> <img src="../images/coder.jpg" class="img-fluid profile-pic"> </div>
                                    <h6 class="mb-0 mt-2">Marielle Haag</h6> <small>Backend Developer</small>
                                </div> <img class="img-fluid open-quotes" src="../images/coder.jpg" width="20" height="20">
                                <p class="p-content mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <img class="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20">
                            </div>
                        </div>
                        <div class="carousel-item active">
                            <div class="card border-0 card-0">
                                <div class="card profile py-3 px-4">
                                    <div class="text-center"> <img src="../images/coder.jpg" class="img-fluid profile-pic"> </div>
                                    <h6 class="mb-0 mt-2">Ximena Vegara</h6> <small>UI/UX Designer</small>
                                </div> <img class="img-fluid open-quotes" src="../images/coder.jpg" width="20" height="20">
                                <p class="p-content mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p> <img class="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card border-0 card-0">
                                <div class="card profile py-3 px-4">
                                    <div class="text-center"> <img src="../images/coder.jpg" class="img-fluid profile-pic"> </div>
                                    <h6 class="mb-0 mt-2">John Paul</h6> <small>UI/UX Designer</small>
                                </div> <img class="img-fluid open-quotes" src="../images/coder.jpg" width="20" height="20">
                                <p class="p-content mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <img class="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="example-2" v-on:="myFunction('hi')"></div>
  </div>
</template>

<script>
import "../js/home.js";
export default {
  name: "about",
  data: function () {
  return {
    pageName : "About Us",
    pageDescription : 'This is Abous Us Page',
  }
  },
};
</script>

<style lang="scss">
  .about-body {
    margin: 0px;
    position: absolute;
    padding: 0px;
    width: 100%;
    height: auto;
    .top-about {
      margin: 60px auto;
      text-align: center;
      background: rgb(15, 15, 15);
      padding-bottom: 100px;
      .container {
        margin: 0px auto;
        h1 {
        margin-top: 100px;
          font-weight: bold;
          color: rgb(41, 98, 255);
          font-size: 45px;
        }
        p {
          max-width: 70%;
          margin: 70px auto;
          color: rgb(161, 161, 161);
          font-size: 20px;
        }
        a {
          text-decoration: none;
          color: rgb(252, 252, 252);
          border: solid 1px rgb(255, 255, 255);
          padding: 15px 30px;
          border-radius: 5px;
          font-weight: bold;
          font-size: 17px;
          transition: all 0.3s ease-in-out;
          -webkit-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          -moz-transition: all 0.3s ease-in-out;
        }
        a:hover {
          background: rgb(231, 231, 231);
          color: rgb(20, 20, 20);
        }
      }
    }
    .team-image {
      background-image: url("../images/team.jpg");
      height: 400px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      margin-top: -60px;
    }
  }

body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background: linear-gradient(#01579B, #03A9F4);
    background-repeat: no-repeat
}

.card-main {
    padding: 50px;
    border-radius: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 0px 4px 8px 0px #283593
}

.card-0 {
    color: #fff;
    background-color: #536DFE;
    position: relative;
    margin-left: 70px;
    border-radius: 10px;
    min-height: 312px
}

.carousel-indicators li {
    cursor: pointer;
    border-radius: 50% !important;
    width: 10px;
    height: 10px
}

.profile {
    color: #000;
    background-color: #FFD54F;
    position: absolute;
    left: -70px;
    top: 17%;
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px
}

.profile-pic {
    width: 120px;
    height: 120px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px
}

.open-quotes {
    margin-left: 130px;
    margin-top: 100px
}

.p-content {
    margin-left: 150px;
    margin-right: 80px
}

.close-quotes {
    margin-bottom: 100px;
    margin-right: 60px
}

@media screen and (max-width: 600px) {
    .card-main {
        padding: 50px 10px
    }

    .card-0 {
        min-height: 432px
    }

    .profile {
        top: 24%
    }

    .profile-pic {
        width: 90px;
        height: 90px
    }

    .open-quotes {
        margin-left: 100px
    }

    .content {
        margin-left: 120px;
        margin-right: 50px
    }

    .close-quotes {
        margin-right: 30px
    }
}
</style>
