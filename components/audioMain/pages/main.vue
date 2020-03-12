<template>
    <div class="mother" >
        <header  @touchstart="dragStart($event)" @touchmove="dragAction($event)" @touchend="dragEnd($event)" @mousedown="dragStart($event)" @mousemove.stop="dragAction($event)" @mouseup.stop="dragEnd" @mouseout="dragEnd" >
            <div class="promoting-buttons-wrapper" >
                <div class="promoting-btn pre" @click="shiftSlide('prev','click')"><svg height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg></div>
                <div class="dots-container" >
                    <div class="dots-wrapper"  @click.self="routerTo"> 
                        <span @click.prevent="dotClickShift(index)" v-for="(nothing,index) in promotingSongsImg" :key="index" class="dot-button" :class="{'current': index == currentImgIndex}"></span>
                    </div>
                </div>
                <div class="promoting-btn next" @click="shiftSlide('next','click')"><svg height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg></div>
            </div>            
            <div class="promoting-img-wrapper" :style="{'left': - currentPos + '%'}" ref="imageSlider" @transitionend="checkIndex(promotingSongsImg)" :class="{'shifting':isShifting}">
         
                <div class="promoting-songs-img" :style="{'background-image' : 'url(' + require('../promotingSongsImgDB/' + promotingSongsImg[promotingSongsImg.length - 2] ) + ')'}"></div>
                <div class="promoting-songs-img" :style="{'background-image' : 'url(' + require('../promotingSongsImgDB/' + promotingSongsImg[promotingSongsImg.length - 1] ) + ')'}"></div>
                <div v-for="(img,index) in promotingSongsImg" :key="index" class="promoting-songs-img" :style="{'background-image' : 'url(' + require('../promotingSongsImgDB/' + img) + ')'}"></div>
                <div class="promoting-songs-img" :style="{'background-image' : 'url(' + require('../promotingSongsImgDB/' + promotingSongsImg[0] ) + ')'}"></div>
                <div class="promoting-songs-img" :style="{'background-image' : 'url(' + require('../promotingSongsImgDB/' + promotingSongsImg[1] ) + ')'}"></div>
             
            </div>

        </header>
        <article>
   
            <div class="background-area" >
                <ul class="animate-boxs">
                    <li v-for="(amount,index) in new Array(10)" :key="index"></li>
                </ul>
            </div>  

            <div class="Content-wrapper">
                <div class="recommend-area">
                    
                    <list-songs :songsArr="recommendSongs"><span slot="title" class="list-title">Recommend Songs</span></list-songs>
                    <list-songs :songsArr="popularSongs"><span slot="title" class="list-title">Popular Songs</span></list-songs>
                    <div class="slogan">Everything here is free. Don't worry how to pay the money and what is the price of it. Just enjoy all the music</div>
                    <list-album :albumsArr="recommendAlbums"><span slot="title" class="list-title">Recommend Albums</span></list-album>
                    <list-album :albumsArr="popularAlbums"><span slot="title" class="list-title">Popular Albums</span></list-album>
             
                </div>
                <div class="top-rank-area">

                    <div class="top-content-body songs">
                        <span class="top-content-title">TOP SONGS <img src="../audioImg/goSlim.png" alt=""></span>
                        <div class="top-content-wrapper">
                            <div class="top-content"  v-for="(song,index) in topSongsDataTemp" :key="index">
                                <span class="top-content-index">{{index + 1}}.</span>
                                <div class="top-content-info-wrapper" @click="$router.push({name:'singleSong',params:{songName:song.songName}})">
                                    <div class="top-content-info">
                                        <div class="top-content-img" :style="{'background-image': 'url(' + require('../singerImgDB/' + song.songImgSrc)+ ')'}"><div class=""><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.43 94.88"><g id="圖層_1-2" data-name="圖層 1"><path d="M71.8,41.09,3.75,1.35A7.74,7.74,0,0,0-7,3.55a7.77,7.77,0,0,0-1.28,4.2v79.5A7.7,7.7,0,0,0-.53,95a7.69,7.69,0,0,0,4.28-1.3L71.8,53.79a7.66,7.66,0,0,0,0-12.7Z" transform="translate(8.25 -0.07)"/></g></svg></div></div>
                                        <div>
                                            <h1>{{song.songName}}</h1>
                                            <h2>{{song.singer}}</h2>
                                        </div>
                                    </div>
                                    <span class="top-content-go"><svg height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><title>Asset 620</title><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="top-content-body albums">
                        <span class="top-content-title">TOP ALBUMS <img src="../audioImg/goSlim.png" alt=""></span>
                        <div class="top-content-wrapper">
                            <div class="top-content"  v-for="(album,index) in topAlbumsDataTemp" :key="index">
                                <span class="top-content-index">{{index + 1}}.</span>
                                <div class="top-content-info-wrapper" @click="$router.push({name:'album',params:{albumName:album.albumName}})">
                                    <div class="top-content-info">
                                        <div class="top-content-img" :style="{'background-image': 'url(' + require('../albumImgDB/' + album.albumImgSrc)+ ')'}"><div class=""><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.43 94.88"><g id="圖層_1-2" data-name="圖層 1"><path d="M71.8,41.09,3.75,1.35A7.74,7.74,0,0,0-7,3.55a7.77,7.77,0,0,0-1.28,4.2v79.5A7.7,7.7,0,0,0-.53,95a7.69,7.69,0,0,0,4.28-1.3L71.8,53.79a7.66,7.66,0,0,0,0-12.7Z" transform="translate(8.25 -0.07)"/></g></svg></div></div>
                                        <div>
                                            <h1>{{album.albumName}}</h1>
                                            <h2>{{album.singer}}</h2>
                                        </div>
                                    </div>
                                    <span class="top-content-go"><svg height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><title>Asset 620</title><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg></span>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </article>
    </div>
