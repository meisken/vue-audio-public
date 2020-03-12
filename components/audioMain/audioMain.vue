<template>
    <div class="audio-mother">
        
        <audio src="" ref="audio" style="dispaly:none;" @timeupdate="AudioTimeupdate"></audio>
        <audioHeader  :Username="currentUser" :icon="userIcon" @showMusicPlayer="isMusicplayerShowMethod($event)" v-on:editProfileShowDirectiveFromHeader="editProfileShowMethod"></audioHeader>
        
        <div id="audioMeunContainer" > 
            <transition name="audioContainerSlider">      
            <div id="audioContainer" v-if="isMusicplayerShow" @touchstart="touchStartX = $event.targetTouches[0].clientX" @touchmove="moblieSlider($event)" >
                <div id="musicPlayer" :style="{'background-image' : 'linear-gradient(rgba(0,0,0,0.45) 0% ,rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.975) 100% ),url('+ musicPlayerBG +')'}">
                    <div id="musicPlayerSongInfo">
                        <h1 >{{ nowSongName }}</h1>
                        <h2>{{ nowSingerName }}</h2>
                    </div>
                    <div id="songTimer">
                        <span>{{ currentTimePrint }}</span>
                        <input type="range" :style="{'background': timeline }" max="100" min="0" v-model="currentPosition" @input="updateTime">
                        <span>{{ durationTimePrint }}</span>
                    </div>
                    <div id="playerButtonsWrapper"  >

                            <div id="playerButtons" >
                                <div><svg @click="playSong('restart')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 80.2"><g data-name="圖層 1"><path d="M57.4,87.2,48.9,73a21.81,21.81,0,0,1-6.3.9A23.9,23.9,0,1,1,66.4,48.4H51.5l23,36.7,23-36.7H82.6a40.07,40.07,0,1,0-40,41.7A38.66,38.66,0,0,0,57.4,87.2Z" transform="translate(-2.5 -9.9)"/></g></svg></div>
                                <div><svg @click="nextOrPrevious(-1)" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 89.96"><path d="M88.83,6.36C92.39,3.69,95,5.14,95,9.59V90.41c0,4.45-2.61,5.9-6.17,3.24L37.26,54.85c-3.56-2.67-3.63-7-.07-9.7Z" transform="translate(-5 -5.02)"/><path d="M16.21,5.15A11,11,0,0,1,27.43,15.83V84.17A11,11,0,0,1,16.21,94.85,11,11,0,0,1,5,84.17V15.83A11,11,0,0,1,16.21,5.15" transform="translate(-5 -5.02)"/></svg></div>
                                <div><svg @click="nextOrPrevious(0)"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.43 94.88"><rect x="60" width="22.5" height="100" v-if="!playOrPause" /><rect width="22.5" height="100" v-if="!playOrPause"/> <g id="圖層_1-2" data-name="圖層 1" v-if="playOrPause"><path  d="M71.8,41.09,3.75,1.35A7.74,7.74,0,0,0-7,3.55a7.77,7.77,0,0,0-1.28,4.2v79.5A7.7,7.7,0,0,0-.53,95a7.69,7.69,0,0,0,4.28-1.3L71.8,53.79a7.66,7.66,0,0,0,0-12.7Z" transform="translate(8.25 -0.07)"/></g></svg></div>
                                <div><svg @click="nextOrPrevious(1)" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 89.96"><path d="M11.17,93.64C7.61,96.31,5,94.86,5,90.41V9.59c0-4.45,2.61-5.9,6.17-3.24l51.57,38.8c3.56,2.67,3.63,7,.07,9.7Z" transform="translate(-5 -5.02)"/><path d="M83.79,94.85A11,11,0,0,1,72.57,84.17V15.83a11.23,11.23,0,0,1,22.43,0V84.17A11,11,0,0,1,83.79,94.85" transform="translate(-5 -5.02)"/></svg></div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 79.33" @click="soundShow = !soundShow"><g data-name="圖層 1" v-if="!haveSound"><path d="M50,10.3l-26.9,22L8,33.7a6.09,6.09,0,0,0-5.5,6.1V60.2A6.17,6.17,0,0,0,8,66.3l15.1,1.4L50,89.7a3.38,3.38,0,0,0,5.5-2.6V12.9A3.38,3.38,0,0,0,50,10.3Z" transform="translate(-2.5 -9.54)"/><path d="M88.9,50l8.2-8.2a1.39,1.39,0,0,0,0-1.9l-4.8-4.8a1.39,1.39,0,0,0-1.9,0l-8.2,8.2L74,35.1a1.39,1.39,0,0,0-1.9,0l-4.8,4.8a1.39,1.39,0,0,0,0,1.9L75.5,50l-8.2,8.2a1.39,1.39,0,0,0,0,1.9l4.8,4.8a1.39,1.39,0,0,0,1.9,0l8.2-8.2,8.2,8.2a1.39,1.39,0,0,0,1.9,0l4.8-4.8a1.39,1.39,0,0,0,0-1.9Z" transform="translate(-2.5 -9.54)"/></g><g data-name="圖層 1" v-if="haveSound"><path d="M49.1,11.1,22.7,32.7,7.9,34.1A6,6,0,0,0,2.5,40V60a5.82,5.82,0,0,0,5.4,5.9l14.8,1.4L49.1,88.9a3.3,3.3,0,0,0,5.4-2.6V13.6A3.32,3.32,0,0,0,49.1,11.1Z" transform="translate(-2.5 -10.34)"/><path d="M74,25.9a2.09,2.09,0,0,0-3-.3l-3.6,3.2a2,2,0,0,0-.2,2.8,29.36,29.36,0,0,1,0,36.6,2,2,0,0,0,.2,2.8L71,74.2a2,2,0,0,0,3-.3,38.42,38.42,0,0,0,8.5-24.1A37.3,37.3,0,0,0,74,25.9Z" transform="translate(-2.5 -10.34)"/><path d="M85,15.7a2.06,2.06,0,0,0-2.9-.2l-3.6,3.3a2,2,0,0,0-.2,2.8,44.36,44.36,0,0,1,0,56.6,2,2,0,0,0,.2,2.8l3.6,3.3a2,2,0,0,0,2.9-.2A53.08,53.08,0,0,0,97.5,49.8,52.54,52.54,0,0,0,85,15.7Z" transform="translate(-2.5 -10.34)"/></g></svg></div>
                                <transition name="soundRange">
                                    <div v-if="soundShow" class="soundRange"><input type="range" @input="songSound" v-model="soundValue" max="100" min="0" :style="{'background': soundLine}"></div>
                                </transition>
                            </div>                      
                    </div>

                </div>
                <div id="navContainer">
                    <div id="formFeedBar" :style="{'left' : formFeedBar}">
                        <div >
                            <div></div>                              
                            <span @click="playlistOrBrowse = true;browseOrPlaylist();">playlist<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg></span>
                        </div>
                        <div>                         
                            <span @click="playlistOrBrowse = false;browseOrPlaylist();"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.00024 47.99976" x="0px" y="0px"><path d="M4.00012,47.99976a4,4,0,0,1-2.82861-6.82862L18.34338,23.99976,1.17151,6.82837A4.00027,4.00027,0,0,1,6.82874,1.17114l20,20a4.00061,4.00061,0,0,1,0,5.65723l-20,20A3.98887,3.98887,0,0,1,4.00012,47.99976Z"></path></svg>browse</span>
                            <div id="playListFunction">
                                <div @click="playMode"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" :viewBox="loopViewboxValue"><path v-if="loopOrSingleloop" d="M16,3.06a11.57,11.57,0,0,0-1.44.07,12.27,12.27,0,0,0-3.75,1h0A13,13,0,0,0,3,16H0l4.5,6L9,16H6A10,10,0,0,1,23,9l2.13-2.13A13.11,13.11,0,0,0,16,3.06ZM27.5,10,23,16h3A10,10,0,0,1,9,23L6.84,25.16a13,13,0,0,0,14.35,2.72h0A13,13,0,0,0,29,16h3Z" transform="translate(0 -3.06)"/><path v-if="!loopOrSingleloop" d="M93,28.49H58.33l9-9a1.47,1.47,0,0,0,0-2.07l-5.93-5.93a1.48,1.48,0,0,0-2.08,0L37.78,33a1.43,1.43,0,0,0-.42,1.11,1.46,1.46,0,0,0,.42,1.12L59.3,56.79a1.48,1.48,0,0,0,2.08,0l5.93-5.92a1.48,1.48,0,0,0,0-2.08l-9-9H83.1V77.46h-66V39.93H27.35a2.39,2.39,0,0,0,1.29-.48,1.63,1.63,0,0,0,.43-1.14V30.24a1.39,1.39,0,0,0-.43-1.14,1.86,1.86,0,0,0-1.22-.49H7.4a2,2,0,0,0-1.19.52,1.59,1.59,0,0,0-.45,1.13v57a1.26,1.26,0,0,0,.53,1.07,1.89,1.89,0,0,0,1.1.44h86s.29,0,.71-.46a1.66,1.66,0,0,0,.35-1V30A1.48,1.48,0,0,0,93,28.49Z" transform="translate(-5.76 -11.08)"/></svg><span>{{ mode }}</span></div>
                                <div @click="spliceSong(0,'all')"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 62"><path d="M17.66,47.12A2.15,2.15,0,0,0,19.81,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,17.66,47.12Z" transform="translate(0)"/><path d="M28,47.12A2.15,2.15,0,0,0,30.15,45V27.73a2.15,2.15,0,1,0-4.3,0V45A2.15,2.15,0,0,0,28,47.12Z" transform="translate(0)"/><path d="M38.34,47.12A2.15,2.15,0,0,0,40.49,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,38.34,47.12Z" transform="translate(0)"/><path d="M53.85,10.41H40.09L38.32,4.48a6.33,6.33,0,0,0-6-4.48H23.69a6.33,6.33,0,0,0-6,4.48l-1.77,5.93H2.15a2.15,2.15,0,0,0,0,4.3H4.71V56.1A5.94,5.94,0,0,0,10.64,62H45.43a6,6,0,0,0,5.93-5.93V14.64h2.49A2.15,2.15,0,0,0,56,12.49a2.09,2.09,0,0,0-2.1-2.08Zm-32-4.7A2,2,0,0,1,23.69,4.3h8.69a1.93,1.93,0,0,1,1.87,1.42l1.38,4.69H20.36ZM47.06,56.54h-.15a1.67,1.67,0,0,1-1.54,1.12H10.64A1.67,1.67,0,0,1,9,56V14.64H47.06Z" transform="translate(0)"/></svg><span> remove all</span></div>

                            </div>                               
                        </div>
                     
                    </div>
                    <div id="wrapperContent" :style="{'left' : wrapperContent}">
                        
                        <div id="browseContent">
                            <div id="home" class="wrapperBrowseContent" @click="$router.push('/main')">                                
                                <div>
                                    <span>Home</span>
                                    <!--<img src="./audioImg/goSlim.png" alt="">-->               
                                </div>                                
                            </div>                              
                            <div id="BrowseByLanguage" class="wrapperBrowseContent">
                                <div @click="exploreLanguage = !exploreLanguage">
                                    <span>by language</span>
                                    <img src="./audioImg/goSlim.png" alt="" :style="[exploreLanguage ? {'transform': 'rotate(90deg)'} : {'transform' : 'rotate(0deg)'}]">                    
                                </div>
                                <transition name="slider">
                                    <ul v-if="exploreLanguage">
                                        <router-link :to="{name:'classify',params:{className:classifyLang.name}}" v-for="classifyLang in classifyLangs" :key="classifyLang.index"><li>{{ classifyLang.name }}</li></router-link>                           
                                    </ul>
                                </transition>
                            </div>
                            <div id="BrowseByMusic" class="wrapperBrowseContent">
                                <div @click="exploreMusic = !exploreMusic"> 
                                    <span>by music</span>
                                    <img src="./audioImg/goSlim.png" alt="" :style="[exploreMusic ? {'transform': 'rotate(90deg)'} : {'transform' : 'rotate(0deg)'}]">                
                                </div>
                                <transition name="slider">
                                    <ul v-if="exploreMusic">
                                        <router-link :to="{name:'classify',params:{className:classifyMusic.name}}"  v-for="classifyMusic in classifyMusics" :key="classifyMusic.index"><li>{{ classifyMusic.name }}</li></router-link>                           
                                    </ul>
                                </transition>
                            </div>
                            <div id="uploadSong" class="wrapperBrowseContent" @click="$router.push('/upload')"> 
                                <div>
                                    <span>upload song</span>
                                    <!--<img src="./audioImg/goSlim.png" alt="">-->               
                                </div>                                
                            </div>   
                            <div id="myAlbum" class="wrapperBrowseContent" @click="$router.push({name:'userAlbum',params:{userName:currentUser}})">                                
                                <div>
                                    <span>my albums</span>
                                    <!--<img src="./audioImg/goSlim.png" alt="">-->               
                                </div>                                
                            </div>                              
 
                                                                               
                        </div>
                        
                        <div id="playListWrapper">
                            <div class="playQueues" @click.stop="CutinPlay(index)" v-for="(song,index) in songPlaylist" :key="index" :style="[index == currentSong ? { 'background' : '#5047C7' } : {'background':'black' }]">
                                <div class="playQueueSongInfo" >
                                    <span class="playQueueSongImg" :style="[index == currentSong ? {'transform': 'rotate('+ currentPosition * 72  +'deg)'} : {},{'background-image' : 'url('+ song.songImgSrc +')' }]"></span>
                                    <span class="playQueueSongName">
                                        <h1>{{ song.songName  }}</h1>
                                        <h2>{{ song.singerName  }}</h2>
                                    </span>
                                </div>
                                <div class="playQueuesButtons">
                                    <span @click.stop="$router.push({name:'singleSong',params:{songName:song.songName}})"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.6 60"><path d="M67,62a.94.94,0,0,1-1,1H38a1,1,0,0,1,0-2H66A.94.94,0,0,1,67,62Zm-1-9H38a1,1,0,0,0,0,2H66a1,1,0,0,0,0-2Zm1-7a.94.94,0,0,0-1-1H48v2H66A.94.94,0,0,0,67,46Zm0-8a.94.94,0,0,0-1-1H48v2H66A.94.94,0,0,0,67,38Zm8-15H48v4H73V73H31V50H27V75a2,2,0,0,0,2,2H75a2,2,0,0,0,2-2V25A2,2,0,0,0,75,23ZM28,28.5l13.6-3.4v8.5a5.86,5.86,0,0,0-3.3-1c-2.9,0-5.3,2-5.3,4.5s2.4,4.5,5.3,4.5,5.3-2,5.3-4.5V18c0-.67-.49-1-1.2-1L26.8,20.9a1.08,1.08,0,0,0-.8,1V37.4a5.86,5.86,0,0,0-3.3-1c-2.9,0-5.3,2-5.3,4.5s2.4,4.5,5.3,4.5,5.3-2,5.3-4.5Z" transform="translate(-17.4 -17)"/></svg></span>
                                    <span @click.stop="collectSong(song.songName,song.singerName)"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.58 162.87"><path d="M230.93,233.6a6.53,6.53,0,0,1-3.84-1.24l-44.85-32.59-44.85,32.59a6.52,6.52,0,0,1-10-7.29l17.13-52.73L99.64,139.75A6.52,6.52,0,0,1,103.47,128h55.44L176,75.24a6.51,6.51,0,0,1,6.2-4.51h0a6.49,6.49,0,0,1,6.2,4.51L205.57,128H261a6.52,6.52,0,0,1,3.84,11.79L220,172.34l17.13,52.73a6.5,6.5,0,0,1-6.19,8.53ZM114.19,138l38.23,27.78a6.49,6.49,0,0,1,2.36,7.29L140.18,218l38.23-27.78a6.5,6.5,0,0,1,7.66,0L224.3,218,209.7,173a6.5,6.5,0,0,1,2.37-7.29L250.3,138H203a6.51,6.51,0,0,1-6.2-4.5l-14.6-44.94-14.6,44.94a6.51,6.51,0,0,1-6.2,4.5ZM261,138h0ZM178.93,78.33Z" transform="translate(-96.95 -70.73)"/></svg></span>
                                    <span @click.stop="spliceSong(index,1)"><svg  data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 62"><path d="M17.66,47.12A2.15,2.15,0,0,0,19.81,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,17.66,47.12Z" transform="translate(0)"/><path d="M28,47.12A2.15,2.15,0,0,0,30.15,45V27.73a2.15,2.15,0,1,0-4.3,0V45A2.15,2.15,0,0,0,28,47.12Z" transform="translate(0)"/><path d="M38.34,47.12A2.15,2.15,0,0,0,40.49,45V27.73a2.15,2.15,0,1,0-4.3,0h0V45A2.15,2.15,0,0,0,38.34,47.12Z" transform="translate(0)"/><path d="M53.85,10.41H40.09L38.32,4.48a6.33,6.33,0,0,0-6-4.48H23.69a6.33,6.33,0,0,0-6,4.48l-1.77,5.93H2.15a2.15,2.15,0,0,0,0,4.3H4.71V56.1A5.94,5.94,0,0,0,10.64,62H45.43a6,6,0,0,0,5.93-5.93V14.64h2.49A2.15,2.15,0,0,0,56,12.49a2.09,2.09,0,0,0-2.1-2.08Zm-32-4.7A2,2,0,0,1,23.69,4.3h8.69a1.93,1.93,0,0,1,1.87,1.42l1.38,4.69H20.36ZM47.06,56.54h-.15a1.67,1.67,0,0,1-1.54,1.12H10.64A1.67,1.67,0,0,1,9,56V14.64H47.06Z" transform="translate(0)"/></svg></span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            </transition> 
            <div class="pages" >
                <router-view v-on:sendSongInfo="getSongInfo($event)" v-on:playnow="spliceSongToOne($event)" v-on:collectSongdirective="collectSong($event.songName,$event.singerName)" v-on:addNewAlbum="showAddNewAlbumDirective" v-on:editProfileShowDirective="editProfileShowMethod"></router-view>
            </div>
            
        </div>

        <div class="functionBoxBackground" v-if="UserAlbumShow" @click.self="UserAlbumShow = false;">
            <div class="functionBoxContainer">
                <header>
                    <div class="userAlbumTitleWrapper">
                        <div>{{ newAlbumPageShow ? 'name your new album ' : 'select a album' }}</div>
                        <span @click="UserAlbumShow = false;"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.92 25.92"><path d="M22.15,25l-9.54,9.55a2,2,0,0,1-2.84,0,2,2,0,0,1,0-2.83l9.54-9.54L9.78,12.61a2,2,0,1,1,2.83-2.83l9.54,9.54,9.54-9.54a2,2,0,1,1,2.83,2.83L25,22.15l9.55,9.54a2,2,0,1,1-2.83,2.83L22.15,25Z" transform="translate(-9.19 -9.19)"/></svg></span>
                    </div>

                    <div class="userAlbumsWrapper" v-if="!newAlbumPageShow">
                        <div class="userAlbums" v-for="(userAlbumInfo,index) in userAlbumInfoTemp" :key="index" @click="addSongToDB(index)">
                            <div :style="{'background-image':'url(' + require('../audioMain/albumImgDB/' + userAlbumInfo.albumImgSrc )+')'}" class="userAlbumImg"></div>
                            <span>{{ userAlbumInfo.albumName }}</span>
                        </div>
                        <div class="userAlbums addNewAlbum" @click="showNewAlbumArea">
                            <div class="NewAlbumContent">
                                <span><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g  data-name="圖層 1"><rect y="25" width="60" height="10"/></g><g id="圖層_1-3" data-name="圖層 1"><rect x="25" width="10" height="60"/></g></svg></span>
                                <div>add new album</div>
                            </div>
                        </div>
                    </div>

                    <div v-if="newAlbumPageShow" class="newAlbumPage">
                        <div class="nameingAndSubmit">
                            <span><input type="text" required placeholder="album name..." v-model="userAlbumNameValue"></span>
                            <div @click="submitNewAlbumInfo">submit</div>
                        </div>
                        <div class="imagesArea">
                            <p>select a image</p>
                            <div class="selectingImgWrapper">
                                <span @click="imageOfselected(index,img)" v-for="(img,index) in images" :key="index" :style="{'background-image' : 'url('+ require('../audioMain/albumImgDB/' + img ) +')' }"></span>
                            </div>
                        </div>
                        <div class="cancelAddNewAlbumBtnWrapper">
                            <span class="cancelAddNewAlbumBtn" @click="newAlbumPageShow = !newAlbumPageShow;collectSong('','');">cancel</span>
                        </div>
                   
                    </div>

                </header>
                <footer v-if="!newAlbumPageShow">
                    <span >song was selected :</span><label> {{ selectedSongTemp }}</label>
                </footer>
            </div>
        </div>

        <transition name="successSlider">
        <div class="successPrompt" v-if="successPromptShow">
            <span>{{ successedPromptText }}</span>
            <svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.06 60"><path d="M87.6,30.8,42.7,77.5a6.17,6.17,0,0,1-9,0L11.3,54a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l18,18.8,40.4-42a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,87.6,30.8Z" transform="translate(-9.43 -19.45)"/></svg>
        </div>
        </transition>


        <div id="editProfile" class="functionBoxBackground" @click.self="editProfileShow = false;" v-if="editProfileShow">
            <div class="functionBoxContainer" id="editProfileContainer">
                <div class="userAlbumTitleWrapper">
                    <div>edit profile</div>
                    <span @click="editProfileShow = false;"><svg data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.92 25.92"><path d="M22.15,25l-9.54,9.55a2,2,0,0,1-2.84,0,2,2,0,0,1,0-2.83l9.54-9.54L9.78,12.61a2,2,0,1,1,2.83-2.83l9.54,9.54,9.54-9.54a2,2,0,1,1,2.83,2.83L25,22.15l9.55,9.54a2,2,0,1,1-2.83,2.83L22.15,25Z" transform="translate(-9.19 -9.19)"/></svg></span>
                </div>
                 
                <div class="editProfileBodyWrapper">
                    <div class="editProfileBodyLeft">
                        <canvas class="userIcon" ref="imgCanvas"></canvas>
                        <span>{{ currentUser }}</span>
                        <div class="uploadImageBtn" @click="uploadImageClick">upload icon</div>
                        <input type="file" id="getUserImageFileArea" @input="saveUploadImage($event)" accept=".jpg,.png">
                    </div>
                    <div class="editProfileBodyRight">
                        <div class="userNameAndPasswordArea">
                            <div>New Username: </div>
                            <input @click="editProfileInputLight(0)" type="text" v-model="newUserNameTemp">
                            <div>New Password:</div>
                            <input @click="editProfileInputLight(1)" type="password" v-model="newUserPasswordTemp">
                        </div>
                        <span class="profileSubmit" @click="profileSubmit">submit</span>

                    </div>
                </div>  
                <div class="HintWord">(where you don't want to update, leave it blank)</div>
            </div>
        </div>

    </div>
</template>

<script>
import db from '../firebase/firebaseinit'
import firebase from 'firebase'
import audioHeader from './audioHeader'
import {bus} from '../../main'

export default {
    components:{
        audioHeader,
    },
    data(){
        return{
            currentUser:'name',
            userEmail:'',
            userIcon:null,                                    
            isMusicplayerShow:true,
            mode:'all',

            touchStartX:null,
            touchEndX:null,
  

            classifyLangs:[
                {name:'cantonese',linkPath:'classify/cantonese'},
                {name:'english',linkPath:'classify/english'},  
                /*{name:'japanese',linkPath:'classify/japanese'},*/
                {name:'mandarin',linkPath:'classify/mandarin'},                            
            ],
            classifyMusics:[
                {name:'normal',linkPath:'classify/normal'},
                /*{name:'bass',linkPath:'classify/bass'},  */
                {name:'edm',linkPath:'classify/edm'},
                {name:'rock',linkPath:'classify/rock'},                            
            ],    
            exploreLanguage:false,        
            exploreMusic:false,  

            formFeedBar:'0%',
            wrapperContent:'0%',
            loopOrSingleloop:true,
            loopViewboxValue:'0 0 32 25.89',
            playlistOrBrowse:true,

            soundShow:false,
            playOrPause:true,
            haveSound:true,
            history:false,

            currentTime:0,
            musicDuration:0,
            currentPosition:0,
            soundValue:50,
            currentSong:0,
            musicPlayerBG:null,
            
            songPlaylist:[],

            
            UserAlbumShow:false,
            userAlbumInfoTemp:[],
            selectedSongTemp:'',
            selectedSingerTemp:'',

            userAlbumNameValue:'',
            userAlbumImgSrcValue:'DifferentWorld.jpg',
            newAlbumPageShow:false,
            images:[],

            successPromptShow:false,
            successedPromptText:'',

            editProfileShow:false,

            newUserNameTemp:'',
            newUserPasswordTemp:'',
            newUserImageTemp:null,
   

        }
    },
    methods:{
        isMusicplayerShowMethod(e){
            this.isMusicplayerShow = e;
        },
        getUserName(doc){
            this.currentUser = doc;
        },
        getSongInfo(sendSongInfo){
         
            this.songPlaylist.push(sendSongInfo); 
            
            this.successPromptShowMethod('added song successfully');
            if(this.songPlaylist.length == 1){
             
                this.setSongSrc();
            } 
            if(this.history == false){

                this.browseOrPlaylist('-100%','-100%');
                this.playSong('play');//this function is not important

            }             
            this.history = true;             
            localStorage.setItem(this.currentUser , JSON.stringify(this.songPlaylist));


            
         
        },
        spliceSongToOne(e){
       

            var packageTheSongObj ={
                songName:e.songName,
                singerName:e.singer,
                songImgSrc:require('./singerImgDB/'+ e.songImgSrc),
                songSrc:require('./songDB/'+ e.songSrc),                   
            }

            this.currentSong = 0;     
            this.songPlaylist.splice(0,0,packageTheSongObj);

            this.setSongSrc();
            this.playSong('play');

            this.successPromptShowMethod('added song successfully');
            localStorage.setItem(this.currentUser , JSON.stringify(this.songPlaylist));

            this.history = true;   

        },
        AudioTimeupdate(){
     
            this.currentTime = this.$refs.audio.currentTime;
      
            if(!this.$refs.audio.duration){
                this.musicDuration = 0.00;

            }else{
                this.musicDuration = this.$refs.audio.duration;
            }

            this.currentPosition = this.currentTime / this.musicDuration *100;

            if(this.currentPosition == 100 ){
                

                if(this.currentSong == this.songPlaylist.length-1 && this.loopOrSingleloop){
       
                        
                    this.nextOrPrevious(0);
                    this.$refs.audio.load(); //prevent double activate two time
                    return false;
   
                                 
                }else if( this.currentSong < this.songPlaylist.length-1 && this.loopOrSingleloop){
                    this.nextOrPrevious(1);
                }else{
                  
                    this.playSong('restart');
                }

                
            }
           
        },
        moblieSlider(e){

            if(this.touchStartX > e.changedTouches[0].pageX+70){
         
                bus.$emit('closeAll','close');
            }

        },

        updateTime(){      

            this.$refs.audio.currentTime = this.currentPosition / 100 * this.musicDuration;
          
        },   
        songSound(){
            if(this.soundValue <= 5 ){
                this.soundValue = 0; 
                this.haveSound = false;
            }else{
                this.haveSound = true;
      
            }
            this.$refs.audio.volume = this.soundValue/100;
        },       
        browseOrPlaylist(){
            if(this.playlistOrBrowse){
                this.formFeedBar = '-100%';
                this.wrapperContent = '-100%';
            }else{
                this.formFeedBar = '0%';
                this.wrapperContent = '0%';                    
            }
            

        },   
        playMode(){
            this.loopOrSingleloop = !this.loopOrSingleloop;
            if(this.loopOrSingleloop){
                this.loopViewboxValue = '0 0 32 25.89';
                this. mode = 'all';
                
            }else{
                this.loopViewboxValue = '0 0 88.66 77.7';
                this. mode = 'single';
                
            }
        },    
        setSongSrc(){
         
            this.$refs.audio.src = this.songPlaylist[this.currentSong].songSrc;             
            this.$refs.audio.load(); 
            this.musicPlayerBG = this.songPlaylist[this.currentSong].songImgSrc;   

        },
        playSong(directive){
            if(directive == 'play' || directive == 'restart'){
                this.playOrPause = false;
                if(directive == 'restart'){
                    this.$refs.audio.currentTime = 0;
                }
                        
            }
          
            if(!this.playOrPause){
         
                this.$refs.audio.play();            
                            
            }else{
                this.$refs.audio.pause();
            }               
             
        },
        nextOrPrevious(value){
       
            this.currentSong +=  value;
            
            if(this.currentSong >= this.songPlaylist.length || this.currentSong < 0){
                
                if(this.currentPosition == 100 ){this.playOrPause = true;}

                this.currentSong -= value;
               
                if(this.songPlaylist.length <= 0){alert('The play list have no song,please choose some song you like');}

                return;
            }else if(value != 0){               
                this.setSongSrc();                    
            }

            if(value == 0){
                
                this.playOrPause = !this.playOrPause;
                this.playSong(); 
            }else{

                this.playSong('play');  
            }
         
        },
        CutinPlay(index){
            this.currentSong = index;
            
            this.setSongSrc();
            this.playSong('play');
        },
        spliceSong(index,amount){

            var isItTheFirstSong = false;
    
            if(amount == 'all'){
                
                if(confirm('are you sure?') == false){
                    return
                }
                amount = this.songPlaylist.length;
                
            }

            if(index == this.currentSong && this.currentSong == 0 && index == 0){
                isItTheFirstSong =true;
            }        

            this.songPlaylist.splice(index,amount);

            localStorage.setItem(this.currentUser , JSON.stringify(this.songPlaylist));
            if(this.songPlaylist.length == 0){
                
                
                localStorage.removeItem(this.currentUser);
                this.history = false;

                this.$refs.audio.src = null;
                this.currentPosition = 50;
                
                this.playOrPause = true;
                this.$refs.audio.pause();
                this.currentSong = 0;

                return;
            } 
            /*if(index > this.currentSong){

            }*/
            if(index < this.currentSong){
                this.currentSong -= 1;

            }
            if(index == this.currentSong){
                if(isItTheFirstSong){
                    this.setSongSrc();
                    this.playSong('play');
                }else{
                    this.nextOrPrevious(-1);
                }

            }
       
            
        },
        collectSong(song,singer){
            this.UserAlbumShow = true;

            this.userAlbumInfoTemp = [];
            this.selectedSongTemp = song;
            this.selectedSingerTemp = singer;
            db.collection('userAlbum').where('username','==',this.currentUser).get().then(doc =>{
                doc.forEach(el =>{
                    this.userAlbumInfoTemp.push(el.data());
                 
                })
            })
            
        },
        addSongToDB(albumIndex){
            
            var refTemp = '';
            db.collection('song').where('songName','==',this.selectedSongTemp).where('singer','==',this.selectedSingerTemp).get().then(doc =>{
                doc.forEach(el =>{
                    refTemp = el.ref.id;
                    this.userAlbumInfoTemp[albumIndex].songs.push(refTemp);

          

                    db.collection('userAlbum').where('albumName','==',this.userAlbumInfoTemp[albumIndex].albumName).get().then(doc =>{
                        doc.forEach(el =>{

                                el.ref.update({
                                    songs:this.userAlbumInfoTemp[albumIndex].songs
                                });
              
                        })
                    }).then(() => {
                        bus.$emit('addedNewSong','')
                        this.UserAlbumShow = false;

        
                        this.successPromptShowMethod('added song to your album successful');

                    })                    
                })
            });
            


        },
        showNewAlbumArea(){
            this.newAlbumPageShow = !this.newAlbumPageShow;
            this.images = [];
            db.collection('image').get().then(doc =>{
                doc.forEach(el =>{
                    this.images.push(el.data().imageSrc);
                
                })
            })
        }, 
        submitNewAlbumInfo(){
            db.collection('userAlbum').add({
                username:this.currentUser,
                songs:[],
                albumImgSrc:this.userAlbumImgSrcValue,
                albumName:this.userAlbumNameValue,
                DoTableShow:false,

            }).then(() =>{
                bus.$emit('addedNewSong','');
           
    
                this.successPromptShowMethod('added new album successful');

                this.userAlbumNameValue ='';
                this.newAlbumPageShow = false;
                if(this.selectedSongTemp !== ''){
                    
                    this.collectSong(this.selectedSongTemp,this.selectedSingerTemp);
                }else{
                    this.UserAlbumShow = false;
                }

            })
        },
        imageOfselected(imgIndex,imgSrc){
            this.userAlbumImgSrcValue = imgSrc;

            document.querySelectorAll('.selectingImgWrapper span').forEach(el =>{
                el.style.border = 'none';
            });
            document.querySelectorAll('.selectingImgWrapper span')[imgIndex].style.border = '2px solid #5047C7';
        },
        showAddNewAlbumDirective(){

            this.UserAlbumShow = true;
            this.showNewAlbumArea();
        },

        successPromptShowMethod(text){
            this.successedPromptText = text;
            this.successPromptShow = true;
            setTimeout(() => {
                this.successPromptShow = false;
            }, 3000);
        },
        editProfileShowMethod(){
       
            this.editProfileShow = true;
            setTimeout(() => {
                this.showTheSelectedImgOnBoard(this.userIcon);
            }, 1);
        },
        editProfileInputLight(index){
            var title = document.querySelectorAll('.userNameAndPasswordArea div');
            var inputArea = document.querySelectorAll('.userNameAndPasswordArea input');
            for(var i = 0; i < title.length; i++){
                title[i].style.opacity = '0.7';
                inputArea[i].style.opacity = '0.7';
            }

            title[index].style.opacity = '1';
            inputArea[index].style.opacity = '1';
        },
        uploadImageClick(){
            document.getElementById('getUserImageFileArea').click();
        },
        saveUploadImage(e){

            this.newUserImageTemp = e.target.files[0];
            this.showTheSelectedImgOnBoard(this.newUserImageTemp);

           
        },
        showTheSelectedImgOnBoard(imageSrc){
   
            var canvas = this.$refs.imgCanvas;
     
            var img = new Image;
            img.onload = function(){
                canvas.getContext("2d").drawImage(img,0,0, img.width, img.height,0, 0, canvas.width, canvas.height);
            }
          
            if(typeof(imageSrc) == 'string'){
                
                img.src = imageSrc;
                
            }else{
                img.src = URL.createObjectURL(imageSrc);
            }
            
        },
        profileSubmit(){
           

            if(this.newUserNameTemp !== ''){

                db.collection('userInfo').where('name','==',this.currentUser).get().then(doc =>{
                    doc.forEach(el =>{
                        el.ref.update({
                            name:this.newUserNameTemp
                        })
                        localStorage.removeItem(this.currentUser);
                        localStorage.setItem(this.newUserNameTemp , JSON.stringify(this.songPlaylist));
                    })
                });
                db.collection('userAlbum').where('username','==',this.currentUser).get().then(doc =>{
                    doc.forEach(el =>{
                        el.ref.update({
                            username:this.newUserNameTemp
                        })
                    })
                })
                firebase.auth().signOut().then(() =>{
                    alert('updated successful,please log in again');
                    this.$router.push('/');
                });         
            }
            if(this.newUserPasswordTemp !== ''){

                var self = this;
                var oldpassword = prompt('please enter you old password for verify your authentication','your old password...');


                firebase.auth().signInWithEmailAndPassword(this.userEmail, oldpassword).then(() =>{

                    firebase.auth().currentUser.updatePassword(this.newUserPasswordTemp).then(function() {

                        self.successPromptShowMethod('changed password successful');

                        firebase.auth().signOut().then(() =>{
                            alert('updated successful,please log in again');
                            this.$router.push('/');
                        });  

                    }).catch(function(error) {
                        alert(error);
                    });

                }).catch(function(error) {
                    alert(error);
                    alert('update your password fail');

                });

            }

            if(this.newUserImageTemp != null){
    
                firebase.storage().ref().child(`${ 'user_icon/' + this.newUserImageTemp.name}`).put(this.newUserImageTemp).on('state_changed',snapshot =>{
                    
      
                    if(snapshot.bytesTransferred / snapshot.totalBytes == 1){
                        firebase.storage().ref().child(`${ 'user_icon/' + this.newUserImageTemp.name}`).getDownloadURL().then(url =>{
                            
                            db.collection('userInfo').where('name','==',this.currentUser).get().then(doc =>{
                                doc.forEach(el =>{
                                    el.ref.update({
                                        iconSrc:url
                                    }).then(() =>{
                                        this.successPromptShowMethod('uploaded image successful');
                                        firebase.auth().signOut().then(() =>{
                                            alert('updated successful,please log in again');
                                            this.$router.push('/');
                                        }); 
                                    })
                                })
                            });    
                        }).catch(err =>{
                            console.log(err);
                        });
                    }
                })
                    
            }
            this.editProfileShow = false;
      
        }
    },

    computed:{
    
        timeline(){
            return 'linear-gradient(90deg, rgb(144,109,237)'+ this.currentPosition +'%,rgb(255,255,255)' + this.currentPosition + '%)'
        },
        soundLine(){
        
            return 'linear-gradient(90deg, rgb(144,109,237)'+ this.soundValue +'%,rgb(255,255,255)' + this.soundValue + '%)'
        },
        currentTimePrint(){
            return (this.currentTime/60).toFixed(2);
        },
        durationTimePrint(){
            
            return (this.musicDuration/60).toFixed(2);
        },
        nowSongName(){
            if(this.history && this.songPlaylist.length != 0){
                
                return this.songPlaylist[this.currentSong].songName;                
            }
            return 'please'
        },
        nowSingerName(){
            if(this.history && this.songPlaylist.length != 0){
                return this.songPlaylist[this.currentSong].singerName;
            }
            return 'select a song'
        },        
    },
    created(){
        
        if(firebase.auth().currentUser){
               
            db.collection('userInfo').where('email','==',firebase.auth().currentUser.email).get().then(doc =>{
                doc.forEach(userData => {
                    this.currentUser = userData.data().name;
                    this.userIcon = userData.data().iconSrc;
                    this.userEmail = userData.data().email;
                    
                                
                });
                var history = JSON.parse( localStorage.getItem(this.currentUser));   
                if(history != null){
                    this.songPlaylist = history;
                    this.history = true;    
                    this.setSongSrc();  
                        
                }else{
                    this.musicPlayerBG = require('./audioImg/musicDefaultBG.png');
                } 
          
            });
        }
        if(this.userIcon == null){
            this.userIcon = 'https://firebasestorage.googleapis.com/v0/b/vue-database-20700.appspot.com/o/user_icon%2FFaithLogo.png?alt=media&token=001c1937-4acf-4cad-bd74-d9f46a992a57';
        }
     
    },    
    mounted(){
        var self = this;
        
        this.$refs.audio.volume = 0.5;
        this.soundValue = this.$refs.audio.volume * 100;
        
        window.addEventListener('keyup',function(e){
        
       
            switch(e.keyCode){
                case  9:self.playlistOrBrowse = !self.playlistOrBrowse;self.browseOrPlaylist();break;
                case 32:self.nextOrPrevious(0);break;

                case 37:self.nextOrPrevious(-1);break;
                case 39:self.nextOrPrevious(1);break;
            
                case 38:self.soundValue += 10;self.songSound();break;
                case 40:self.soundValue -= 10;self.songSound();break;
            }


        });
  
        
    },

    beforeRouteUpdate(to,from,next){
      
        bus.$emit('closeAll','close');
        
        next();
    },

}
</script>

<style scoped> 

#audioMeunContainer{
    display: flex;

   
}
#audioContainer{
    width: calc(15rem + 7vw);
    min-width: calc(15rem + 7vw);
    
 
    
}
#musicPlayer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    height: 15rem;
    padding-bottom: 1rem;
    
    background-image: linear-gradient(rgba(0,0,0,0.5) 0% ,rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.975) 100% ),url('./audioImg/mainBG.png');
    background-repeat: no-repeat,no-repeat;
    background-size: 100% 100%,100%;
}
#musicPlayerSongInfo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 10%;
 
    height: 10rem;
}
#musicPlayerSongInfo h1,#musicPlayerSongInfo h2{
    padding: 0;
    margin: 0;
    
    color: white;
}
#musicPlayerSongInfo h1{
    font-size: calc(1.85rem + 0.25vw);
    font-weight: 400;
    line-height: 2.25rem;
}
#musicPlayerSongInfo h2{
    margin-top:0.75rem; 
    font-size: calc(1.35rem + 0.2vw);
    font-weight: 300;

}
#musicPlayer #songTimer{
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0rem 0 1rem 0;
    width: 100%;
    height: 1rem;
}
#musicPlayer #songTimer input[type="range"]{
    margin: 0 0.5rem;
    width: 65%;
    height: 0.3rem;

    border-radius: 9999px;
    
    -webkit-appearance: none;  
    outline: none;

    opacity: 0.75;

    cursor: pointer;
    background: linear-gradient(90deg, rgb(144,109,237) 50%,rgb(255,255,255) 50%);
}
#musicPlayer #songTimer input[type="range"]:hover{
    opacity:1;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
}
#musicPlayer #songTimer input[type="range"]::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;

    background: #906DED;
    border-radius: 99999px;

    cursor: pointer;
    
    width:0.5rem;
    height: 0.5rem;

    transform: scale(2);   

}
#musicPlayer #songTimer input[type="range"]::-moz-range-thumb{

    width:1.25rem;
    height: 1.25rem;

    background: #906DED;
    border-radius: 99999px;

    width:0.5rem;
    height: 0.5rem;
    
    transform: scale(2);
    cursor: pointer;    
}
#musicPlayer #songTimer span{
    color: white;
    width: 2rem;
    font-weight: 300;
}
#playerButtonsWrapper{
    display: flex;
    justify-content: center;
    width: 100%;
}
#playerButtons{
    display: flex;
    
    align-items: center;
    justify-content: space-around;
    transition: 0.75s;

    width: 85%;

}
#playerButtons div:not(.soundRange){
    width: 1.25rem;
   
}
#playerButtons div svg{
    
    cursor: pointer;
    fill: white;
    transition: 0.15s linear;
}
.soundRange{
    width: 3.5rem;
    height: 0.7rem;
    display: flex;
    align-items: flex-start;


}
#playerButtons .soundRange input{
    transform:scaleX(1.5);
    width: 100%;
    height: 0.25rem;

    border-radius: 9999px;
    
    -webkit-appearance: none;  
    appearance: none;  
    
    outline: none;
    cursor: pointer;

    
}

