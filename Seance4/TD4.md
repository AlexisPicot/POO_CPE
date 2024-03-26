---
export_on_save:
  html: true
---

# Travaux Dirigés 4 - Conception itérative

Dans ce TD, vous allez modéliser un nouveau système comme celui des parcs d'attraction, l'idée et de valider que vous comprenez bien les concepts d'interfaces et d'héritage.
En outre, nous allons introduire des patrons de conception pour vous aider à modéliser votre système.
Nous allons détailler un peu plus nos classes pour répondre à des besoins plus précis.

Dans cet énoncé, nous allons modéliser une application etudiante, vous arrivez à la tête du BDE de votre école et vous voulez créer une application pour gérer les évènements et les clubs de votre école.

Vous avez brainstormé avec le bureau de votre équipe et vous avez extrait les besoins suivants qui peuvent être modélisés dans un diagramme de cas d'utilisation.

```plantuml
left to right direction
actor "Etudiant" as etudiant
actor "Responsable Foyer" as responsableFoyer
actor "Membre association" as membre

actor "Responsable billeterie" as responsableBilleterie

membre --|> etudiant
responsableFoyer --|> membre
responsableBilleterie --|> membre

etudiant --> (s'inscrire)
etudiant --> (consulter évènements)
etudiant --> (consulter clubs)
etudiant --> (consulter actualités)
etudiant --> (consulter billets)
etudiant --> (acheter billets)
etudiant --> (acheter nourriture)
etudiant --> (définir moyen de paiement)

membre --> (gérer évènements)
membre --> (gérer membres)
membre --> (gérer actualités)

responsableFoyer --> (commander nourriture)
responsableBilleterie --> (éditer billets)


```

Pour débuter, voici le diagramme de classe de base :
```plantuml
@startuml
!include classes.puml
@enduml
```

**Énoncé des travaux dirigés :**

1. Vous avez besoin d'une classe "Association" qui représente une association étudiante.
Une association a un nom, et un logo, une liste de membres, et un responsable.

1. Vous avez besoin d'une classe "Evenement" qui représente un évènement organisé par une association.
