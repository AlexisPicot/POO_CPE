<script>
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3 class="capitalize">Encapsulation</h3>
</Slide>

<Slide>
	<h3 class="capitalize">Encapsulation</h3>
	<p>
		Un objet est constitué d’un état interne (l’ensemble de ses attributs) et d’une liste
		d’opérations disponibles pour ses clients (l’ensemble de ses méthodes publiques). En
		programmation objet, il est important que les clients d’un objet en connaissent le moins
		possible sur son état interne. Nous verrons plus tard avec les mécanismes d’héritage et
		d’interface qu’un client demande des services à un objet sans même parfois connaître le type
		exact de l’objet. La programmation objet introduit un niveau d’abstraction important et cette
		abstraction devient un atout pour la réutilisation et l’évolutivité.
	</p>
</Slide>
<Slide>
	<h3 class="capitalize">Encapsulation</h3>
	<div class="flex gap-10">
		<ul class="r-fit-text">
			<li>
				<strong>Objectif</strong>: L'encapsulation vise à regrouper les données et les méthodes
				associées dans une même entité, restreignant l'accès direct aux données.
			</li>
			<li>
				<strong>Approche</strong>: On définit une classe générale avec des attributs privés et des
				méthodes publiques pour interagir avec ces données.
			</li>
			<li>
				<strong>Exemple</strong>: Dans les classes "Carre" et "Rectangle", les données telles que la
				longueur et la largeur sont encapsulées, avec des méthodes pour les manipuler de manière
				contrôlée.
			</li>

			<li>
				<strong>Résultat</strong>: Grâce à l'encapsulation on assure la réutilisabilité du code et
				une maintenance aisée.
			</li>
		</ul>
	</div></Slide
>

<Slide>
	<h3 class="capitalize">Encapsulation</h3>
	<h4>Solution sans encapsulation</h4>
	<div class="flex flex-row items-center justify-center gap-10">
		<PlantUml className="w-1/3 mr-10"
			>{`
		@startuml
		class Voiture {
			+ vitesse: int
		}
		@enduml`}</PlantUml
		>
		<Code className={'w-1/2'} lines="10-11"
			>{`
public class Voiture {
	public int vitesse;

	public Voiture() {
		this.vitesse = 0;
	}
}
...
public static void main(String[] args) {
	Voiture maVoiture = new Voiture();
	maVoiture.vitesse = 100;
}
`}</Code
		>
	</div>
</Slide>
<Slide>
	<h3 class="capitalize">Encapsulation</h3>
	<h4>Solution sans encapsulation</h4>
	<div class="flex flex-row items-center justify-center gap-10">
		<PlantUml className="w-1/3 mr-10"
			>{`
		@startuml
		class Voiture {
			+ vitesse: int
		}
		@enduml`}</PlantUml
		>
		<Code className="w-1/2 r-strech h-[600px]" lines="10-13"
			>{`
public class Voiture {
	public int vitesse;

	public Voiture() {
		this.vitesse = 0;
	}
}
...
public static void main(String[] args) {
	Voiture maVoiture = new Voiture();
	maVoiture.vitesse = 100;
	maVoiture.vitesse = -100; //❌
	mavoiture.vitesse = 10000000; //❌
}
`}</Code
		>
	</div>
</Slide>

<Slide>
	<h3 class="capitalize">Encapsulation</h3>
	<h4>Solution <strong class="text-red-400">avec</strong> encapsulation</h4>
	<div class="flex flex-row items-center justify-center gap-10">
		<PlantUml className="w-1/3 mr-10"
			>{`
		@startuml
		class Voiture {
			- vitesse: int
			+ accelerer(): void
			+ freiner(): void
		}
		@enduml`}</PlantUml
		>
		<Code className="w-1/2 r-strech h-[600px]" lines="2,19,20"
			>{`
public class Voiture {
	private int vitesse;

	public Voiture() {
		this.vitesse = 0;
	}

	public void accelerer() {
		this.vitesse += 10;
	}

	public void freiner() {
		this.vitesse -= 5;
	}
}
...
public static void main(String[] args) {
	Voiture maVoiture = new Voiture();
	maVoiture.accelerer();
	maVoiture.freiner();
}
`}</Code
		>
	</div>
</Slide>
<Slide>
	<h3 class="capitalize">Encapsulation</h3>
	<Code
		>{`
Voiture maVoiture = new Voiture(); 

// Simulation des actions sur la voiture
maVoiture.accelerer();
maVoiture.freiner();

// Affichage de la vitesse de la voiture
System.out.printf(
		"La vitesse de la voiture est : %d km/h\n",
		maVoiture.vitesse);	
	`}</Code
	>
</Slide>

<Slide>
	<h3 class="capitalize">Encapsulation</h3>
	<h4>Cas d'usage</h4>
	<div class="r-fit">
		<p class=" text-left">
			Vous implémentez une librairie pour communiquer avec votre logiciel de note de frais ; si une
			dépense est validée elle s'ajoute à une variable <code class="text-purple-400">montant</code>
			et un compteur
			<code class="text-purple-400">count</code> s'incrémente.<br />
			Vous distribuez votre librairie à d'autres collègues<br />
			Si vous n'encapsulez pas vos variables :
		</p>
		<ul>
			<li>
				<p>
					Vous allez vous retrouver avec un compteur à 0 et un montant non nul car vos collègues
					auront oublié de l'incrémenter
				</p>
			</li>
			<li><p>Ils vont evidement mettre 1 000 000€ sans passer par la méthode de validation</p></li>
			<li>Quelqu'un va essayer d'écrire -0.01€</li>
		</ul>
	</div>
</Slide>
<Slide>
	<h3 class="capitalize">Encapsulation</h3>
	<p>
		En résumé, l'encapsulation permet de protéger les données internes d'un objet et de les rendre
		accessibles uniquement via des méthodes publiques. Cela permet de contrôler l'accès aux données
		et de garantir leur intégrité.<br />
		En programmation objet, le principe d’encapsulation nous incite à contrôler et limiter l’accès au
		contenu de nos classes au strict nécessaire afin de permettre le couplage le plus faible possible.
		L’encapsulation en Java est permise grâce à la portée private.
		<br />
		On considère que tous les attributs d’une classe doivent être déclarés private afin de satisfaire
		le principe d’encapsulation.
	</p></Slide
>
