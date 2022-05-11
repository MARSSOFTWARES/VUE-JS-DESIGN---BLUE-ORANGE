<template>
  <div class="Blog-body">
    <div class="content row">
      <div class="col-md-8">
        <div class="post">
          <div class="img-container">
            <img src="../images/mac.jpg" alt="" />
          </div>
          <h3>Mre Znzjn</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
            adipisci temporibus dolorem quisquam nam asperiores maxime ipsum nisi!
            Debitis fugiat quam dicta doloremque nostrum quod labore eaque
            cupiditate placeat ut? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Saepe corporis, voluptatem enim veritatis
            perspiciatis suscipit quidem vero, aspernatur nobis necessitatibus
            soluta dolorem, consequatur earum optio porro eius exercitationem at
            laborum.
          </p>
        </div>
        <div class="comments">
          <h1>Comments 3</h1>
          <div class="single-comment row">
            <img src="../images/avatar7.png" alt="" class="col-md-2">
            <div class="col-md-10">
              <h6>Gigi Hadid</h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nostrum labore minus cupiditate obcaecati ab possimus quidem esse fugit. Odio magnam quas</p>
              <div class="Reply">Mar 09 2018  <span>Reply</span></div>
            </div>
          </div>
          <div class="single-comment row">
            <img src="../images/avatar7.png" alt="" class="col-md-2">
            <div class="col-md-10">
              <h6>Gigi Hadid</h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nostrum labore minus cupiditate obcaecati ab possimus quidem esse fugit. Odio magnam quas</p>
              <div class="Reply">Mar 09 2018  <span>Reply</span></div>
            </div>
          </div>
          <div class="single-comment row">
            <img src="../images/avatar7.png" alt="" class="col-md-2">
            <div class="col-md-10">
              <h6>Gigi Hadid</h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nostrum labore minus cupiditate obcaecati ab possimus quidem esse fugit. Odio magnam quas</p>
              <div class="Reply">Mar 09 2018  <span>Reply</span></div>
            </div>
          </div>
          
        </div>
        <div class="leave-reply">
          <div class="form-title">
            <span class="leave">Leave a reply</span>
            <span>Your email address will not be published. Required fields are marked*</span>
          </div>
          <form action="">
            <div class="row">
              <input type="text" placeholder="Your Name" class="col-md-6">
              <input type="email" placeholder="Email Adress" class="col-md-6 email">
            </div>
             <textarea placeholder="Please Type What You Want..."></textarea>
             <input type="submit" value="SUBMIT" class="submit">
          </form>
        </div>
      </div>
      <div class="col-md-4">
        <div class="search-bar row">
          <button type="button" value="search" class="col-md-2">S</button>
          <input type="text" class="col-md-9" />
        </div>
        <div class="categories">
          <h1>Categories Cloud</h1>
          <a href="">eComerce</a>
          <a href="">Microsoft Thechnologies</a>
          <a href="">Creative Ux</a>
          <a href="">WordPress</a>
          <a href="">Angular Js</a>
          <a href="">Entreprise Mobility</a>
          <a href="">Web Design</a>
          <a href="">HTML5</a>
          <a href="">Infographics</a>
          <a href="">WordPress Developement</a>
        </div>
        <div class="posts">
          <h1>Popular Posts</h1>
          <h6>Apple Introduces Search Ads Basic</h6>
          <span>jun 22, 2018</span>
          <div class="img-container">
            <img src="../images/mac.jpg" alt="" />
          </div>
          <h6>Apple Introduces Search Ads Basic</h6>
          <span>jun 22, 2018</span>
          <div class="img-container">
            <img src="../images/mac.jpg" alt="" />
          </div>
        </div>
        <div class="instagram-posts">
          <h1>Instagram Post</h1>
          <div class="row">
            <img src="../images/mac.jpg" alt="" class="col-md-4">
            <img src="../images/mac.jpg" alt="" class="col-md-4">
            <img src="../images/mac.jpg" alt="" class="col-md-4">
            <img src="../images/mac.jpg" alt="" class="col-md-4">
            <img src="../images/mac.jpg" alt="" class="col-md-4">
            <img src="../images/mac.jpg" alt="" class="col-md-4">
            <img src="../images/mac.jpg" alt="" class="col-md-4">
            <img src="../images/mac.jpg" alt="" class="col-md-4">
            <img src="../images/mac.jpg" alt="" class="col-md-4">
          </div>
        </div>
        <div class="email-news">
          <div class="title">
            <span class="first-title">Email Newsletter</span>
            <span>Get our products/news earlier than others, let’s get in touch.</span>
          </div>
          <form class="row">
            <input type="text" class="col-md-9" placeholder="Enter Email">
            <input type="submit" class="col-md-2" value="Follow">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
