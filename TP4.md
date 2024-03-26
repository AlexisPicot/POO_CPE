---
title: "TP 4"
export_on_save:
  html: true
---

Dans ce TP, vous allez mettre en oeuvre un échiquier, d'abord en console si vous préferez ou directement en IHM, Swing ou la technologie de votre choix.

Vous veillerez à bien découper votre projet en respectant l'architecture MVC.
Pour rajouter un peu de compléxité, l'abstraction de votre code doit être telle que certains de vos services pourraient être échangés avec vos camarades.

```plantuml

struct Coord{
    x: int
    y: int
}
enum Couleur {
  BLANC, NOIR
}
interface IMouvementPieceValidator{
  isDeplacementValide(Piece piece,Coord coord)
}
interface IPlateau{
  Piece getPiece(Coord coord)
  void setPiece(Coord coord,Piece piece)
}
abstract class Piece{
  prop Coord coords,
  prop Couleur couleur
}
class Cavalier extends Piece
class Fou extends Piece
class Roi extends Piece
class Tour extends Piece
class Reine extends Piece
class Pion extends Piece


```
