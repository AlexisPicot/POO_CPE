---
export_on_save:
  html: true
---
<style>
@media print {
   .no-print {display:none;}
}
</style>
<script>
// Fonction pour enregistrer le contenu des zones de texte dans le localStorage
function sauvegarderContenu() {
    // Sélectionner tous les textarea sur la page
    var textAreas = document.querySelectorAll('textarea');

    // Parcourir tous les textarea et les sauvegarder dans le localStorage
    textAreas.forEach(function(textarea, index) {
        localStorage.setItem("contenuTextarea" + (index + 1), textarea.value);
    });
}

// Fonction pour charger le contenu des zones de texte depuis le localStorage
function chargerContenu() {
    // Sélectionner tous les textarea sur la page
    var textAreas = document.querySelectorAll('textarea');

    // Parcourir tous les textarea et charger leur contenu depuis le localStorage
    textAreas.forEach(function(textarea, index) {
        textarea.value = localStorage.getItem("contenuTextarea" + (index + 1)) || "";
    });
}

// Appeler la fonction de chargement lors du chargement de la page
window.onload = chargerContenu;

// Appeler la fonction de sauvegarde toutes les secondes
setInterval(sauvegarderContenu, 1000);
</script>
# Travaux Dirigés 3 Bis - DS de l'an dernier 2ème session
<input type="button" style="position: fixed; right:1em; top:1em;" value="Print this page" onClick="window.print()">
Ce TD est une adaptation du DS de 2ème session de l'an dernier.
La coïncidence est que le sujet est très proche de ce que nous avons vu en TP.


L'objectif n'est pas de répondre à l'énnoncé à l'aide d'une IA, les réponses permettent de vérifier les connaissances acquises en cours et permettre de revenir dessus pour vous préparer à l'examen.

**A la fin, vous pourrez cliquer sur "Print this page" pour imprimer vos réponses en PDF et les déposer sur le e-campus.**
> Normalement, vos réponses sont sauvegardées toutes les secondes dans le localStorage de votre navigateur, donc si vous actualisez la page, vous ne devriez pas perdre vos réponses.


**Le code source est fourni en annexe, en bas de page mais vous pouvez l'ouvrir dans un nouvel onglet** : <a target="_blank" href="./TD_DS_Code.html">Code source</a>

## But du programme

Le programme proposé en annexe permet de simuler la création de personnages dans un jeu type RPG (Role Play Game) et de leurs interactions dans le jeu. Les personnages peuvent être de différents types, jouables ou non et sont créés avec des caractéristiques précises (nom, attaque, défense, soin, arme…). Dans ce programme, tous les personnages sont créés de la même façon.









### Compréhension du programme et Analyse de la conception (12 points)
Avant de répondre aux questions, étudiez-bien le code. Vous pouvez dessiner rapidement au brouillon le diagramme de classes si cela vous aide à le comprendre (nom des classes/interfaces et liens entre elles).
#### 1.	Ecrivez ce qui s’affiche à l’écran lorsque le programme est exécuté jusqu’au commentaire « //FIN QUESTION 2.1 »


<textarea rows="15" style="width:100%" ></textarea>

#### 2.	Pourquoi la définition de la classe « PNJ » est nécessaire, alors que la classe est vide ?




<textarea rows="15" style="width:100%" ></textarea>


#### 3.	Pourquoi appeler la méthode « super() » dans les constructeurs des classes « Warrior », « PNJ » et « Healer » ? (ne répondez pas "pour appeler le constructeur parent")




<textarea rows="15" style="width:100%" ></textarea>

#### 4.	Pourquoi l'attribut « weapon » de la classe « AbstractCharacter » est-il déclaré protected ? (ne répondez pas, pour qu’elle soit accessible dans les classes filles)




<textarea rows="15" style="width:100%" ></textarea>

#### 5.	Donnez les étapes pour ajouter un nouveau type de personnage jouable "Hunter" et l’utiliser dans la fabrique « CharacterFactory » ? (ne répondez pas « Il faut créer une classe « Hunter »).







<textarea rows="15" style="width:100%" ></textarea>








#### 6.	Pourquoi dans le main() de la classe « Jeu », est-il impossible d’appeler directement la méthode « attack » sur l’objet « warrior » ? Que faudrait il faire pour que l’on puisse l’appeler ?




<textarea rows="15" style="width:100%" ></textarea>

 
### Développements en Java (10 points)


#### 1.	Ecrivez la méthode toString() de la classe « Hunter » (créée à la question précédente) pour que la sortie soit la suivante :
« Je suis un personnage du nom de Rexxar
J'ai 150 points de vie
J'ai 50 points d'attaque
J'ai 30 points de défense
J'ai 10 points de soin
Ma classe est : chasseur »








<textarea rows="15" style="width:100%" ></textarea>


#### 2.	Ecrivez la méthode « heal() » de la classe « Healer ». (Cette méthode fonctionne comme la méthode « attack() » de la classe « Warrior » à la différence qu’elle redonne des pv au lieu d’en enlever).



<textarea rows="15" style="width:100%" ></textarea>


#### 3.	Que fait la méthode « isActionCritique() » de la classe « AbstractCharacter » ? (ne répondez pas qu’elle compare le taux à un nb aléatoire).


<textarea rows="15" style="width:100%" ></textarea>


#### 4.	Ecrivez la méthode « setHeal() » de la classe « AbstractCharacter » en réfléchissant à son fonctionnement. (Attention, un personnage ne peut pas avoir plus de points de vie après un soin qu’il n’en avait à sa création). 

<textarea rows="15" style="width:100%" ></textarea>

<div class="no-print">
<div style="page-break-after: always"></div>


## Code source


