<template>
    <div class="container">
  
        <header  :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.4) 0% ,rgba(0,0,0,0.4) 100%),url('+ require('../audioImg/'+ headerBG )+')'}"> 
            {{ language.toUpperCase()  }}
            
        </header>
        
        <div id="wrapper" >
            <div id="singerList" class="dataArea">
                <div class="Areatitle" :style="{width:wrapperSongsImg.titleWidth1}" ref="singerTitle"><h1>Singer</h1></div>

                <div class="dataWrapper" :style="{'height' : wrapperSongsImg.Height1 }">
                    <div v-for="(singer,index) in singers" :key="''+index" class="singers" @click="$router.push({name:'singer',params:{singerName:singer.name}})">
                        <div :style="{'background-image':'url('+ require('../singerImgDB/'+ singer.singerImgSrc+'') +')'}"></div>
                        <h6>{{ singer.name }}</h6>
                    </div>
                </div> 

                <div class="exploreButton" @click="exploreButtonHover(0)" :style="[ !OnAndOff[0] ? { 'box-shadow': '0 -52.5px 55px black'} : {'box-shadow': 'none'}]">
                    <svg :style="{'transform' : wrapperSongsImg.transform1 }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg>
                </div>                                   
            </div>



            <div id="songList" class="dataArea">
                <div class="Areatitle" :style="{width:wrapperSongsImg.titleWidth2}" ref="songTitle"><h1>Song</h1></div>
                <div class="dataWrapper" :style="{'height' : wrapperSongsImg.Height2 }">
                    <div class="songs" v-for="(song,index) in songs" :key="index" >
                        <div class="songsLeft">
                            <div class="songImg" :style="{'background-image': 'url( '+ require('../singerImgDB/'+ song.songImgSrc+'') +' ) '}"></div>
                            <div class="songInfo">
                                <h1 @click="$router.push({name:'singleSong',params:{songName:song.songName}})">{{ song.songName }}</h1>
                                <h2 @click="$router.push({name:'singer',params:{singerName:song.singer}})">{{ song.singer}}</h2>
                            </div>

                        </div>
                        <div class="songsRight">
                            <span @click="addSongToPlaylist(song.songName,song.singer)"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g data-name="圖層 1"><rect y="25" width="60" height="10"/></g><g  data-name="圖層 1"><rect x="25" width="10" height="60"/></g></svg></span>
                            <span @click="collectSong(song.songName,song.singer)"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.58 162.87"><path d="M230.93,233.6a6.53,6.53,0,0,1-3.84-1.24l-44.85-32.59-44.85,32.59a6.52,6.52,0,0,1-10-7.29l17.13-52.73L99.64,139.75A6.52,6.52,0,0,1,103.47,128h55.44L176,75.24a6.51,6.51,0,0,1,6.2-4.51h0a6.49,6.49,0,0,1,6.2,4.51L205.57,128H261a6.52,6.52,0,0,1,3.84,11.79L220,172.34l17.13,52.73a6.5,6.5,0,0,1-6.19,8.53ZM114.19,138l38.23,27.78a6.49,6.49,0,0,1,2.36,7.29L140.18,218l38.23-27.78a6.5,6.5,0,0,1,7.66,0L224.3,218,209.7,173a6.5,6.5,0,0,1,2.37-7.29L250.3,138H203a6.51,6.51,0,0,1-6.2-4.5l-14.6-44.94-14.6,44.94a6.51,6.51,0,0,1-6.2,4.5ZM261,138h0ZM178.93,78.33Z" transform="translate(-96.95 -70.73)"/></svg></span>                          
                        </div>
                    </div>                    
                </div>
                <div class="exploreButton" @click="exploreButtonHover(1)" :style="[ !OnAndOff[1] ? { 'box-shadow': '0 -52.5px 55px black'} : {'box-shadow': 'none'}]">
                    <svg :style="{'transform' : wrapperSongsImg.transform2 }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg>
                </div>
            </div>



            <div id="albumList" class="dataArea">
                <div class="Areatitle" :style="{width:wrapperSongsImg.titleWidth3}" ref="albumTitle"><h1>Album</h1></div>
                <div class="dataWrapper" :style="{'height' : wrapperSongsImg.Height3 }">
                    <div class="albumsImg" v-for="(albumInfo,index) in albumInfos" :key="index" @click="$router.push({name:'album',params:{albumName:albumInfo.albumName}})"  :style="{'background-image': 'linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.9) 100% ),url( '+ require('../albumImgDB/'+ albumInfo.albumImgSrc) +' ) '}">
                        <span>{{ albumInfo.albumName }}</span>
                    </div>                    
                </div>            
                <div class="exploreButton" @click="exploreButtonHover(2)" :style="[ !OnAndOff[2] ? { 'box-shadow': '0 -52.5px 55px black'} : {'box-shadow': 'none'}]">
                    <svg :style="{'transform' : wrapperSongsImg.transform3 }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg>
                </div>       
            </div>

 

        </div>
    </div>