</template>

<script>
import db from '../../firebase/firebaseinit'
import listSongs from './main_page_components/list_songs'
import listAlbum from './main_page_components/list_albums'
export default {
    components:{
        'list-songs':listSongs,
        'list-album':listAlbum,

    },
    data(){
        return{
            promotingSongsImg:['clarity.jpg','faded.jpg','newKing.jpg','weAre.jpg','不為誰而作的歌.jpg','fullStop.jpg'],
            promotingSongs:['Zedd','Alan Walker','Vicetone','One Ok Rock','林俊傑','G.E.M.鄧紫棋'],


            sliderWidth:65,
            currentImgIndex:0,
            currentPos:0,
            posInitial:0,
            posFinal:0,

            posXStart:0,
            posXEnd:0,

            threshold:10,
            isShifting:false,
            allowMove:true,
            allowShift:true,
            allowClick:true,
            sliderDrapStarted:false,


            topSongs:['Havana','One Way Ticket','i was king','The Beginning','The New Kings'],
            topSongsDataTemp:[],

            recommendSongs:['Havana','One Way Ticket','Faded','Monsters','The New Kings','無盡','時空','人在野','不為誰而作的歌'],
            popularSongs:['Faded','Havana','來自天堂的魔鬼','I Knew You Were Trouble','Señorita','We Are','Sugar','句號 Full Stop','不為誰而作的歌','K歌之王'],

            topAlbums:['Ambitions','The Nights','True','Different World','Camila'],
            topAlbumsDataTemp:[],

            recommendAlbums:['Ambitions','Get Wet','Camila','另一個童話','Misterdays','Different World','不許你注定一人'],
            popularAlbums:['Eye of the Storm','Stories','Ambitions','Get Wet','Camila','另一個童話','Blood, Sweat & 3 Years'],
            
        }
    },
    methods:{
        dragStart(e){
            e = e || window.event;      
            e.preventDefault();
            

            if(this.allowMove){
                this.posInitial = this.currentPos;
                if(e.type == 'touchstart'){
                    this.posXStart = e.touches[0].clientX;
                }else{
                    this.posXStart = e.clientX;
                }
                this.sliderDrapStarted = true;
     
            }
            this.allowClick = true;


        },
        dragAction(e){    
            e = e || window.event; 
            e.preventDefault();
      
            this.allowClick = false;

            if(this.sliderDrapStarted){
                if(e.type == 'touchmove'){
                    this.posXEnd = this.posXStart - e.touches[0].clientX;
                    this.posXStart = e.touches[0].clientX;
                }else{
                    this.posXEnd = this.posXStart - e.clientX;
                    this.posXStart = e.clientX;
                }
                this.currentPos += (this.posXEnd / screen.width * 100);

            }
       
        },
        dragEnd(e){
        
            if(e.type == 'touchend' && this.allowClick){
            
                this.routerTo();
            }

            if(this.sliderDrapStarted){
                this.posFinal = this.currentPos;
                if(this.posFinal - this.posInitial < -this.threshold){

                    this.shiftSlide('prev','drag');
                }else if(this.posFinal - this.posInitial > this.threshold){

                    this.shiftSlide('next','drag');
                }else{
                    this.currentPos = this.posInitial;
                }
               
                this.sliderDrapStarted = false;
                
            }
        },
        shiftSlide(direction,action){

          
            if(this.allowShift){
                this.isShifting = true;

                if(action == 'click'){this.posInitial = this.currentPos}

                if(direction == 'prev'){
                    this.currentPos = (this.posInitial - this.sliderWidth);
                    this.currentImgIndex--;
                }else if(direction == 'next'){
                    this.currentPos = (this.posInitial + this.sliderWidth);
                    this.currentImgIndex++;
                }
        
                this.allowMove = false;
                this.allowShift = false;        
            }

        },
        checkIndex(imgArray){
            this.isShifting = false;
     
            var theFirstImgWidth = ( this.sliderWidth - (100 - this.sliderWidth) / 2 );
            if(this.currentImgIndex == -1){
                this.currentPos = (imgArray.length * this.sliderWidth + theFirstImgWidth);
                this.currentImgIndex = imgArray.length - 1;
            }

            if(this.currentImgIndex == imgArray.length){
                
                this.currentPos = this.sliderWidth  + theFirstImgWidth;
                this.currentImgIndex = 0;
            }
        
            this.allowMove = true;
            this.allowShift = true;
             
        },
        dotClickShift(dotIndex){
           
       
            if(this.allowMove && this.allowShift){
                this.isShifting = true;

                this.currentPos =  ( dotIndex + 1 ) * this.sliderWidth + ( this.sliderWidth - (100 - this.sliderWidth) / 2 );
                this.currentImgIndex = dotIndex;
                
                this.allowMove = false;
                this.allowShift = false; 
                
            }
        },
        routerTo(){
      
            if(this.allowClick ){
                this.$router.push({name:'singer',params:{singerName:this.promotingSongs[this.currentImgIndex]}})
            }

        },
        resetAll(){
            var isItReseted = false;
            if(window.matchMedia("(max-width: 1024px)").matches){
                this.sliderWidth = 100;
                isItReseted  = true;

            }else{
                this.sliderWidth = 65;
                isItReseted  = true;

            }
            if(isItReseted){
                this.currentPos = this.sliderWidth * (this.currentImgIndex + 1)  + ( this.sliderWidth - (100 - this.sliderWidth) / 2 );
                this.posInitial = 0;
                this.posFinal = 0;
            }         
        }


    },
    computed:{

    },
    created(){
        this.topSongs.forEach(el => {
            db.collection('song').where('songName','==',el).get().then(dataTemp =>{
                dataTemp.forEach(songTemp =>{
                    this.topSongsDataTemp.push(songTemp.data());
                });
            })
        });
        this.topAlbums.forEach(el =>{
            db.collection('album').where('albumName','==',el).get().then(dataTemp =>{
                dataTemp.forEach(albumTemp =>{
                    this.topAlbumsDataTemp.push(albumTemp.data());
                })
            })
        })
    },
    mounted(){
        this.resetAll();
    
  
        window.addEventListener('resize',this.resetAll);
        setInterval(() => {
            this.shiftSlide('next','click');
        }, 10000);
        /*
        function clone(slideClass,containerClass){
            var slider = document.getElementsByClassName(slideClass),
                container = document.getElementsByClassName(containerClass)[0],
                first = slider[0].cloneNode(true),
                second = slider[1].cloneNode(true),
                secondOfLast = slider[slider.length -2].cloneNode(true),
                last = slider[slider.length -1].cloneNode(true);

            container.appendChild(first,second);      
            container.insertBefore(last,secondOfLast);
        }
        clone('promoting-songs-img','promoting-img-wrapper');
        */
    },
}
</script>