#playerButtons .soundRange input::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;

    width: 0.5rem;
    height: 0.5rem;
    transform: scale(1.1,1.75);
    
    background: #906DED;
    border-radius: 99999px;
    
    cursor: pointer;
}
#playerButtons .soundRange input::-moz-range-thumb{


    width: 0.5rem;
    height: 0.5rem;
    transform: scale(1.1,1.75);
    
    background: #906DED;
    border-radius: 99999px;

    cursor: pointer;    
}

.soundRange-enter-active,.soundRange-leave-active{
    transition: 0.75s;
}
.soundRange-enter,.soundRange-leave-to{
    width: 0rem;
}
.soundRange-enter-to ,.soundRange-leave{
    width: 3.5rem;
}
#playerButtons div svg:hover{
    fill: #906DED;
}

#navContainer{
    overflow-x: hidden;

    width: 100%;
    height: calc(100vh - 19rem);
    
    background: black;
    color: white;
    

}
#formFeedBar{
    width: 200%;
    height: 2rem;
    
    display: flex;
    justify-content: space-around;

    transition: 1s;
    position: relative;


}
#formFeedBar > div {
    display: flex;
    justify-content: space-between;
 

    width: 100%;
    padding: 0 1%;

    font-size: 1.2rem;
    font-weight: 300;
}
#formFeedBar div span:hover,#formFeedBar #playListFunction div:hover{
    color: #906DED;
    cursor: pointer;

}
#formFeedBar div span:hover svg,#formFeedBar #playListFunction div:hover svg{
    fill:#906DED; 
    
}
#formFeedBar div span {

    cursor: pointer;
    display: flex;

}
#formFeedBar div span svg{
    
    width: 0.75rem;
    height: 1.75rem; 
    
    fill: white; 
     
 
}

