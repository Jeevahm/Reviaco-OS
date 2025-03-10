<html>
   <head>
      <link rel="import" href="https://reviaco.os/System/Res.html">
      <link rel="import" href="polymer-style.html">
      <link href="style.css" rel="stylesheet">
      <script src="script.js"></script>
   </head>
   <body>
      <paper-toolbar>
         <paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button>
         <span id="main_title" class="title">Echo Store</span>
         <paper-icon-button icon="search"></paper-icon-button>
      </paper-toolbar>
      <div id="app_page" class="app_page">
         <div id="appIntroduction_bg" class="appIntroduction_bg">
            <video id="appIntroduction" class="appIntroduction" src="src" type="video/mp4" autoplay loop></video>
         </div>
         <paper-fab id="install_btn" class="install_btn" icon="file-download" title="Install" class="orange" onclick="modal.open()" app_name="" type=""></paper-fab>
         <paper-dialog id="modal" modal>
            <div id="platforms_icons"></div>
            <div class="buttons">
               <paper-button dialog-confirm>Cancel</paper-button>
               <paper-button dialog-confirm autofocus>Install</paper-button>
            </div>
         </paper-dialog>
      </div>
      <div id="home" class="home">
         <div id="slides" class="slides">
            <img id="app_promo_slide1" class="app_promo_slide" src="" app_name="" type="">
            <img id="app_promo_slide2" class="app_promo_slide" src="" app_name="" type="">
            <img id="app_promo_slide3" class="app_promo_slide" src="" app_name="" type="">
            <img id="app_promo_slide4" class="app_promo_slide" src="" app_name="" type="">
            <img id="app_promo_slide5" class="app_promo_slide" src="" app_name="" type="">
         </div>
         <div id="cube1" class="cube cube1">
            <div class="space3d">
               <div class="_3dbox">
                  <div id="app_promo_cube_1" class="_3dface _3dface--front"></div>
                  <div id="app_promo_cube_1_A" class="_3dface _3dface--top" app_name="" type=""></div>
                  <div id="app_promo_cube_1_B" class="_3dface _3dface--bottom" app_name="" type=""></div>
                  <div id="app_promo_cube_1_C" class="_3dface _3dface--left" app_name="" type=""></div>
                  <div id="app_promo_cube_1_D" class="_3dface _3dface--right" app_name="" type=""></div>
                  <div id="app_promo_cube_1_E" class="_3dface _3dface--back" app_name="" type=""></div>
               </div>
            </div>
         </div>
         <div id="cube2" class="cube cube2">
            <div class="space3d">
               <div class="_3dbox">
                  <div id="app_promo_cube_2" class="productivity _3dface _3dface--front"></div>
                  <div id="app_promo_cube_2_A" class="_3dface _3dface--top" app_name="" type=""></div>
                  <div id="app_promo_cube_2_B" class="_3dface _3dface--bottom" app_name="" type=""></div>
                  <div id="app_promo_cube_2_C" class="_3dface _3dface--left" app_name="" type=""></div>
                  <div id="app_promo_cube_2_D" class="_3dface _3dface--right" app_name="" type=""></div>
                  <div id="app_promo_cube_2_E" class="_3dface _3dface--back" app_name="" type=""></div>
               </div>
            </div>
         </div>
         <div id="cube3" class="cube cube3">
            <div class="space3d">
               <div class="_3dbox">
                  <div id="app_promo_cube_3" class="religion _3dface _3dface--front"></div>
                  <div id="app_promo_cube_3_A" class="_3dface _3dface--top" app_name="" type=""></div>
                  <div id="app_promo_cube_3_B" class="_3dface _3dface--bottom" app_name="" type=""></div>
                  <div id="app_promo_cube_3_C" class="_3dface _3dface--left" app_name="" type=""></div>
                  <div id="app_promo_cube_3_D" class="_3dface _3dface--right" app_name="" type=""></div>
                  <div id="app_promo_cube_3_E" class="_3dface _3dface--back" app_name="" type=""></div>
               </div>
            </div>
         </div>
         <div id="cube4" class="cube cube4">
            <div class="space3d">
               <div class="_3dbox">
                  <div id="app_promo_cube_4" class="education _3dface _3dface--front"></div>
                  <div id="app_promo_cube_4_A" class="_3dface _3dface--top" app_name="" type=""></div>
                  <div id="app_promo_cube_4_B" class="_3dface _3dface--bottom" app_name="" type=""></div>
                  <div id="app_promo_cube_4_C" class="_3dface _3dface--left" app_name="" type=""></div>
                  <div id="app_promo_cube_4_D" class="_3dface _3dface--right" app_name="" type=""></div>
                  <div id="app_promo_cube_4_E" class="_3dface _3dface--back" app_name="" type=""></div>
               </div>
            </div>
         </div>
         <div id="cube5" class="cube cube5">
            <div class="space3d">
               <div class="_3dbox">
                  <div id="app_promo_cube_5" class="_3dface _3dface--front"></div>
                  <div id="app_promo_cube_5_A" class="_3dface _3dface--top" app_name="" type=""></div>
                  <div id="app_promo_cube_5_B" class="_3dface _3dface--bottom" app_name="" type=""></div>
                  <div id="app_promo_cube_5_C" class="_3dface _3dface--left" app_name="" type=""></div>
                  <div id="app_promo_cube_5_D" class="_3dface _3dface--right" app_name="" type=""></div>
                  <div id="app_promo_cube_5_E" class="_3dface _3dface--back" app_name="" type=""></div>
               </div>
            </div>
         </div>
         <div id="cube6" class="cube cube6">
            <div class="space3d">
               <div class="_3dbox">
                  <div id="app_promo_cube_6" class="_3dface _3dface--front"></div>
                  <div id="app_promo_cube_6_A" class="_3dface _3dface--top" app_name="" type=""></div>
                  <div id="app_promo_cube_6_B" class="_3dface _3dface--bottom" app_name="" type=""></div>
                  <div id="app_promo_cube_6_C" class="_3dface _3dface--left" app_name="" type=""></div>
                  <div id="app_promo_cube_6_D" class="_3dface _3dface--right" app_name="" type=""></div>
                  <div id="app_promo_cube_6_E" class="_3dface _3dface--back" app_name="" type=""></div>
               </div>
            </div>
         </div>
      </div>
   </body>
</html>