<style scoped>
.mother{
    width: 100%;
    height: 100%;
     

}
header{
    width: 100%;
    overflow: hidden;
       
   
}
.promoting-img-wrapper{
    display: flex;

    position: relative;

}
.promoting-img-wrapper .promoting-songs-img{
    min-width: 65%;
    width: 65%;

    height: calc(17.5rem + 5vw);

    background-size:cover;
    background-position: center;

    

}

.promoting-buttons-wrapper{
    position: absolute;

    z-index: 100;
    width: 100%;
    
   
    height:calc(17.5rem + 5vw);

    display: flex;
    justify-content: space-between;



    
}
.promoting-btn {
    width: 17.5%;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background: linear-gradient(to left , rgba(0,0,0,0.9) 0% , rgba(0,0,0,0) 100%);
 
    margin: 0;
    padding: 0;
    left: 0;
}
.promoting-btn.pre{
    transform: rotate(180deg);
     
}

.promoting-btn svg{
    fill: white;
    width: 3rem;
    height: 3rem;

}
.dots-container{
    width: 65%;
    
    height: 100%;
    padding-bottom: 1rem;
}
.dots-wrapper{
    display: flex;

    align-items: flex-end;
    justify-content: center;

    
    height: 100%;
  
    cursor: pointer;
}
.dot-button{
    display: block;

    width: 0.75rem;
    height: 0.75rem;

    background: gray;
    margin:0 1rem;

    border-radius: 9999px;

    transition: 0.5s all;

    cursor: pointer;

}
.dot-button.current{
    background: white;
    transform: scale(1.35)
}
.shifting{

    transition:all 0.5s ease-out;

}

