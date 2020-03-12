<template>
    <div style="    overflow-y: hidden;">
        <header>
            <div id="backgroundBlurFilter" :style="{'background-image':'url('+require('../singerImgDB/'+ singerInfo.singerImgSrc)+')'}"></div>
            <div id="singerInfoWrapper" >
                
                <div id="singerInfoContainer">
                    <div id="singerLeft">
                        <div class="singerImg" :style="{'background-image':'url('+require('../singerImgDB/'+ singerInfo.singerImgSrc)+')'}"></div>
                        <div class="singerInfo">
                            <h1>{{ singerInfo.name }}</h1>
                            <h2>{{ singerInfo.information }}</h2>
                        </div>
                    </div>
               
                </div>              
            </div>
        </header>
        <article>
            <div id="contentContainer">
                <div class="songsList contentWrapper" v-if="showSongsPage">
                    <div class="contenttitle">
                        <label>Songs</label>
                        <span @click="addAllSongs">+ add all</span>
                    </div>
                    <div class="songsContent">
                        <table class="songsTable">
                            <tr class="songsTitle">
                                <th><span></span></th>
                                <th>song</th>
                                <th>singer</th>
                                <th>album</th>
                                <th>buttons</th>
                            </tr>
                            <tr v-for="(song,index) in songs" :key="index">
                                <th>{{ index }}.</th>
                                <th @click="$router.push({name:'singleSong',params:{songName:song.songName}})">{{ song.songName }}</th>
                                <th>{{ song.singer }}</th>
                                <th @click="$router.push({name:'album',params:{albumName:song.album}})">{{ song.album }}</th>
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
                <div class="albumsList contentWrapper" v-if="showAlbumPage">

                    <div class="contenttitle">
                       
                        <label>albums</label>
                    </div>
                    <div class="albumsContent" >
                        <div class="albumWrapper" v-for="(album,index) in albums" :key="index" @click="$router.push({name:'album',params:{albumName:album.albumName}})"> 
                            <span><img :src="require('../albumImgDB/'+ album.albumImgSrc)" alt=""></span>
                            <label>
                                <h1>{{ album.albumName }}</h1>
                                <h2>{{ album.singer }}</h2>
                            </label>

                        </div>
                    </div>

                </div>
                <div class="singerBackgroundInfo contentWrapper" v-if="showInfoPage">
                    <div class="contenttitle">
                        
                        <label>Singer background story</label>
                    </div>
                    <div class="BackgroundInfoContent" style="color:white;font-size:1.5rem;">
                        no source
                    </div>
                </div>
            </div>
            <div id="contentdirecting">
                <div class="directingSongs directingButton" @click="switchPage(0)" :style="{'z-index': directingSongsZIndex }">
                    <span >
                        <svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 84">
                            <ellipse cx="42" cy="58.7" rx="4" ry="3.8"/><ellipse cx="18" cy="51.2" rx="4" ry="3.8"/>
                            <polygon points="46 34.5 26 28.2 26 31.7 46 37.9 46 34.5"/>
                            <path d="M18,9V93H82V25.2L65.9,9ZM68,67.7h0a8,8,0,1,1-8-7.8A7.74,7.74,0,0,1,64,61V51.1L44,44.9V59.8h0v.4a8,8,0,1,1-8-7.8,7.74,7.74,0,0,1,4,1.1V31.8l28,8.8ZM66,14.8,76.2,25H66Z" transform="translate(-18 -9)"/>
                        </svg>
                    </span>
                </div>
                <div class="directingAlbum directingButton" @click="switchPage(1)" :style="{'z-index': directingAlbumZIndex }">
                    <span>
                        <svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20">
                            <path d="M21,1.23V7.78a3,3,0,0,1,0,4.44v6.55A9,9,0,0,0,21,1.23Z"/>
                            <path d="M20,0H0V20H20ZM6,2H7V3H6ZM3,3H2V2H3ZM4,2H5V3H4ZM6.72,15.71a1.94,1.94,0,0,1-2.58-.41c-.4-.73.11-1.74,1.14-2.25A2.47,2.47,0,0,1,7,12.84V5.76l8-1v8a1.89,1.89,0,0,1-1.27,2,2,2,0,0,1-2.59-.41c-.4-.73.11-1.74,1.14-2.25A2.47,2.47,0,0,1,14,11.84V6.89L8,7.64v6.12A1.89,1.89,0,0,1,6.72,15.71Z"/>
                        </svg>
                    </span>
                </div>
                <div class="directinginfo directingButton" @click="switchPage(2)" :style="{'z-index': directingInfoZIndex }">
                    <span>
                        <svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                            <path d="M12.31,95H87.69A7.31,7.31,0,0,0,95,87.69V12.31A7.31,7.31,0,0,0,87.69,5H12.31A7.31,7.31,0,0,0,5,12.31V87.69A7.31,7.31,0,0,0,12.31,95ZM56.72,19a5.39,5.39,0,1,1-5.39,5.39h0A5.39,5.39,0,0,1,56.72,19Zm-11,16.43c5.1-2.46,13-.34,11.62,4.79L49.93,68c-2.61,9.72,4.55,6.53,7.76,5.13A19.92,19.92,0,0,1,49.82,80c-5.1,2.46-13,.34-11.61-4.8l7.44-27.77c2.6-9.71-4.55-6.53-7.76-5.12A19.81,19.81,0,0,1,45.75,35.43Z" transform="translate(-5 -5)"/>
                        </svg>
                    </span>
                </div>
            </div>
        </article>

    </div>
