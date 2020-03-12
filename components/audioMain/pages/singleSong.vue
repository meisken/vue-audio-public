<template>
    <div id="mother">
        <div id="BlurBG" :style="{'background-image' : 'url('+ require('../singerImgDB/' +  songInfo.songImgSrc ) +')'}"></div>
        <div id="container">
            <header>
                <span class="songImgWrapper" :style="{'background-image':'url(' + require('../singerImgDB/' +  songInfo.songImgSrc ) + ')'}"></span>
                <div class="songInfoAndButtonsContainer">
                    <label class="songInfo">
                        <h1>{{ songInfo.songName }}</h1>
                        <router-link :to="{name:'singer',params:{singerName:songInfo.singer}}"><h2> {{ songInfo.singer }}</h2></router-link>
                        
                    </label>
                    <div id="buttonAndTypeContainer">
                        <div class="buttonsContainer">
                            <span class="playnowButtonWrapper">
                                <label @click="playnow">play now </label>
                                <svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.43 94.88">
                                    <g data-name="圖層 1">
                                        <path d="M71.8,41.09,3.75,1.35A7.74,7.74,0,0,0-7,3.55a7.77,7.77,0,0,0-1.28,4.2v79.5A7.7,7.7,0,0,0-.53,95a7.69,7.69,0,0,0,4.28-1.3L71.8,53.79a7.66,7.66,0,0,0,0-12.7Z" transform="translate(8.25 -0.07)"/>
                                    </g>
                                </svg>
                            </span>
                            <div class="otherButtonsWrapper">
                                <span @click="addSongToPlaylist(songInfo.songName,songInfo.singer)"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g data-name="圖層 1"><rect y="25" width="60" height="10"/></g><g id="圖層_1-3" data-name="圖層 1"><rect x="25" width="10" height="60"/></g></svg></span>
                                <span @click="collectSong(songInfo.songName,songInfo.singer)"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.58 162.87"><path d="M230.93,233.6a6.53,6.53,0,0,1-3.84-1.24l-44.85-32.59-44.85,32.59a6.52,6.52,0,0,1-10-7.29l17.13-52.73L99.64,139.75A6.52,6.52,0,0,1,103.47,128h55.44L176,75.24a6.51,6.51,0,0,1,6.2-4.51h0a6.49,6.49,0,0,1,6.2,4.51L205.57,128H261a6.52,6.52,0,0,1,3.84,11.79L220,172.34l17.13,52.73a6.5,6.5,0,0,1-6.19,8.53ZM114.19,138l38.23,27.78a6.49,6.49,0,0,1,2.36,7.29L140.18,218l38.23-27.78a6.5,6.5,0,0,1,7.66,0L224.3,218,209.7,173a6.5,6.5,0,0,1,2.37-7.29L250.3,138H203a6.51,6.51,0,0,1-6.2-4.5l-14.6-44.94-14.6,44.94a6.51,6.51,0,0,1-6.2,4.5ZM261,138h0ZM178.93,78.33Z" transform="translate(-96.95 -70.73)"/></svg></span>
                            
                            </div>
                        </div>
                        <span class="typeAndLanguageWrapper">
                            <span>type:<label>{{ songInfo.type }}</label></span>
                            <span>language:<label>{{ songInfo.language }}</label></span>
                            
                        </span>
                    </div>
                </div>
            </header>
            <article>
                <label class="Title">
                    <span>lyrics</span>
                </label>
                <div id="lyricsContainer">
                    <span class="lyricsWrapper">{{ songInfo.lyrics }}</span>
                </div>
                <label class="readmoreButton">
                    <span @click="exploreLyrics">
                        <span v-if="!lyricsShow">read more</span>
                        <span v-if="lyricsShow">close</span>
                    </span>                 
                </label>
            </article>
            <footer>
                <label class="Title">
                    <span>Related</span>
                </label>
                <div id="relatedContentWrapper">
                    <div v-for="(song,index) in relatedSongs" :key="index" class="songsWrapper" @click="$router.push({name:'singleSong',params:{songName:song.songName}})">
                        <div :style="{'background-image': 'url(' + require('../singerImgDB/' + song.songImgSrc) + ')'}">
                            <div><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.43 94.88"><g id="圖層_1-2" data-name="圖層 1"><path d="M71.8,41.09,3.75,1.35A7.74,7.74,0,0,0-7,3.55a7.77,7.77,0,0,0-1.28,4.2v79.5A7.7,7.7,0,0,0-.53,95a7.69,7.69,0,0,0,4.28-1.3L71.8,53.79a7.66,7.66,0,0,0,0-12.7Z" transform="translate(8.25 -0.07)"/></g></svg></div>
                        </div>
                        <span>{{ song.songName }}</span>
                    </div>
                </div>
            </footer>
            
        </div>
    </div>
