<template>
    <div>
        <header id="audioHeader">

            <div id="audioHeaderLeft">
                <span class="logotxt">logo</span>
                <div class="searchContainer">                    
                    <div >
                        <input type="text" placeholder="search..." @input="searchRequire" v-model="searchKeyword">
                        <div class="desktopSearchContent"  v-click-outside="closeSearchArea" >
                            <ul v-if="isKeywordEmpty" class="paddingBottom">
                                <li >
                                    <div class="desktopSearchContentTitle">Singer</div>
                                    <div class="desktopSingerResultContainer">
                                        <div v-for="(singer,index) in seacrhResultSingers" :key="index" class="desktopSingerResultWrapper" @click="$router.push({name:'singer',params:{singerName:singer.name}})">
                                            <div :style="{'background-image' : 'url(' + require('../audioMain/singerImgDB/' + singer.singerImgSrc ) + ')'}"></div>
                                            <span>{{ singer.name }}</span>
                                       
                                        </div>
                                    </div>
                                    <span  class="loadingText">{{ seacrhSingerLoading ? 'here is on loading...' : seacrhResultSingers.length == 0 ? 'no result' : '' }}</span>
                                </li>
                                <li>
                                    <div class="desktopSearchContentTitle">Song</div>
                                    <div class="desktopSongResultContainer">
                                        <div class="desktopSongResultWrapper" v-for="(song, index) in seacrhResultSongs" :key="index"  @click="$router.push({name:'singleSong',params:{songName:song.songName}})">
                                            <div class="desktopSongResultInfo">
                                                <div class="desktopSongResultImg" :style="{'background-image' : 'url('+ require('../audioMain/singerImgDB/' + song.songImgSrc ) + ')'}"></div>
                                                <div>
                                                    <h1>{{ song.songName }}</h1>
                                                    <h2>{{ song.singer }}</h2>
                                                </div>
                                            </div>
                                            <div class="desktopSongResultGoImg"><img src="../audioMain/audioImg/goSlim.png" alt=""></div>
                                        </div>
                                    </div>
                                    <span  class="loadingText">{{ seacrhSongLoading ? 'here is on loading...' : seacrhResultSongs.length == 0 ? 'no result' : '' }}</span>
                                </li>
                                <li>
                                    <div class="desktopSearchContentTitle">Album</div>
                                    <div class="desktopalbumResultContainer">
                                        <div class="desktopalbumResultWrapper" v-for="(album, index) in seacrhResultAlbums" :key="index" @click="$router.push({name:'album',params:{albumName:album.albumName}})">
                                            <div :style="{'background-image' : 'url(' + require('../audioMain/albumImgDB/' + album.albumImgSrc ) + ')'}"></div>
                                            <span>{{ album.albumName }}</span>
                                        </div>
                                    </div>
                                    <span  class="loadingText">{{ seacrhAlbumLoading ? 'here is on loading...' : seacrhResultAlbums.length == 0 ? 'no result' : '' }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    <span><svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.65"><path d="M11,17.83A6.79,6.79,0,1,0,4.25,11,6.79,6.79,0,0,0,11,17.83Zm0-1.5A5.29,5.29,0,1,1,16.33,11,5.29,5.29,0,0,1,11,16.33Z" transform="translate(-4.25 -4.25)"/><path d="M14.89,16.18l3.75,3.52a.75.75,0,1,0,1-1.09l-3.75-3.53a.75.75,0,0,0-1.06,0A.75.75,0,0,0,14.89,16.18Z" transform="translate(-4.25 -4.25)"/></svg></span>     
                    
                </div>
                    
            </div>

            <div id="audioHeaderRight">
                <div @click="showEditProfile"><img :src="icon" alt=""></div>
                <span class="Username" @click="showEditProfile">{{ Username }}</span>
                <hr>
                <span class="logOut" @click="logout">log out</span>
            </div>
            <div id="mobileAudioHeaderRight">
                <div class="search functionButton">
                    <span :class="[ buttonMask.isSearchShow ? {closeMask:true}:{searchMask:true}]" @click="showMusicplayer(0)"></span>
                    <transition name="userInfoSlider">
                    <ul v-if="buttonMask.isSearchShow" >
                        <li>
                            <div class="mobileSearchArea">                    
                                <div><input type="text" placeholder="search..." @input="searchRequire" v-model="searchKeyword"></div>
                                <span><svg id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.65"><path d="M11,17.83A6.79,6.79,0,1,0,4.25,11,6.79,6.79,0,0,0,11,17.83Zm0-1.5A5.29,5.29,0,1,1,16.33,11,5.29,5.29,0,0,1,11,16.33Z" transform="translate(-4.25 -4.25)"/><path d="M14.89,16.18l3.75,3.52a.75.75,0,1,0,1-1.09l-3.75-3.53a.75.75,0,0,0-1.06,0A.75.75,0,0,0,14.89,16.18Z" transform="translate(-4.25 -4.25)"/></svg></span>     
                            </div>
                        </li>
                        <li v-if="isKeywordEmpty">
                            <span class="searchResultTitle singer">Singer</span>
                            <div class="searchResultSingersContainer">
                                <div v-for="(seacrhResultSinger, index) in  seacrhResultSingers" :key="index" class="searchResultSingersWrapper" @click="$router.push({name:'singer',params:{singerName:seacrhResultSinger.name}})">
                                    <div :style="{'background-image' : 'url(' + require('../audioMain/singerImgDB/' + seacrhResultSinger.singerImgSrc ) + ')'}"></div>
                                    <span>{{ seacrhResultSinger.name}}</span>
                                </div>
                            </div>
                            <span class="loadingText">{{ seacrhSingerLoading ? 'here is on loading...' : seacrhResultSingers.length == 0 ? 'no result' : '' }}</span>
                        </li>
                        <li v-if="isKeywordEmpty">
                            <span class="searchResultTitle song">Song</span>
                            <div class="searchResultSongsContainer">
                                <div v-for="(seacrhResultSong, index) in seacrhResultSongs" :key="index" class="searchResultSongsWrapper" @click="$router.push({name:'singleSong',params:{songName:seacrhResultSong.songName}})">
                                    <div class="searchResultSongImgAndInfo">
                                        <div class="ResultSongImg" :style="{'background-image' : 'url('+ require('../audioMain/singerImgDB/' + seacrhResultSong.songImgSrc ) + ')'}"></div>
                                        <span class="ResultSongInfo">
                                            <h1>{{ seacrhResultSong.songName}}</h1>
                                            <h2>{{ seacrhResultSong.singer }}</h2>
                                        </span>
                                    </div>
                                    <div class="goImg"><img src="../audioMain/audioImg/goSlim.png" alt=""></div>
                                </div>
                                <span  class="loadingText">{{ seacrhSongLoading ? 'here is on loading...' : seacrhResultSongs.length == 0 ? 'no result' : '' }}</span>
                            </div>
                        </li>
                        <li v-if="isKeywordEmpty">
                            <span class="searchResultTitle album">Album</span>
                            <div class="searchResultAlbumsContainer">
                                <div v-for="(seacrhResultAlbum, index) in seacrhResultAlbums" :key="index" class="searchResultAlbumsWrapper" @click="$router.push({name:'album',params:{albumName:seacrhResultAlbum.albumName}})">
                                    <div :style="{'background-image' : 'url(' + require('../audioMain/albumImgDB/' + seacrhResultAlbum.albumImgSrc ) + ')'}"></div>
                                    <span>{{ seacrhResultAlbum.albumName }}</span>
                                </div>
                                <span  class="loadingText">{{ seacrhAlbumLoading ? 'here is on loading...' : seacrhResultAlbums.length == 0 ? 'no result' : '' }}</span>
                            </div>                            
                        </li>
                    </ul>
                    </transition>
                </div>
                <div class="person functionButton">
                    <span :class="[ buttonMask.isPersonShow ? {closeMask:true}:{personMask:true}]" @click="showMusicplayer(1)"></span>
                    <transition name="userInfoSlider">
                    <ul v-if="buttonMask.isPersonShow" @touchstart="clinetYStartTemp = $event.targetTouches[0].clientY " @touchmove.stop="moblieMenuClose($event)">
                        
                        <li class="userInfoMoblie">
                            <div><img :src="icon" alt=""></div>
                            <span>{{ Username }}</span>                            
                        </li>
                        <a @click="showEditProfile"><li>edit profile</li></a>
                        <router-link to="/"><li>upgrade</li></router-link>
                        <router-link :to="{name:'userAlbum',params:{userName:Username}}" ><li>my album</li></router-link>
                        <li><span @click="logout">log out</span></li>
                    </ul>
                    </transition>
                </div>
                <div class="musicPlayer functionButton">
                    <span :class="[ !buttonMask.isMenuClose ? {musicPlayerMask:true}:{closeMask:true}]" @click="showMusicplayer(2)"></span>
                </div>
            </div>
            
        </header> 
        <div id="blackBG" v-if="buttonMask.isBlackBGShow" @click="disappearAll"></div>
    </div>       
</template>

<script>
import firebase from 'firebase'
import {bus} from '../../main'
import db from '../firebase/firebaseinit'
export default {
    props:['Username','icon'],
    data(){
        return{
            buttonMask:{
                isSearchShow:false,
                isPersonShow:false,
                isMenuClose:true,
                isBlackBGShow:true,


                clinetYStartTemp:0,



            },
            searchKeyword:'',
                
            seacrhResultSingers:[],
            seacrhResultSongs:[],
            seacrhResultAlbums:[],   
            
            seacrhSingerLoading:true,
            seacrhSongLoading:true,
            seacrhAlbumLoading:true,

            isKeywordEmpty:false,
        }
    },
    methods:{

        logout(){
            firebase.auth().signOut().then(() =>{
                this.$router.push('/');
            });
        },
        showMusicplayer(index){

            
            switch(index){
                case 0: this.buttonMask.isSearchShow = !this.buttonMask.isSearchShow ;this.buttonMask.isPersonShow = false;this.buttonMask.isMenuClose = false;break;
                case 1: this.buttonMask.isPersonShow = !this.buttonMask.isPersonShow;this.buttonMask.isSearchShow = false;this.buttonMask.isMenuClose = false;break;
                case 2: this.buttonMask.isMenuClose = !this.buttonMask.isMenuClose;this.buttonMask.isSearchShow = false;this.buttonMask.isPersonShow = false;break;
            }
            if(this.buttonMask.isSearchShow  || this.buttonMask.isPersonShow || this.buttonMask.isMenuClose){
                this.buttonMask.isBlackBGShow = true;
            }else{
                this.buttonMask.isBlackBGShow = false;
            }


            this.$emit('showMusicPlayer',this.buttonMask.isMenuClose);
        },
        disappearAll(){

            if(window.innerWidth < 768){
                this.buttonMask.isSearchShow = false;
                this.buttonMask.isPersonShow = false;
                this.buttonMask.isMenuClose= false;
                this.buttonMask.isBlackBGShow = false;

                this.$emit('showMusicPlayer',this.buttonMask.isMenuClose);

            }


        }, 
        moblieExploreMenu(e){
            if(e.targetTouches[0].clientY > 50){
                this.buttonMask.isPersonShow = false;
                this.showMusicplayer(1);
            }
        },
        moblieMenuClose(e){
            
            if(e.targetTouches[0].clientY < this.clinetYStartTemp){
               
                this.disappearAll();
         
            }
  
        },
        showEditProfile(){
        
            this.$emit('editProfileShowDirectiveFromHeader','');
            this.disappearAll();
        },    
        closeSearchArea() {          
            this.searchKeyword = '';
            this.searchRequire();
        },
        searchRequire(){
            if(this.searchKeyword !== ''){
                this.isKeywordEmpty = true;
                this.seacrhResultSingers = [],this.seacrhResultSongs = [] ,this.seacrhResultAlbums = [];
                this.seacrhSingerLoading = true, this.seacrhSongLoading = true, this.seacrhAlbumLoading =true;

                db.collection('singer').get().then(doc =>{
                    doc.forEach(el =>{
                        if(el.data().name.toUpperCase().includes(this.searchKeyword.toUpperCase()) && this.seacrhResultSingers.length < 4 ){
                            this.seacrhResultSingers.push(el.data());
                        }
                        this.seacrhSingerLoading = false;
        
                    })
                });
                db.collection('song').get().then(doc =>{
                    doc.forEach(el =>{
                        if(el.data().songName.toUpperCase().includes(this.searchKeyword.toUpperCase()) && this.seacrhResultSongs.length < 2){
                            this.seacrhResultSongs.push(el.data());
                        }
         
     
                        this.seacrhSongLoading = false;
                    })
                });

                db.collection('album').get().then(doc =>{
                    doc.forEach(el =>{
                        if(el.data().albumName.toUpperCase().includes(this.searchKeyword.toUpperCase()) && this.seacrhResultAlbums.length < 4){
                            this.seacrhResultAlbums.push(el.data());
                        }
                        this.seacrhAlbumLoading = false;
                    })
                });

            }else{
                this.isKeywordEmpty = false;
            }

        }
    },

    created(){
        var self = this;
        window.addEventListener('resize', function(){
        
            if(window.innerWidth > 768){
                self.buttonMask.isMenuClose = false;
                self.showMusicplayer(2);

            }
        });   
        bus.$on('closeAll',() => {
            if(window.innerWidth < 768){
                this.disappearAll()
            }
         
            
        })
    },
    mounted(){
        
    },
    directives: {
     
        'click-outside': {
            bind: function (el, binding) {
                console.log(binding.name);
                console.log(binding.expression);
                console.log(binding.value);
        
                function clickOutside(event){
             
                    if(!(el == event.target || el.contains(event.target))){
                        binding.value();
                         
                    }
                }
                document.body.addEventListener('click', clickOutside)
            },
            unbind: function () {

                document.body.removeEventListener('click', this.event)
            },
        }

  }

}
</script>

<style scoped>
#audioHeader{
    background: black;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 0.5rem 1.25rem 0 1rem;
    height: 4.1rem;


}
#audioHeaderLeft{
    display: flex;
    align-items:center;
}

