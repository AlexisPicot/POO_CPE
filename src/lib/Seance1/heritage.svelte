<script>
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3 id="héritage-de-classes-en-programmation-orientée-objet" class="capitalize">
		Héritage de Classes
	</h3>
</Slide>

<Slide>
	<h3 id="héritage-de-classes-en-programmation-orientée-objet" class="capitalize">
		Héritage de Classes
	</h3>
	<div class="r-fit-text">
		<p>
			Une application Java est composée d’un ensemble d’objets. Un des intérêts de la programmation
			objet réside dans les relations que ces objets entretiennent les uns avec les autres. Ces
			relations sont construites par les développeurs et constituent ce que l’on appelle
			l’architecture d’une application. Il existe deux relations fondamentales en programmation
			objet :
		</p>
		<dl class="simple">
			<dt><strong>est un</strong> (<em>is-a</em>)</dt>
			<dd>
				<p>
					Cette relation permet de créer une chaîne de relation d’identité entre des classes. Elle
					indique qu’une classe peut être assimilée à une autre classe qui correspond à une notion
					plus abstraite ou plus générale. On parle <strong>d’héritage</strong> pour désigner le mécanisme
					qui permet d’implémenter ce type de relation.
				</p>
			</dd>
			<dt><strong>a un</strong> (<em>has-a</em>)</dt>
			<dd>
				<p>
					Cette relation permet de créer une relation de dépendance d’une classe envers une autre.
					Une classe a besoin des services d’une autre classe pour réaliser sa fonction. On parle
					également de relation de <strong>composition</strong> pour désigner ce type de relation.
				</p>
			</dd>
		</dl>
	</div>
</Slide>
<Slide>
	<h3 id="héritage-de-classes-en-programmation-orientée-objet">Héritage de Classes</h3>
	<div class="flex gap-10">
		<ul class="r-fit-text">
			<li>
				<strong>Objectif</strong>: Factoriser les attributs communs entre les classes.
			</li>
			<li>
				<strong>Approche</strong>: Définir une classe générale avec des attributs partagés.
			</li>
			<li>
				<strong>Exemple</strong>: Les classes “Carre” et “Rectangle” partagent la méthode
				“surface()” pour calculer leur surface.
			</li>
			<li>
				<strong>Optimisation</strong>: Établir une relation d’héritage entre les classes pour éviter
				la redondance de code.
			</li>
			<li>
				<strong>Résultat</strong>: Seule la classe “Rectangle” contient le code de la méthode
				“surface()”, mais elle reste utilisable par les objets de la classe “Carre” grâce à
				l’héritage.
			</li>
		</ul>
		<PlantUml className="w-1/3 "
			>{`
@startuml
digraph G {
node [ shape=box ]
rankdir="BT"
            
Rectangle -> Forme
Cercle -> Forme
Carre ->Rectangle
}
@enduml`}</PlantUml
		>
	</div>
</Slide>
<Slide
	><h3 id="héritage-de-classes-en-programmation-orientée-objet">Héritage de Classes</h3>
	<p>
		Imaginons que nous voulions développer un simulateur de conduite. Nous pouvons concevoir une
		classe Voiture qui sera la représentation d’une voiture dans notre application.
	</p>
	<p class="fragment">
		Mais nous pouvons également rendre possible la simulation d’une moto. Dans ce cas, nous aurons
		également besoin d’une classe Moto.
	</p>
	<div class="flex flex-row">
		<Code>
			{`
			public class Voiture {
									
				private final String marque;
				private float vitesse;
				
				public Voiture(String marque) {
					this.marque = marque;
				}
			}`}
		</Code>
		<Code className="fragment">
			{`
			public class Moto {
		
				private final String marque;
				private float vitesse;
				
				public Moto(String marque) {
					this.marque = marque;
				}
			}`}
		</Code>
	</div>
</Slide>