#playListFunction{
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
}

#formFeedBar #playListFunction div{
    display: flex;
    align-items: center;
    margin-left: 1rem;
}
#formFeedBar #playListFunction div span{
    font-size: 1.3rem;
    margin-left: 0.25rem;
    /*display: none;*/

}
/*
#formFeedBar #playListFunction div:hover span{
    display:inline;

}*/
#formFeedBar #playListFunction div{

}
#formFeedBar #playListFunction div:first-of-type svg{
    width: 1.2rem;
    height: 1.5rem;
}
#formFeedBar #playListFunction div:last-of-type svg{
    width: 1.1rem;
    height: 1.5rem;
}
#formFeedBar #playListFunction svg{

    margin-left: 0.25rem;

    fill: white;


}

#formFeedBar div:first-child span svg{
    margin:0 0 0 0.3rem;
}
#formFeedBar div:nth-child(2) span svg{
    transform: rotate(180deg);    
    margin:0 0.3rem 0 0;
}

#wrapperContent{
    width:  200%;

    height: calc(100% - 2rem);

    display: flex;

    overflow: hidden;
    position: relative;

    transition: left 1s;

   
}
#wrapperContent > div{
    width: 50%;
    height: 100%;    

    overflow-x: hidden;
    overflow-y: auto;

}
#browseContent{
  
}
#browseContent .wrapperBrowseContent{
    width: 100%;
    border-bottom: solid 1.5px rgba(80, 71, 199, 0.8);    
}
#browseContent .wrapperBrowseContent div{
    padding: 0.5rem 0.25rem 0.9rem 0.25rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    cursor: pointer;
}
#browseContent .wrapperBrowseContent div:hover{
    background: #5047C7;
    
}