.Blog-body {
  position: absolute;
  height: auto;
  width: 100%;
  max-width: 100%;
  background: rgb(240, 238, 238);
  .content {
    margin-top: 100px auto;
    text-align: left;
    max-width: 100%;
    .post {
      background: rgb(255, 255, 255);
      margin-top: 100px;
      margin-left: 100px;
      max-width: 100%;
      padding: 35px;
      border-radius: 10px;
      .img-container {
        position: relative;
        overflow: hidden;
        max-height: 300px;
        margin-bottom: 30px;
        img {
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          -webkit-transition: -webkit-transform 0.4s ease, opacity 0.4s ease;
          transition: transform 0.4s ease, opacity 0.4s ease;
          max-width: 100%;
          filter: none;
          -webkit-filter: grayscale(0);
          -webkit-transform: scale(1.01);
        }
      }
      h3 {
        font-weight: bold;
      }
    }
    .post:hover img {
      -webkit-transform: scale(1.02);
      -ms-transform: scale(1.02);
      transform: scale(1.02);
      opacity: 0.7;
      filter: rgb(110, 110, 110);
      -webkit-filter: grayscale(1);
      -webkit-transition: all 0.8s ease-in-out;
    }
    .comments {
      background: rgb(255, 255, 255);
      margin-top: 30px;
      margin-left: 100px;
      max-width: 100%;
      padding: 35px;
      border-radius: 10px;
      .col-md-2 {
        width: 83px;
        height: 83px;
        padding: 3px;
        border: solid 1px rgb(216, 216, 216);
        border-radius: 5px;
      }
      .single-comment {
        margin-top: 20px;
        h6 {
          font-weight: bold;
        }
        p {
          font-size: 15px;
        }
        .Reply {
          font-size: 13px;
          margin-top: -10px;
          color: rgb(0, 152, 223);
          span {
            margin-left: 15px;
          }
        }
      }

    }
    .leave-reply {
      background: rgb(255, 255, 255);
      margin-top: 30px;
      margin-left: 100px;
      max-width: 100%;
      padding: 35px;
      border-radius: 10px;
      .form-title {
        font-size: 30px;
        color: rgb(46, 46, 46);
        margin-bottom: 50px;
        .leave {
          font-weight: bold;
          padding-right: 10px;
        }
      }
      .row {
        input {
          padding: 10px 10px;
          margin: auto;
          border-radius: 4px;
          border: solid 1px rgb(216, 216, 216);
          outline: none;
          @media (min-width : 760px) {
            width: 47%;
          }
          margin-bottom: 15px;
        }
      }
      textarea {
        width: 100%;
        position: relative;
        border: solid 1px rgb(216, 216, 216);
        outline: none;
        height: 150px;
        border-radius: 4px;
        padding: 10px;
        color: #495057;
      }
      .submit {
        width: 100%;
        margin-top: 6px;
        padding: 10px 10px;
        background: rgb(31, 72, 255);
        border: none;
        font-size: 15px;
        border-radius: 3px;
        color: white;
      }
        
      
    }
    .col-md-4 {
      margin-top: 100px;
      margin-left: 10px;
      max-width: 30%;
      .search-bar {
        margin: 0px auto;
        max-height: 80px;
        padding-bottom: 20px;
        background: rgb(255, 255, 255);
        border-radius: 10px;
        input {
          padding: 10px 10px;
          margin-top: 20px;
          margin-left: 0px;
          border-radius: 0px 5px 5px 0px;
          outline: none;
          border: solid 1px gray;
        }
        button {
          background: rgb(235, 235, 235);
          position: relative;
          max-height: 43px;
          margin-left: 20px;
          margin-top: 20px;
          max-width: 50px;
          border: solid 1px gray;
          border-radius: 5px 0px 0px 5px;
        }
      }
      .categories {
        background: white;
        padding: 5px 20px;
        padding-bottom: 50px;
        margin-top: 30px;
        border-radius: 10px;
        a {
          border: solid 1px dodgerblue;
          padding: 6px 12px;
          text-decoration: none;
          display: inline-block;
          border-radius: 4px;
          margin-top: 5px;
        }
        a:hover {
          text-decoration:solid 1px blue;
          border: solid 1px rgb(0, 74, 143);
          color: rgb(0, 74, 143);
        }
      }
      .posts {
        background: rgb(255, 255, 255);
        padding: 20px;
        margin-top: 30px;
        border-radius: 10px;
        .img-container {
          position: relative;
          overflow: hidden;
          max-width: 280px;
          height: 280px;
          img {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            opacity: 1;
            -webkit-transition: -webkit-transform 0.4s ease, opacity 0.4s ease;
            transition: transform 0.4s ease, opacity 0.4s ease;
            filter: none;
            max-height: 300px;
            -webkit-filter: grayscale(0);
            -webkit-transform: scale(1.01);
            margin-left: -30%;
          }
        }
        .img-container:hover img {
          -webkit-transform: scale(1.02);
          -ms-transform: scale(1.02);
          transform: scale(1.02);
          opacity: 0.7;
          filter: rgb(110, 110, 110);
          -webkit-filter: grayscale(1);
          -webkit-transition: all 0.8s ease-in-out;
        }
        h1 {
          margin-top: 10px;
          margin-bottom: 30px;
        }
        h6 {
          margin-top: 40px;
        }
      }
      .instagram-posts {
        background: rgb(255, 255, 255);
        padding: 20px;
        margin-top: 30px;
        border-radius: 10px;
        h1 {
          margin-top: 0px;
          margin-bottom: 30px;
        }
        .row {
          margin-left: 5px;
        }
        img {
          margin: 1px;
          width: 100px;
          height: 100px;
        }
      }
      .email-news {
        background: rgb(255, 255, 255);
        padding: 20px;
        margin-top: 30px;
        border-radius: 10px;
        .title {
          font-size: 30px;
          color: #444;
          .first-title {
            font-weight: bold;
            padding-right: 10px;
          }
        }
        .col-md-9 {
          margin-top: 30px;
          border: solid 1px rgb(196, 196, 196);
          outline: none;
          padding: 8px 10px;
          margin-left: 10px;
          font-size: 14px;
        }
        .col-md-2 {
          margin-top: 30px;
          border: none;
          background: rgb(199, 199, 199);
          font-size: 14px;
        }
      }
    }
  }
}
</style>
