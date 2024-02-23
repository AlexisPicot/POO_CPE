---
title: "Installation de l'environnement"
theme: white
highlightTheme: github
output:
  word_document:
    highlight: "tango"
    reference_doc: model.docx
---

## Installation de l'environnement
Voici les instructions en Markdown pour lancer Java sur Visual Studio Code :

1. **Installation de Visual Studio Code (VSCode)** :
   - Téléchargez et installez Visual Studio Code à partir du site officiel : [Visual Studio Code](https://code.visualstudio.com/).

2. **Installation de l'extension Java dans VSCode** :
   - Ouvrez VSCode.
   - Allez dans l'onglet "Extensions" sur la barre latérale (ou appuyez sur `Ctrl+Shift+X`).
   - Recherchez "Java" dans la barre de recherche des extensions.
   - Sélectionnez l'extension "Java Extension Pack" proposée par Microsoft et installez-la.

3. **Installation de Java Development Kit (JDK)** :
    > Si vous utilisez votre machine de boulot ou un poste CPE, il n'est pas impossible que Java soit déjà installé
    > - Pour vérifier que la variable d'environnement `JAVA_HOME` est correctement configurée, ouvrez un terminal et exécutez la commande suivante :
    > ```
    > echo $JAVA_HOME
    > ```
    > - Cela devrait afficher le chemin d'installation que vous avez configuré.
    
    > Si Java n'est pas déjà installé suivez ces instructions : 
    > - Téléchargez et installez la dernière version du JDK depuis le site officiel d'Oracle : [Java SE Downloads](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html).
    > - Vérifiez l'installation avec les étapes ci-dessus
    (N'hésitez pas à relancer votre terminal si vous l'aviez ouvert avant l'installation, sinon classiquement redémarrez, si ce n'est toujours pas bon appelez-moi)
   

4. **Création d'un nouveau projet Java dans VSCode** :
   - Ouvrez VSCode.
   - Créez un nouveau dossier pour votre projet
   - Dans le menu, sélectionnez "File" -> "Open Folder" et choisissez le dossier de votre projet.
   - Créez un fichier `Main.java`
   - Écrivez votre code Java dans ce fichier.
   ```java
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    ```

5. **Exécution du programme Java** :
   - Ouvrez le fichier Java dans lequel vous souhaitez exécuter le programme.
   - Utilisez la commande `Run Java` dans le menu déroulant en haut à droite du fichier Java, ou appuyez sur `Ctrl+Shift+P` pour ouvrir la palette de commandes et tapez "Run Java".
   - Choisissez l'option pour exécuter le fichier Java sélectionné.

6. **Affichage des résultats** :
   - Les résultats de l'exécution du programme Java seront affichés dans la fenêtre de sortie de VSCode.