.logotxt{
    font-weight: 500;
    font-size: 2rem;    
    color: #906DED;

    height:3.5rem;

}
.searchContainer{
    display: flex;
    align-items:flex-end; 

    background: white;

    border-radius: 30rem;
    margin-left: 0.75rem;
    padding: 0.1rem 1rem;
}
#audioHeaderLeft input[type="text"]{
    border-radius: 30rem;
    border: 0;
    outline:0;
 

    width: calc(20rem + 5vw);
    font-size: 1.15rem
      
}
.searchContainer span{
    cursor: pointer;
    display: block;

    
    width: 1rem;
}
.searchContainer span svg{
    opacity: 0.4;
}
.searchContainer span svg:hover{
    opacity: 1;
    fill: #906DED;
}
.desktopSearchContent{
    position: absolute;
    z-index: 100000;

    background: #1A1A1A;
    color: white;

    transform: translate(-1.75rem,1.05rem);

    width: calc(25rem + 5vw);
    max-height: 30rem;


    padding: 0 0.5rem 0rem 0.5rem;

    overflow: auto;
}

.desktopSearchContent::-webkit-scrollbar {
    width: 0.5rem;


}

.desktopSearchContent::-webkit-scrollbar-track {
    background: #1a1a1a;

}

.desktopSearchContent::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.5);
}
.paddingBottom{
    padding-bottom: 2.5rem;
}
.desktopSearchContent ul{
    width: 100%;
   
}
.desktopSearchContent li{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0.5rem 0;

    width: 100%;

}
.desktopSearchContentTitle{
    display: flex;
    justify-content: center;
    font-size: 1.65rem;
    font-weight: 300;
    margin-bottom: 0.75rem;
}

