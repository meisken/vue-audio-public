<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>
<script>
export default {
    data(){
      return{

      }
    },
    methods:{
    
    }
}
</script>
<style>
*{
    box-sizing: border-box;
}
body,html{
  overflow: hidden;
  padding: 0;
  margin: 0;

  font-family: "Segoe UI",'Microsoft JhengHei','Apple LiGothic Medium';

  
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none; 

}
@media screen and (min-width: 2400px){

}
@media screen and (min-width: 1850px){
html{
  font-size: 17px;
}
}
@media screen and (max-width: 1370px){
html{
  font-size: 14.5px;
}
}
@media screen and (max-width: 1024px){
html{
  font-size: 13.75px;
}

}
@media screen and (max-width: 768px){
html{
  font-size: 13.5px;
}
}
@media screen and (max-width: 500px){
html{
 
}
}
</style>