</template>

<script>
import db from '../../firebase/firebaseinit'
import {addsong} from '../addsong'
import {collectSongDirective} from '../pages/collectSongDirective'
export default {
    mixins:[addsong,collectSongDirective],
    data(){
        return{
            headerBG:'rockBG.jpg',
            languageOrType:'language',
            songs:[],
            singers:[],
            albumInfos:[],
            language:'',
            wrapperSongsImg:{
                Height1:'12.5rem',
                Height2:'12.5rem',
                Height3:'12.5rem',
                transform1:'rotate(90deg)',
                transform2:'rotate(90deg)',
                transform3:'rotate(90deg)',
                titleWidth1:'100%',
                titleWidth2:'100%',
                titleWidth3:'100%',

            },
            OnAndOff:[false,false,false],
        }
    },
    methods:{
        setBG(){
    
            switch(this.language){
                case'cantonese':this.headerBG ='cantoneseBG.jpg' ;break;
                case'english'  :this.headerBG ='englishBG.png' ;break;
                case'japanese' :this.headerBG ='musicDefaultBG.png' ;break;
                case'mandarin' :this.headerBG ='mandarinBG.jpg' ;break;
                case'normal'   :this.headerBG ='normalBG.jpg' ;break;
                case'bass'     :this.headerBG ='headphoneBG.jpg' ;break;
                case'edm'      :this.headerBG ='headphoneBG.jpg' ;break;
                case'rock'     :this.headerBG ='rockBG.jpg' ;break;
            }
        },
        getSongs(){
            var loopTimes = 0;
            this.songs = [],this.singers = [],this.languageOrType =  'language',this.albumInfos = [];
            
            do{
             
                loopTimes++;
                if(loopTimes == 2){
                    this.languageOrType = 'type';
                }

                db.collection('song').where(this.languageOrType,'==',this.language).orderBy('singer').get().then(doc => {
            
                    doc.forEach(docObj => {
                        this.songs.push(docObj.data());
                    
                    });
                });

                db.collection('singer').where(this.languageOrType,'==',this.language)/*.orderBy('name')*/.get().then(doc => {
                
                    doc.forEach(docObj => {
                        this.singers.push(docObj.data());
        
                    
                    });
                    
                });  
                db.collection('album').where(this.languageOrType,'==',this.language).get().then(doc => {
                    doc.forEach(el => {
                        this.albumInfos.push(el.data());
                  
                    });
                });                 
            
            }while(this.singers.length < 1 && loopTimes < 2);
            
  
            

            this.OnAndOff=[true,true,true];   
       
            
            for(var i = 0; i <= this.OnAndOff.length-1;i++ ){

                this.exploreButtonHover(i);
            }                 
        },
        exploreButtonHover(index){
            this.OnAndOff[index] = !this.OnAndOff[index];
            if(this.OnAndOff[index]){// titleWidth1
                switch(index){
                    case 0:this.dataAreaTransition(0);this.wrapperSongsImg.transform1 = 'rotate(-90deg)';this.wrapperSongsImg.titleWidth1 = '10%';break;
                    case 1:this.dataAreaTransition(1);this.wrapperSongsImg.transform2 = 'rotate(-90deg)';this.wrapperSongsImg.titleWidth2 = '10%';break;
                    case 2:this.dataAreaTransition(2);this.wrapperSongsImg.transform3 = 'rotate(-90deg)';this.wrapperSongsImg.titleWidth3 = '10%';break;
                }
            }else{
                switch(index){
                    case 0:this.wrapperSongsImg.Height1 = '12.5rem';this.wrapperSongsImg.transform1 = 'rotate(90deg)';this.wrapperSongsImg.titleWidth1 = '100%';break;
                    case 1:this.wrapperSongsImg.Height2 = '12.5rem';this.wrapperSongsImg.transform2 = 'rotate(90deg)';this.wrapperSongsImg.titleWidth2 = '100%';break;
                    case 2:this.wrapperSongsImg.Height3 = '12.5rem';this.wrapperSongsImg.transform3 = 'rotate(90deg)';this.wrapperSongsImg.titleWidth3 = '100%';break;
                }
            }

             
            
             
        },
        dataAreaTransition(index){
           
            var self = this;
            document.getElementsByClassName('Areatitle')[index].addEventListener('transitionstart',function(){
                if(self.OnAndOff[index]){
                    switch(index){
                        case 0:self.wrapperSongsImg.Height1 = '32.5rem';break;
                        case 1:self.wrapperSongsImg.Height2 = '32.5rem';break;
                        case 2:self.wrapperSongsImg.Height3 = '32.5rem';break;
                    }   
                } 
            });
            document.getElementsByClassName('Areatitle')[index].addEventListener('transitionend',function(){
                if(self.OnAndOff[index]){
                    switch(index){
                        case 0:self.wrapperSongsImg.Height1 = 'auto';break;
                        case 1:self.wrapperSongsImg.Height2 = 'auto';break;
                        case 2:self.wrapperSongsImg.Height3 = 'auto';break;
                    }                      
                }
  
            });            
        },


    },
    computed:{
    },
	
    beforeRouteUpdate(to,from,next){
        
        this.language = to.params.className;
        this.setBG();
        this.getSongs();


        next();

    },     
    created(){
        this.language = this.$route.params.className;
        this.setBG();
        this.getSongs();
       
    },
    mounted(){

    },
     
}
</script>