</template>

<script>
import db from '../../firebase/firebaseinit'
import {addsong} from '../addsong'
import {collectSongDirective } from './collectSongDirective'
export default {
    mixins:[addsong,collectSongDirective],
    data(){
        return{
            singerInfo:{
                singerImgSrc:'CashCash.jpg'
            },
            songs:[],
            albums:[],
            showSongsPage:true,
            showAlbumPage:false,
            showInfoPage:false,
            showpage:[true,false,false],

            directingSongsZIndex:15,
            directingAlbumZIndex:10,
            directingInfoZIndex:5,
            zIndexCount:[15,10,5],
            

        }
    },
    methods:{
        addAllSongs(){
            this.songs.forEach(obj =>{
                this.addSongToPlaylist(obj.songName,obj.singer)
            });
        },
   
        switchPage(index){
       


            this.showpage = [false,false,false];
            this.showpage[index] = true;
            
            this.showSongsPage = this.showpage[0];
            this.showAlbumPage = this.showpage[1];
            this.showInfoPage = this.showpage[2];
            
     
            function customizeSort(arr,arrIndex){
                var newArr = [];
 
                for(var i = arrIndex ; i >= 0 ; i--){
                    newArr.push(arr[i]);              
                }        
                if(newArr.length != arr.length){
                    for(var l = arrIndex +1 ; l < arr.length ; l++){          
                        newArr.push(arr[l]);
                    }

                }
                
          
                return newArr;
            }
            this.zIndexCount = [15,10,5];
            this.zIndexCount = customizeSort(this.zIndexCount,index);


           // console.log(this.zIndexCount);

            this.directingSongsZIndex = this.zIndexCount[0];
            this.directingAlbumZIndex = this.zIndexCount[1];
            this.directingInfoZIndex = this.zIndexCount[2];


        }
 
    },
    mounted(){
        db.collection('singer').where('name','==',this.$route.params.singerName).get().then(doc => {
            
            doc.forEach(docObj => {
               // console.log(docObj.data())
                this.singerInfo = docObj.data();
            })
        });    
        db.collection('song').get().then(doc => {
            
            doc.forEach(docObj => {
               // console.log(docObj.data())
               if(docObj.data().singer.includes(this.$route.params.singerName)){
                   this.songs.push(docObj.data());
               }
                
            })
        });
        db.collection('album').where('singer','==',this.$route.params.singerName).get().then(doc => {
            
            doc.forEach(docObj => {
               // console.log(docObj.data())
          
                this.albums.push(docObj.data());
       
                
            })
        });




        var self = this;

        function showWithMobile(){
            if(window.innerWidth < 1024){
                self.showSongsPage = true;
                self.showAlbumPage = true;
                self.showInfoPage = true;
            }else if(self.showSongsPage && self.showAlbumPage && self.showInfoPage){

                self.switchPage(0);               
            }
        }
        showWithMobile();

        window.addEventListener('resize',function(){
            showWithMobile();
        });
    },
    beforeRouteUpdate(to,from,next){

        db.collection('singer').where('name','==',to.params.singerName).get().then(doc => {
            
            doc.forEach(docObj => {
               // console.log(docObj.data())
                this.singerInfo = docObj.data();
            })
        });  

        this.songs = [];  
        db.collection('song').get().then(doc => {
            
            doc.forEach(docObj => {
               // console.log(docObj.data())
               if(docObj.data().singer.includes(to.params.singerName)){
                   this.songs.push(docObj.data());
               }
                
            })
        });

        this.albums = [];
        db.collection('album').where('singer','==',to.params.singerName).get().then(doc => {
            
            doc.forEach(docObj => {
               // console.log(docObj.data())
          
                this.albums.push(docObj.data());
       
                
            })
        }); 
        next();      
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
 
}

header{
    height: 7.25rem; 
}
#singerInfoWrapper{
    height: 100%;
    
}
#backgroundBlurFilter{

    overflow: hidden;
    transform: scale(1.45);
     
    width:calc(100% - 15rem - 7vw);
    
    height: 7.25rem;

    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  

    filter: blur(12px) brightness(40%) ;

    position: fixed;/* dw absolute like the fixed, because cover it will fix the problem*/
    z-index: -1;
    right: 0;
    
}
#singerInfoContainer *{
    overflow: hidden;
}
#singerInfoContainer{
    padding: 0.75rem 0.5rem;
    margin: 0 auto;
    max-width: 55rem;

  
    color: white;

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}
#singerLeft{

    display: flex;   
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;

    width:auto;
  

   
}
#singerLeft .singerImg{

    width: 5.35rem;
    height: 5.35rem;

    background-size: cover;
    background-position: center;

    border-radius: 9999px;

    
}
#singerLeft .singerInfo{


    margin-left: 1.5rem;
    width: 40vw;
    max-width: 30rem;
    padding-bottom: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

}
#singerLeft .singerInfo h1,#singerLeft .singerInfo h2{
    margin: 0;
    padding: 0;

}
#singerLeft .singerInfo h1{
    font-size: 2rem;
    font-weight: 400;
}
#singerLeft .singerInfo h2{
    font-size: 1.15rem;
    font-weight: 300;
    opacity: 0.9;
}

