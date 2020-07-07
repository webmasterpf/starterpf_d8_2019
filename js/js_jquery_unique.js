/*
 * https://inkplant.com/code/drupal-8-jquery
 * Drupal 8 utilise noConflict, ce qui rend $ inopérant, utiliser jQuery à la place
 * Trés bonne explication sur action du noConflict() :
 * http://sundropsoftware.com/how-to-use-jquery-noconflict-the-right-way/
Mise à jour Mars 2020 - Exemple Basic Theme
https://git.drupalcode.org/project/basic/blob/8.x-2.x/js/source/scripts.js

 */
 /* JavaScript should be made compatible with libraries other than jQuery by
 wrapping it with an "anonymous closure". See:
 - https://drupal.org/node/1446420
  - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
Librairie externes et D8: https://www.drupal.org/project/documentation/issues/2605130
 */
 (function (Drupal, $) {
   'use strict';

   // To understand behaviors, see https://www.drupal.org/node/2269515
   //https://sqndr.github.io/d8-theming-guide/javascript/behaviors.html
   //https://stackoverflow.com/questions/39439576/how-do-i-use-jquery-code-through-a-drupal-8-module
   //Nom indépendant du nom du thème mais doit être unique
   Drupal.behaviors.proform2020 = {
     attach: function (context, settings) {

       // Execute code once the DOM is ready. $(handler) not required
       // within Drupal.behaviors.

      ///*************  Fonctions déclenchées sur  $(document).ready(function () *****///
               //<!--Pour utiliser selectnav en RWD-->
               console.log('Chargement du script pour selectnav');
               selectnav('subnav', {label: '- Accès rapide -'});

               //Pour surcharger éléments des diaporama de views
               $('.diapo_fiche div.views_slideshow_cycle_teaser_section').css('width', 'auto'),
               $('.diapo_fiche .views_slideshow_cycle_teaser_section').css('height', 'auto'),
               $('.diapo_fiche  .views_slideshow_cycle_teaser_section').css('max-width', '100%');
               $('.views_slideshow_cycle_slide').css('position', 'relative', 'important');
               $('.views_slideshow_cycle_hidden').css('position', 'relative', 'important');
               $('#views_slideshow_cycle_div_Diapo_illustration-block_1_0').css('position', 'relative', 'important');
               $('#views_slideshow_cycle_div_Diapo_illustration-block_1_1').css('position', 'relative', 'important');
               $('.views_slideshow_cycle_slide').not(':visible').css('position', 'absolute', 'important');




       //OffCanvas avec fonction anonyme
               console.log('Chargement du script pour volet coulissant');
               var $transformer = $('.transformer'),
                       $menuToggle = $('.menu-toggle');
               $('.menu-toggle').on('click', function (event) {
                   event.preventDefault();
                   $transformer.toggleClass('is-open');
               });

               $('.close-btn').on('click', function (event) {
                   event.preventDefault();
                   console.log('bouton referme volet fonctionne !');
                   $transformer.removeClass('is-open');
               });






           //Pour le BxSlider - Ajouter la classe dans views au niveau des paramètres d'affichage > classe de la liste
                 console.log('Chargement des paramètres de BxSlider');
       //  $('.bxslider').bxSlider({
       //      pagerCustom: "#bx-pager",
       //   captions: true
       //  });

               console.log('Chargement des paramètres de BxSlider Illus');
               $('.bxslider-illus').bxSlider({
                   mode: 'fade',
                   controls: true,
                   captions: false,
                   auto: true,
                   autoStart: true,
                   pager: false,
                   keyboardEnabled: true
               });

               console.log('Chargement des paramètres de BxSlider HP');
               $('.bxslider-hp').bxSlider({
                   mode: 'fade',
                   controls: true,
                   captions: true,
                   auto: true,
                   autoStart: true,
                   pager: false,
                   keyboardEnabled: true
               });
       //   alert('BxSlider est chargé');



       //Pour Galerie Chocolat.js
       //    $(document).ready(function(){
       //        console.log('Appel du script Chocolat.js');
       //    $('.chocolat-parent').Chocolat();
       //});

       //Pour Galerie BaguetteBox.js

               console.log('Appel du script BaguetteBox.js');
               baguetteBox.run('.galerieBaguetteBox', {
                   // Custom options
               });

               //Pour Responsive Slides
               console.log('Appel du script ResponsiveSlides.js');
               $(".rslides").responsiveSlides

                       ({
       // Custom options
                           pager: false, // Boolean: Show pager, true or false
                           nav: false, // Boolean: Show navigation, true or false
                           random: true, // Boolean: Randomize the order of the slides, true or false
                           pause: false        // Boolean: Pause on hover, true or false
                       });





       //// Script pour Masonry - Views casse les __ utiliser -- plutôt

       /*
               console.log('Chargement des paramètres Masonry.js');
               'use strict';
               var $masonryContainer = $('.masonry');
               //$masonryContainer.imagesLoaded(function () {
               $masonryContainer.masonry({
                   itemSelector: '.masonry--item',
                   columnWidth: '.masonry--column',
                   gutter: '.masonry--gutter',
                   //percentPosition: true

               });

               //GoogleFont cause un problème avec Masonry
               (function () {
                   var wf = document.createElement('script');
                   wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                           '://ajax.googleapis.com/ajax/libs/webfont/1.4.2/webfont.js';
                   wf.type = 'text/javascript';
                   wf.async = 'true';
                   var s = document.getElementsByTagName('script')[0];
                   s.parentNode.insertBefore(wf, s);
               });*/



       //Changer la taille de l'iframe dans les contenus
            function resizeIframe(obj) {
           obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
         }
         //Ajout d'un évènement onLoad sur l'iframe concernée
         $("p.external-content iframe").on( "load", function() {
                   resizeIframe(this);
         console.log( $( this ).text() );
       });

           //Menu Pleine Page Overlay

               $(".icon").click(function () {
                 console.log('Menu pleine page actif');
                   $('.mobilenav').fadeToggle(500);
                   $('.top-menu').toggleClass('top-animate');
                   $('.mid-menu').toggleClass('mid-animate');
                   $('.bottom-menu').toggleClass('bottom-animate');
               });

               //Cache / Affiche les enfants dans le menu overlay - Pas fonctionnel
       $('#block-menu-menu-menu-general').click(function() {
         $('.collapsed').toggle( "slow", function() {
           // Animation complete.
         });
       });


           ////***** ENQUIRE.JS ****/////
           //Fonction BPoint personnalisé - https://stackoverflow.com/a/11387513/2416915
           // Utilisation de matchMedia pour utiliser les mêmes BP que pour scss.
           var desktop = ("screen and (min-width:1200px)");// sortie=>> min-width: XXXpx xlarge 1200px
           var desktopwide = ("screen and (min-width:1440px) and (min-resolution:1dppx)");// sortie=>> min-width: XXXpx xxlarge 1440px


           var mobile = ("only screen and (max-width:667px) and (orientation: portrait) and (min-resolution:2dppx)");//medium - Iphone->8
           var mobile_iphonehd = ("only screen and (min-width:414px) and (max-width:736px) and (orientation: portrait) and (min-resolution:3dppx)");//medium - Iphone6+->
           var mobile_iphoneX = ("only screen and (min-width:375px) and (max-width:812px) and (orientation: portrait) and (min-resolution:3dppx)");//medium - IphoneX
           var mobile_galaxyShd = ("screen and (min-width:320px) and (max-width:640px) and (orientation: portrait) and (min-resolution:3dppx)");//medium - GalaxyS4 et suivants
           var mobile_galaxyS6 = ("screen and (min-width:360px) and (max-width:645px) and (orientation: portrait) and (min-resolution:4dppx)");//medium - GalaxyS6 et suivants
           var tablet = ("only screen and (min-width:768px) and (max-width:1024px) and (orientation: portrait) and (min-resolution:1dppx)");//large - Tablettes non HD
           var tablet_hd = ("only screen and (min-width:1500px) and (max-width:2050px) and (orientation: portrait) and (min-resolution:2dppx)");//tablette HD, GalaxyTab S3 2048 x 1536 (QXGA) par ex.(Ipad2->)

           // Breakpoint pour les format paysage
           var mobilelandscape = ("only screen and (min-width:319px) and (max-width:765px) and (orientation: landscape)");//pour orientation: paysage (min-height 319px) and (max-height 765px)
           var mobilelandscape_galaxyShd = ("screen and (min-width:320px) and (max-width:645px) and (orientation: landscape) and (min-resolution:3dppx)");//medium - GalaxyS4 et suivants
           var tabletlandscape = ("only screen and (min-width:768px) and (max-width:1024px) and (orientation: landscape) and (min-resolution:1dppx)");//pour orientation: paysage - Tablettes non HD
           var tabletlandscape_hd = ("only screen and (min-width:1500px) and (max-width:2050px) and (orientation: landscape) and (min-resolution:2dppx)");//pour orientation: paysage, tablette HD, GalaxyTab S3 2048 x 1536 (QXGA) par ex.
           //Utilisation d'enquire.js
           enquire.register(desktop, {
           	match : function() {
               console.log('Enquire.js : MediaQueries pour:'+desktop);
               $("#zone-1 #media-vimeo-1 iframe").height('23vw').width('100vw');
               $("#zone-2 #media-vimeo-1 iframe").height('23vw').width('100vw');
               $("#zone-1 #media-youtube-1").height('23vw').width('100vw');
               $("#zone-2 #media-youtube-1").height('23vw').width('100vw');


               //Nettoyage des tailles sur iframe
               $(".acces_rubriques iframe").once('proform2020').each(function () {
                   $(this).removeAttr('width');
                   $(this).removeAttr('height');
                   $(this).removeAttr('align');
               });
               //Taille Likebox FB
               $("aside#pageFacebook iframe").height('45vh').width('50vw');
               $("aside.block-videopresentationdulyceefxb iframe").height('95vh').width('60vw');//Video Gde Taille HP
               $("aside.block-videopresentationdulyceefb iframe").height('95vh').width('60vw');//Video Gde Taille HP pour MG

           	},
           	unmatch : function() {
           		example.unmatch();
           	}
           });//enquire.register(desktop)
           enquire.register(tabletlandscape, {
             deferSetup : true,
             	setup : function() {
             	$(".acces_rubriques iframe").height('55vh').width('45vw');//Video Gde Taille HP
             	},
             match : function() {
               console.log('Enquire.js : BP pour:'+tabletlandscape);

               //Video sur HP
               /*$(".acces_rubriques iframe").each(function () {
                   $(this).removeAttr('width');
                   $(this).removeAttr('height');
                   $(this).removeAttr('align');
               });*/
               $(".acces_rubriques iframe").height('55vh').width('65vw');//Video Gde Taille HP
           	},
           	unmatch : function() {
           		example.unmatch();
           	}
           });//enquire.register(tabletlandscape)

           enquire.register(tablet, {
             deferSetup : true,
               setup : function() {
               $(".acces_rubriques iframe").height('55vh').width('45vw');//Video Gde Taille HP
               },
             match : function() {
               console.log('Enquire.js : BP pour:'+tablet);

               //Video sur HP
               /*$(".acces_rubriques iframe").each(function () {
                   $(this).removeAttr('width');
                   $(this).removeAttr('height');
                   $(this).removeAttr('align');
               });*/
               $("aside#pageFacebook iframe").height('45vh').width('75vw');
               $(".acces_rubriques iframe").height('45vh').width('95vw');//Video Gde Taille HP
             },
             unmatch : function() {
               example.unmatch();
             }
           });//enquire.register(tablet)

           enquire.register(mobile, {
             deferSetup : true,
               setup : function() {
               $(".acces_rubriques iframe").height('55vh').width('45vw');//Video Gde Taille HP
               },
             match : function() {
               console.log('Enquire.js : BP pour:'+mobile);

               //Video sur HP
               /*$(".acces_rubriques iframe").each(function () {
                   $(this).removeAttr('width');
                   $(this).removeAttr('height');
                   $(this).removeAttr('align');
               });*/
               $(".acces_rubriques iframe").height('45vh').width('95vw');//Video Gde Taille HP
             },
               });//enquire.register(tablet)
       /*** Fin Enquire.js ***/

           //  Utilisation du Lazyload pour les éléments contenus dans certains conteneurs
               $('.conteneur').find('img').lazyLoadXT();
               $('.conteneur').find('iframe').lazyLoadXT();

//////////////////////////// CODE SUR onLoad ///////////////////////////////
///*************  Fonctions déclenchées sur   $(window).load(function () *****///
       $(window).on('load', function () {
         // Execute code once the window is fully loaded.
         //Pour une galerie standard : Flexslider

                 console.log('Chargement des paramètres de Flexslider');
                 $('.flexslider-classic').flexslider({
                     //animation: "slide",
                     directionNav: true,
                     controlNav: false,
                     start: function (slider) {
                         $('body').removeClass('loading');
                         $('.flexslider-classic').resize();

                     }

                 });

                 //Flexslider pour HP (avec caption)
                 $('.flexslider-hp').flexslider({
                     animation: "slide"
                 });


             //Pour une galerie avec des vignettes : Flexslider thumbs

                 console.log('Chargement des paramètres de FlexsliderThumbs');
                 $('#carousel').flexslider({
                     animation: "slide",
                     controlNav: false,
                     directionNav: false,
                     animationLoop: false,
                     slideshow: false,
                     itemWidth: 210,
                     itemMargin: 5,
                     asNavFor: '#slider'
                 });

                 $('#slider').flexslider({
                     animation: "slide",
                     controlNav: true,
                     directionNav: false,
                     animationLoop: false,
                     slideshow: false,
                     sync: "#carousel"
                 });

                 //Pour stacktable (tableaux RWD)
                 console.log('Chargement des paramètres de Stacktable.js');
                     //Ajouter l'ID de la table à rendre RWD
                     //Cible toutes les tables contenues dans la div.content (colonne-2)
                 $('div.content').children('table').stacktable({});


                         //<!-- Pour ajouter classes sur éléments du tableau -->
                         console.log('Actions sur divers éléments : tableaux, images...');
                         //Ajout des classes pour styler les tableaux
                         $('table tr:odd').addClass('odd');
                         $('table tr:even').addClass('even');
                 //Ajout d'attributs pour mur image JS
                         $('#liste-vdl ul.wookmark').attr("id", "wookmark-id");
                         $('#liste-vdl div.view-content').attr("id", "grid");
                         $('#liste-vdl div.view-content').attr("data-columns", "");


                     //Retrait Taille des images sur les pages espace Entreprise et Partenaires
                         $(".nav-espace-entreprise li img").removeAttr("style");
                         $(".nav-espace-partenaire li img").removeAttr("style");


                       //Retrait position:absolute sur le Views Slideshow
       $('.views_slideshow_cycle_slide:visible').css('position', 'relative', 'important');
       $('.views_slideshow_cycle_slide').not(':visible').css('position', 'absolute', 'important');

       //Style pour les iframes contenus dans des § pour le RWD - ajout de classe pour traitement CSS+JS
       $(".contenu-vdl p:has(iframe)").addClass('external-content');
       $(".page-lycee p:has(iframe)").addClass('external-content');
       $(".page-contact p:has(iframe)").addClass('external-content');
       $(".contenu-international p:has(iframe)").addClass('external-content');

       //Action sur style du backoffice
       $('body.role--authenticated').removeAttr('style');


                 //Action sur taille des images : retrait de toutes les tailles en dur (HTML) de manière ciblée
                         //$('img').each(function(){
                         console.log('Nettoyage sur divers éléments : objets,iframe,....');

                         $('.fiche-formation img').each(function () {
                             $(this).removeAttr('width');
                             $(this).removeAttr('height');
                         });

                 //Changer la casse des titres H1 qui sont en Majuscules
                 // PAs effet sur titres en capitales complet sur LR
                       $('h1').css('text-transform', 'capitalize');
                 //        $('.liste-vdl-lycee .titre-vdl a').css('text-transform', 'lowercase');
                         $('#liste-vdl span.titre-vdl > a').css('text-transform', 'lowercase');

                         //Retirer les style en ligne issus de copier/coller
                         $("#zone-2 span").removeAttr("style");
                         $("#zone-2 p").removeAttr("style");
                         $("#zone-2 ul").removeAttr("style");
                         $(".masonry-brick").removeAttr("style");//pas d'effet
                         $("img.filefield-icon").removeAttr("style");


                         //Retrait du style des objets imbriqués comme object,iframe,etc...
                         $("#media-youtube-default-external-object-1").removeAttr("style");
                         $("#media-youtube-1").remove();


                         //Reset des attributs de l'iframe puis réglage des nouvelles valeurs des attributs, alignement avec plugin JQuery
                       /*  $(".acces_rubriques iframe").each(function () {
                             $(this).removeAttr('width');
                             $(this).removeAttr('height');
                             $(this).removeAttr('align');
                         });*/



                 // Taille auto pour les images des logos partenaires sur accueil
                         $(".logo_partenaires img").height('auto').width('auto');
                         $(".acces-lycees #media-vimeo-1 iframe").height('11.5vw').width('20vw');

                 //Taille auto des images sur les pages espace
                         $('.page-espace li img').each(function () {
                             $(this).removeAttr('width');
                             $(this).removeAttr('height');
                               });
//Partage RS - Bloc fixe au scroll
//console.log('Action sur Bloc Partage RS');
//$("aside.partage-rs").pin({padding: {top: 10, bottom: 10}})
/*$("aside#block-socialsimpleblock").fixit({
  topMargin:10, addClassAfter:"classToAdd", sameDimension:true, zIndex : 50
  //alert("Chargement du JS pour Bloc Partage RS");
});*/



       }); //Fin on.load

       $(window).on('resize', function () {
         // Execute code when the window is resized.

               //Views Slideshow Cycle RWD

               $(window).resize(function () {
                   $('.views_slideshow_cycle_main').each(function () {
                       var cycleMain = $(this);
                       var img_width = 0,
                               img_height = 0;
                       var clearCSS = {width: "auto", height: "auto"};
                       var cycle = cycleMain.children('.views-slideshow-cycle-main-frame');
                       cycleElements = cycle.data("cycle.opts");
                       cycle.css(clearCSS);
                       cycleMain.find('.views-slideshow-cycle-main-frame-row').each(function (i) {
                           $(this).css(clearCSS);
                           var tmp_img_width = $(this).width();
                           var tmp_img_height = $(this).height();
                           if (tmp_img_width > img_width)
                               img_width = tmp_img_width;
                           if (tmp_img_height > img_height)
                               img_height = tmp_img_height;
                           cycleElements.elements[i].cycleW = tmp_img_width;
                           cycleElements.elements[i].cycleH = tmp_img_height;
                           $(this).css({width: tmp_img_width, height: tmp_img_height});
                       });
                       cycleMain.height(img_height);
                       cycle.css({width: img_width, height: img_height});
                       cycle.data("cycle.opts.elements", cycleElements);
                   });
               });// Fin de $(window).resize(function)
       });

       $(window).on('scroll', function () {
         // Execute code when the window scrolls.
       });

     }
   };

 })(Drupal, jQuery);
