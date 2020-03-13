<template>
    <div id="titleContainer" :class="{'titleContainer-debug-afterInputFadeBug': showLogin}">
        <header id="navHeader" >
            <div id="loginHeadeLeft">
                <span class="logotxt">logo</span>
                <ul>
                    <li><a href=""><img :src="socialMedia.facebook" alt=""></a></li>
                    <li><a href=""><img :src="socialMedia.instagram" alt=""></a></li>
                    <li><a href=""><img :src="socialMedia.twitter" alt=""></a></li>
                </ul>
            </div>
            <div id="loginHeadeRight">
                <router-link to="/register"><div id="sign-up-btn">sign up</div></router-link>
                <hr class="perpendicular" siz>
                <router-link to="/"><div id="log-in-btn">log in</div></router-link>  
            </div>
  
            <div id="moblieLoginHeadRight">
                <span class="menuButton"  v-if="!showLogin" @click="showLogin = !showLogin;">
                    <svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 751 592">
                        <path d="M60,0H691a60,60,0,0,1,0,120H60A60,60,0,0,1,60,0Z"/>
                        <path d="M60,236H691a60,60,0,0,1,0,120H60a60,60,0,0,1,0-120Z"/>
                        <path d="M60,472H691a60,60,0,0,1,0,120H60a60,60,0,0,1,0-120Z"/>
                    </svg>
                    
                </span>
                <span v-if="showLogin" class="closeButton" @click="showLogin = !showLogin">
                    <svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.58 10.58">
                        <path d="M19,10.46,15.41,14,19,17.54A1,1,0,0,1,19.1,19l-.05.05H19a1,1,0,0,1-.71.29,1,1,0,0,1-.7-.29L14,15.41,10.46,19a1,1,0,0,1-.7.29,1,1,0,0,1-1-1,1.08,1.08,0,0,1,.29-.7L12.59,14,9.05,10.46a1,1,0,0,1,1.41-1.41L14,12.59l3.54-3.54A1,1,0,0,1,19,9L19,9a1,1,0,0,1,.05,1.41Z" transform="translate(-8.76 -8.71)"/>
                    </svg>
                </span>             
            </div>
      
        </header>   
        <div id="titleMon">
                    
            <div id="titleLeft">          
                <div class="wrapper-div">
                    <div>
                        <div>      
                            <h1>Enjoy the <span>music</span></h1>
                            <h1>Enjoy your <span>life</span></h1>
                        </div>
                        <span class="slogan">put your hand up, dance to the music. feel the amazing music around your mind.</span>
                    
                    </div>
                    <div class="moblieLoginButtonWrapper">
                        <span @click="showLogin = !showLogin;$router.push('/')">login</span>
                        <span><svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76"><path d="M59.87,39.26a.39.39,0,0,0-.33-.06l-14.76,4a.38.38,0,0,0-.28.36v2.18L60,41.54v-2A.37.37,0,0,0,59.87,39.26Z" transform="translate(-12 -12)"/><path d="M41.34,58.11a1.35,1.35,0,1,0,1.35,1.35h0A1.34,1.34,0,0,0,41.34,58.11Z" transform="translate(-12 -12)"/><path d="M50,12A38,38,0,1,0,88,50,38,38,0,0,0,50,12Zm0,64.11A26.11,26.11,0,1,1,76.11,50,26.11,26.11,0,0,1,50,76.11Z" transform="translate(-12 -12)"/><path d="M58.66,51.82A1.35,1.35,0,1,0,60,53.18h0A1.36,1.36,0,0,0,58.66,51.82Z" transform="translate(-12 -12)"/><path d="M50,25.7A24.3,24.3,0,1,0,74.3,50,24.3,24.3,0,0,0,50,25.7ZM61.82,53.27h0A3.16,3.16,0,1,1,58.66,50a3,3,0,0,1,1.35.32V43.41L44.5,47.66v11.8a3.16,3.16,0,1,1-3.16-3.16h0a3,3,0,0,1,1.35.32v-13a2.17,2.17,0,0,1,1.61-2.1l14.76-4a2.19,2.19,0,0,1,1.9.37,2.16,2.16,0,0,1,.86,1.74Z" transform="translate(-12 -12)"/></svg></span>
                        <span @click="showLogin = !showLogin;$router.push('/register')">sign up</span>
                    </div>
                    <ul>
                        <a href="">
                            <li>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.18 94.85"><g  data-name="圖層 1"><path d="M50,53.4A25.45,25.45,0,1,0,24.5,28,25.52,25.52,0,0,0,50,53.4Zm-.6-22.8c-5.4-1.9-8.1-4.9-8.1-8.9a7.59,7.59,0,0,1,5.9-7.5V11.4a1.11,1.11,0,0,1,1.1-1.1h2.8a1.11,1.11,0,0,1,1.1,1.1v2.5A12.91,12.91,0,0,1,56.9,16a1.32,1.32,0,0,1,.2,1.9l-1.9,2a1.23,1.23,0,0,1-1.6.2A6.25,6.25,0,0,0,50.2,19c-.8,0-3.5.3-3.5,2.6,0,.7,0,2.3,4.6,3.9,2.3.8,7.6,2.7,7.6,8.6A7.65,7.65,0,0,1,52.2,42v2.6a1.11,1.11,0,0,1-1.1,1.1H48.3a1.11,1.11,0,0,1-1.1-1.1V41.8a16.29,16.29,0,0,1-5.5-3,1.3,1.3,0,0,1-.1-1.9l1.9-2a1.24,1.24,0,0,1,1.7-.1c1.2.9,3.1,2.1,4.9,2.1,3.5,0,3.5-2,3.5-2.8C53.5,32.9,53.2,31.9,49.4,30.6Z" transform="translate(-7.4 -2.5)"/><path d="M84.8,71.6a89.37,89.37,0,0,1-10.4,2.5c-1.5,2.4-4.4,4.4-8.6,5a17.22,17.22,0,0,1-3.3.2c-3,0-6.5-.4-10.3-.8-.3,0-.6-.1-.9-.1a2,2,0,0,1-1.7-2,1.93,1.93,0,0,1,2.1-1.8c.3,0,.6.1.9.1,5,.6,9.7,1.1,12.7.6,5.5-.9,7.2-4.2,6.9-7-.2-2.3-1.9-4.6-4.6-4.4a95.81,95.81,0,0,1-12.8-.7c-5.1-.5-10.3-1-14-.5a52.19,52.19,0,0,0-9.3,3.1c-.9.3-1.7.7-2.6,1.1V91.3c7.5,2.7,16.7,5.6,22.1,6,11,.9,32.4-11.5,38.6-15.6C95.7,77.9,91.6,69.3,84.8,71.6Z" transform="translate(-7.4 -2.5)"/><path d="M22.6,62.6H9.9a2.48,2.48,0,0,0-2.5,2.5V93a2.48,2.48,0,0,0,2.5,2.5H22.5A2.48,2.48,0,0,0,25,93V65.2A2.42,2.42,0,0,0,22.6,62.6Z" transform="translate(-7.4 -2.5)"/></g></svg>
                                </div>
                                <span>donate</span>
                            </li>
                        </a>
                        <a href="https://meisken.ddns.net:7001/#TransitionMain">
                            <li>
                                <div>
                                    <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.93 89.93"><path d="M65.6,7.79A45,45,0,0,0,11.34,73.11,45.45,45.45,0,0,0,57.87,94.29C79.34,90.52,94.59,71.51,95,50A45.6,45.6,0,0,0,65.6,7.79ZM64.05,89.27A41.72,41.72,0,0,1,14.19,28.53,42.11,42.11,0,0,1,58.44,9.14c19.38,4,32.89,21.3,33.23,40.85C91.37,67.44,80.66,83.33,64.05,89.27Z" transform="translate(-5.04 -5.04)"/><path d="M50,11.72A38.28,38.28,0,1,0,88.27,50,38.28,38.28,0,0,0,50,11.72Zm0,14.11a8.42,8.42,0,1,1-8.42,8.42A8.42,8.42,0,0,1,50,25.83Zm15.31,47.6H34.68V62.78c0-9.09,5.71-16.45,12.76-16.45h5.11c7.05,0,12.76,7.36,12.76,16.45Z" transform="translate(-5.04 -5.04)"/></svg>
                                </div>
                                <span>about us</span>
                            </li>
                        </a>
                        <a href="mailto:meiskena999@gmail.com">
                            <li>
                                <div>
                                    <svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><polygon points="19.73 15.15 23.52 19.98 23.52 12.78 19.73 15.15"/><polygon points="13.16 15.7 9.18 20.76 22.86 20.76 18.87 15.68 16.01 17.47 13.16 15.7"/><polygon points="8.5 20 12.3 15.17 8.5 12.81 8.5 20"/><path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm8.52,21.76H7.5V9.91h17Z"/><polygon points="16.01 16.3 23.52 11.6 23.52 10.91 8.5 10.91 8.5 11.63 16.01 16.3"/></svg>
                                </div>
                                <span>contact us</span>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            
            <transition name="loginSlider">
            <div id="titleRight" v-if="showLogin">
                <div id="WhtieBG">
                    <span @click="changePage">{{ currentPage }}</span>
                </div>
                <div id="loginArea">
                    <router-view v-on:submitted="loadingWhenSubmitted" v-on:success="successful" v-on:error="wrong"></router-view>
                </div>
            </div>
            </transition>
        </div>  
        <transition name="stateFade">
        <div class="state-arae" v-if="showState">
            <p v-html="currentState"></p>
        </div>
        </transition>

    </div>