#browseContent .wrapperBrowseContent div span{

    display: block;
    font-size: 1.6rem;
    font-weight: 400;
    height: 2rem;
}
#browseContent .wrapperBrowseContent div img{
    width: 0.75rem;
    height: 1.25rem;
    margin-right: 0.25rem;
    transition: 0.5s;
}
.slider-enter-active,.slider-leave-active{
    transition: 0.75s;
    overflow: hidden;
}
.slider-enter,.slider-leave-to{
    height:0rem;
}
.slider-enter-to,.slider-leave{
    height: 4.5rem;
}

#browseContent ul{
    width: 100%;
    padding-bottom: 0.25rem;
   
    display: flex;
    flex-wrap: wrap;
    
}
#browseContent ul a{
    display: block;

    width: 50%;
    padding: 0.25rem 0.25rem;

    font-size: 1.25rem;
    font-weight: 300;

    color: white;

}
#browseContent ul a:hover{
    background: gray;

}
#playListWrapper{
    background: black;
    color: white;
    width: 100%;
}

.playQueues > div{
    
    display: flex;
    align-items: center;
    height: 4.5rem;


}

.playQueues{
    display: flex;
    justify-content: space-between;

    cursor: pointer;
    max-width: 100%;

}
.playQueues:hover .playQueueSongInfo{

    
    background:#906DED ;

}
.playQueues:hover .playQueuesButtons{
    background: #906DED;
}
.playQueueSongInfo{
    padding-left:0.25rem; 
    padding-right: 1rem;
    width: calc(100% - 5rem);
 


}
.playQueueSongName{
   
    height: 85%;
    width: calc(100% - 4rem);

}

