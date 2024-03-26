---
layout: '../layouts/Layout.astro'
---
<div class="content">

# Comment jouer ?

## Pré-requis
1. Avoir un iso de Brawl NTSC via `!iso`
2. Avoir télécharger [le dernier build de P+](https://projectplusgame.com/download)
    - Dolphin Windows/Linux pour jouer en Netplay sur l'émulateur Dolphin
    - Offline / Wii ou Wii Lite en fonction de la capacité que vous utilisez avec votre Wii
3. Disposer d'un adaptateur manette GameCube
    - [Celui d'Arte](https://www.input-integrity.com/fr/product-page/adaptateur-sans-perte) <- un gars cool de la commu'
    - Officiels de Nintendo Smash 4 ou Ultimate

## Installations

1. Extraire l'archive de Project+
2. Insérer l'iso de Brawl dans le dossier `games` à l'intérieur de l'archive
3. Démarrer Dolphin.exe
4. Choisir Super Smash Bros. Brawl comme iso par défaut avec un clique droit depuis la liste des jeux

    Désormais, en démarrant Offline ou Online via les *Launchers* elf, Project+ est censé démarrer !

### Installer les drivers de l'adaptateur GCC

1. Adaptateur input-integrity
  Les drivers n'ont pas besoin d'être installés.
2. Adaptateurs Officiel Nintendo ([référence](https://fr.dolphin-emu.org/docs/guides/how-use-official-gc-controller-adapter-wii-u/?cr=fr#Using_Zadig))
    1. Installer [zadig.exe](https://github.com/pbatard/libwdi/releases/latest) puis le démarrer
    2. Options -> List All Devices
    3. Sélectionner `WUP-028` et vérifier que l'id USB est `057E 0337`.
    4. Sur la colonne de droite, sélectionner `WinUSB` puis cliquer sur `Replace Driver` et installer le driver au système en cliquant sur `Yes`.
3. Une fois les drivers installés, votre configuration de manettes doit ressembler à ça:
    *img*

## Jouer en Netplay
### Présentation de la fenêtre de Netplay
    Choix du jeu
    hashcode pour vérifier la compatibilité entre les iso
    tchat accessible en jeu en appuyant sur `t`
    le panel avec les joueurs et leur ping
    les options du bas (le minimal buffer, le buffer, l'option pour les musiques, assigner un port manette à chaque joueur)

### Rejoindre une partie
Vous devez vous assurer de bien pouvoir jouer avec le Launcher Offline avec votre manette configurée sur le port 1.
Renseigner votre pseudo si c'est la première fois que vous jouez !

    1. Onglet Netplay
    2. Insérer le code
    3. Attendre que l'hôte démarre le jeu

### Créer une partie
Vous êtes responsables de la gestion du *buffer* et d'associer les ports manette aux joueurs.
    1. Netplay
    2. Transversal server vs Direct Connect
    3. Créer la room
    4. Partager le code à votre adversaire
    5. Gestion du buffer 1 tous les 8ms et pas moins de 4 (la valeur par défaut)


</div>
