<script>
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<Slide>
		<h2>Les lambdas</h2>
	</Slide>
	<Slide>
		<h2>Les lambdas</h2>
		<h3>Présentation</h3>
		<p>
			Les lambdas sont des fonctions anonymes qui peuvent être utilisées pour simplifier le code. <br
			/>
			Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles.
		</p>
	</Slide>
	<Slide>
		<h2>Les lambdas</h2>
		<h3>Les interfaces fonctionnelles</h3>
		<p>
			Une interface fonctionnelle est une interface qui ne contient qu'une seule méthode abstraite.
		</p>
		<Code>
			{`
        public class Lambda {
            public static void main(String[] args) {
                // Déclaration d'une lambda
                Operation addition = (a, b) -> a + b;
                // Utilisation de la lambda
                System.out.println(addition.calculer(5, 3)); // Affiche 8
            }
        }
        @FunctionalInterface
        public interface Operation {
            int calculer(int a, int b);
        }

        `}</Code
		>
	</Slide>
	<Slide>
		<h2>Les lambdas</h2>
		<h3>La bibliothèque Stream</h3>
		<p>La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle.</p>
		<Code>
			{`
            public class Lambda {
                public static void main(String[] args) {
                    List<Integer> nombres = Arrays.asList(1, 2, 3, 4, 5);
                    // Utilisation de la bibliothèque Stream
                    nombres.stream().filter(n -> n % 2 == 0).forEach(System.out::println);
                    // Affiche 2 et 4
                }
            }
            `}
		</Code>
	</Slide>
	<Slide>
		<h2>Les lambdas</h2>
		<h3>La bibliothèque Stream</h3>
		<h4>Exemples de fonctions de <code>stream</code></h4>
		<ul>
			<li><code>filter</code> : filtre les éléments d'un <code>stream</code></li>
			<li><code>map</code> : transforme les éléments d'un <code>stream</code></li>
			<li><code>reduce</code> : réduit les éléments d'un <code>stream</code></li>
			<li><code>collect</code> : collecte les éléments d'un <code>stream</code></li>
		</ul>
	</Slide>
	<Slide>
		<h2>Les lambdas</h2>
		<h3>La bibliothèque Stream</h3>
		<h4>Exemples complet</h4>
		<div class="flex justify-center">
			<div class="flex-1">
				<h6>Utilisation de boucles</h6>
				<Code>
					{`
                public class Lambda {
                    public static void main(String[] args) {
                        List<Integer> nombres = 
                            Arrays.asList(1, 2, 3, 4, 5);
                        int somme = 0;
                        for (int n : nombres) {
                            if (n % 2 == 0) {
                                somme += n * 2;
                            }
                        }
                        // Affiche 12
                    }
                }
                `}
				</Code>
			</div>
			<div class="flex-1">
				<h6>Utilisation de Stream</h6>
				<Code>
					{`
                public class Lambda {
                    public static void main(String[] args) {
                        List<Integer> nombres = 
                            Arrays.asList(1, 2, 3, 4, 5);
                        // Utilisation de la bibliothèque Stream
                        nombres.stream()
                            .filter(n -> n % 2 == 0)
                            .map(n -> n * 2)
                            .reduce(0, (a, b) -> a + b);
                        // Affiche 12
                    }
                }
                `}
				</Code>
			</div>
		</div></Slide>
        <Slide>
            <h2>Les lambdas</h2>
            <h3>Généralitées sur les Lambda</h3>
            <ul>
                <li>Les lambdas sont des fonctions anonymes</li>
                <li>Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles</li>
                <li>Une interface fonctionnelle est une interface qui ne contient qu'une seule méthode abstraite</li>
                <li>La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle</li>
            </ul>
        </Slide>
        <Slide>
            <h2>Les lambdas</h2>
            <h3>Portée des variables</h3>
            <p>Les lambdas peuvent accéder aux variables locales et aux paramètres des méthodes dans lesquelles elles sont déclarées.</p>
            <Code>
                {`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a + b;
                        System.out.println(addition.calculer(3)); // Affiche 8
                    }
                }
                `}
            </Code>
            <p> En revanche, elles ne peuvent pas modifier les variables locales et les paramètres des méthodes dans lesquelles elles sont déclarées.</p>
            <Code>
                {`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a = a + b; // Erreur de compilation
                    }
                }
                `}
            </Code>
        </Slide>
        <Slide>
            <!-- Les intérêts des lambda -->
            <h2>Les lambdas</h2>
            <h3>Les intérêts des lambdas</h3>
            <ul>
                <li>Les lambdas permettent de simplifier le code</li>
                <li>Elles permettent de rendre le code plus lisible</li>
                <li>Elles permettent de rendre le code plus concis</li>
                <li>Elles permettent de rendre le code plus maintenable</li>
            </ul>
        </Slide>
</Slide>
