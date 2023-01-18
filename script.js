const app = Vue.createApp({
    name:'Random Mail',
    data(){
        return {
            email:''
        }
    },
})

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => {

})

app.mount('#root');