</template>

<script>
export default {
    data(){
        return{
            socialMedia:{
                facebook:require('../loginPage/img/facebook.svg'),
                instagram:require('../loginPage/img/Instagram.svg'),
                twitter:require('../loginPage/img/twitter.svg'),
            },
            showLogin:true,
            currentPage:"sign up",

            showState:false,
            currentState:'<div>a</div>',
            loading:'<svg class="loading-element"><circle cx="50" cy="50" r="50"></circle></svg>',
            successMsg:'',
            errorMsg:''
        }
    },
    computed:{
        success(){
            return '<div class="success msg"><label>' + this.successMsg + ' successful</label><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.06 60"><path d="M87.6,30.8,42.7,77.5a6.17,6.17,0,0,1-9,0L11.3,54a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l18,18.8,40.4-42a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,87.6,30.8Z" transform="translate(-9.43 -19.45)"/></svg></div>'
        },
        error(){
            return '<div class="error msg"><label>something wrong' + this.errorMsg +'</label><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.92 25.92"><path d="M22.15,25l-9.54,9.55a2,2,0,0,1-2.84,0,2,2,0,0,1,0-2.83l9.54-9.54L9.78,12.61a2,2,0,1,1,2.83-2.83l9.54,9.54,9.54-9.54a2,2,0,1,1,2.83,2.83L25,22.15l9.55,9.54a2,2,0,1,1-2.83,2.83L22.15,25Z" transform="translate(-9.19 -9.19)"/></svg></div>'
        }
    },
    created(){
        var self = this;
        window.addEventListener('resize', function(){
        
            
            if(window.innerWidth > 675 ){
                self.showLogin = true ;



            }else{
                self.showLogin = false;
            }
          
          
        });   
        window.innerWidth > 675 ?  self.showLogin = true :  self.showLogin = false;

        this.$router.currentRoute.path == '/register' ? this.currentPage = 'log in':this.currentPage = 'sign up'; 

    
    },
    methods:{
        changePage(){
         
            this.$router.currentRoute.path == '/register' ? this.$router.push('/') : this.$router.push('/register')
        },
        loadingWhenSubmitted(){
            this.showState = true;
            this.currentState = this.loading;
        },
        successful(){
            this.currentState = this.success;    
            setTimeout(() => {
                this.showState = false;
            }, 1000);
            
                    
        },
        wrong(){
            this.currentState = this.error; 
            setTimeout(() => {
                this.showState = false;
            }, 1000);            
            
                          
        }
    },
    beforeRouteUpdate(to,from,next){
        to.path == '/register' ? this.currentPage = 'log in':this.currentPage = 'sign up'; 
        next();
    }
}
</script>

