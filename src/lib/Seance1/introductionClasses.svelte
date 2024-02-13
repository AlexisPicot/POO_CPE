<script>
	import Code from '$lib/deck/code.svelte'

	import Gpt from '$lib/deck/gpt.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Les objets et les classes</h3>
</Slide>
<Slide>
	<h3>Évolution</h3>
	<h4>L'assembleur</h4>

	<p>Programmation dictée par le fonctionnement des processeurs</p>
	<ul>
		<li>Programme = succession d'instructions</li>
		<li>
			Organisation du programme et nature des instructions le plus proche possible de la façon dont
			le processeur les exécute
			<ul>
				<li>Modification des données mémorisées</li>
				<li>Déplacement des données d'un emplacement à un autre</li>
				<li>Opérations arithmétiques et de logique élémentaires</li>
				<li>
					Programmation en langage « machine »
					<ul>
						<li>Exemple : « c = a + b » se programme</li>
						<li>
							<Code lines className="language-x86asm"
								>{`
						LD A, REG1
						LD B, REG2
						ADD REG3, REG1, REG2
						MV c, REG3`}</Code
							>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</Slide>
<Slide>
	<h3>Évolution</h3>
	<h4>Les langages procéduraux</h4>
	<p>Mise au point d'algorithmes plus complexes</p>

	<ul>
		<li>
			Nécessité de simplifier la programmation
			<ul><li>Langages C, Cobol, etc.</li></ul>
		</li>
		<li>
			Le raisonnement reste néanmoins conditionné par la conception des traitements et leur
			succession
			<ul>
				<li>Éloigné de la manière humaine de poser et résoudre les problèmes</li>
				<li>Mal adapté à des problèmes de plus en plus complexes</li>
			</ul>
		</li>
	</ul>
</Slide>

