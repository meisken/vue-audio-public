<template>
    <div id="mother">
        <div id="albumInfoPartOne">
            <span class="albumImg"><img :src="require( '../albumImgDB/' + albumInfo.albumImgSrc )" alt=""></span>
            <div class="mobileAlbumInfoWrapper">
                <div id="mobileAlbumName">
                    <h1>{{ albumInfo.albumName}}</h1>
                    <router-link :to="{name:'singer',params:{singerName:albumInfo.singer}}"><h2>{{ albumInfo.singer}}</h2></router-link>
                </div>
                <div id="copyrightAndAddAll">
                    <div @click="addallsongs">add all +</div>
                    <span> &copy; no copyright and release date source</span>
                </div>
                <div id="mobileTypeAndLanguage" class="typeWrapper">
                    <span>type:    <router-link :to="{name:'classify',params:{className:albumInfo.type}}">{{ albumInfo.type }}</router-link></span>
                    <span>language: <router-link :to="{name:'classify',params:{className:albumInfo.language}}">{{ albumInfo.language}}</router-link></span>
                </div>
            </div>
        </div>
        <div id="albumSongs">
            <div id="albumInfoPartTwo">
                <h1>{{ albumInfo.albumName}}</h1>
                <div class="singerAndTypeWrapper">
                    <router-link :to="{name:'singer',params:{singerName:albumInfo.singer}}"><h2>{{ albumInfo.singer}}</h2></router-link>
                    <div class="typeWrapper">
                        
                        <span>type:    <router-link :to="{name:'classify',params:{className:albumInfo.type}}">{{ albumInfo.type }}</router-link></span>
                        <span>language: <router-link :to="{name:'classify',params:{className:albumInfo.language}}">{{ albumInfo.language}}</router-link></span>
                    </div>
                </div>
            </div>
            <div id="tableWrapper">
                <table class="songsTable">
                    <tr class="songsTitle">
                        <th><span></span></th>
                        <th>song</th>
                        <th>singer</th>
                        <th>buttons</th>
                    </tr>
                    <tr v-for="(song,index) in songs" :key="index">
                        <th>{{ index }}.</th>
                        <th @click="$router.push({name:'singleSong',params:{songName:song.songName}})">{{ song.songName }}</th>
                        <th @click="$router.push({name:'singer',params:{singerName:song.singer}})">{{ song.singer }}</th>
                        <th class="buttonsWrapper">
                            <span class="songsButton" @click="addSongToPlaylist(song.songName,song.singer)"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g  data-name="圖層 1"><rect y="25" width="60" height="10"/></g><g id="圖層_1-3" data-name="圖層 1"><rect x="25" width="10" height="60"/></g></svg></span>
                            <span class="songsButton" @click="collectSong(song.songName,song.singer)"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.58 162.87"><path d="M230.93,233.6a6.53,6.53,0,0,1-3.84-1.24l-44.85-32.59-44.85,32.59a6.52,6.52,0,0,1-10-7.29l17.13-52.73L99.64,139.75A6.52,6.52,0,0,1,103.47,128h55.44L176,75.24a6.51,6.51,0,0,1,6.2-4.51h0a6.49,6.49,0,0,1,6.2,4.51L205.57,128H261a6.52,6.52,0,0,1,3.84,11.79L220,172.34l17.13,52.73a6.5,6.5,0,0,1-6.19,8.53ZM114.19,138l38.23,27.78a6.49,6.49,0,0,1,2.36,7.29L140.18,218l38.23-27.78a6.5,6.5,0,0,1,7.66,0L224.3,218,209.7,173a6.5,6.5,0,0,1,2.37-7.29L250.3,138H203a6.51,6.51,0,0,1-6.2-4.5l-14.6-44.94-14.6,44.94a6.51,6.51,0,0,1-6.2,4.5ZM261,138h0ZM178.93,78.33Z" transform="translate(-96.95 -70.73)"/></svg></span>
                            <span class="songsButton" @click="$router.push({name:'singleSong',params:{songName:song.songName}})"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.6 60"><path d="M67,62a.94.94,0,0,1-1,1H38a1,1,0,0,1,0-2H66A.94.94,0,0,1,67,62Zm-1-9H38a1,1,0,0,0,0,2H66a1,1,0,0,0,0-2Zm1-7a.94.94,0,0,0-1-1H48v2H66A.94.94,0,0,0,67,46Zm0-8a.94.94,0,0,0-1-1H48v2H66A.94.94,0,0,0,67,38Zm8-15H48v4H73V73H31V50H27V75a2,2,0,0,0,2,2H75a2,2,0,0,0,2-2V25A2,2,0,0,0,75,23ZM28,28.5l13.6-3.4v8.5a5.86,5.86,0,0,0-3.3-1c-2.9,0-5.3,2-5.3,4.5s2.4,4.5,5.3,4.5,5.3-2,5.3-4.5V18c0-.67-.49-1-1.2-1L26.8,20.9a1.08,1.08,0,0,0-.8,1V37.4a5.86,5.86,0,0,0-3.3-1c-2.9,0-5.3,2-5.3,4.5s2.4,4.5,5.3,4.5,5.3-2,5.3-4.5Z" transform="translate(-17.4 -17)"/></svg></span>
                        </th>                               
                    </tr>
                </table>
            </div>
                <div id="mobileSongsContent">
                    <div v-for="(song,index) in songs" :key="index" class="mobileSongWrapper">
                        <span class="mobileSongLeft">
                            <div class="mobileSongImg"><img :src="require('../singerImgDB/' + song.songImgSrc)" alt=""></div>
                            <div class="mobileSongInfo">
                                <h1>{{ song.songName }}</h1>
                                <h2>{{ song.singer }}</h2>
                            </div>
                        </span>
                        <span class="mobileSongRight">
                            <div class="goButton" @click="$router.push({name:'singleSong',params:{songName:song.songName}})">
                                <svg height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px">
                                    <path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path>
                                </svg>
                            </div>
                            <div class="addButton" @click="addSongToPlaylist(song.songName,song.singer)">
                                <svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                    <g id="圖層_1-2" data-name="圖層 1"><rect y="25" width="60" height="10"/></g>
                                    <g id="圖層_1-3" data-name="圖層 1"><rect x="25" width="10" height="60"/></g>
                                </svg>
                            </div>
                        </span>
                     </div>
                </div>
        </div>
    </div>
