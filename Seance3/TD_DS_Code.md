---
export_on_save:
  html: true
---

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