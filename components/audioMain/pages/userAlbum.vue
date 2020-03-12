<template>
    <div id="mother">
        <div id="userInfo">
            <div class="userIcon"><img :src="userIconSrc" alt=""></div>
            <div class="usernameWrapper">
                <div class="userName">{{ $route.params.userName }}</div>
                <div class="editButton" @click="showEditProfileArea">edit profile</div>
            </div>

        </div>
        <div id="myAlbumContainer">
            <div class="title"><label>my albums</label></div>
            <div class="albumsWrapper">
                <div class="albums" v-for="(albumInfo,index) in albumList" :key="index">
                    <div class="albumPartOfInfo">
                        <div class="albumImgAndNameContainer" @click="showAlbumSongList(index)">
                            <div class="albumImgAndNameWrapper">
                                <span :style="{'background-image':'url('+ require('../albumImgDB/' + albumInfo.albumImgSrc ) +')'}" class="albumImg"></span>
                                <div>
                                    <div class="albumNameWrapper">
                                        <span>{{ albumInfo.albumName }}</span>
                                        <div>included {{ songList[index].length }} songs on this album</div>
                                    </div>
                            
                                </div>
                            </div>
                            <span :class="[{'exploreBtn': albumInfo.DoTableShow} ]" style="transition: 0.75s;"><svg height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg></span>

                        </div>
                        <div class="albumButtons">
                            <span @click="addAllSong(index)"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g id="圖層_1-2" data-name="圖層 1"><rect y="25" width="60" height="10"/></g><g id="圖層_1-3" data-name="圖層 1"><rect x="25" width="10" height="60"/></g></svg></span>
                            <span @click="deleteAlbum(index)"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 62"><path d="M17.66,47.12A2.15,2.15,0,0,0,19.81,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,17.66,47.12Z" transform="translate(0)"/><path d="M28,47.12A2.15,2.15,0,0,0,30.15,45V27.73a2.15,2.15,0,1,0-4.3,0V45A2.15,2.15,0,0,0,28,47.12Z" transform="translate(0)"/><path d="M38.34,47.12A2.15,2.15,0,0,0,40.49,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,38.34,47.12Z" transform="translate(0)"/><path d="M53.85,10.41H40.09L38.32,4.48a6.33,6.33,0,0,0-6-4.48H23.69a6.33,6.33,0,0,0-6,4.48l-1.77,5.93H2.15a2.15,2.15,0,0,0,0,4.3H4.71V56.1A5.94,5.94,0,0,0,10.64,62H45.43a6,6,0,0,0,5.93-5.93V14.64h2.49A2.15,2.15,0,0,0,56,12.49a2.09,2.09,0,0,0-2.1-2.08Zm-32-4.7A2,2,0,0,1,23.69,4.3h8.69a1.93,1.93,0,0,1,1.87,1.42l1.38,4.69H20.36ZM47.06,56.54h-.15a1.67,1.67,0,0,1-1.54,1.12H10.64A1.67,1.67,0,0,1,9,56V14.64H47.06Z" transform="translate(0)"/></svg></span>
                        </div>
                    </div>
                    <div class="albumPartOfSongList songsContent">
                        <transition name="showTableTransition">
                        <table class="songsTable" v-if="albumInfo.DoTableShow">
            
                                <tr class="songsTitle">
                                    <th><span></span></th>
                                    <th>song</th>
                                    <th>singer</th>
                                    <th>album</th>
                                    <th>buttons</th>
                                </tr>
                       
                
                                <tr v-for="(song,songIndex) in songList[index]" :key="songIndex" >
                                    <th>{{ songIndex }}.</th>
                                    <th @click="$router.push({name:'singleSong',params:{songName:song.songName}})">{{ song.songName}}</th>
                                    <th @click="$router.push({name:'singer',params:{singerName:song.singer}})">{{ song.singer }}</th>
                                    <th @click="$router.push({name:'album',params:{albumName:song.album}})">{{ song.album}}</th>
                                    <th class="songsButtonWrapper">
                                        <span class="songsButton" @click="addSongToPlaylist(song.songName,song.singer)"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g  data-name="圖層 1"><rect y="25" width="60" height="10"/></g><g id="圖層_1-3" data-name="圖層 1"><rect x="25" width="10" height="60"/></g></svg></span>
                                        <span class="songsButton" @click="$router.push({name:'singleSong',params:{songName:song.songName}})"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.6 60"><path d="M67,62a.94.94,0,0,1-1,1H38a1,1,0,0,1,0-2H66A.94.94,0,0,1,67,62Zm-1-9H38a1,1,0,0,0,0,2H66a1,1,0,0,0,0-2Zm1-7a.94.94,0,0,0-1-1H48v2H66A.94.94,0,0,0,67,46Zm0-8a.94.94,0,0,0-1-1H48v2H66A.94.94,0,0,0,67,38Zm8-15H48v4H73V73H31V50H27V75a2,2,0,0,0,2,2H75a2,2,0,0,0,2-2V25A2,2,0,0,0,75,23ZM28,28.5l13.6-3.4v8.5a5.86,5.86,0,0,0-3.3-1c-2.9,0-5.3,2-5.3,4.5s2.4,4.5,5.3,4.5,5.3-2,5.3-4.5V18c0-.67-.49-1-1.2-1L26.8,20.9a1.08,1.08,0,0,0-.8,1V37.4a5.86,5.86,0,0,0-3.3-1c-2.9,0-5.3,2-5.3,4.5s2.4,4.5,5.3,4.5,5.3-2,5.3-4.5Z" transform="translate(-17.4 -17)"/></svg></span>
                                        <span class="songsButton" @click="deleteSongInAblum(index,songIndex)"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 62"><path d="M17.66,47.12A2.15,2.15,0,0,0,19.81,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,17.66,47.12Z" transform="translate(0)"/><path d="M28,47.12A2.15,2.15,0,0,0,30.15,45V27.73a2.15,2.15,0,1,0-4.3,0V45A2.15,2.15,0,0,0,28,47.12Z" transform="translate(0)"/><path d="M38.34,47.12A2.15,2.15,0,0,0,40.49,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,38.34,47.12Z" transform="translate(0)"/><path d="M53.85,10.41H40.09L38.32,4.48a6.33,6.33,0,0,0-6-4.48H23.69a6.33,6.33,0,0,0-6,4.48l-1.77,5.93H2.15a2.15,2.15,0,0,0,0,4.3H4.71V56.1A5.94,5.94,0,0,0,10.64,62H45.43a6,6,0,0,0,5.93-5.93V14.64h2.49A2.15,2.15,0,0,0,56,12.49a2.09,2.09,0,0,0-2.1-2.08Zm-32-4.7A2,2,0,0,1,23.69,4.3h8.69a1.93,1.93,0,0,1,1.87,1.42l1.38,4.69H20.36ZM47.06,56.54h-.15a1.67,1.67,0,0,1-1.54,1.12H10.64A1.67,1.67,0,0,1,9,56V14.64H47.06Z" transform="translate(0)"/></svg></span>

                                    </th>
                                </tr>
                  
                        </table>
                        </transition>
                        <transition>
                            <div class="mobileTableWrapper" v-if="albumInfo.DoTableShow">
                                <div v-for="(song,songIndex) in songList[index]" :key="songIndex" class="mobileTable">
                                  
                                    <div class="mobileSongInfoContainer">
                                        <span class="mobileSongIndex">{{ songIndex }}.</span>
                                        <div class="mobileSongNameWrapper">
                                            <h1>{{ song.songName }}</h1>
                                            <h2>{{ song.singer }}</h2>
                                        </div>
                                    </div>
                                    <div class="mobileSongButtonsWrapper">
                                        <span class="mobileSongsButton" @click="addSongToPlaylist(song.songName,song.singer)"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g  data-name="圖層 1"><rect y="25" width="60" height="10"/></g><g id="圖層_1-3" data-name="圖層 1"><rect x="25" width="10" height="60"/></g></svg></span>
                                        <span class="mobileSongsButton" @click="deleteSongInAblum(index,songIndex)"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 62"><path d="M17.66,47.12A2.15,2.15,0,0,0,19.81,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,17.66,47.12Z" transform="translate(0)"/><path d="M28,47.12A2.15,2.15,0,0,0,30.15,45V27.73a2.15,2.15,0,1,0-4.3,0V45A2.15,2.15,0,0,0,28,47.12Z" transform="translate(0)"/><path d="M38.34,47.12A2.15,2.15,0,0,0,40.49,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,38.34,47.12Z" transform="translate(0)"/><path d="M53.85,10.41H40.09L38.32,4.48a6.33,6.33,0,0,0-6-4.48H23.69a6.33,6.33,0,0,0-6,4.48l-1.77,5.93H2.15a2.15,2.15,0,0,0,0,4.3H4.71V56.1A5.94,5.94,0,0,0,10.64,62H45.43a6,6,0,0,0,5.93-5.93V14.64h2.49A2.15,2.15,0,0,0,56,12.49a2.09,2.09,0,0,0-2.1-2.08Zm-32-4.7A2,2,0,0,1,23.69,4.3h8.69a1.93,1.93,0,0,1,1.87,1.42l1.38,4.69H20.36ZM47.06,56.54h-.15a1.67,1.67,0,0,1-1.54,1.12H10.64A1.67,1.67,0,0,1,9,56V14.64H47.06Z" transform="translate(0)"/></svg></span>

                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
                <div style="padding-bottom:15vh;">
                    
                    <span class="addNewAlbum" @click="$emit('addNewAlbum')">+add new album</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../../firebase/firebaseinit'
