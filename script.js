const app = Vue.createApp({
    name:'Random Mail',
    data(){
        return {
            email:''
        }
    },

    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            const email = response.data.response;
            this.email=email;
        });
    }

});



app.mount('#root');