<style scoped>
header{
    font-size: 3rem;
    font-weight: 500;
    width: 100%;
    padding: 2.75rem 0;

    color: white;


    background-size: 100%,100%;
    background-position: center;
   

    text-align: center;

}

.container{

    width: 100%;

    min-height: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;
    background: rgb(25, 25, 25);
}
#wrapper{


    max-width: calc(45rem + 20vw);
    padding:0 1rem 10vh 1rem;
    position: relative;
    z-index: 100;

}
#wrapper > div{
    
}
.exploreButton{

    width: 100%;
    
    border-top: solid 1px white;
    

    display: flex;
    justify-content: center;

    cursor: pointer;
    position: relative;
    z-index: 100;

}
.exploreButton:hover{

    border-top: solid 1px #906DED;
  

}
.exploreButton:hover svg{
    fill: #906DED;
    
}
.exploreButton svg{
    margin-top: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: white;

    transition:all 0.5s linear;

}

.Areatitle{

    text-align: center;
    transition: 0.75s;
}
#singerList{

}
.dataArea{

    width: 100%;
}
.dataArea div h1{
    font-size: 2rem;
    font-weight: 300; 
    margin-bottom: 2rem;

}
.singers{
    width: 10rem;
    height: 10rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    margin:0 0.75rem 1rem 0.75rem;

    cursor: pointer;
}
.singers:hover div{
    background-size: 150%;
}
.singers div{
    width: 7.5rem;
    height: 7.5rem;
    background-size: 100% ;
    background-position: center;
    border-radius: 9999px;

    transition:all 0.25s linear;
}

.singers h6{
    margin: 0.5rem 0 0 0 ;
    padding: 0;
    font-size: 1.25rem;
    font-weight: 400; 
}

.dataWrapper{
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    

    width: auto;
    padding-bottom: 1rem; 
    overflow: hidden;

    transition:height 0.75s;
    
}
.songs{
    width: calc(17.5rem + 11.5vw);
    
    height: 5em;

    display: flex;
    justify-content: space-between;

    margin:0 1rem 1.5rem 1rem;
  
}
.songs > div{
 
    display: flex;
    align-items: center;
    

}
.songImg{
    width: 5rem;
    height: 5rem;
     
    background-size: cover;
}
.songs > div h1,.songs > div h2{
    margin: 0.5rem 0;
    padding: 0;
    

}
.songsLeft{
    width: 100%;
}
.songInfo{
    margin-left:0.75rem;
    width: 70%;


 
}
.songs > div h1{
    font-size: 1.4rem;
    font-weight: 400;

    cursor: pointer;
}

.songs > div h2{
    opacity: 0.75;
    font-size: 1.1rem;
    font-weight: 300;
    cursor: pointer;
}
.songsRight{
    width: calc(3.5rem + 2.5%);
    display: flex;
    justify-content: space-between;

}
.songsRight span:hover svg{
    fill: #906DED;
}
.songsRight svg{
    cursor: pointer;
    width: 1.25rem;
    height: 1.25rem;
    fill: white;
}
.albumsImg{
    margin: 1.5rem 1.5rem;
    width: 9rem;
    height: 9rem;
    padding:0.75rem 0.5rem;

    font-size: 1.15rem;
    font-weight: 400;
    
    text-align: center;

    color: white;
    cursor: pointer;

    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.albumsImg:hover{
    transform: scale(1.25);
    box-shadow: 0 3px 20px rgba(255, 255, 255, 0.2)
}

@media screen and (max-width: 768px) {
#wrapper{



    padding:0 1rem 15vh 1rem;

}    
.songs{
    width: calc(20rem + 12.5vw);

  
}
.songsRight{
    width: calc(3.5rem + 10%);
    display: flex;
    justify-content: space-between;

}
.songsRight svg{

    width: 1.75rem;
    height: 1.75rem;

}
}
</style>