import {addsong} from '../addsong'
import {bus} from '../../../main'
export default {
    mixins:[addsong],
    data(){
        return{
            userIconSrc:'../albumImgDB/2084.jpg',
            albumList:[],
            songList:[],
            
        }
    },
    methods:{
        getData(){
            this.albumList = [];
            this.songList = [];


            
            db.collection('userAlbum').where('username','==',this.$route.params.userName).get().then(doc =>{
                this.albumList = [];
                
                doc.forEach(el => {
                    this.albumList.push(el.data());
              
                })
                
                this.albumList.forEach((el,index )=>{
                    
                    this.songList.push([]);

                    el.songs.forEach((songEl,songIndex) => {
                    
                        db.collection('song').get().then(docobj => {

                            docobj.forEach(docObjRef => {
                                if(docObjRef.ref.id == this.albumList[index].songs[songIndex]){
                                    this.songList[index].push(docObjRef.data());
                                }
                            })
                        })

                    });
            
                })
        
            })
        },
        showAlbumSongList(index){
            this.albumList[index].DoTableShow = !this.albumList[index].DoTableShow;
        },
        addAllSong(index){
            this.songList[index].forEach(song => {
                this.addSongToPlaylist(song.songName,song.singer);
            })
        },
        deleteSongInAblum(albumIndex,songIndex){
      
          
            db.collection('userAlbum').where('albumName','==',this.albumList[albumIndex].albumName).get().then(doc =>{
       
                
                doc.forEach(docEl =>{
                    this.songList[albumIndex].splice(songIndex,1);
                    this.albumList[albumIndex].songs.splice(songIndex,1);

                              
                    docEl.ref.update({
                        songs:this.albumList[albumIndex].songs,
                    }) 
            
                })
            })
        

        },
        deleteAlbum(albumIndex){

       
            db.collection('userAlbum').where('albumName','==',this.albumList[albumIndex].albumName).get().then(doc =>{
                this.albumList.splice(albumIndex,1);
                this.songList.splice(albumIndex,1);                
                doc.forEach(docEl =>{
     
                   
                    docEl.ref.delete();
            
                })
            })     
          
        },
        showEditProfileArea(){
            this.$emit('editProfileShowDirective','');
        }
    },
    created(){
        db.collection('userInfo').where('name','==',this.$route.params.userName).get().then(doc => {
            
            doc.forEach(el =>{
                this.userIconSrc = el.data().iconSrc;
            })
        });
        this.getData();

    },
    mounted(){
        bus.$on('addedNewSong', () =>{
       
            if(this.$router.currentRoute.name == 'userAlbum'){
                this.getData();
            }           
      
        })

    }
}
</script>

