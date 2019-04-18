// $Id: README.txt,v 1.1 02∕04∕2011

ABOUT THEME
-----------

Thème RWD pour les sites de l'Association développés sous Drupal 8.
Thème développé avec Sass - Susy 3. Version 2019.
Utilisation de Gulp + NodeJS

MODULES NODE.JS via NPM
----------------------------------
https://www.supinfo.com/articles/single/946-npm-package-manager-nodejs

Installation de Gulp
:/var/www/drupal-8/themes/custom/dossier_projet$ sudo npm init (création du fichier  package.json + dossier node_modules)
:/var/www/drupal-8/themes/custom/dossier_projet$ npm install gulp --save-dev
Utilise Gulp 3 car sinon synthaxe change avec Gulp 4 et cause une erreur.

Plugin pour Gulp (permet de charger tous les plugins)
:/var/www/drupal-8/themes/custom/dossier_projet$ npm install gulp-load-plugins --save-dev

Plugin pour Sass:
npm install --save-dev  event-stream gulp-util node-sass-import-once gulp-sass gulp-size gulp-shell gulp-notify notify-send gulp-sourcemaps typey susy node-normalize-scss gulp-plumber gulp-postcss autoprefixer breakpoint

Vérifier versions des npm:
npm-check

Désinstaller un package:
npm uninstall <nom du package>

!! Remplacer gulp-autoprefixer par autoprefixer pour avoir la dernière version du package.Utiliser avec PostCSS
https://github.com/postcss/autoprefixer
npm install --save-dev autoprefixer gulp-postcss

https://github.com/at-import/breakpoint

BROWSER SYNC
-----------------
:/var/www/drupal-8/sites/all/themes/dossier_projet$ npm install browser-sync --save-dev


REGLAGES A FAIRE
----------------

>> DEBUGAGE TWIG : passer debug:false à true dans fichier service.yml dans dossier d'installation  du site
par ex. /drupal-8/sites/DOSSIER_SITE/services.yml

Changer le nom du fichier .info

Changer le favicon
Changer le screenshot
Changer le logo

dans fichiers tpl
remplacer le nom du theme dans les appels d'includes
<pre>
 <?php
$theme_path = drupal_get_path('theme', 'starterd6_pf_rwd'); //Nom du thème idem nom du fichier .info
include ($theme_path.'/chemin/vers/fichier.php');
?>
</pre>

-- INUTILE --

Pour le thème en production, inutile d'envoyer sur le serveur les dossiers sass, node-module

Dans images
-----------

Mettre a jour les images du theme

Compilation des fichiers scss
-----------------------------
dans le terminal (sur serveur Linux) :
user@vm-server1:~$ cd /PATH/TO/THEMENAMEFOLDER/
user@vm-server1:/var/www/drupal-8/PATH/TO/THEMENAMEFOLDER$ gulp


Usage de Susy 3
------------------------
Il n'existe plus de mixins dans Susy3, tout passe par span()
Ainsi:
.classe{ @include container;} devient .classe { width: span (3);}
.classe{ @include span( 12 of $desktopcol);} devient .classe { width: span( 12 of $desktopcol);}
.classe{@include push (1); } devient .classe{ margin-left: span(1 wide); }
.classe{@include pull (1); } devient .classe{ margin-left: 0 - span(3 wide); }

 Breakpoints pour SUSY
----------------------------------
<pre>
 @include breakpoint ($mobile){}
 @include breakpoint ($desktop){}
 @include breakpoint ($tablet){}
</pre>

Diaporama homepage surimpression
------------------------------------
Changer le code HTML dans Views
<div id="transparency"></div>
<div id="contenu-diapo">
<h2>[teaser]</h2>
</div>
par
<div id="transparency">
<h2>[teaser]</h2>
</div>

JAVASCRIPT
------------------------
LazyLoad : remplacer "src" par "data-src" pour images, video, etc, par exemple:
>> data-src="https://www.youtube.com/embed/

CONVERSION VERS TWIG
------------------------
https://phptotwig.com voir si fiable
https://github.com/dongilbert/mautic/wiki/Converting-PHP-Templates-to-Twig
https://www.drupal.org/docs/8/theming/drupal-twig-conversion-instructions-tplphp-to-htmltwig
https://twig.symfony.com/doc/2.x/templates.html
Tester un template : https://twigfiddle.com/

de manière générale <?php ... ?> >> est remplacé par >> {% ... %}
pour l'inclusion de variables : print $xxx  >> devient >> {{ xxx }}

      <?php if (!empty($logo)): ?> >> devient >> {% if (site_logo is not empty) %}
          <div class="logoHead"> >> devient >> <div class="logoHead">
              <?php print $logo; ?> >> devient >> {{ site_logo }}
          </div> >> devient >> </div>
      <?php endif; ?> >> devient >> {% endif %}

https://www.drupal.org/docs/8/theming/adding-regions-to-a-theme
https://atendesigngroup.com/blog/making-region-content-available-node-templates-drupal-8
Créer des template pour chaque région inclus dans un node.Pour une région créée au niveau d'une page,il faut utiliser
les déclarer dans le fichier THEMENAME.info.yml

Réglages d'une vue pour exclure node courant:
https://www.drupal.org/node/131547