.desktopSingerResultContainer{
    display: flex;
    justify-content: center;
    padding-bottom: 0.5rem
 
}
.desktopSingerResultWrapper{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    

    align-items: center;
    text-align: center;

    width: 6.25rem;
    margin: 0 0.25rem;
}
.desktopSingerResultWrapper:hover div{
    background-size: 175%;
}
.desktopSingerResultWrapper div{
    width: 5.5rem;
    height: 5.5rem;
    background-size: cover;
    background-position: center;

    border-radius: 9999px;
}
.desktopSingerResultContainer span{
    display: block;
    width: 100%;
    font-size: 1.15rem;
    font-weight: 400;
}
.desktopSongResultContainer{
    width: 100%;
}
.desktopSongResultWrapper{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 97.5%;
    padding-right: 2.5%;
    margin: 0.75rem auto;


}
.desktopSongResultWrapper:hover{
    background: gray;
}

.desktopSongResultInfo{
    display: flex;
    align-items: center;
    
}
.desktopSongResultInfo h1, .desktopSongResultInfo h2{
    margin: 0 0 0 0.5rem;
    padding: 0;
}
.desktopSongResultInfo h1{
    font-size: 1.35rem;
    font-weight: 400;
}
.desktopSongResultInfo h2{
    font-size: 1.15rem;
    font-weight: 300;
    opacity: 0.7;
    margin-top: 0.15rem;
}
.desktopSongResultImg{
    width: 5rem;
    height: 5rem;

    background-position: center;
    background-size: cover;
}
.desktopSongResultWrapper:hover .desktopSongResultGoImg{
    display: inline;
}
.desktopSongResultGoImg {
    display: none;
}
.desktopSongResultGoImg img{
    height: 1.5rem;
}