.playQueues h1,.playQueues h2{
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0;
}
.playQueues h1{
    font-weight: 400;
    font-size: 1.5rem;
    
}
.playQueues h2{
    font-weight: 300;
    font-size: 1.25rem;
}
.playQueueSongImg{
    display: block;

    margin-right: 0.5rem;
    width:3.25rem;
    height: 3.25rem;

    border-radius: 9999px;
    
    background-size: cover;
    background-repeat: no-repeat;
    
    transition:transform 0.5s linear;
    
}

.playQueuesButtons{
    padding-right:0.25rem; 
    width: 5rem;

    justify-content: space-around;
 
}
.playQueuesButtons span{

    display: block;
    height: 1.3rem; 

}
.playQueuesButtons span svg {
 
    height: 1.2rem;

    cursor: pointer;
    fill:white;
    
}
.playQueuesButtons span svg:hover{
    fill: #5047C7;
}
.pages{

    width: calc(100vw - 15rem - 7vw);
    position: absolute;
    overflow-y: auto;
 

    height:calc(100vh - 4rem);
    
    right: 0;
    top: 4rem;
}
.functionBoxBackground{
    position: fixed;
    z-index: 1000000000;
    width: 100vw;
    height: 100vh;

    top: 0;
    left: 0;

    background: rgba(0,0,0,0.7);

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;

    z-index: 10000;
}
.functionBoxContainer{
    width: 32.5rem;
    height: 27.5rem;
    border-radius: 16px;
    background: #1A1A1A;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    padding:1.25rem;

    box-shadow: 0 3px 20px rgba(255, 255, 255, 0.15);

    overflow: auto;
}
.userAlbumTitleWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 0.25rem 0.5rem 0.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.userAlbumTitleWrapper div{
    font-weight: 400;
    font-size: 1.75rem;
}
.userAlbumTitleWrapper svg{
    fill: white;
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
}
.userAlbumsWrapper{
    display: flex;
    flex-wrap: wrap;
}
.userAlbums{
    margin:0.5rem 0.625rem 0 0.625rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    text-align: center;

    width: 7rem;
    height: 10.5rem;
    overflow: hidden;

    cursor: pointer;
}
.userAlbums span{
    margin-top: 0.25rem;
    font-size: 1.15rem;
    font-weight: 400;
}
.userAlbumImg{
    width: 7rem;
    height: 7rem;
    background-size: cover;
    background-position: center;

}
.addNewAlbum{
    background: #906DED;
    height: 7rem;

    justify-content: center;
}
.NewAlbumContent{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.addNewAlbum span{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 3rem;
    border-radius: 99999px;
    background: white
}
.addNewAlbum svg{
    fill: #906DED;
    width: 1.5rem;
    height: 1.5rem;
}
.NewAlbumContent div{
    width: 80%;
    font-size: 1.15rem;
    margin-top: 0.25rem;

}


.functionBoxContainer footer{
    font-size: 1.5rem;
}
.functionBoxContainer footer span{
    font-weight: 300;
    opacity: 0.7;
}

.newAlbumPage{
    margin-top: 0.75rem;
}
.nameingAndSubmit{
    display: flex;
    justify-content: space-between;
}
.nameingAndSubmit input{
    font-size: 1.25rem;
    font-weight: 300;
    width: 17.5rem;

    padding: 0.1rem 0;
}
.nameingAndSubmit div{
    cursor: pointer;

    text-align: center;
    background: #5047C7;
    font-size: 1.25rem;
    padding: 0.2rem 1.25rem;
}
.imagesArea p{
    font-weight: 300;
    font-size: 1.25rem;

   
}
.selectingImgWrapper{
    display: flex;
    flex-wrap: wrap;
}
.selectingImgWrapper span{
    width: 5rem;
    height: 5rem;
    display: block;

    background-size: cover;
    background-position: center;

    margin: 0.5rem 0.65rem;

    cursor: pointer;

}
.cancelAddNewAlbumBtnWrapper{
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    padding-bottom: 2.5rem;
}
.cancelAddNewAlbumBtn{
    display: block;
    width: 100%;

    text-align: center;
    font-size: 1.5rem;

    background: white;
    color: #906DED;

    cursor: pointer;

    border-radius: 2px;

}
.cancelAddNewAlbumBtn:hover{
    color: white;
    background: #906DED;
}
.successPrompt{

    position: fixed;
    bottom: 2.5%;
    right: 1.5%;

    width: auto;
    padding: 0 2rem;
    height: 5rem;
    background: #1A1A1A;

    border-radius: 4px;

    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1000000000;
    
}
.successPrompt span{
    font-size: 1.5rem;
    font-weight: 300;
    padding-bottom: 0.5rem;
    margin-right: 0.5rem;
}
.successPrompt svg{
    fill: lightgreen;
    width: 1.75rem;
    height: 1.75rem;
}
.successSlider-enter-active,.successSlider-leave-active{
    transition: 0.35s ease-in-out;
}
.successSlider-enter,.successSlider-leave-to{
    opacity: 0.5;
    bottom: 0%;
}
.successSlider-enter-to,.successSlider-leave{
    opacity: 1;
    bottom: 2.5%;
}
#editProfileContainer{
    justify-content: flex-start;
}
.editProfileBodyWrapper{
    display: flex;
    padding-top: 2rem;

        

}
.editProfileBodyLeft{
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.editProfileBodyLeft span{
    display: block;
    width: 100%;
    text-align: center;

    font-size: 1.5rem;
    font-weight: 400;
    margin: 0.5rem 0;
    padding-bottom: 0.75rem;

    border-bottom: 1px solid rgba(255, 255, 255, 0.3)
}
.uploadImageBtn{
    margin-top: 1.25rem;
    background: #906DED;
    padding: 0.2rem 0.5rem;

    cursor: pointer;
    font-size: 1.25rem
}
.uploadImageBtn:hover{
    background: white;
    color: #906DED;
}

.editProfileBodyWrapper .userIcon{
    width: 6.5rem;
    height: 6.5rem;

    background-size: cover;
    background-position: center;

    border-radius: 9999px;
}

.editProfileBodyRight{
    margin-left: 2rem;

    display: flex;
    flex-direction: column;
    padding-top: 0.75rem;  
}
.userNameAndPasswordArea div{
    font-size: 1.5rem;
    font-weight: 300;
    opacity: 0.7;
}
.userNameAndPasswordArea input{
    width: 20rem;
    max-width: 60vw;
    font-size: 1.35rem;
    padding: 0.15rem 0;

    background: transparent;
    outline: none;

    border: none;
 
    border-bottom: 1px solid white;
    opacity: 0.7;
 
    color: white;

    margin-bottom: 1rem;
}

.profileSubmit{
    width: 100%;
    text-align: center;
    background: #F5AE61;

    margin-top: 1rem;
    padding: 0.1rem 0;
    font-size: 1.45rem;
    font-weight: 400;

    border-radius: 999px;

    cursor: pointer;
}
#getUserImageFileArea{
    display: none;
}
.profileSubmit:hover{
    background: white;
    color: #F5AE61;
}
.HintWord{
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;

    margin-top: 2.25rem;
    padding-top: 0.5rem;

    border-top: 1px solid rgba(255, 255, 255, 0.5);
    opacity: 1;
}
@media screen and (max-width: 1024px) {
#audioContainer{


    
} 

}
@media screen and (max-width: 768px) {

.audioContainerSlider-enter-active,.audioContainerSlider-leave-active{
    transition: 1s ease; 
}
.audioContainerSlider-enter,.audioContainerSlider-leave-to{
      
    left: -100%;
}
.audioContainerSlider-enter-to,.audioContainerSlider-leave{
    left: 0%;
}
#audioMeunContainer{
 

}

#audioContainer{
    
    
    position: fixed;
  
    z-index: 1000;
    width: 22rem;
    min-width: 275px;
    
}   
#navContainer{




    max-height: calc(100vh - 2rem);

    

} 
#wrapperContent{

    height: 40vh;
}
.playQueuesButtons{
    padding-right:0rem; 

    


    
}
.playQueuesButtons span 
.playQueuesButtons span svg {
    width: 1.45rem;
    height: 1.45rem;

 
    
}
.pages{

    

    height:calc(100vh - 4.2rem);
    
    width: 100vw;
    overflow-x: hidden;
  
 

}
.functionBoxBackground{


    align-items: flex-start;


}
.editProfileBodyRight{
    margin-left: 0.75rem;
    
}
.functionBoxContainer{
    margin-top: 12.5vh;
}
.profileSubmit{
    margin-top: 0.5rem;
}
}
</style>