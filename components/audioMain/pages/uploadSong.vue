<template>
    <div>
        language:<input type="text" v-model="songData.language" required><br>
        songName:<input type="text" v-model="songData.songName" required><br>
        song source (song file name):<input type="text" v-model="songData.songSrc" required><br>
        singer:<input type="text" v-model="songData.singer" required><br>
        song type:<input type="text" v-model="songData.type" required><br>
        song icon source(image file name)(there dont accept blank space)<input type="text" v-model="songData.songImgSrc" required><br>
        album: <input type="text" required v-model="songData.album"><br>
        <button @click="uploadData">upload</button>
        <div>
            singer name:<input type="text" v-model="singerData.singerName"><br>
            singer img source:<input type="text" v-model="singerData.singerImgSrc"><br>
            singer information<input type="text" v-model="singerData.singerInfo"><br>
            singer language<input type="text" v-model="singerData.language"><br>
            <button @click="uploadSingerData">upload singer data</button>
        </div>



        <div>
            album name: <input type="text" v-model="albumData.albumName"><br>
            album image source: <input type="text" v-model="albumData.albumImgSrc"><br>
            singer: <input type="text" v-model="albumData.singer"><br>
            type: <input type="text" v-model="albumData.type"><br>
            language: <input type="text" v-model="albumData.language"><br>
            <button @click="uploadAlbumData">upload album data</button>
        </div>
    </div>
</template>

<script>
import db from '../../firebase/firebaseinit'
export default {
 
    data(){
        return{
            songData:{
                language:"cantonese",
                songName:"",
                songSrc:"",
                singer:"",
                songImgSrc:"jpg",
                type:"normal",
                album:'',
                didItExitsit:false,

            },
            singerData:{
                singerName:'',
                singerImgSrc:'',
                singerInfo:'xxxxxxxxxxxxxxxx',
                language:'english',
                type:'normal'
            },
            albumData:{
                albumName:'',
                albumImgSrc:'',
                singer:'',
                type:'',
                language:''
            }
        }
    },
    methods:{
        uploadData(){
        
            if(this.language != "" && this.songName != "" && this.songSrc != "" && this.singer != "" && this.type != "" ){
                db.collection('song').add({
                    language:this.songData.language,
                    songName:this.songData.songName,
                    songSrc:this.songData.songSrc,
                    singer:this.songData.singer,
                    type:this.songData.type,
                    songImgSrc:this.songData.songImgSrc,
                    album:this.songData.album
                }).then(docRef => {
                    console.log(docRef);
                    alert('you are success sent the data to database ');
                    this.songData.language ="cantonese";
                    this.songData.songName ="";
                    this.songData.songSrc ="";
                    this.songData.singer ="";
                    this.songData.type ="normal";
                    this.songData.songImgSrc=".jpg";
                    this.songData.album = '';
                }).catch(err => {console.log(err)})            

            }else{
                
                
                alert('you have not fill all of the data yet' );    
             
            }
        },
        uploadSingerData(){
                db.collection('singer').add({
                    name:this.singerData.singerName,
                    singerImgSrc:this.singerData.singerImgSrc,
                    information:this.singerData.singerInfo,
                    language:this.singerData.language,
                    type:this.singerData.type

                }).then(() => {
                    this.singerData.singerName = '';
                    this.singerData.singerImgSrc = '';
                    this.singerData.singerInfo = 'xxxxxxxxxxxxxxxx';
                    this.singerData.language = 'english';
                    this.singerData.type = 'normal';

                    
                    alert('you are success sent the data to database ');

                }).catch(err => {console.log(err)})  
        },
        uploadAlbumData(){
                db.collection('album').add({
                    albumName:this.albumData.albumName,
                    albumImgSrc:this.albumData.albumImgSrc,
                    singer:this.albumData.singer,
                    type:this.albumData.type,
                    language:this.albumData.language,

                }).then(() => {
                    this.albumData.albumName = '';
                    this.albumData.albumImgSrc = '';
                    this.albumData.singer = '';
                    this.albumData.type = '';
                    this.albumData.language = '';

                    
                    alert('you are success sent the data to database ');

                }).catch(err => {console.log(err)})  
        }




    },
    mounted(){

    }
}
</script>

<style scoped>
input{
    width: 20vw;
}
</style>