<style scoped>
#mother{
    width: 100%;
    min-height: 100%;
    padding: 1rem;

    background: black;
    color: white;


    display: flex;

 
}
#userInfo{
    text-align: center;
    margin-right: 1rem;
}

.userIcon img {
    width: 8rem;
    height: 8rem;
    border-radius: 9999px;
}
.userName{
    margin: 0.25rem 0 0 0;

     
    font-size: 2rem;



}
.editButton{

    font-size: 1.2rem;
    background:#5047C7;

    padding: 0.2rem 0rem;

    border-radius: 2px;
    margin-top: 1rem;

    cursor: pointer;
}
.editButton:hover{
    background:white;
    color: #5047C7;
}
#myAlbumContainer{
    width: 100%;

}
.title{
    width: 100%;
    font-size: 2rem;
    font-weight: 300;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid white;
}
.albums{
    padding: 1.75rem 0rem;

    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    
}
.albumPartOfInfo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
       

}
.albumImg{
    display: block;
    width: 7.25rem;
    height: 7.25rem;
    background-position: center;
    background-size: cover;
}
.albumImgAndNameContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;

    width:calc(100% - 5.25rem);
    cursor: pointer;

    padding-right: 1rem;
    


}
.albumImgAndNameContainer:hover{
    background: #444444;
}
.albumImgAndNameContainer svg{
    fill: white;
    width: 1.75rem;
    height: 1.75rem;
  
}
.albumImgAndNameWrapper{
    display: flex;
    align-items: center;
}
.albumNameWrapper{
    margin-left: 1rem;
    
}
.albumNameWrapper span{
    font-size: 1.75rem;
    font-weight: 400;
}
.albumNameWrapper div{
    margin-top: 0.25rem;
    font-size: 1.25rem;
    font-weight: 300;
    opacity: 0.8;
}
.exploreBtn{
    
    transform: rotate(90deg);
}
.albumButtons{
    margin-left: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 4.75rem;
}
.albumButtons svg{
    fill: white;
    width: 1.75rem;
    height: 1.75rem;

    cursor: pointer;
}
.albumButtons svg:hover{
    fill: #906DED;
}
.songsButtonWrapper{
    
}
.songsButton{
    float: left;
}
.songsButton svg{
    fill: white;
    width: 1.25rem;
    height: 1.25rem;
}
.songsTable{
    display:table;
    width: 100%;

    text-align: left;
    color: white;

    font-size: 1.25rem;
    
    table-layout: fixed;

    padding-top: 1rem;

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

    cursor: pointer;

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
.showTableTransition-enter-active,.showTableTransition-leave-active{
    transition: 0.75s linear;

}
.showTableTransition-leave,.showTableTransition-enter-to{
    opacity: 1;
}
.showTableTransition-enter,.showTableTransition-leave-to{
    opacity: 0;
}
.addNewAlbum{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 300;
    padding: 3rem;


    opacity: 0.8;

    display: none;
}
.mobileTableWrapper{
    display: none;
}
@media screen and (max-width: 1024px) {
#mother{
    flex-direction: column;
    padding: 1rem 0.25rem 15vh 0.25rem;

 
    
}
#userInfo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0rem;
    text-align: left;


    min-height: 6.5rem;
}
.userIcon img {
    width: 7rem;
    height: 7rem;
}
.usernameWrapper{
    margin-left: 1rem;

}