article{
    width: 100%;

}

.background-area{
    position: absolute;

    right: 0;
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #5047C7, #906DED);  
    width: 100%;
    height:95rem;
    padding-bottom: 7.5rem;
    z-index: -1000;
    
    
}

.animate-boxs{


    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    overflow: hidden;
}

.animate-boxs li{


    display: block;
    list-style: none;
    width: 1.15rem;
    height: 1.15rem;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    

    
}

.animate-boxs li:nth-child(1){

    width: 5rem;
    height: 5rem;
    animation-delay: 0s;
}


.animate-boxs li:nth-child(2){

    width: 1.15rem;
    height: 1.15rem;
    animation-delay: 2s;
    animation-duration: 12s;
}

.animate-boxs li:nth-child(3){

    width:1.15rem;
    height: 1.15rem;
    animation-delay: 4s;
}

.animate-boxs li:nth-child(4){

    width: 5.5rem;
    height:  5.5rem;
    animation-delay: 0s;
    animation-duration: 18s;
}

.animate-boxs li:nth-child(5){

    width: 1.15rem;
    height: 1.15rem;
    animation-delay: 0s;
}

.animate-boxs li:nth-child(6){

    width: 7.15rem;
    height: 7.15rem;
    animation-delay: 3s;
}

.animate-boxs li:nth-child(7){

    width: 9.5rem;
    height: 9.5rem;
    animation-delay: 7s;
}

.animate-boxs li:nth-child(8){

    width: 1.75rem;
    height: 1.75rem;
    animation-delay: 15s;
    animation-duration: 45s;
}

