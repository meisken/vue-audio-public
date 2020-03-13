<template>
    <div class="loginContent">
        <div class="title">REGISTER</div>
        <form action="">
            <span>Email:<br><input type="text" name="" id="" required v-model="userDate.email" @input="inputTitleColor(0)" @click="inputTitleColor(0)"></span>
            <span>Username:<br><input type="text" name="" id="" required v-model="userDate.name" @input="inputTitleColor(1)" @click="inputTitleColor(1)"></span>        
            <span>Password:<br><input :type="showPW" name="" id="" required v-model="userDate.password" @input="inputTitleColor(2)" @click="inputTitleColor(2)"></span>           
        </form>
        <div id="buttons">           

            <span @click="register">submit</span>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '../firebase/firebaseinit'
import { inputLight } from './inputLight'
export default {
    mixins:[inputLight],
    data(){
        return{
            showPW:'password',
            showPWboolean:true,
            userDate:{
                email:'',
                name:'',
                password:''
            },
        }
    },
    methods:{

        register(e){
            this.$emit('submitted','');
            firebase.auth().createUserWithEmailAndPassword(this.userDate.email,this.userDate.password).then(() =>{
                
                alert('account created for'+ ' ' + this.userDate.name);
                
                db.collection('userInfo')
                    .add({
                        email:this.userDate.email,
                        name:this.userDate.name,
                        iconSrc:'https://firebasestorage.googleapis.com/v0/b/vue-database-20700.appspot.com/o/user_icon%2FFaithLogo.png?alt=media&token=36042729-3602-4c9a-81a2-2ab26b19c3e9'

                    }).then(() => {
                        this.$emit('success','');
                        alert('registered account successful.')
                        
                        this.$router.push('/');
                    }).catch(err => {
                        this.$emit('error','');
                        alert(err);
                        
                    
                    });
            },err => {
                alert(err.message);
            });

            e.preventDefault();
        },

    }
}
</script>

<style scoped src="./loginANDregister.css">

</style>