<script>
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Le langage Java</h3>
	<div class="flex flex-col justify-center">
		<img class="object-contain h-64 w-full" src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg"
			alt="Java Logo" />
		<p class="italic r-strech">
			Java est un langage de programmation polyvalent, orienté objet et largement utilisé dans le
			développement logiciel. Il a été conçu pour être portable, ce qui signifie qu'il peut
			fonctionner sur différentes plateformes sans nécessiter de modifications importantes.
		</p>
	</div>
</Slide>
<Slide>
	<h3>Fonctionnement</h3>
	<div class="r-fit-text">
		<p>L’indépendance par rapport à l’environnement d’exécution est garantie par la <em>machine virtuelle Java</em>
			(Java Virtual Machine ou <strong>JVM</strong>). En effet, Java est un langage compilé mais le compilateur ne
			produit pas de code natif pour la machine, il produit du <a class="reference external"
				href="https://fr.wikipedia.org/wiki/Bytecode_Java">bytecode</a> : un jeu d’instructions compréhensibles
			par la JVM qu’elle va traduire en code exécutable par la machine au moment de l’exécution.</p>
		<p>Pour qu’un programme Java fonctionne, il faut non seulement que les développeurs aient compilé le code
			source mais il faut également qu’un environnement d’exécution (comprenant la JVM) soit installé sur
			la machine cible.</p>
		<p>Il existe ainsi deux environnements Java qui peuvent être téléchargés et installés depuis le <a
				class="reference external"
				href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">site
				d’Oracle</a> :</p>
		<dl class="simple">
			<dt>JRE - Java Runtime Environment</dt>
			<dd>
				<p>Cet environnement fournit uniquement les outils nécessaires à l’exécution de programmes Java. Il
					fournit entre-autres la machine virtuelle Java.</p>
			</dd>
			<dt>JDK - Java Development Kit</dt>
			<dd>
				<p>Cet environnement fournit tous les outils nécessaires à l’exécution mais aussi au développement de
					programmes Java. Il fournit entre-autres la machine virtuelle Java et la compilateur.</p>
			</dd>
		</dl>
	</div>
</Slide>
<Slide>
	<h3>Le langage Java</h3>
	<h4>Caractéristiques</h4>
	<div class="flex flex-col justify-center">
		<ul class="r-strech">
			<li>S'inspire mais se débarrasse des complexités du C (pointeurs, allocation mémoire,..)</li>
			<li>Orienté objet !</li>
			<li>Gestion automatique de la mémoire</li>
			<li>
				Typage statique fort (à la différence de Python, les variables doivent être déclarées avec
				leur type)
				<Code>{`
					int i = 0;
					i = 4; // OK
					i = "bonjour"; // ERREUR : on tente d'affecter une chaîne de caractères`}

				</Code>
			</li>
			<li>Bibliothèque de classes et de packages très riche (graphismes, encryption, …)</li>
			<li>Polymorphisme et introspection</li>
		</ul>
	</div>
</Slide>

<Slide>
	<h3>Conventions</h3>
	<div class="flex flex-col justify-center">
		<ul class="r-strech">
			<li>
				Les noms de classe commencent par une majuscule
				<ul>
					<li><code>Visage, Objet</code></li>
				</ul>
			</li>
			<li>
				Les mots contenus dans un identificateur commencent par une minuscule
				<ul>
					<li><code>uneClasse, uneMethode, uneVariable</code></li>
				</ul>
			</li>
			<li>
				Les constantes sont en majuscules
				<ul>
					<li><code>UNE_CONSTANTE</code></li>
				</ul>
			</li>
		</ul>
	</div>
</Slide>
<!-- Types de données en Java
• 2 grands groupes de types de données :
– types primitifs
– objets (instances de classes)
• Java manipule différemment les valeurs des types primitifs et
les objets : les variables contiennent :
– des valeurs de types primitifs
– ou des références aux objets -->
<Slide>
	<h3>Types de données</h3>
	<div class="flex flex-col justify-center">
		<ul class="r-strech">
			<li>
				Types primitifs
				<ul>
					<li><code>byte, short, int, long, float, double, char, boolean</code></li>
				</ul>
			</li>
			<li>
				Objets (instances de classes)
				<ul>
					<li><code>String, Integer, Float, Double, Boolean, Character, …</code></li>
				</ul>
			</li>
		</ul>
	</div>
</Slide>