.desktopalbumResultContainer{
    display: flex;
    justify-content: center;
}
.desktopalbumResultWrapper{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    width: 6rem;
    margin: 0 0.25rem;
}
.desktopalbumResultWrapper:hover div{
    position: absolute;
    z-index: -1
}
.desktopalbumResultWrapper:hover span{
    width: 5.5rem;
    height: 5.5rem;
    background: rgba(0,0,0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top:0;
}
.desktopalbumResultWrapper div{
    width: 5.5rem;
    height: 5.5rem;

    background-position: center;
    background-size: cover;
}
.desktopalbumResultWrapper span{
    font-size: 1.25rem;
    margin-top: 0.25rem;
    display: block;
    width: 100%;
}

.loadingText{
    display: flex;

    justify-content: center;

    font-size: 1.25rem;
    font-weight: 400;
    opacity: 0.7;
    min-width: 100%;
    text-align: center;
}





#audioHeaderRight{
    color: white;
   

    display: flex;
    align-items: center;
}
#audioHeaderRight div{
   
    width: 2.5rem;
    height: 2.5rem;

    padding: 0;
    
}
#audioHeaderRight div img{
    width: 100%;
    border-radius: 9999px;
    cursor: pointer;

}
#audioHeaderRight span{
    cursor: pointer;
}