.userName{
    margin: 0.25rem 0 0 0;

     
    font-size: 2rem;
  
}
.editButton{

    font-size: 1.25rem;
    padding: 0.2rem 1rem;
    margin-top: 0.5rem;
}

.albumImgAndNameContainer{

    width:calc(100% - 3.25rem);


    padding-right:1rem;
    

}
.albumImg{

    width: 6.15rem;
    height:6.15rem;

}
.albumNameWrapper{
    margin-left: 0.75rem;
 
    
}
.albumNameWrapper div{
    margin-top: 0;

}
.albumImgAndNameContainer > span{
    padding-right: 0vw;

}
.albumButtons{
    margin-left: 0rem;

    width: 3rem;

    flex-direction: column;
}
.albumButtons {
    height: 100%;
}
.albumButtons span{
   
    width: 3rem;
    height: 3.15rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-left: 0.25rem;
}
.albumButtons span:first-of-type{

}
.albumButtons span:last-of-type{

}
.albumButtons svg{

    width: 1.75rem;
    height:1.75rem;


}
.albumButtons svg:hover{
    fill: white;
}
.songsTable{
    display: none;
    width: 100%;
}
.mobileTableWrapper{
    display: block;
    margin-top: 1rem;
}
.mobileTable{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;

    margin: 0.5rem 0;
}
.mobileSongInfoContainer{
    display: flex;
    align-items: center;
    max-width: calc(100% - 4rem);

}
.mobileSongIndex{
    font-size: 1.75rem;
    font-weight: 300;
    opacity: 1;
}
.mobileSongNameWrapper{
    margin-left: 0.75rem;
}
.mobileSongNameWrapper h1,.mobileSongNameWrapper h2{
    margin: 0;
    padding: 0;
}
.mobileSongNameWrapper h1{
    font-size: 1.65rem;
    font-weight: 400;
}
.mobileSongNameWrapper h2{
    font-size: 1.2rem;
    font-weight: 300;
    opacity: 0.6;

    margin-top: 0.15rem;
}
.mobileSongButtonsWrapper{
    display: flex;
    justify-content: space-between;
    width: 4rem;
}
.mobileSongButtonsWrapper svg{
    fill: white;
    width: 1.5rem;
    height: 1.5rem;
}




}
</style>