<style>

#navHeader{

    padding:0 1rem; 
    max-width: 1875px;
    width: 99vw;

    position: relative;
    margin: 0 auto;
    z-index: 100;

    display: flex;
    justify-content: space-between;
    align-items: center;

 

}
#loginHeadeLeft{
    display: flex;
    align-items: center;

    margin-top: 0.5rem;
}
.logotxt{
    font-weight: 500;
    color: #906DED;
    font-size: 2.25rem;
}
#loginHeadeLeft ul{
    display: flex;
    padding: 1rem 0 0 0;
    margin-left: 1rem;
}
#loginHeadeLeft ul li{
    width:1.7rem;
    margin-right: 0.75rem;
  
}
#loginHeadeRight{
    display: flex;
    align-items: flex-start;
    padding: 1rem 1rem 0 0;
    margin-top: 0.5rem;
}
#sign-up-btn{
    color: white;
    background: #5047C7;

    padding: 0rem 0 0.25rem 0;
    width: 6rem;
    border-radius: 0.3rem;

    font-weight: 300;
    font-size: 1.2rem;
 
    text-align: center;
}
#sign-up-btn:hover{
    color:white;
    background:black;    
}
#log-in-btn{
    color: #5047C7;
 
    font-weight: 300;
    font-size: 1.25rem;
    text-align: center;

    border-bottom: solid 0.5px #5047C7;
  
}
#log-in-btn:hover{
    color: #906DED;
    border-bottom: solid 0.5px #906DED;
}
.perpendicular{
    margin: 0 1rem;

    width: 1px;
    height: 2.25rem;
    border: solid 0.5px #5047C7;
  
    background: #5047C7;
}
#moblieLoginHeadRight{
    display: none;
}
/* title is starting on below*/
#titleContainer{
    /**/

 
    min-height: 750px;
    height: 100vh;
    width: 100vw;

    background-image:linear-gradient(rgba(0,0,0,0.2)), url('./img/mainBG.png');
    background-size:contain cover ;
    
    
}
#titleMon{
    display: flex;
    
    max-width: 100%;
    
}
#titleLeft{

    width: calc(100vw - 27.5rem);
    min-height: 750px;
    height: 100vh;
   
    padding: 0 2vw 0 0;

   
}
.wrapper-div{
    width: 100%;
    height: 100%;
    min-height: 500px;

    padding-bottom: 8.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;


}
.wrapper-div > div{
 
    width: 100%;
    padding-bottom: 5.5rem;
}
.wrapper-div > div > div{
   

    width: 27.5rem;
    white-space:nowrap;

  

}
#titleLeft h1{
    margin: 0;
    padding: 0;

    color: white;
    font-weight: 400;
    font-size:3.75rem;

    text-align: right;
    
    
}
#titleLeft h1:first-child span{
    color: #D66ED3;
}
#titleLeft h1:nth-child(2) span{
    color: #F5AE61;
}
.moblieLoginButtonWrapper{
    display: none;
}
.slogan{
    display: block;

    width:40vw;
    max-width: 45rem;
 

    margin-top: 1.45rem;
    padding-left: 3.75rem;
      
    color: white;
    font-size: 1.925rem;
    font-weight: 300;
    line-height:2.75rem;
}
#titleLeft ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex-wrap: wrap;

    height: 50%;
    max-height: 20rem;

}
#titleLeft li{
    width:5.5rem;
    height: 5.25rem;
    padding-bottom: 0.4rem;

    box-shadow: 0 3px 20px rgba(0,0,0,0); 


    
    background: #5047C7;
    border-radius: 0.15rem;

    display: flex; 
    flex-direction: column;
    justify-content:flex-end;
    align-items: center;
 
}
#titleLeft li div{
    /*svg width*/
    width: 2.5rem;
}
#titleLeft li:hover{
    transform: scale(1.25);
    box-shadow: 0 3px 20px rgba(0,0,0,0.35); 
}
svg{
    fill: white;
}
#titleLeft li span{
    color: white;
    font-weight: 300;
  
}