<Slide>
	<h3>Évolution</h3>
	<h4>Les langages orientés objet</h4>
	<p>Libérer la programmation des contraintes liées au fonctionnement des processeurs</p>

	<ul>
		<li>Rapprocher la programmation du mode cognitif de résolution des problèmes</li>
		<li>
			Mise au point d'un nouveau style de langage de programmation
			<ul>
				<li>Placer les entités, objets ou acteurs du problème à la base de la conception</li>
				<li>Étudier les traitements comme des interactions entre les entités</li>
				<li>Penser aux données AVANT de penser aux traitements</li>
			</ul>
		</li>
	</ul>
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
	<h4>Qu'est ce qu'une classe ?</h4>

	<ul>
		<li>
			Une classe est constituée de descriptions de :
			<ul>
				<li>données : que l'on nomme <strong>attributs</strong></li>
				<li>procédures et fonctions : que l'on nomme <strong>méthodes</strong></li>
			</ul>
		</li>
		<li>
			Une classe est uniquement un modèle de représentation d'objets
			<ul>
				<li>ayant même structure (même ensemble d'attributs)</li>
				<li>ayant même comportement (même ensemble de méthodes)</li>
			</ul>
		</li>
		<li>
			Les objets sont des représentations, on parle d'instances du modèle défini dans les classes
			<ul>
				<li>une classe permet d'instancier (créer) plusieurs objets</li>
				<li>en général, un objet est instance d'une classe</li>
			</ul>
		</li>
	</ul>
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
            <code data-trim data-line-numbers={true} class="r-strech h-[650px]">
			{`
public static void main(String[] args) {
    int vitesseVoiture = 0; 
    accelerer(vitesseVoiture);
    freiner(vitesseVoiture);
    System.out.printf(
     "La vitesse de la voiture est : %d km/h\n", vitesseVoiture);
    }
	public void accelerer(int vitesse){
		vitesse += 10;
	}
	public void freiner(int vitesse){
		vitesse -= 10;
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
	<h3>Généralités</h3>
	<h4>Les constructeurs</h4>
	<div class="r-fit-text">
		<p>
			Les constructeurs en Java sont des méthodes spéciales utilisées pour initialiser les objets
			d'une classe. Voici quelques points clés à retenir :
		</p>
		<ul class="fragment">
			<li>
				<strong>Initialisation des objets</strong>: Les constructeurs sont utilisés pour initialiser
				les variables d'instance d'un objet lors de sa création.
			</li>
			<li class="fragment">
				<strong>Nom de la classe</strong>: Le nom du constructeur doit correspondre exactement au
				nom de la classe dans laquelle il est défini.
			</li>
			<li class="fragment">
				<strong>Pas de type de retour explicite</strong>: Contrairement aux autres méthodes, les
				constructeurs n'ont pas de type de retour explicite, même pas <code>void</code>.
			</li>
			<li class="fragment">
				<strong>Surcharges</strong>: Vous pouvez définir plusieurs constructeurs dans une classe en
				utilisant la surcharge, ce qui permet de créer des objets de différentes manières.
			</li>
			<li class="fragment">
				<strong>Appel explicite du constructeur parent</strong>: Si une classe hérite d'une autre
				classe, le constructeur de la classe enfant peut explicitement appeler le constructeur de la
				classe parent en utilisant <code>super()</code>.
			</li>
			<li class="fragment">
				<strong>Appel implicite</strong>: Si aucun constructeur n'est explicitement défini dans une
				classe, Java fournit un constructeur par défaut qui initialise les variables d'instance avec
				des valeurs par défaut.
			</li>
			<li class="fragment">
				<strong>Chaque objet a un constructeur</strong>: Chaque objet en Java est créé en appelant
				un constructeur, que ce soit le constructeur par défaut fourni par Java ou un constructeur
				défini par l'utilisateur.
			</li>
		</ul>
		<p class="fragment">
			En résumé, les constructeurs en Java sont des éléments essentiels pour initialiser les objets
			et peuvent être utilisés pour fournir différentes manières de créer des instances d'une
			classe.
		</p>
	</div>
</Slide>
<Slide>
	<h3>La classe <code>Object</code></h3>
	<p>Toute classe déclarée hérite implicitement de la classe <code>Object</code></p>
	<p>Tout objet peut redéfinir une méthode <code>toString()</code></p>
	<Code
		>{`
import java.util.*;

public class Main {
	int car_no;
	
	Main(int car_no){
		this.car_no=car_no;
	}

	// Driver code
	public static void main(String args[])
	{
		Main s = new Main(16);

		// Below two statements are equivalent
		System.out.println(s.toString());
		System.out.println(s);
	}
}
`}
	</Code>
	<Code
		>{`
        Main@d716361
        Main@d716361
            `}</Code
	>
</Slide>

<Slide>
	<h3>La classe <code>Object</code></h3>
	<p>Toute classe déclarée hérite implicitement de la classe <code>Object</code></p>
	<p>Tout objet peut redéfinir une méthode <code>toString()</code></p>

			<Code lines="10-12"
				>{`
            import java.util.*;

            public class Main {
                int car_no;
                
                Main(int car_no){
                    this.car_no=car_no;
                }
                // Overriding the toString()
                public String toString() {
                    return "Nombre de voitures : "+ car_no;
                }
                // Driver code
                public static void main(String args[])
                {
                    Main s = new Main(16);
                    System.out.println(s);
                }
            }
            `}</Code
			>
		<Code>{`Nombre de voitures : 16`}</Code></Slide
>
<Slide>
	<h3>La classe <code>Object</code></h3>
	<p>Toute classe déclarée hérite implicitement de la classe <code>Object</code></p>
	
	<p>Tout objet peut redéfinir une méthode <code>compareTo()</code></p>
	
	<Code lines
		>{`
		// Overriding compareTo() method
    @Override public int compareTo(GFG o)
    {
        if (this.age > o.age) {
 
            // if current object is greater,then return 1
            return 1;
        }
        else if (this.age < o.age) {
 
            // if current object is greater,then return -1
            return -1;
        }
        else {
 
            // if current object is equal to o,then return 0
            return 0;
        }
    }`}</Code
	>
</Slide>
<Slide>
	<h3>La classe <code>Object</code></h3>
	<p>Toute classe déclarée hérite implicitement de la classe <code>Object</code></p>
	<p>Tout objet peut redéfinir une méthode <code>equals()</code></p>
	
	<Code lines="12-32"
		>{`
		class Complex {
		 
		 private double re, im;
		
		 public Complex(double re, double im) {
			 this.re = re;
			 this.im = im;
		 }
		
		 // Overriding equals() to compare two Complex objects
		 @Override
		 public boolean equals(Object o) {
		
			 // If the object is compared with itself then return true  
			 if (o == this) {
				 return true;
			 }
		
			 /* Check if o is an instance of Complex or not
			   "null instanceof [type]" also returns false */
			 if (!(o instanceof Complex)) {
				 return false;
			 }
			  
			 // typecast o to Complex so that we can compare data members 
			 Complex c = (Complex) o;
			  
			 // Compare the data members and return accordingly 
			 return Double.compare(re, c.re) == 0
					 && Double.compare(im, c.im) == 0;
		 }
		}`}</Code
	>
</Slide>
