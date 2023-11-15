

const {createApp} = Vue;

const vueApp = {
    data: function(){
        return {
            message: "Hello Vue.js",
            image: "https://code.visualstudio.com/assets/docs/nodejs/vuejs/hello-world.png"
        }


    }
}

createApp(vueApp).mount("#app");