/* part of content*/
article{
    width: 100%;

      
    background: #CECECE;

    display: flex;
}
#contentContainer{
    width: calc(100% - 3.5rem);
    height: 100%;


    position: relative;
    z-index: 100;

    
}
.contenttitle{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    padding: 0.35rem 0.25rem;

    border-bottom: 2px white solid;
}
.contenttitle label{
    color: white;
    font-weight: 400;
    font-size: 2rem;
}

/**/
.contentWrapper{
    width: 100%;
    height: auto;
    min-height: calc(100vh - 4rem - 7.25rem);

    padding: 0 0.3rem;
    padding-bottom: 2.5rem;
    
}
.songsList{

    background: #121212;
    box-shadow: 0.75rem 3px 1.25rem rgba(18,18,18,0.3);
    
}
.songsList::-webkit-scrollbar,.albumsList::-webkit-scrollbar,.singerBackgroundInfo::-webkit-scrollbar{
    display: none;


}

.songsList .contenttitle span{
    cursor: pointer;
    display: block;
    padding: 0.15rem 1.25rem;
    margin-bottom: 0.1rem;

    background: #5047C7;

    color: white;
    font-size: 1.15rem;
    font-weight: 400;

    border-radius: 2px;
}
.songsList .contenttitle span:hover{
    background: white;
    color: #5047C7;
}



.songsTable{
    display:table;
    width: 100%;

    text-align: left;
    color: white;

    font-size: 1.25rem;
    
    table-layout: fixed;


    
}
.songsContent table tr{

  
}
.songsContent table tr th{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 700;
    min-width: 0;

    padding-bottom: 0.2rem;
      
    
}
.songsContent table tr:not(:first-of-type) th{
    font-weight: 400;
    opacity: 0.9;


}
.songsTitle th span{

    background: url('../../loginPage/img/triangle.svg') no-repeat center;
    min-width: 1rem;
    min-height:1rem;

    display: block;

}

.songsContent table tr th:nth-child(1){

    text-align: center;
    width: 2rem;

}
.songsContent table tr th:nth-child(2){
    width:42.5%;
    cursor: pointer;

}.songsContent table tr th:nth-child(3){
    width:35%;

}
.songsContent table tr th:nth-child(4){
    width:22.5%;

    cursor: pointer;
}
.songsContent table tr th:nth-child(5){
    width: 6rem;




}
.songsContent .buttonsWrapper{
   
    
}
.songsContent .songsButton{
   
    display: block;
    width: 1.25rem;
    margin-right: 0.65rem;
    padding-top: 0.5rem;
    float: left;

    cursor: pointer;

    white-space: nowrap;
} 
.songsContent .songsButton svg{
    fill: white;
}
.songsContent .songsButton svg:hover{
    fill: #906DED;
}
#mobileSongsContent{
    display: none;
}

