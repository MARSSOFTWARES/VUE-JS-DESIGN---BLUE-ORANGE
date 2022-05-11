<template>
  <div class="Services-body">
    <div class="content">
      <div class="init-services">
        <div class="gray-bg"></div>
        <div class="ou-services-container">
          <h1>CHECK OUR SERVICES</h1>
          <h2>BLUEORANGE Has Many Services In Web Developement</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem
            cum odio sed ea sapiente vitae conseq
          </p>
          <router-link to="/Services">Check It Now</router-link>
        </div>
      </div>
      <div class="row services-presentation">
        <div class="col-md-4">
          <div class="our-services-feature">
            <h1><span>Our</span> Services</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              laboriosam asperiores eaque veniam odit non similique. Beatae
              voluptatibus dolorem iusto quia repudiandae soluta, nemo, fugiat
              vel commodi tempore non ullam.
            </p>
          </div>
        </div>
        <div class="col-md-8 row four-services-features">
          <div class="col-md-6">
            <img src="../icons/web.png" alt="wrapkit" class="icons" />
            <h3>Build Website</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              consectetur incidunt esse, facere reprehenderit molestiae et magni
              excepturi aut ut velit eligendi porro natus sapiente commodi iste
              nesciunt dolores hic.
            </p>
          </div>
          <div class="col-md-6">
            <img src="../icons/cms.png" alt="wrapkit" class="icons" />
            <h3>CMS Project</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              consectetur incidunt esse, facere reprehenderit molestiae et magni
              excepturi aut ut velit eligendi porro natus sapiente commodi iste
              nesciunt dolores hic.
            </p>
          </div>
          <div class="col-md-6">
            <img src="../icons/marketing.png" alt="wrapkit" class="icons" />
            <h3>Web Marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              consectetur incidunt esse, facere reprehenderit molestiae et magni
              excepturi aut ut velit eligendi porro natus sapiente commodi iste
              nesciunt dolores hic.
            </p>
          </div>
          <div class="col-md-6">
            <img src="../icons/job.png" alt="wrapkit" class="icons" />
            <h3>Finding Job</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              consectetur incidunt esse, facere reprehenderit molestiae et magni
              excepturi aut ut velit eligendi porro natus sapiente commodi iste
              nesciunt dolores hic.
            </p>
          </div>
        </div>
      </div>
      <div class="table-features row">
        <div class="col-md-3">
          <h1>Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quis incidunt quidem soluta cum sed iusto vitae perferendis!
            Perferendis dolore totam repellat eum nisi praesentium facilis.
            Dicta architecto dolorum sequi.
          </p>
        </div>
        <div class="col-md-3">
          <h1>Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            deserunt blanditiis unde ea obcaecati distinctio maiores. Tempora
            molestiae saepe voluptatem facere ex aperiam perspiciatis quam
            neque, odit tempore ducimus itaque!
          </p>
        </div>
        <div class="col-md-3">
          <h1>Lorem Lorem</h1>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="last-paragraph">
        <div class="row">
          <div class="col-md-6">
            <img src="../images/man.jpg" alt="" />
          </div>
          <div class="col-md-6">
            <h1>Transform your life through education</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur molestias et inventore voluptatibus, pariatur, dolorum
              sequi vitae ad accusamus at sit sunt incidunt, rem beatae sint
              repudiandae ratione dolor mollitia!
            </p>
          </div>
        </div>
      </div>
      <app-footer/>
    </div>
  </div>
</template>

<script>
import AppFooter from "@/components/global/AppFooter.vue";
export default {
  name: "Services",
  components : {
    AppFooter,
  }
  
};
</script>
<style lang="scss">
.Services-body {
  height: auto;
  max-width: 100%;
  width: 100%;
  position: absolute;
  background: white;
  .content {
    position: absolute;
    width: 100%;
    max-width: 100%;
    margin-top: 60px;
    .init-services {
      margin-top: -40px;
      width: 100%;
      background-image: url("../images/laptop.jpg");
      height: auto;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      padding-bottom: 22vh;
      .gray-bg {
        background: rgb(0, 0, 0);
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0.6;
        z-index: 2;
      }
      .ou-services-container {
        max-width: 60%;
        margin: auto;
        z-index: 3;
        position: relative;
        @media (max-width: 768px) {
            max-width: 100%;
        }
        h1 {
          padding-top: 100px;
          font-size: 60px;
          font-weight: bold;
          color: yellow;
          @media (max-width: 768px) {
            font-size: 40px;
          }
        }
        h2 {
          font-weight: bold;
          color: white;
          @media (max-width: 768px) {
            font-size: 18px;
          }
        }
        p {
          color: white;
          max-width: 95%;
          margin: 50px auto;
          font-weight: bold;
          @media (min-width: 768px) {
            max-width: 70%;
          }
        }
        a {
          text-decoration: none;
          color: white;
          background: dodgerblue;
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
          background: rgb(255, 245, 0);
          color: black;
        }
      }
    }
    .services-presentation {
      margin-top: 100px;
      height: auto;
      position: relative;
      max-width: 100%;
      background: white;
      .our-services-feature {
        text-align: left;
        margin-left: 70px;
        @media (max-width: 768px) {
            margin: auto;
            max-width: 90%;
        }
        h1 {
          color: black;
          font-weight: bold;
          span {
            border-bottom: solid 5px rgb(255, 238, 0);
            padding-bottom: 10px;
          }
        }
        p {
          margin-top: 30px;
          font-weight: bold;
          font-size: 15px;
        }
      }
      .four-services-features {
        @media (max-width: 768px) {
            margin: auto;
            max-width: 90%;
        }
        .col-md-6 {
          text-align: left;
          font-weight: bold;
          img {
            width: 50px;
            margin-top: 30px;
          }
          h3 {
            margin-top: 25px;
            font-size: 18px;
            font-weight: bold;
            color: black;
          }
          p {
            font-size: 15px;
          }
        }
      }
    }
    .table-features {
      position: relative;
      margin: 100px auto;
      padding: 40px;
      .col-md-3 {
        min-width: 33%;
        margin: 1px;
        background: rgb(0, 116, 187);
        text-align: left;
        h1 {
          color: rgb(255, 245, 0);
          font-weight: bold;
          margin-left: 10px;
        }
        p {
          font-weight: bold;
          color: #d4d4d4;
          margin-left: 10px;
        }
        table {
          text-align: center;
          color: white;
          font-weight: bold;
        }
      }
    }
    .last-paragraph {
        margin: 100px auto;
        background: white;
        height: auto;
        width: 100%;
        .row {
          margin: auto;
          background: rgb(0, 116, 187);
           @media (max-width: 768px) {
            padding: 30px 5px;
          }
          @media (min-width: 768px) {
            padding: 30px 30px;
          }
          .col-md-6 {
            text-align: left;
            img {
              width: 100%;
            }
            p,
            h1 {
              font-weight: bold;
            }
          }
          h1 {
            color: white;
          }
          p {
            color: rgb(221, 221, 221);
            width: 100%;
          }
        }
      }
  }
}
</style>
