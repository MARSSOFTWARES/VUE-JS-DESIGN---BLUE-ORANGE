<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content">{{ content | shorten}}</p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">{{ author }}</span>
            </div>
            <div class="col-sm-6" id="post-category-container">
                <span class="post-category">{{ category }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        "views", 
        "title",
        "date",
        "content",
        "author",
        "category",
    ],
    name : "post",

};
</script>
<style lang="scss" scoped>
.post-box {
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .post-views {
        position: absolute;
        top : 5px;
        right : 5px;
        background-color: rgb(255, 196, 0);
        border-radius: 4px;
        padding: 1px 5px;
        text-align: center;
        font-weight: bold;
        color: #fff;
    }
    .post-title {
        color : #959595;
        font-weight: bold;
    }
    .post-date {
        display: block;
        padding: 0 0 4px;
        color: #747474;
        font-size: 13px;
    }
    .post-content{
        line-height: 2;
        color : 666;
    }
    .post-author{
        background: #8cbbbb;
        padding: 4px 10px;
        border-radius: 4px;
        color: white;
    }
    .post-category{
        background: rgb(243, 186, 0);
        padding: 4px 10px;
        border-radius: 4px;
        color : white;
    }
    #post-category-container {
        text-align: right;
    }
}
</style>