.albumsList {
    background: #434343;
    box-shadow: 0.75rem 3px 1.25rem rgba(67,67,67,0.3);

    position: relative;
    z-index: -2;
}
.albumsContent{
    display: flex;
    flex-wrap: wrap;
    padding: 0.25rem;
}
.albumWrapper{
    width:9rem;
    height: 13rem;
    margin:0.5rem calc(1.5rem + 0.5vw) 0 0;

    cursor: pointer;

}
.albumWrapper:hover span{
    position:absolute;
    z-index: -1;
 
}
.albumWrapper:hover label{
    display: flex;
    align-items: center;
    justify-content: center;


    width: 9rem;
    height: 9rem;


    background: rgba(0,0,0,0.6);
    cursor: pointer;
}
.albumWrapper label{
    
}
.albumWrapper h1,.albumWrapper h2{
   
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
}
.albumWrapper h1{
    font-size: 1.25rem;
    font-weight: 400;

    margin-top: 0.25rem;
   
}
.albumWrapper h2{
    font-size: 0.85rem;
    font-weight: 300;  
    opacity: 0.8;  

    display: none;
  
}
.albumWrapper img{
    width: 9rem;
    height: 9rem;
}


.singerBackgroundInfo{
    background: rgb(143, 143, 143);
    box-shadow: 0.75rem 3px 1.25rem rgba(143,143,143,0.25);    
}
/**/



#contentdirecting{
    width: 3.5rem;
    height: 100%;
 
}
.directingButton {
    
    height: 9.5rem;
    width: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    clip-path: polygon(0 0, 100% 15%, 100% 75%, 0% 100%);

    position:relative;

    cursor: pointer;

}

.directingButton span svg{
    fill: white;
    width: 2.5rem;
    height:2.5rem;
}

.directingSongs{
    background: rgb(18,18,18);
   

}

.directingAlbum{
    background: #434343;
    top:-2rem;

}

.directinginfo{
    top:-4rem;

    background: rgb(143, 143, 143);

}
/*
.directingSongs:hover{
    z-index: 1000;
}
.directingAlbum:hover{
    z-index: 1000;
}
.directinginfo:hover{
    
    z-index: 1000;
    box-shadow: 5px 0 20px black;
}
*/
@media screen and (max-width: 1024px){
/*
    .songsContent table tr th:nth-child(2){
        width:45%;
        cursor: pointer;

    }.songsContent table tr th:nth-child(3){
        width:42.5%;

    }


    .songsContent table tr th:nth-child(4){
        display: none;
    }
    */
}
@media screen and (max-width: 1024px){
    header{
        height: 6rem; 
    }
    #backgroundBlurFilter{
        transform: scale(1);
        height: 6rem;
        width:100%;


        filter: blur(0px) brightness(30%) ;
        
    }
    #singerInfoContainer{
   
        padding: 0;
    }
    #singerLeft .singerInfo{


        margin-left: 1rem;

    

        height: 6rem;
        width: 70%;

    
    }
    #singerLeft .singerImg{

        width: 4.5rem;
        height: 4.5rem;

    }
    #singerLeft .singerInfo h1{
        font-size: 1.75rem;
        line-height: 2rem;

    }
    #singerLeft .singerInfo h2{
        margin-top: 0.25rem;
        font-size: 1.2rem;
        line-height: 1.25rem;

    }

    #contentContainer{
        width:100%;
        box-shadow: 9rem -5px 3rem rgba(0,0,0,0.6);
        min-height: calc(100vh - 4rem - 6rem);
        padding-bottom: 10vh;
   

        background: black;
    }    
    article{   
    
        display: flex;
  
        flex-direction: column-reverse;
        justify-content: flex-end;

    }


    .contentWrapper{
        background: none;
        height: auto;
        min-height: auto;
        
    }
    .contenttitle{

        padding: 0.25rem 0.25rem 0.45rem 0.25rem;
        border-bottom: 2px rgba(255, 255, 255, 0.8) solid;
    } 
    .contenttitle label{
        font-size: 1.75rem;
        opacity: 0.8;
        font-weight: 300;
    }
    .songsList .contenttitle span{

        padding: 0.1rem 1rem;
   

        font-size: 1.15rem;


        border-radius: 2px;
    }
    .songsTable{
        display: none;
    }
    .songsContent table tr th:nth-child(5){
      
    }
    .songsContent .songsButton{
        width: 1.5rem;
        

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
    .albumsContent{
        justify-content: flex-start;
        
    }
    .albumWrapper{
    
        margin:1.25rem 0rem;
        width: 8rem;
        height: 11rem;
        margin-right: 1.25rem;
    }

    .albumWrapper:hover label{

        width: 8rem;
        height: 8rem;


    }
    .albumWrapper img{
        width: 8rem;
        height: 8rem;
    }
    #contentdirecting{
              

        display: none;
 
        /*it doesnt need directing because just put it down */
    }

}
@media screen and (max-width: 500px){

}
</style>