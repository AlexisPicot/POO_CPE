<script>
	import Code from '$lib/deck/code.svelte'

	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<Slide>
		<h3>Les annotations</h3>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<p>
			Sur la plate-forme Java, une annotation est une interface lors de sa déclaration et est une
			instance d'une classe qui implémente cette interface lors de son utilisation.<br />
			La définition d'une annotation nécessite une syntaxe particulière utilisant le mot clé @interface.
			Une annotation se déclare donc de façon similaire à une interface.
		</p>
		<Code>
			{`
                @interface MyAnnotation {
                    String value();
                    int number();
                    Class type();

                }`}
		</Code>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>A quoi ça sert ?</h4>
		<p>
			A la manière des interfaces marqueur, les annotations permettent de marquer des éléments de
			code que ce soit des méthodes ou des "types", mais aussi de les associer des informations
			supplémentaires.
		</p>
		<p>
			<strong
				>Fondamentalement, c'est un peu comme si vous déclariez une méthode getValue() dans une
				interface, et que vous l'implémentiez dans chacune des classe concrètes.<br />
				Toutefois, la différence est que vous n'avez pas besoin de fournir une implémentation pour les
				méthodes de l'annotation. En plus, l'annotation va se comporter un peu comme une liste d'attributs,or,
				vous savez qu'on ne peut pas mettre d'attributs dans une interface
			</strong>
		</p>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>Les annotations prédéfinies</h4>
		<p>
			Java définit un certain nombre d'annotations prédéfinies, qui sont utilisées dans des
			contextes particuliers. Par exemple, l'annotation <code>@Override</code> est utilisée pour indiquer
			qu'une méthode redéfinit une méthode de la classe mère. Vous l'avez déjà utilisée sans le savoir.
		</p>
		<p>
			En l'occurence cette dernière ne sert pas à grand chose, si ce n'est vous mettre un warning au
			cas ou vous vous trompiez dans le nom de la méthode
		</p>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>Exemple d'utilisation</h4>
		<p>Dans le TP, vous aviez peut être remarqué cette annotation</p>
		<Code lines="1-5|7-8|10-14">
			{`
                @Target({ElementType.TYPE})
                @Component
                public @interface IGameMainMenu {
                    String value();
                }
                ...
                @IGameMainMenu("Compétences")
                public class CompetencePanel extends JPanel {}
                ...
                Map<String, Object> beansWithAnnotation = context.getBeansWithAnnotation(IGameMainMenu.class);
                beansWithAnnotation.forEach((s, o) -> {
                    jTabbedPane.add(s, (java.awt.Component) o);
                });

            `}
		</Code>
		<div class="r-fit-text">
			<p>
				Il y a deux annotations : @Component qui est une annotation prédéfinie de Spring, et
				@IGameMainMenu qui est une annotation que nous avons définie.
			</p>
			<ul>
				<li>
					@Component est utilisée pour indiquer à Spring que cette classe est un composant de
					l'application
					<ul>
						<li>
							En gros, cela permet de dire à Spring qu'il doit lui même créer une instance de cette
							classe et dès que l'on lui demandera il nous renverra la même ; cela regroupe les
							patrons de conception IoC et Singleton
						</li>
					</ul>
				</li>
				<li>
					@IGameMainMenu est utilisée pour indiquer que cette classe est un menu à ajouter aux
					onglets de notre app
					<ul>
						<li>
							En gros, vous pourrez créer ce que vous voulez, tant qu'il possède ce marqueur, il
							sera ajouté à mon menu alors que je ne savais pas à l'avance ce que vous alliez
							développer
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<p>
			Vous comprenez que les annotations sont une aide précieuse, il vont vous permettre de créer
			des architectures modulables sans savoir à l'avance que vous allez créer :
		</p>
		<ul>
			<li>Dans le TD qui suit, vous allez créer un système de gestion de bibliothèque</li>
			<li>
				Imaginez que vous pouvez emprunter un livre, un jeu vidéo ou un jeu de société, ou une table
				de beer-pong
			</li>
			<li>
				Vous n'avez pas de soucis avec les livres et les jeux-videos, mais pour les jeux de société
				et la table, vous voulez faire payer la location et la limiter à 5j compte tenu de la
				demande importante et qu'il manque toujours une balle de ping-pong ou un pion lors du rendu
			</li>
		</ul>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		Vous aimeriez ne pas trop modifier votre code, mais faire un truc du genre
		<Code
			>{`
            @CustomRentalStrategy(StrategieSpecifiqueAuxTablesEtJeuxDeSociete.class)
            public class TableDeBeerPong extends implements IRentable {
                ...
            }
            `}</Code
		>
		<ol>
			<li>
				Vous auriez également pu créer une interface par type de location, mais si vous en avez 5,
				il vous faut 5 interface, d'une part
			</li>
			<li>
				En plus, dans votre gestionnaire de location, comment faites-vous le rapprochement entre
				IStrategieA et votre classe StrategyA qui régit les modalités de location ?
			</li>
		</ol>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<p>Grâce à votre annotation, imaginez :</p>
		<Code
			>{`
        public class GestionEmprunt{
            ...
            public void emprunter(Etudiant etudiant, IRentable rentable){
                ...
                var strategy = new StrategieParDefaut();

                if(rentable.getClass().isAnnotationPresent(CustomRentalStrategy.class)){
                    CustomRentalStrategy strategy = rentable.getClass()
                            .getAnnotation(CustomRentalStrategy.class);
                    strategy = strategy.value().newInstance();
                }

                var prix = strategie.getPrix(rentable);
                fairePayer(etudiant, prix);
                ...
            }
        }
        `}</Code
		>
		<p>
			Vous pouvez créer autant de stratégie que vous voulez, vous ne ferez pas un if/switch-case
			moche dans <code>GestionEmprunt</code> pour savoir quoi faire
		</p>
	</Slide>
	<Slide data_background_color="#0d5e65">
		<h3>Les annotations</h3>
		<h4>Utilisation avec Spring</h4>
		<cite
			>Spring est une librairie, et ce n'est pas du Java ou de la POO à proprement parler, mais si
			vous le maîtrisez, vous avez un avantage certain sur les autres
		</cite>
		<p>Dans notre exemple, nous avions :</p>
		<Code lines="6" className="language-java"
			>{`
                public void emprunter(Etudiant etudiant, IRentable rentable){
                    ...
                    if(rentable.getClass().isAnnotationPresent(CustomRentalStrategy.class)){
                        CustomRentalStrategy strategy = rentable.getClass()
                                .getAnnotation(CustomRentalStrategy.class);
                        strategy = strategy.value().newInstance();
                    }
                    ...
                }
            `}</Code
		>
		<p>Si CustomRentalStrategy prends des dépendances dans son constructeur, vous êtes foutus !</p>
	</Slide>
	<Slide data_background_color="#0d5e65">
		<h3>Les annotations</h3>
		<h4>Utilisation avec Spring</h4>
		<p>
			Pour les vrais developpeurs Java au quotidien, on use et abuse de l'injection de dépendances
		</p>
		<ul>
			<li>
				Quand vous découpez beaucoup votre code, vous remarquez que vous avez besoin un peu partout
				de votre <code>ExperienceGenerator</code>, de votre <code>PersonnagePrincial</code>, de
				votre <code>LivreDeQuete</code>
			</li>
			<li>
				Vous ne pouvez <strong>PAS</strong> raisonnablement ecrire
				<Code className="language-java"
					>{`
                 public static void main(String[] args){
                     ExperienceGenerator experienceGenerator = new ExperienceGenerator();
                     PersonnagePrincipal personnagePrincipal = new PersonnagePrincipal(experienceGenerator);
                     LivreDeQuete livreDeQuete = new LivreDeQuete(personnagePrincipal);

                    ServiceA serviceA = new ServiceA(livreDeQuete, personnagePrincipal);
                    ServiceB serviceB = new ServiceB(livreDeQuete, experienceGenerator);
                    ServiceC serviceC = new ServiceC(serviceA, serviceA);
                     ...
                 }
                 `}</Code
				>
			</li>
		</ul>
	</Slide>
	<Slide data_background_color="#0d5e65">
		<h3>Les annotations</h3>
		<h4>Utilisation avec Spring</h4>
		<p>Vous allez plutôt écrire</p>
		<Code
			>{`
            @ComponentScan("App")
            public class App{
                private ServiceA serviceA;
                private ServiceB serviceB;
                private ServiceC serviceC;

                public App(ServiceA serviceA, ServiceB serviceB, ServiceC serviceC){
                    this.serviceA = serviceA;
                    this.serviceB = serviceB;
                    this.serviceC = serviceC;
                }
                public static void main(String[] args){
                    serviceA.doSomething();
                    serviceB.doSomething();
                    serviceC.doSomething();

                    ...
                }
        }
            @Component
            class ExperienceGenerator{}
            @Component
            class PersonnagePrincipal{}            
            @Component
            class LivreDeQuete{}

            @Component
            class ServiceA{
                public ServiceA(LivreDeQuete livreDeQuete, PersonnagePrincipal personnagePrincipal){
                    ...
                }
            }
            `}</Code
		>
		<p>
			Spring va se charger de créer une instance de chaque classe annotée <code>@Component</code> et
			de l'injecter dans les classes qui en ont besoin
		</p>
	</Slide>
	<Slide data_background_color="#0d5e65">
		<h3>Les annotations</h3>
		<p>Revenons enfin à notre problématique</p>
		<Code>
			{`
            @CustomRentalStrategy(StrategieSpecifiqueAuxTablesEtJeuxDeSociete.class)
            public class TableDeBeerPong extends implements IRentable {...}

            @Component
            public class StrategieSpecifiqueAuxTablesEtJeuxDeSociete implements IStrategieDeLocation{
                public StrategieSpecifiqueAuxTablesEtJeuxDeSociete(BaseDeDonnees baseDeDonnees, Logger logger, Meteo meteo){
                    ...
                }
            }
            public class GestionEmprunt{
                private ApplicationContext applicationContext;
                public GestioEmprunt(ApplicationContext applicationContext){
                    this.applicationContext = applicationContext;
                }
                ...
                public void emprunter(Etudiant etudiant, IRentable rentable){
                    ...
                    if(rentable.getClass().isAnnotationPresent(CustomRentalStrategy.class)){
                        CustomRentalStrategy strategy = rentable.getClass()
                                .getAnnotation(CustomRentalStrategy.class);
                        strategy = annotationContext.getBean(strategy.type());
                    }
                    ...
                }
            }
            `}
		</Code>
		<p class="r-fit-text">
			C'était long, mais maintenant, votre architecture est ultra modulable, vous n'avez pas modifié
			vos autres classes, vous avez enrichi le comportement tout en prévoyant les possible
			evolutions futures si jamais vos stratégies de locations doivent par exemple lire depuis une
			base de données
			<br />En plus, vous avez utilisé les DP Singleton, IoC, Strategy
		</p>
	</Slide>
</Slide>