<Slide>
	<h3 id="héritage-de-classes-en-programmation-orientée-objet">Héritage de Classes</h3>
	<p class="text-left r-fit-text">
		En conséquence, nous avons deux classes qui partagent des attributs et des comportements
		similaires. Nous pouvons donc factoriser ces attributs et comportements communs dans une classe
		Véhicule.
	</p>
	<Code lines="18-20,25-27" className="r-strech h-[600px]">
		{`
		class Vehicule {
			private int vitesse;
		
			public Vehicule() {
				this.vitesse = 0;
			}
		
			public void accelerer() {
				this.vitesse += 10;
			}
		
			public void freiner() {
				this.vitesse -= 10;
			}
		}
		
		class Voiture extends Vehicule {
		
		}
		
		// Classe Moto qui hérite de Vehicule
		class Moto extends Vehicule {
		
		}
		
		public class Main {
			public static void main(String[] args) {
				Voiture voiture = new Voiture();
				Moto moto = new Moto();
		
				// Exemple d'utilisation des méthodes héritées
				voiture.accelerer();
				moto.accelerer();
			}
		}
		`}
	</Code>
</Slide>

<Slide>
	<h3 id="héritage-de-classes-en-programmation-orientée-objet">Héritage de Classes</h3>
	<p class="text-left r-fit-text">
		Bon les voitures et les motos partagent des comportements similaires, mais ils ont aussi des
		comportements spécifiques. Introduisons des méthodes spécifiques pour chaque classe. Les
		voitures peuvent fermer les portières et les motos peuvent replier la béquille.
	</p>
	<Code lines="18-20,25-27" className="r-strech h-[600px]"
		>{`

class Voiture extends Vehicule {
    public void fermerPortieres() {
        System.out.println("Portières fermées.");
    }
}

// Classe Moto qui hérite de Vehicule
class Moto extends Vehicule {
    public void replierBequille() {
        System.out.println("Béquille repliée.");
    }
}

public class Main {
    public static void main(String[] args) {
        Voiture voiture = new Voiture();
        Moto moto = new Moto();

        // Exemple d'utilisation des méthodes héritées
        voiture.accelerer();
        voiture.fermerPortieres();

        moto.accelerer();
        moto.replierBequille();
    }
}
`}</Code
	>
</Slide>

<Slide>
	<h3 id="héritage-de-classes-en-programmation-orientée-objet">Héritage de Classes</h3>
	<p class="text-left r-fit-text">
		On peut également surcharger un comportement<br />
		Dans cet exemple la voiture lorsqu'elle accèlère écrit dans la console<br />
		De même pour la moto sauf qu'on accèlère + !
	</p>
	<Code lines={true} className="r-strech h-[650px]"
		>{`

class Voiture extends Vehicule {
    public override void accelerer() {
        base.accelerer();
        system.out.println("La voiture accélère. 🚗");
    }
}

class Moto extends Vehicule {
    public override void accelerer() {
        this.vitesse += 20;
        system.out.println("La moto accélère (plus vite). 🏍💨");
    }
}
`}</Code
	>
</Slide>
<Slide>
	<h3 id="héritage-de-classes-en-programmation-orientée-objet">Héritage de Classes</h3>
	<h4>Les classes abstraites</h4>
	<p>
		Nous avons vu que l’héritage est un moyen de mutualiser du code dans une classe parente. Parfois
		cette classe représente une abstraction pour laquelle il n’y a pas vraiment de sens de créer une
		instance. Dans ce cas, on peut considérer que la généralisation est abstraite.

		<br />
		Par exemple, imaginez une classe <code>Forme</code> qui représente une forme géométrique et des classes <code>Rectangle</code>
		et <code>Cercle</code>, il n'y a pas de sens de créer une forme géométrique sans préciser de quelle forme il s'agit.
	</p>
	<p class="border-l-4 border-blue-500 pl-4">
		Par opposition, on appelle classe concrète une classe qui n’est pas abstraite.
	</p>
</Slide>
