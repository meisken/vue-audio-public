<template>
    <div class="list-body">
        <slot name="title"></slot>
        <div class="list-wrapper">
            <div class="element" v-for="(song,index) in songsTemp" :key="index" @click="$router.push({name:'singleSong',params:{songName:song.songName}})" >
                <div class="element-img" :style="{'background-image' : 'url(' + require('../../singerImgDB/' + song.songImgSrc) + ')'}"></div>
                <span class="element-info">
                    <h1>{{ song.songName }}</h1>
                    <h2>{{ song.singer }}</h2>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../../../firebase/firebaseinit'
export default {
    props:['songsArr'],
    data(){
        return{
            songsTemp:[]
        }
    },
    mounted(){
        this.songsArr.forEach(el => {
            db.collection('song').get().then(songTemp =>{
                songTemp.forEach(doc =>{
                    if(doc.data().songName == el){
                        this.songsTemp.push(doc.data());
                    }
                        
              
                });
            });
        });
    }

}
</script>

<style scoped>
.list-body{
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0.75rem 0.5rem 0 0.5rem;

    max-width: 100%;
   
    overflow: hidden;


}

.list-wrapper::-webkit-scrollbar{
    height: 0.75rem;


}
.list-wrapper::-webkit-scrollbar-track {
    background: transparent;
 
}


.list-wrapper::-webkit-scrollbar-thumb {
    
    background: rgba(255,255,255,0.5);
   
    border-radius: 999px;
}
.list-wrapper::-webkit-scrollbar-thumb:hover{
    background: rgba(255,255,255,1);
}




.list-title{
    font-size: 1.5rem;
    font-weight: 400;
    
    
}
.list-wrapper{
    scrollbar-width: thin;
    


    margin-top: 0.35rem;
    padding-bottom:1rem;
    display: flex;

    max-width: 100%;
   
    overflow: hidden;
    overflow-x: auto;

}

.element{
    cursor: pointer;
    width: 9.5rem;
 
    margin-right: 2rem;
}
.element:hover{
    /*box-shadow: 0 3px 20px rgba(255,255,255, 0.3);*/
}
.element-img{
    min-width: 9.5rem;
    min-height: 9.5rem;
    width: 6.5rem;
    height: 6.5rem;

    
    background-position: center;
    background-size: cover;
}
.element-info {
    display: block;
    width: 100%;
    height: 5rem;
    background: rgba(255,255,255, 0.1);

    padding: 0.25rem 0 0.25rem 0.05rem;
    
}
.element-info h1,.element-info h2{
    margin: 0;
    padding: 0;
}
.element-info h1{
    font-size: 1.2rem;
    font-weight: 400;
}
.element-info h2{
    margin-top: 0.15rem;
    font-size: 0.9rem;
    font-weight: 300;
    opacity: 0.7;
}
@media screen and (max-width:675px ) {
    .element{

        width:9rem;
    

    }
    .element-img{

        width:9rem;
    

    }

}
</style>