#audioHeaderRight hr{
    width: 1.75px;
    height: 2.25rem;
    border: solid 0.5px white;
  
    background: white;
}
.Username{
    font-size: 1.5rem;
    padding: 0 1rem;

}
.logOut{
    font-weight: 300;
    font-size: 1.25rem;

    padding: 0 1rem;
    cursor: pointer;

}
.logOut:hover{
    color: #906DED;
}
#mobileAudioHeaderRight{
    display: none;
}
@media screen and (max-width: 768px) {
#audioHeader{
 

    height: 4rem;
    padding: 0.7rem 1.25rem 0 1rem;
    align-items: center;
    
}
.searchContainer{
    display: none;
}
#audioHeaderRight{
    display: none;
}
#mobileAudioHeaderRight{
    display: flex;

    color: white;
}
.functionButton{
    margin: 0rem 0 0 1rem;
 
}
.functionButton > span{
    cursor: pointer;

    background-color: white;

    display: block;
    width: 2.1rem;
    height: 2.1rem;
    
}
.functionButton > span:hover{
    background-color:#906DED;
}
.functionButton .searchMask{
    mask: url('./audioImg/search_circle.svg');
}
.functionButton .personMask{
    mask: url('./audioImg/person_circle.svg');
}
.functionButton .musicPlayerMask{
    mask: url('./audioImg/menu_circle.svg');
}
.functionButton .closeMask{
    mask: url('./audioImg/close_circle.svg');

}
.functionButton ul{
    position:absolute;
    z-index: 999;

    width: 100%;
 
    
    left: 0;
    background: black;
}

