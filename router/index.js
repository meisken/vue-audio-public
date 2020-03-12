import Vue from 'vue'
import VueRouter from 'vue-router'
import loginMain from '../components/loginPage/loginMain.vue'
import audioMain from '../components/audioMain/audioMain.vue'
import loginArea from '../components/loginPage/login.vue'
import registerArea from '../components/loginPage/register.vue'
import mainpage from '../components/audioMain/pages/main.vue'
import uploadData from '../components/audioMain/pages/uploadSong.vue'
import singer from '../components/audioMain/pages/singer.vue'
import singleSong from '../components/audioMain/pages/singleSong.vue'
import album from '../components/audioMain/pages/album.vue'
import classify from '../components/audioMain/pages/SongByClass.vue'
import userAlbum from '../components/audioMain/pages/userAlbum.vue'


import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginMain',
    component: loginMain ,
    meta: { requiresAuth : false},    
    children:[
      {
        path: '/',
        component: loginArea,
        name:'login',
        meta: { requiresAuth : false},
      },
      {
        path: 'register',
        component: registerArea,
        name:'register',
        meta: { requiresAuth : false},
      },      
    ]
  },
  {
    path: '/main',
    name: 'main',
    component:audioMain ,
    meta: { requiresAuth : true },
    children:[
      {
        path:'/',
        component:mainpage,
        name:'home',
        meta: { requiresAuth : true },
      },
      {
        path:'/upload',
        component:uploadData,
        name:'upload',
        meta: { requiresAuth : true ,requiresAdmin : true},
        
      },
      {
        path:'/singer/:singerName',
        component:singer,
        name:'singer',
        meta: { requiresAuth : true },
      },  
      {
        path:'/singleSong/:songName',
        component:singleSong,
        name:'singleSong',
        meta: { requiresAuth : true },
      }, 
      {
        path:'/album/:albumName',
        component:album,
        name:'album',
        meta: { requiresAuth : true },
      },  
      {
        path:'/classify/:className',
        component:classify,
        name:'classify',
        meta: { requiresAuth : true },
      },                 
      {
        path:'/userAlbum/:userName',
        component:userAlbum,
        name:'userAlbum',
        meta: { requiresAuth : true },
      },  
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to,from,next) => {

  if(to.meta.requiresAuth){

    if(to.meta.requiresAdmin){
      
      if(firebase.auth().currentUser.email == 'abc@gmail.com'){
        
        next();
       
      }else{
        alert('you are not admin');
        next({path:'/main'})
      }
      return;
    }

    if(!firebase.auth().currentUser){
      next({path:'/'});
    }
    else{
      next();
    }
  }
  else{
    next();
  }
});
export default router
