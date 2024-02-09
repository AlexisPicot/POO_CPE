<script>
	import Code from '../code.svelte'
	import Markdown from '../markdown.svelte'
	import Slide from '../slide.svelte'
</script>

<Slide>
	<h1 class="capitalize">Introduction</h1>
</Slide>

<Slide>
	<h1 class="capitalize">Introduction</h1>
	<ul>
		<li>Présentation du langage Java</li>
		<li>Présentation de l'intêret de la POO</li>
	</ul>
</Slide>
<Slide>
	<h3>Le langage Java</h3>
	<div class="flex flex-col justify-center">
		<img
			class="object-contain h-64 w-full"
			src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg"
			alt="Java Logo"
		/>
        <p class="italic text-xl" >
			Java est un langage de programmation polyvalent, orienté objet et largement utilisé dans le
			développement logiciel. Il a été conçu pour être portable, ce qui signifie qu'il peut
			fonctionner sur différentes plateformes sans nécessiter de modifications importantes.
		</p>
	</div>
</Slide>
<Slide>
	<h3>Fonctionnement</h3>
	<div class="flex flex-col justify-center">
		<img
			class="object-contain h-64 w-full"
			src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*eU8zBZlcKcu0tetI7kTIbQ.png"
			alt="Java Development Kit"
		/>
        <p class="italic text-xl" >
			Le JDK (Java Development Kit) est un ensemble complet pour le développement d'applications
			Java, comprenant la JVM (Java Virtual Machine) nécessaire pour exécuter du code Java. La JVM
			est créée par la JRE (Java Runtime Environment), qui déploie les codes adaptés à chaque
			système d'exploitation. Le JDK comprend également des outils de développement tels que le
			débogueur, le compilateur et Javadoc.
		</p>
	</div>
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
}`}</Code >
		<p class="italic text-xl" >
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
    <div class="flex flex-col justify-center">
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