#titleRight{


    display: flex;
    justify-content: center;
    align-items: center;

    width: 27.5rem;
    height: 80vh;
    min-height: 550px;

}
#WhtieBG{
    background: white;
    position: absolute;

    top:0;
    width: 27.5rem;
    height: 100vh;
    min-height: 550px;
    z-index: 0;

    box-shadow: -5px 0 20px rgba(0,0,0,0.3);
}
#WhtieBG span{
    display: none;
}
#loginArea{
  
 
    position: relative;
    z-index: 10;
}
.state-arae{
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background: rgba(0,0,0,0.7);
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
}
.loading-element{
    position: relative;
    width: 110px;
    height: 110px;
    animation: rotate 2s linear infinite;
}
.loading-element circle{
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    stroke: white;
    stroke-linecap: round;
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    transform: translate(5px,5px);

    animation: loadingAnimation 4s linear infinite;
}
@keyframes rotate{
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    }
}
@keyframes loadingAnimation{
    0%{
        stroke-dashoffset: 440;
    }
    50%{
        stroke-dashoffset: 0;
    }
    5.1%{
        stroke-dashoffset: 880;
    }
}
.msg{
    display: flex;
    align-items: center;

 
}
.msg label{
    font-size: 2rem;
    font-weight: 400;
    margin-right: 0.75rem
}
.msg svg{
    width: 3rem;
    height: 3rem;
}
.success svg{
    fill:lightgreen;
}
.error svg{
    fill: darkred;
}
.stateFade-leave-active{
    transition: 0.75s ease-out all;
}
.stateFade-enter,.stateFade-leave-to{
    opacity: 0;
}
.stateFade-enter-to,.stateFade-leave{
    opacity: 1;
}
@media screen and (max-width:1370px ){
    #titleLeft h1{

        text-align:center;
        
        
    }
    .slogan{


        width:50vw;
        max-width: 45rem;
    
        padding-left: 2.75rem;
        
        font-size: 1.75rem;
        line-height:2.75rem;
    }
    .closeButton{
        display:none;

    }
}
@media screen and (max-width:1024px ){
 
    .wrapper-div{
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        padding-bottom: 11rem;
    }
    #titleLeft h1{

        font-size:3.5rem;

        text-align:center;
        text-shadow:  0 3px 10px rgba(0,0,0,0.2); 
        
    }
    #titleLeft ul{

        flex-direction: row;
        justify-content: space-around;

        width: 60%;
        min-width: 25.5rem;
   
        padding-left: 1.5rem;

        height: auto;
        max-height:unset;

    }
    #titleLeft li{
        box-shadow: 0 3px 10px rgba(0,0,0,0.15); 
    }
    .wrapper-div > div{
    
        width: 100%;
        padding-bottom: 3rem;
    }
     #WhtieBG{
 
         height: 102.5vh;
     }
}
@media screen and (max-width:768px ){
    #titleMon{
        justify-content: space-between;
    }
    #titleRight{
        width: 22.5rem;

    }
    #WhtieBG{

        width: 22.5rem;

        right: 0;

    }    
}
@media screen and (max-width:675px ){

    #navHeader{

   

        z-index: 10000;
        max-width: 97.5vw;

        align-items: flex-end;
    
        padding: 0 1rem 0 0.75rem;
    }    

    #loginHeadeLeft{
        margin-top: 0.5rem;
    }
    #loginHeadeLeft ul{
        display: none;
    }
    /*
    #loginHeadeLeft ul{
        

        justify-content: space-around;
   
        width: 25%;
        min-width: 8rem;
        
        padding: 1rem 0 0 0;
        margin-left: 0rem;
    }
    #loginHeadeLeft ul li{
        width:2rem;

        margin-right: 0rem;
    
    }
    */
    #titleContainer{
        /**/
    
        min-height: 0px;
        height: 100vh;

        width: 100vw;
        

        background-size:cover;
        background-position:center;
        

        overflow-y: scroll;
        overflow-x: hidden;


        position: fixed;/*debug*/
    }
    .titleContainer-debug-afterInputFadeBug {
        overflow-y: hidden !important;
    }
    #loginHeadeLeft ul{
     
    }
    #loginHeadeRight{
        display: none;
    }
