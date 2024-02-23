<script>
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3 class="capitalize">Le polymorphisme</h3>
</Slide>
<Slide>
	<h3>Le polymorphisme</h3>
	<p>
		Le polymorphisme est un mécanisme important dans la programmation objet. Il permet de modifier
		le comportement d’une classe fille par rapport à sa classe mère. Le polymorphisme permet
		d’utiliser l’héritage comme un mécanisme d’extension en adaptant le comportement des objets.
	</p>
</Slide>
<Slide>
	<h3 class="capitalize">Principe du polymorphisme</h3>

	<p>
		Prenons l’exemple de la classe <em>Animal</em>. Cette classe offre une méthode
		<em>crier</em>. Pour simplifier notre exemple, la méthode se contente d’écrire le cri de
		l’animal sur la sortie standard.
	</p>
	<div class="flex gap-10 flex-row">
		<Code
			>{`
public class Animal {
	public void crier() {
    	System.out.println("un cri d'animal");
	}
}
public class Chat extends Animal {
	public void crier() {
    	System.out.println("Miaou !");
	}
}

public class Chien extends Animal {
	public void crier() {
		System.out.println("Whouaf whouaf !");
	}
}


	`}</Code
		>
		<Code
			>{`
Animal animal = new Animal();
animal.crier(); // affiche "un cri d'animal"

Chat chat = new Chat();
chat.crier();   // affiche "Miaou !"

Chien chien = new Chien();
chien.crier();  // affiche "Whouaf whouaf !"

animal = chat;
animal.crier(); // affiche "Miaou !"

animal = chien;
animal.crier(); // affiche "Whouaf whouaf !"`}</Code
		>
	</div></Slide
>

<Slide>
	<h3 class="capitalize">Une exception : les méthodes privées</h3>
	<p>
		Les méthodes de portée private ne supportent pas le polymorphisme. En effet, une méthode de
		portée private n’est accessible uniquement que par la classe qui la déclare. Donc si une classe
		mère et une classe fille définissent une méthode private avec la même signature, le compilateur
		les traitera comme deux méthodes différentes.
	</p>
</Slide>

<Slide>
	<h3 class="capitalize">Redéfinition et signature de méthode</h3>
	<p>
		Le principe du polymorphisme repose en Java sur la redéfinition de méthodes. Pour que la
		redéfinition fonctionne, il faut que la méthode qui redéfinit possède une signature
		correspondante à celle de la méthode orginale.
	</p>
</Slide>

<Slide>
	<h3 class="capitalize">Le mot-clé super</h3>
	<p>
		La redéfinition de méthode masque la méthode de la classe parente. Cependant, nous avons vu
		précédemment avec l’exemple de la méthode reculer que l’implémentation d’une classe fille a la
		possibilité d’appeler une méthode de la classe parente en utilisant le mot-clé super. L’appel à
		l’implémentation parente est très utile lorsque l’on veut effectuer une action avant et/ou après
		sans avoir besoin de dupliquer le code d’origine.
	</p>
	<Code
		>{`
public class Voiture extends Vehicule {
	public Voiture(String marque) {
		super(marque);
	}
	public void accelerer(float deltaVitesse) {
		// faire quelque chose avant
		super.accelerer(deltaVitesse);
		// faire quelque chose après
	}
}`}</Code
	>
</Slide>

<Slide>
	<h3 class="capitalize">Les méthodes de classe</h3>
	<p>
		Les méthodes de classe (déclarées avec le mot-clé static) ne supportent pas la redéfinition. Si
		une classe fille déclare une méthode static avec la même signature que dans la classe parente,
		ces méthodes seront simplement vues par le compilateur comme deux méthodes distinctes.
	</p>
	<div class="flex gap-10 flex-row">
		<Code
			>{`
	public class Parent {
		public static void methodeDeClasse() {
			System.out.println("Parent");
		}
	}
	public class Enfant extends Parent {
		public static void methodeDeClasse() {
			System.out.println("Enfant");
		}
	}`}</Code
		>
		<Code
			>{`
Parent a = new Enfant();
a.methodeDeClasse();
// Affiche : Parent

Enfant b = new Enfant();
b.methodeDeClasse();
// Affiche : Enfant
	`}</Code
		>
	</div>
</Slide>
<Slide>
	<h3 class="capitalize">Les méthodes de classe</h3>
	<p>
		Comme les méthodes sont <code>static</code>, la redéfinition ne s’applique pas et la méthode
		appelée dépend du type de la variable et non du type de l’objet référencé par la variable. Cet
		exemple illustre pourquoi il est très fortement conseillé d’appeler les méthodes
		<code>static</code> à partir du nom de la classe et non pas d’une variable afin d’éviter toute ambiguïté.
	</p>
	<Code
		>{`
		Parent.methodeDeClasse();
		Enfant.methodeDeClasse();
		`}</Code
	>
</Slide>
<Slide>
	<h3 class="capitalize">Méthode finale</h3>
	<p>
		Une méthode peut avoir le mot-clé <code>final</code> dans sa signature. Cela signifie que cette méthode
		ne peut plus être redéfinie par les classes qui en hériteront. Tenter de redéfinir une méthode déclarée
		final conduit à une erreur de compilation. L’utilisation du mot-clé final pour une méthode est réservée
		à des cas très spécifiques (et très rares).
	</p>
</Slide>

<Slide>
	<h3 class="capitalize">Constructeur et polymorphisme</h3>
	<p>
		Les constructeurs sont des méthodes particulières qu’il n’est pas possible de redéfinir. Les
		constructeurs créent une séquence d’appel qui garantit qu’ils seront exécutés en commençant par
		la classe la plus haute dans la hiérarchie d’héritage. Puisque toutes les classes Java héritent
		de la classe Object, cela signifie que le constructeur de Object est toujours appelé en premier.
	</p>
</Slide>

<Slide>
	<h3 class="capitalize">Masquage des attributs par héritage</h3>
	<p>
		Il est possible de déclarer dans une classe fille un attribut portant le même nom que dans la
		classe parente. Cependant ceci ne correspond ni à une redéfinition ni au principe du
		polymorphisme. L’attribut de la classe fille se contente de masquer l’attribut de la classe
		parente.
	</p>

	<p class="pl-4 border-red-500 border-l-2">
		En raison de la difficulté de compréhension que cela peut entraîner, il est préférable de ne
		jamais créer dans une classe fille un attribut portant le même nom que celui d’un attribut de
		portée package, protected ou public d’une de ses classes parentes.
	</p>
</Slide>

<Slide>
	<h3 class="capitalize">Le principe du ouvert/fermé</h3>
	<p>
		Le principe du ouvert/fermé stipule qu’une classe doit être conçue pour être ouverte en
		extension mais fermée en modification.
	</p>
	<p class="fragment">
		D’un côté, si une classe hérite d’une autre classe, elle doit pouvoir ajouter des nouveaux
		comportements avec de nouvelles méthodes. Par contre la redéfinition de méthode ne doit pas être
		utilisée pour créer une implémentation qui a un comportement trop différent de celui de la
		classe parente.
	</p>
	<p class="fragment">
		D’une autre côté, si une classe hérite d’une autre classe, elle ne doit pas pouvoir modifier le
		fonctionnement décrit par la classe parente. En Java, pour interdire de modifier le comportement
		d’une classe, on peut déclarer ses attributs
		<strong>private</strong> et les méthodes jugées les plus critiques peuvent être déclarées
		<strong>final</strong>.
	</p>
</Slide>