</template>

<script>
import db from '../../firebase/firebaseinit'
import {addsong} from '../addsong'
import {collectSongDirective} from './collectSongDirective'
export default {
    mixins:[addsong,collectSongDirective],
    data(){
        return{
            songInfo:{
                songImgSrc:'AlanWalker.jpg'
            },
            relatedSongs:[],
            lyricsShow:false,
        }
    },
    methods:{
        playnow(){
            this.$emit('playnow',this.songInfo)
        },
        exploreLyrics(){
            var lyricsWrapper = document.querySelector('.lyricsWrapper');
            this.lyricsShow = !this.lyricsShow;
            if(this.lyricsShow){
                lyricsWrapper.style.height = '32.5rem';

                lyricsWrapper.addEventListener('transitionend',function(){
                    lyricsWrapper.style.height = 'auto';
                });
            }else{
                lyricsWrapper.style.height = '15rem';
            }

        }
    },
    mounted(){
       
        db.collection('song').where('songName','==',this.$route.params.songName).get().then(doc => {
            doc.forEach(el => {
                this.songInfo = el.data();
          
            })
            this.relatedSongs = [];
            db.collection('song').where('singer','==',this.songInfo.singer).get().then(doc => {
                doc.forEach(el =>{
                    this.relatedSongs.push(el.data());
                  
                })
            }); 
        });
    

    },
    beforeRouteUpdate(to,from,next){
        db.collection('song').where('songName','==',to.params.songName).get().then(doc => {
            doc.forEach(el => {
                this.songInfo = el.data();

            })
            this.relatedSongs = [];
            db.collection('song').where('singer','==',this.songInfo.singer).get().then(doc => {
                doc.forEach(el =>{
                    this.relatedSongs.push(el.data());
                  
                })
            });            
        });
        document.querySelector('.pages').scrollTop = 0;
        next();
    }
}
</script>

<style scoped>
#mother{
    width: 100%;




}   
#BlurBG{
    height:calc(100vh - 4.2rem);
    width:calc(100vw - 15rem - 7vw);

    background-size: cover;

    filter: blur(24px) brightness(20%);

    transform: scale(1.2);

    z-index: -1;
    right: 0;
    position:fixed;
}
#container{
   
    color: white;
  

    
}
#container a{
    color: white;
    
}

header{
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}
.songImgWrapper{
    height: 8rem;
    width: 8rem;
    margin-right: 1rem;
    background-size: cover;
    background-position: center;


}

.songInfoAndButtonsContainer{

    width:80%;
    padding-bottom: 1em;

}
.songInfo{
    display: flex;
    align-items: center
}

.songInfo h1,.songInfo h2{
    margin: 0;
    padding: 0;
}
.songInfo h1{
    font-weight: 400;
    font-size: 2.25rem;
}
.songInfo h2{
    margin-left: 1rem;
    font-weight: 300;
    font-size: 2.25rem;

    opacity: 0.7;
}
.songInfo h2:hover{

    opacity:1;
}
#buttonAndTypeContainer{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

}
.buttonsContainer{
    display: flex;
    margin-top: 0.75rem;
    
}
.playnowButtonWrapper{

    display: flex;

    align-items: center;
    background: #906DED;
    padding: 0.15rem 1.25rem;

    border-radius: 2px;

    cursor: pointer;
}
.playnowButtonWrapper:hover{
    background: #5047C7;
}
.playnowButtonWrapper label{
    font-size: 1.1rem;
    padding-bottom: 0.25rem;
    cursor: pointer;
}
.playnowButtonWrapper svg{
    width: 0.85rem;
    margin-left: 0.25rem;
    fill: white;

}


.otherButtonsWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 4.5rem;
    margin-left: 2rem;
    

}
.otherButtonsWrapper span{
    cursor: pointer;
}
.otherButtonsWrapper svg:hover {
    fill: #5047C7;
}
.otherButtonsWrapper svg{
    width: 1.65rem;
    fill: white;
    
}
.typeAndLanguageWrapper span{
    font-weight: 300;
    margin-left: 1rem;

    color: rgba(255, 255, 255, 0.75);
}
.typeAndLanguageWrapper label{
    font-weight: 400;
    color: white;

    cursor: pointer;
    
}
.typeAndLanguageWrapper label:hover{
    color:#906DED;
    border-bottom: 0.5px solid #906DED;
}
article{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding:0 7.5%;


}
.Title{
 

    width: 100%;
    
    font-size: 1.75rem;
    font-weight: 500;


    padding-bottom: 0.35rem;

    opacity: 0.8;
}

#lyricsContainer{
    width: 100%;
    display: flex;
    justify-content: center;

    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);

    padding: 2rem 0;
}

.lyricsWrapper{
    width: 70%;
    height: 15rem;

    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;

    
    font-size: 1.45rem;
    font-weight: 400;
    line-height: 2rem;

    transition: 0.75s ease all;
}
.readmoreButton{
    display: block;
    width: 100%;
    text-align: center;


    font-size: 1.25rem;
    font-weight: 300;

    cursor: pointer;

    margin-top: 0.25rem;


}
.readmoreButton:hover{
    color: #906DED;
}
.readmoreButton:hover span{
    border-bottom: 0.5px solid #906DED;
}
footer{
    margin-top: 1rem;
    padding:0 7.5%;

    height: auto;


    display: flex;
    flex-direction: column;
    padding-bottom: 5vh;
}

#relatedContentWrapper{
    width: 100%;

    display: flex;
    flex-wrap: wrap;

}
.songsWrapper{
    margin:1rem 1.5rem;



    text-align: center;
    
    cursor: pointer;
    

}
.songsWrapper > div{
    width: 9rem;
    height: 9rem;
    background-size: cover;
    background-position: center;
  
}
.songsWrapper > div > div{
    background: linear-gradient(rgba(0,0,0,0) 0% , rgba(0,0,0,0.3) 50% , rgba(0,0,0, 0.75) 100%);
    height: 100%;
    width: 100%;


    justify-content: center;
    align-items: center;

    display: none;
}
.songsWrapper > div svg{
    width: 2rem;
    height: 2rem;

    fill: white;
}

.songsWrapper span{
    display: block;
    font-size: 1.15rem;
    font-weight: 400;

    margin-top: 0.5rem;

    width: 9rem;


}
.songsWrapper:hover > div > div{
    display: flex;
   
} 

@media screen and (max-width: 1024px){
    #BlurBG{
 
        width:100% ;
    
        background-size: cover;
        background-position: center;

    }
    #mother{
        padding-bottom: 15vh;
    }
    #buttonAndTypeContainer{
        flex-wrap: wrap;
    }
    .typeAndLanguageWrapper {
        display: none;
    }
    /*
    .typeAndLanguageWrapper span{
     
                
        margin-left: 0rem;
        margin-right: 1rem;
    
    }
    */

    .songInfoAndButtonsContainer{
        width: 70%;
        height: 8rem;
        padding-bottom: 0;


        display: flex;
        flex-direction: column;
        justify-content: space-between;
    

    }

    .songInfo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .songInfo h1{
        font-weight: 400;
        font-size: 1.75rem;

        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .songInfo h2{
        margin-left: 0rem;

        font-size: 1.5rem;

        opacity: 0.85;
    }
    .lyricsWrapper{
        width: 85%;

    }
    .readmoreButton{

        margin-top: 0rem;


    }
    #relatedContentWrapper{
      

    }
    .songsWrapper{

        margin: 1rem 0.5rem;

    }
}
</style>