</template>

<script>
import {addsong} from '../addsong'
import {collectSongDirective } from './collectSongDirective'
import db from '../../firebase/firebaseinit'
export default {
    mixins:[addsong,collectSongDirective],
    data(){
        return{
            songs:[],
            albumInfo:{
                albumImgSrc:'DifferentWorld.jpg'
            },
        }
    },
    methods:{
        addallsongs(){
            this.songs.forEach(obj =>{
                this.addSongToPlaylist(obj.songName,obj.singer)
            });
        },

    },
    mounted(){
        db.collection('song').where('album','==',this.$route.params.albumName).get().then(doc => {
            doc.forEach(el => {
                this.songs.push(el.data());

            });
        });
        db.collection('album').where('albumName','==',this.$route.params.albumName).get().then(doc => {
            doc.forEach(el => {
                this.albumInfo = el.data();
 
            });
        });        
    },
    beforeRouteUpdate(to,from,next){
        this.songs = [];
        db.collection('song').where('album','==',to.params.albumName).get().then(doc => {
            doc.forEach(el => {
                this.songs.push(el.data());

            });
        });
        db.collection('album').where('albumName','==',to.params.albumName).get().then(doc => {
            doc.forEach(el => {
                this.albumInfo = el.data();
 
            });
        });       
        next();
    }
}
</script>

<style scoped>
#mother{
 
    min-height:100%;
  

    padding: 1.25rem;
    display: flex;
    justify-content: space-between;

    color: white;
    background: black;
}
#albumInfoPartOne{
    width: 11rem;

    display: flex;
    flex-direction: column;
    align-items: center;   
    

}
.albumImg img{
    width: 10rem;
    height: 10rem;
}
#copyrightAndAddAll{
    width: 10rem;
    
    

    display: flex;
    flex-direction: column;
    align-items: center;

}
#copyrightAndAddAll div{
    background: #F5AE61;
    text-align: center;
    font-size: 1.1rem;

    margin: 1.5rem 0;
 
    padding: 0.2rem 2rem;

    border-radius: 2px;

    white-space:nowrap;

    cursor: pointer;
}
#copyrightAndAddAll div:hover{
    background: white;
    color:#F5AE61;
}
#copyrightAndAddAll span{
    display: block;

    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding-top: 0.75rem;

    opacity: 0.7;

    font-weight: 300;
    
}
#albumSongs{
    width: calc(100% - 12rem);
    margin-left: 1rem;
}
#albumInfoPartTwo{
    display: block;
}
#albumInfoPartTwo h1, #albumInfoPartTwo h2{
    margin: 0;
    padding: 0;
}
#albumInfoPartTwo a{
    color: white;
}

#albumInfoPartTwo h1{
    font-weight: 300;
    font-size: 2.5rem;
}
#albumInfoPartTwo h2{
    font-weight: 400;
    font-size: 1.5rem;
    opacity: 0.7;
   
    
}

#albumInfoPartTwo h2:hover{
    opacity:1;
}

.typeWrapper{
    width: calc(15rem + 2vw);
    display: flex;
    justify-content: space-between;
    
}
.typeWrapper span{
    font-size: 1.15rem;
    font-weight: 300;
}
.typeWrapper span a{
    font-weight: 400;
   
}
.typeWrapper span a:hover{
    border-bottom: 0.5px solid white;
}
.singerAndTypeWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
}


#tableWrapper{
    border-top: 1px solid white;
}
.songsTable{
    display:table;
    width: 100%;

    text-align: left;
    color: white;

    font-size: 1.25rem;
    
    table-layout: fixed;


    
}

.songsTable tr th{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 700;
    min-width: 0;

    padding-bottom: 0.2rem;
      
    
}
.songsTable tr:not(:first-of-type) th{
    font-weight: 400;
    opacity: 0.9;


}
.songsTitle th span{

    background: url('../../loginPage/img/triangle.svg') no-repeat center;
    min-width: 1rem;
    min-height:1rem;

    display: block;

}