```java

/* Toutes les classes/interfaces/Enum ont été déclarées dans le même fichier ce qui explique que seule Jeu soit « public » */

public class Jeu {
	public static void main(String args[]) {

		//DEBUT QUESTION 2.1
		CharacterFactory factory = new CharacterFactory();
		factory.initList();
		factory.displayList();
		//FIN QUESTION  2.1

		//DEBUT QUESTION 2.6
		ICharacter warrior = factory.createCharacters(CharacterType.Warrior, "Diablo");
		ICharacter healer = factory.createCharacters(CharacterType.Healer, "Brightwing");
		warrior.action(healer);

		//warrior.attack(healer); // IMPOSSIBLE
		//FIN QUESTION 2.6
	}
}

 enum CharacterType {
	Warrior,
	Healer,
	PNJ
}

 class CharacterFactory {

	private List<ICharacter> listCharacters;

	public CharacterFactory() {
		this.listCharacters = new LinkedList<ICharacter>();
	}

	public void initList() {
		ICharacter warrior = this.createCharacters(CharacterType.Warrior, "Garrosh");
		this.listCharacters.add(warrior);

		ICharacter priest = this.createCharacters(CharacterType.Healer, "Anduin");
		this.listCharacters.add(priest);

		ICharacter pnj = this.createCharacters(CharacterType.PNJ, "Eric");
		this.listCharacters.add(pnj);
	}

	public ICharacter createCharacters(CharacterType type, String name) {
		ICharacter personnage = null;
		switch (type) {
		case Healer:
			personnage = new Healer(name, 100, 10, 2, 100);
			break;
		case Warrior:
			personnage = new Warrior(name, 150, 100, 5, 0, new Arme(6));
			break;
		case PNJ:
			personnage = new PNJ(name);
			break;
		}
		return personnage;
	}

	public void displayList() {
		for (ICharacter personnage : this.listCharacters) {
			System.out.println(personnage.toString());
			System.out.println(System.getProperty("line.separator"));
		}
	}
}
 interface ICharacter {
	String getName();
	int getAttaque();
	int getDefense();
	int getHeal();
	boolean isDead();
	void action(ICharacter healer);
	boolean isActionCritique(int taux);
	
}


 abstract class AbstractCharacter implements ICharacter {

	private String name;

	//pv veut dire "Point de vie"
	private int pvBase;
	private int pv;
	private int attBase;
	private int defBase;
	private int healBase;
	protected Arme weapon;

	public AbstractCharacter(String name) {
		this.name = name;
	}

	public AbstractCharacter(String name, int pv, int attack, int defense, int heal) {
		this.name = name;
		this.pvBase = pv;
		this.pv = pvBase;
		this.attBase = attack;
		this.defBase = defense;
		this.healBase = heal;
	}

	public String getName() {
		return this.name;
	}

	public int getAttaque(){return this.attBase;}

	public int getDefense(){return this.defBase;}

	public int getHeal(){return this.healBase;}

	public boolean isDead() {
		return pv == 0;
	}

	public abstract void action(ICharacter dest);

	protected void setDamage(int damages) {
		this.pv -= damages;
		if (this.pv <= 0)
			this.pv = 0;
	}

	protected void setHeal(int heal) {

		//TODO QUESTION 3.4    








	}

	public boolean isActionCritique(int taux) {
		double nb = Math.random() * 100;
		return nb <= taux;
	}

	@Override
	public String toString() {

		return "Je suis un personnage du nom de " + this.name +
				System.getProperty("line.separator") +
				"J'ai " + this.pv + " points de vie" +
				System.getProperty("line.separator") +
				"J'ai " + this.attBase + " points d'attaque" +
				System.getProperty("line.separator") +
				"J'ai " + this.defBase + " points de défense" +
				System.getProperty("line.separator") +
				"J'ai " + this.healBase + " points de soin";
	}
}


 class Arme {
	private final int attaque;

	public int getAttaque() {
		return this.attaque;
	}

	public Arme(int attaque) {
		this.attaque = attaque;
	}
}


//PNJ veut dire "Personnage non joueur"
 class PNJ extends AbstractCharacter {

	public PNJ(String name) {
		super(name);
	}

	@Override
	public void action(ICharacter dest) {
	}

	@Override
	public String toString() {
		return super.toString() +
				System.getProperty("line.separator") +
				"Je suis un personnage non joueur";
	}
}

 interface IAttack {
	void attack(ICharacter toAttack);
}

 class Warrior extends AbstractCharacter implements IAttack {

	public Warrior(String name, int pv, int attack, int defense, int heal, Arme weapon) {
		super(name, pv, attack, defense, heal);
		this.weapon = weapon;
	}

	@Override
	public void action(ICharacter dest) {
		this.attack(dest);
	}

	@Override
	public void attack(ICharacter dest) {
		int damages;
		int attack = this.getAttaque() + this.weapon.getAttaque();

		if (this.isActionCritique(5)) {
			attack *= 2;
		}
		damages = attack - dest.getDefense();

		if (damages > 0)
			((AbstractCharacter) dest).setDamage(damages);
	}

	@Override
	public String toString() {
		return super.toString() +
				System.getProperty("line.separator") +
				"Ma classe est : guerrier";
	}
}



 interface IHeal {
	void heal(ICharacter toHeal);
}



 class Healer extends AbstractCharacter implements IHeal {
	public Healer(String name, int pv, int attack, int defense, int heal) {
		super(name, pv, attack, defense, heal);
	}


	@Override
	public void action(ICharacter dest) {
		this.heal(dest);
	}


	@Override
	public String toString() {
		return super.toString() +
				System.getProperty("line.separator") +
				"Ma classe est : soigneur";
	}





	@Override
	public void heal(ICharacter toHeal) {

		//TODO Question 3.2










	}
}


```

</div>