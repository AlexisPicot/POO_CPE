<script>
	import Gpt from '$lib/deck/gpt.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Les objets et les classes</h3>
</Slide>
<Slide>
	<h3>Les objets et les classes</h3>
	<h4>Qu'est ce qu'un objet ?</h4>
	<Gpt>
		Un objet est une instance d'une <strong class="text-red-400">classe</strong> qui contient à la fois
		des informations et des actions spécifiques à une entité, comme une voiture ou un animal. Il combine
		les données (comme la couleur d'une voiture) et les actions (comme accélérer) en une seule entité
		utilisable.
	</Gpt>
	<span>En fin de compte, c'est un peu une variable, de type structure, mais avec des méthodes</span
	>
</Slide>
<Slide>
	<h3>Les objets et les classes</h3>
	<h4>Qu'est ce qu'une classe ?</h4>
	<Gpt>
		En programmation orientée objet (POO), une classe est comme un plan ou un modèle pour créer des
		objets. Prenons l'exemple d'une recette de cuisine : la classe serait semblable à la recette
		elle-même. Elle décrit les ingrédients nécessaires et les étapes à suivre pour créer un plat
		spécifique. Une fois que vous avez la recette, vous pouvez créer plusieurs plats différents en
		suivant les mêmes instructions de la recette.
	</Gpt>
</Slide>
<Slide>
	<h3>Les objets et les classes</h3>
	<h4>Qu'est ce que <span class="text-red-400">N'EST PAS</span> un objet ?</h4>
</Slide>
<Slide>
	<h3>Les objets et les classes</h3>
	<h4>Qu'est ce que <span class="text-red-400">N'EST PAS</span> un objet ?</h4>
	<div class="flex flex-row items-center">
		<pre>
            <code data-trim data-line-numbers={true} class="language-java">
			{`
public static void main(String[] args) {
    int vitesseVoiture = 0; 
    accelerer(vitesseVoiture);
    freiner(vitesseVoiture);
    System.out.printf(
     "La vitesse de la voiture est : %d km/h\n", vitesseVoiture);
    }
}
`}</code
			></pre>
	</div>
</Slide>
<Slide>
	<h3>Les objets et les classes</h3>
	<h4>Qu'est ce qu'un objet ?</h4>
	<div class="flex flex-row items-center">
		<pre>
            <code data-trim data-line-numbers={true} class="language-java">
			{`
public class Main {
	public static void main(String[] args) {
		Voiture maVoiture = new Voiture(); // Création d'un objet de type Voiture

		// Simulation des actions sur la voiture
		maVoiture.accelerer();
		maVoiture.freiner();

		// Affichage de la vitesse de la voiture
		System.out.printf(
				"La vitesse de la voiture est : %d km/h\n",
				maVoiture.vitesse);
	}
}

public class Voiture {
	public int vitesse; // La vitesse de la voiture

	// Constructeur
	public Voiture() {
		this.vitesse = 0; // La vitesse initiale est de 0
	}

	// Méthode pour accélérer la voiture
	public void accelerer() {
		// Implémentation de l'accélération (par exemple, ajouter 10 à la vitesse)
		this.vitesse += 10;
	}

	// Méthode pour freiner la voiture
	public void freiner() {
		// Implémentation du freinage (par exemple, soustraire 5 à la vitesse)
		this.vitesse -= 5;
	}
}`}</code
			></pre>
	</div>
</Slide>

<Slide>
	<h3>Ça semble sans intérêt</h3>
	<i>34 lignes pour ça ?</i>
	<div class="flex flex-row justify-center">
		<img
			alt="Pourquoi"
			class="object-cover text-center print:hidden h-[200px]"
			src="https://media1.tenor.com/m/s1wnF2DiWA0AAAAC/skeptical-futurama.gif"
		/>
	</div>
	<ul>
		<li>😫 Le code est plus long</li>
		<li>😕 Le code est moins optimisé</li>
		<li>🙄 Il y a 50 fichiers à modifier</li>
		<li>🙃 Il faut plus réflechir</li>
	</ul>
</Slide>
<Slide>
	<h3>Les avanatges de la POO</h3>
	<ul>
		<li>On va pouvoir faire de l'encapsulation</li>
		<li>On va pouvoir faire de l'héritage</li>
		<li>On va pouvoir faire du polymorphisme</li>
		<li>On va pouvoir faire de l'abstraction</li>
		<li>On va pouvoir faire de la modularité</li>
		<li>On va pouvoir faire de la réutilisabilité</li>
		<li>etc.</li>
	</ul>
</Slide>

<Slide>
	<h3 id="héritage-de-classes-en-programmation-orientée-objet">
		Héritage de Classes en Programmation Orientée Objet
	</h3>
	<div class="flex">
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
		<div class="uml w-full object-fit">
			<pre>
        <code class="no-highlight language-plantuml">
           {`
            @startuml
            digraph G {
             node [ shape=box ]
             rankdir="BT"
            
             Rectangle -> Forme
             Cercle -> Forme
             Carre ->Rectangle
            }
            @enduml`}
        </code>
        </pre>
		</div>
	</div>
</Slide>