.songsTable tr th:nth-child(1){

    text-align: center;
    width: 2rem;

}
.songsTable tr th:nth-child(2){
    width: calc(50% - 4rem);
    cursor: pointer;

}
.songsTable tr th:nth-child(3){
    width: calc(40% - 4rem);
    cursor: pointer;
}
.songsTable tr th:nth-child(4){
    width: 6.5rem;



}
.buttonsWrapper{
   
    
}
.songsButton{
   
    display: block;
    width: 1.25rem;
    margin-right: 0.7rem;
    padding-top: 0.5rem;
    float: left;

    cursor: pointer;
} 
.songsButton svg{
    fill: white;
}

.songsButton svg:hover{
    fill: #906DED;
}

#mobileAlbumName{
    display: none;
}
#mobileTypeAndLanguage{
    display: none;
}
#mobileSongsContent{
    display: none;

        
}
@media screen and (max-width: 1024px) {
#mother{


    padding: 1.25rem 0.5rem;

}    
#albumInfoPartOne{
    width: 10rem;


} 
#albumSongs{

    margin-left: 0.25rem;
}    
.singerAndTypeWrapper{

    width: 100%;
  

}

#albumSongs{
    width: calc(100% - 10rem);
    margin-left: 0rem;
}
}
@media screen and (max-width: 1024px){
    #mother{


        justify-content: flex-start;
        flex-direction: column;


        padding:0rem 0 15vh 0;
    }  
    #albumInfoPartOne{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 100%;
    
        padding: 0 1vw;
        margin-bottom: 1.25rem;
    }  
    .albumImg{
        width: 37.75%;
    
        
        display: flex;
        justify-content: center;
    }
    .albumImg img{
        width: 10rem;
        height: 10rem;
    }
    .mobileAlbumInfoWrapper{
        width: 60%;

    }
    #mobileAlbumName{
        display: block;
        height: 4.25rem;
    }
    #mobileAlbumName h1,#mobileAlbumName h2{
        margin: 0;
        padding: 0;
    }
    #mobileAlbumName h1{
        font-size: 2.25rem;
        font-weight: 400;

    
    }
    #mobileAlbumName a{
        color: white;
    }
    #mobileAlbumName h2{
        font-size: 1.5rem;
        font-weight: 300;
        opacity: 0.85;

        line-height: 1.5rem;
    }
    #copyrightAndAddAll{
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;  
        justify-content: space-between;  

        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);

        margin: 0.75rem 0 0.25rem 0;
        padding: 0.15rem 0;
    }
    #copyrightAndAddAll div{

        max-width: 50%;
        padding: 0.25rem 1.5rem 0.1rem 1.5rem;
        margin: 1rem 0;
    }
    #copyrightAndAddAll span{
        
        border: 0;
    
        width: 50%;

        padding-top: 0rem;
        padding-right: 0%;

        font-size: 1.1rem;

        line-height: 1.35rem;
    }
    #mobileTypeAndLanguage{
        display: flex;
    }
    #tableWrapper{
        border-top: 1px solid white;
        width: 97.5%;
        margin: 0 auto;
    }
    .typeWrapper{
        width: 100%;   
        justify-content: flex-start;
    } 
    .typeWrapper span{
        font-size: 1.05rem;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.8);
        margin-right: 1rem;
        
    }
    .typeWrapper a{
        color: white;
    }




    #albumInfoPartTwo{
        display: none;
    }  

    #albumSongs{
        width: 100%;

    }


    .songsTable{
        display: none;
    }
    #mobileSongsContent{
        display: block;
        color: white;
        
    }
    #mobileSongsContent .mobileSongWrapper{
        display: flex;
        justify-content: space-between;
        width: 95%;

        margin: 0 auto ;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    }
    
    #mobileSongsContent .mobileSongLeft{

        display: flex;
        align-items: center;
        
       
 
        cursor: pointer;
 
    }
    .mobileSongInfo{
        margin-left: 0.75rem;

    }
    #mobileSongsContent .mobileSongLeft h1, #mobileSongsContent .mobileSongLeft h2{
        
        margin: 0;
        padding: 0;

    }
    #mobileSongsContent .mobileSongLeft h1{
        font-weight: 400;
        font-size: 1.5rem;
    }
    #mobileSongsContent .mobileSongLeft h2{
        font-weight: 300;
        font-size: 1.15rem;
        opacity: 0.8;
    }

    #mobileSongsContent .mobileSongImg {
        height: 5rem;
     
    }
    #mobileSongsContent .mobileSongImg img{
       
        width: 5rem;
        height: 5rem;
    }



    #mobileSongsContent .mobileSongRight{
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 0.5rem;
        min-width:5.5rem ;
    
    }
    #mobileSongsContent .mobileSongRight svg{
        fill: white;
        width: 1.55rem;
        height: 1.55rem;

        cursor: pointer;
        opacity: 0.9;
    }
}
</style>