.search ul{
    padding-top: 2.5vh;


    max-height: 80vh;
    overflow: auto;
}
.search ul li{
    padding-bottom: 1rem;
    border-bottom: 1px solid #906DED;
}

.mobileSearchArea{
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: white;
    width: 80%;
    margin: 0 auto;
    padding:0.15rem 0.5rem 0.15rem 1.5rem;
    
    border-radius: 999px;


}

.mobileSearchArea div{
 
    width: calc(100% - 2rem);
}
.mobileSearchArea input{
    width: 100%;

    font-size: 1.25rem;
    border: none;
    outline: none;
}
.mobileSearchArea span{
    width: 2rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
}
.mobileSearchArea svg{
    fill:gray;
    width: 1.5rem;
    height: 1.5rem;
}
.searchResultTitle{
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
}

.searchResultSingersContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-top: 0.5rem;

}
.searchResultSingersWrapper{
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;

    width: 6rem;

    cursor: pointer;


}
    

.searchResultSingersWrapper div{
    width: 6.25rem;
    height: 6.25rem;

    background-size: cover;
    background-position: center;

    border-radius: 9999px;
}
.searchResultSingersWrapper span{
    font-size: 1.15rem;
    font-weight: 400;
    margin-top: 0.25rem;
    opacity: 1;
}
.searchResultSongsWrapper{
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0.5rem auto;
    width: 95vw;

    cursor: pointer;
}
.searchResultSongImgAndInfo{
    display: flex;
    align-items: center;
}
.ResultSongImg{
    width: 5rem;
    height: 5rem;

    background-position: center;
    background-size: cover;

    border-radius: 4px;
}
.ResultSongInfo{
    margin-left: 0.75rem;
}
.ResultSongInfo h1,.ResultSongInfo h2{
    margin: 0;
    padding: 0;
}
.ResultSongInfo h1{
    font-size: 1.55rem;
    font-weight: 400;
}
.ResultSongInfo h2{
    font-size: 1.15rem;
    font-weight: 300;
    opacity: 0.8;
}

.goImg img{
    
    height: 1.5rem;
}
.searchResultAlbumsContainer{
    display: flex;
    justify-content: space-around;
    margin-top: 0.25rem;


}
.searchResultAlbumsWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    cursor: pointer;

    width: 6rem;
    margin: 0 0.25rem;
}
.searchResultAlbumsWrapper div{
    width: 5.75rem;
    height: 5.75rem;

    background-size: cover;
    background-position: center;
}
.searchResultAlbumsWrapper span{
    font-size: 1.15rem;
    font-weight: 400;
    margin-top: 0.25rem
}
.loadingText{
    margin-top: 1rem;
    display: flex;
    justify-content: center;

    font-size: 1.35rem;
    font-weight: 400;
    opacity: 0.7;
    min-width: 0%;
}


.person ul li{
    height: 4.5rem;
    width: 100%;

    border-bottom:1px solid #906DED; 

    display: flex;
    justify-content: center;
    align-items: center; 

}
.person ul a li{
    font-size: 1.75rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.85);   
    
}
.person .userInfoMoblie div{
    width: 3rem;
    height: 3rem;
 
}
.person .userInfoMoblie div img{
    width: 100%;
    border-radius: 9999px;
}
.person .userInfoMoblie span{
    margin-left: 0.75rem;
    font-size: 2rem;
    font-weight: 400;
}
.person ul li:nth-child(5){
    border-bottom:0px solid #906DED; 
    font-size: 1.5rem;
    color: #906DED;
}
.person ul li:nth-child(5) span{
    display: block;
    padding: 0.2rem 2.5rem;

    background: white;
    border-radius: 999px;

    cursor: pointer;
}
#blackBG{
    width: 100%;
    height: 100%;
    position: fixed;
 
    background: black;
    opacity: 0.8;

    z-index: 500;

    cursor: pointer;
}
.userInfoSlider-enter-active,.userInfoSlider-leave-active{
    transition: 0.5s ease;
    overflow: hidden;
}
.userInfoSlider-enter,.userInfoSlider-leave-to{
    height: 0rem;
}
.userInfoSlider-enter-to,.userInfoSlider-leave{
    height: 22.5rem;
}


}
</style>