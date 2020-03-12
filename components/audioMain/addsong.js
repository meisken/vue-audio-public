import db from '../firebase/firebaseinit'
export const addsong ={
    methods: {
        addSongToPlaylist(songName,singer){
            db.collection('song').where('songName','==',songName).get().then(doc => {
                 //doc.forEach(docObj => {.where('singer','==','mr.abc')
                
                doc.forEach(docObj => {
                
                    if(docObj.data().singer == singer){

                        var songobj={
                            songName:docObj.data().songName,
                            singerName:docObj.data().singer,
                            songImgSrc:require('../audioMain/singerImgDB/'+ docObj.data().songImgSrc),
                            songSrc:require('../audioMain/songDB/'+docObj.data().songSrc),          
                        }      
                        
                        this.$emit('sendSongInfo',songobj);                 
                    }
                    
                });
            });      
  
        }
    }
}