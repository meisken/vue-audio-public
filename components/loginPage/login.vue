<template>
    <div class="loginContent">
        <div class="title">LOGIN</div>
        <form action=""  @keyup.13="tryLogin">
            
            <span>Email:<br><input type="text" name="" id="" required v-model="email" @input="inputTitleColor(0)" @click="inputTitleColor(0)"></span>
            <span>Password:<br><input type="password" name="" id="" required v-model="password" @input="inputTitleColor(1)" @click="inputTitleColor(1)"></span>           
        </form>
        <div id="buttons">           

            <span @click="tryLogin">log in</span>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import { inputLight } from './inputLight'
export default {
    mixins:[inputLight],
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        tryLogin(e){
            this.$emit('submitted','');
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                .then(user => {
                    window.location.href = "https://meisken.ddns.net:8080/main";
                    console.log(user.user.email);
                },err => {
                    this.$emit('error','');
                    alert(err.message);
                });
            e.preventDefault();  
        }
    }
}
</script>

<style scoped src="./loginANDregister.css">

</style>