/**/
    #moblieLoginHeadRight{
        display: block;
        width: 1.75rem;
        height: 1.75rem;

        cursor: pointer;
        margin-bottom: 0.5rem;
    }
    #moblieLoginHeadRight span {
        display: block;

    }
    #moblieLoginHeadRight span svg{
       
        
        width: 100%;
        height: 100%;
        
    }
    #moblieLoginHeadRight:hover .menuButton svg{
        fill: #5047C7;
    }
    .menuButton{
        fill: white;
    }
    #moblieLoginHeadRight .closeButton svg{
        fill: #5047C7;
    }
/**/
    #titleMon{
        
        width: 100vw;
        /*overflow: hidden;*/
     
    }
    #titleLeft{

        width:100%;

        min-height: 0px;
        height: 95vh;
    
        padding: 0;
        

    }
    .wrapper-div{
        height: 47.5rem;
        min-height: 450px;
        
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        margin-top: 1.5rem;
        padding-bottom: 0rem;

      

        

    }
    .wrapper-div > div:first-of-type{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    .wrapper-div > div > div{
   

        width: auto;
    

    }
    #titleLeft h1{

        text-shadow: none;
        font-size: 3.15rem;
   
        
    }

    .slogan{
        padding-left: 0rem;
        
        width:21.5rem;
        min-width: 75vw;

        line-height:2rem;
        font-size: 1.6rem;
        text-align: center;

        margin: 4vh 0 3vh 0;
    }


    .moblieLoginButtonWrapper{
        display: flex;
        justify-content: center;
        align-items: center;

         
   
    }
    .moblieLoginButtonWrapper span:not(:nth-child(2)){
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.5rem;
        width: 9.5rem;
        height: 2.4rem;
        padding-bottom: 0.2rem;

        box-shadow: 0 3px 20px rgba(255,255,255,0.4);
       

        cursor: pointer;
    }
    .moblieLoginButtonWrapper span:first-of-type{
        color: #906DED;    
        background: white;

        border-radius: 20px 0px 0 20px;
        
       
    }
    .moblieLoginButtonWrapper span:last-of-type{
        color: white;    
        background: #906DED;

        border-radius:0 20px  20px 0;
    }
    .moblieLoginButtonWrapper svg{
        width: 4rem;
        height: 4rem;
        transform: scale(1.35);

    
    }

    #titleLeft ul{


        width: 100%;
        min-width: 0rem;
        max-width: 30rem;
   
        padding-left:0rem;

        
        margin-top: 8vh;


    }
    #titleLeft li{
        width:6.5rem;
        height: 6.25rem;
        padding-bottom: 0.2rem;
     

        box-shadow: none; 


        border-radius: 0.25rem;

        background: white;
    
    }
    #titleLeft li div{
        /*svg width*/
        width: 3.25rem;
        
    }
    #titleLeft li svg{
        fill: #5047C7;
    }
    #titleLeft li span{

        
        font-size: 1.25rem;
        font-weight: 300;
        color: #5047C7;
    
    }
    #titleRight{
        position: fixed;

        width: 100vw;
        height: 70vh;
        min-height: 410px;
    }
    #WhtieBG{
        position: fixed;
        width: 100vw;
        height: 100vh;
        min-height: 0px;

        top:0;
     
        margin: 0;
        padding: 0;
    }
    #WhtieBG span{
        cursor: pointer;

        position: fixed;
        right: 0;

        display: block;
        margin-top: 7rem;

        text-align: right;

        background: #906DED;
        color: white;

        font-size: 1.35rem;


        padding: 0.2rem 1.5rem 0.4rem 1.5rem;

        border-radius:0.25rem 0 0 0.25rem;

        box-shadow: 0 0 30px rgba(0,0,0,0.2);
        
    }
    .loginSlider-enter-active,.loginSlider-leave-active{
        transition: 0.75s all ;

    }

    .loginSlider-enter,.loginSlider-leave-to{
        opacity: 0.2;
    }
    .loginSlider-enter-to,.loginSlider-leave{
        opacity: 1;
    }



    #loginArea{
     
    }
}
</style>