<Slide>
	<h3>Types de données</h3>
	<h4>Le type String</h4>
	<ul>
		<li>Ce n'est pas un type primitif, c'est une classe (d'où la présence de la majuscule)</li>
		<li>
			Comme c'est une classe, on utilise le mot-clef new pour créer un objet, on parle d'une
			instance de classe de type String
			<Code>{`
				String str = new String() ;
				str = "ceci est une phrase" ;
				`}
			</Code>
		</li>
		<li>la chaîne de caractères se met entre guillemets</li>
		<li>
			Exceptionnellement, il est possible de déclarer une chaîne de caractère sans utiliser <code
				class="text-purple-400">new</code>
			<Code>{`
				String str = "ceci est une phrase" ;
				`}
			</Code>
		</li>
	</ul>
</Slide>

<Slide>
	<h3>Syntaxe</h3>
	<div class="flex flex-col justify-center">
		<Code id="code" lines="1-5">
			{`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`}</Code>
		<p class="italic r-strech">
			La syntaxe de Java est similaire à celle de C++, mais elle a moins de fonctionnalités basées
			sur les pointeurs. Java est un langage de programmation orienté objet, ce qui signifie que les
			programmes Java sont constitués de classes et d'objets.
		</p>
	</div>
</Slide>
<Slide>
	<h3>Syntaxe</h3>
	<h4>Les variables</h4>
	<div class="flex flex-col justify-center">
		<Code id="code" lines="3-7">
			{`
public class Main {
    public static void main(String[] args) {
		String name = "John";
		String name2 = new String("John");
		int age = 30;
		float salary = 1000.0f;
		boolean isJavaFun = false;
		char grade = 'A';
		System.out.println("Hello World");
    }
}`}</Code>
	</div>
</Slide>
<Slide>
	<h3>Syntaxe</h3>
	<h4>Les structures de contrôle</h4>
	<h5>Condition</h5>
	<div class="flex flex-col justify-center">
		<Code id="code" lines="3-7">
			{`
public class Main {
    public static void main(String[] args) {
        if (condition) {
            // code block
        } else {
            // code block
        }
        System.out.println("Hello World");
    }
}`}</Code>
	</div>
</Slide>
<Slide>
	<h3>Syntaxe</h3>
	<h4>Les structures de contrôle</h4>
	<h5>Boucle</h5>
	<div class="flex flex-col justify-center">
		<Code id="code" lines="3-5">
			{`
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            // code block
        }
        System.out.println("Hello World");
    }
}`}</Code>
	</div>
</Slide>
<Slide>
	<h3>Syntaxe</h3>
	<h4>Les structures de contrôle</h4>
	<h5>Boucle</h5>
	<div class="flex flex-col justify-center">
		<Code id="code" lines="3-7">
			{`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            // code block
            i++;
        }
        System.out.println("Hello World");
    }
}`}</Code>
	</div>
</Slide>
<Slide>
	<h3>Syntaxe</h3>
	<h4>Les structures de contrôle</h4>
	<h5>Boucle</h5>
	<div class="flex flex-col justify-center">
		<Code id="code" lines="3-7">
			{`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        do {
            // code block
            i++;
        } while (i < 5);
        System.out.println("Hello World");
    }
}`}</Code>
	</div>
</Slide>
<Slide>
	<h3>Syntaxe</h3>
	<h4>Les structures de contrôle</h4>
	<h5>Les switch</h5>
	<div class=" flex flex-col justify-center">
		<Code id="code" lines="3-13">
			{`
        public class Main {
            public static void main(String[] args) {
                int age = 30;
                switch (age) {
                    case <10:
                        // code block
                        break;
                    case <18:
                        // code block
                        break;
                    default:
                        // code block
                }
                System.out.println("Hello World");
            }
        }`}</Code>
	</div>
</Slide>

<Slide>
	<h3>Syntaxe</h3>
	<h4>Les exceptions</h4>
	<div class=" flex flex-col justify-center">
		<Code id="code" lines="3-8">
			{`
			public class Main {
				public static void main(String[] args) {
					try {
						int[] myNumbers = {1, 2, 3};
						System.out.println(myNumbers[10]);
					} catch (Exception e) {
						System.out.println("Something went wrong.");
					}
				}
			}
			`}</Code>
	</div>
</Slide>

<Slide>
	<h3>La génération de nombres "aléatoires"</h3>
	<div class=" flex flex-col justify-center">
		<Code id="code" lines="4-6">
			{`
import java.util.Random;
public class Main {
	public static void main(String [] args){
		Random r = new Random();
		int a;
		a = r.nextInt(100);
		System.out.println(a + "\t" + r.nextInt(20));
	}
}
`}</Code>
	</div>
</Slide>
<Slide>
	<h3>Syntaxe</h3>
	<h4>La lecture clavier</h4>
	<div class=" flex flex-row justify-center items-center">

		<Code id="code" lines="6-7">
			{`
import java.util.Scanner ;
public class Main {
	public static void main(String[] args) {
		int i;
		System.out.println("Entez un entier: ");
		Scanner clavier = new Scanner(System.in);
		i = clavier.nextInt();
		System.out.println("Vous avez entré : "+i);
	}
}
			`}</Code>
		<ul class="text-2xl w-1/2">
			<li><code class="inlineCode">nextInt()</code> : gets the next integer</li>
			<li><code class="inlineCode">nextBoolean()</code> : gets the next Boolean</li>
			<li><code class="inlineCode">nextDouble()</code> : gets the next double</li>
			<li><code class="inlineCode">nextFloat()</code> : gets the next float</li>
			<li><code class="inlineCode">nextShort()</code> : gets the next short</li>
			<li>
				<code class="inlineCode">next()</code> : gets the next string (a line can have multiple strings
				separated by space)
			</li>
			<li><code class="inlineCode">nextLine()</code> : gets the next line</li>
		</ul>
	</div>
</Slide>
<!-- 
	####La création de nombre aléatoires

	
 -->