.animate-boxs li:nth-child(9){

    width:1rem;
    height: 1rem;
    animation-delay: 2s;
    animation-duration: 35s;
}

.animate-boxs li:nth-child(10){
    left: 85%;
    width:9.5rem;
    height: 9.5rem;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-90rem) rotate(720deg);
        opacity: 0;
        border-radius: 30%;
    }

}
.Content-wrapper{
 
    width: 100%;
    height: 95rem;
    display: flex;
    justify-content: space-between;
}
.recommend-area{
    display: flex;
    flex-direction: column;
    width: calc(100% - 20rem );
    height:100%;

}
.slogan{
    background: #D66DD3;
    min-width: calc(100% - 1.5rem);
    max-width: calc(100% - 1.5rem);
    border-radius: 16px;

    margin: 3rem 0.75rem 2rem 0.75rem;
    padding: 1rem ;
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
}
.top-rank-area{
    width: 20rem;
    height: 95rem;
    color:white;
    background: rgba(255, 255, 255, 0.25);
    padding: 0.75rem 0 0 0.75rem;
}
.top-content-body{
      
}
.top-content-wrapper{

    padding-left: 0rem;
    
}

.top-content-title{
    font-size: 1.5rem;
    font-weight: 400;
}
.top-content-title img{
    height: 1.2rem;
}
.top-content-info{
    display: flex;
    
}
.top-content-info:hover .top-content-img div{
    display: flex;
}
.top-content{
    display: flex;
    margin: 1rem 0;

}
.top-content-index{
    font-weight: 300;
    font-size: 1.35rem;
    width: 1.35rem;
}

.top-content-img{
    width: 4.25rem;
    height: 4.25rem;
    background-position: center;
    background-size: cover;
    margin:0 0.35rem 0 0.25rem;
    

}
.top-content-img div{

    background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;    
}
.top-content-img div svg{
    width:1.35rem;
    fill: white;
}
.top-content-info-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.top-content-go {
    display: none;
    
}
.top-content-go svg{
    height: 1.75rem;
    width: 1.75rem;
    fill: white;
    
}
.top-content-info h1,.top-content-info h2{
    margin: 0;
    padding: 0;
}
.top-content-info h1{
    font-size: 1.35rem;
    font-weight: 400;
}
.top-content-info h2{
    font-size: 1rem;
    font-weight: 300;
    opacity: 0.9;
}





@media screen and (max-width: 1024px){

.promoting-img-wrapper .promoting-songs-img{
    min-width: 100%;
    width: 100%;

    background-size:cover;
}
.background-area{

    height:160rem;


    
   
}
.Content-wrapper{
 

    height: 160rem;

    flex-direction: column;
    justify-content: flex-start;

}
.recommend-area{
    width: 100%;
    height: auto;
}
.top-rank-area{
    width: 100%;
    height: auto;

    background: transparent;
    padding: 0.75rem 0 0 0.75rem;
}
.top-content-wrapper{
    display: flex;

    flex-wrap: wrap;
}
.top-content{

    width: 100%;
    align-items: center;
    

}
.top-content-info{
    align-items: center;
}
.top-content-img{

    margin:0 0.35rem 0 0rem;
    

}
.top-content-info-wrapper{
    width: 92.5%;
    background: rgba(255, 255, 255, 0.1);
    padding-right: 0.5rem;

}

.top-content-go {
    display: inline;
}

@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-180rem) rotate(720deg);
        opacity: 0;
        border-radius: 30%;
    }

}
}
@media screen and (max-width: 768px){
.promoting-img-wrapper .promoting-songs-img{



    height: calc(15rem + 5vw);
}
.promoting-buttons-wrapper{

    width: 100vw;
    min-width: 100vw;
     height: calc(15rem + 5vw);
    
}
.promoting-btn{
    display: none;
}
.dots-container{
    width: 100%;
}
.background-area{
    width: 100vw;
}
.background-area{

    height:175rem;


    
   
}
.Content-wrapper{
 

    height: 175rem;

    flex-direction: column;
    justify-content: flex-start;

}
}
</style>