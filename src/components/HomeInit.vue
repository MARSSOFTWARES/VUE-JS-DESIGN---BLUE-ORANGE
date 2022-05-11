<template>
  <div class="home-body">
    <div class="content">
      <div class="container">
        <h4>This Is Your Chance</h4>
        <h1><span class="first-title-part">WEB</span> DEVELOPEMENT</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          alias vitae molestiae veritatis ipsam officia veniam magni iusto,
          consequuntur ipsa nisi nihil in illum quia non sint corrupti iste
          quae!
        </p>
        <router-link to="/Blog">TRY NOW</router-link>
        <div class="last-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeInit",
  
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

<style lang="scss" scoped>

.home-body {
  height: 100%;
  max-width: 100%;
  width: 100%;
  position: absolute;
  .content {
    width: 100%;
    min-height: 100%;
    position: relative;
    background-image: url("../images/orange.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    text-align: left;
    margin-top: 0px;
    h4 {
      padding-left: 50px;
      padding-top: 170px;
      color: white;
      font-size: 26px;
      font-weight: bold;
    }
    h1 {
      margin-left: 50px;
      font-size: 43px;
      font-weight: bold;
      color: white;
      font-family: inherit;
      .first-title-part {
        color: #fff500;
      }
    }
    p {
      margin-left: 50px;
      max-width: 40%;
      margin-bottom: 50px;
      color: white;
    }
    a {
      text-decoration: none;
      color: white;
      border: solid 2px white;
      padding: 10px;
      font-weight: bold;
      margin-left: 50px;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
    }
    a:hover {
      background: white;
      color: dodgerblue;
    }
    .last-paragraph {
      margin-top: 10%;
      padding-left: 50px;
      color: white;
    }
  }
}
</style>
