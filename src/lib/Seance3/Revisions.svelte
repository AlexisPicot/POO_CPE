<script>
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'

	import Code from '$lib/deck/code.svelte'
</script>

<Slide>
	<Slide><h2>Révisions</h2></Slide>

	<Slide>
		<h3>
			Expliquez ce qu'est une interface en Java et comment elle diffère d'une classe abstraite.
		</h3>
		<div class="r-fit-text">
			<p class="fragment">
				En Java, une interface est une structure de programmation qui permet de définir un ensemble
				de méthodes (sans implémentation) qu'une classe doit implémenter si elle implémente cette
				interface. Contrairement à une classe normale, une interface ne peut contenir que des
				méthodes abstraites (sans corps) et des constantes. Les interfaces sont utilisées pour
				définir un contrat ou un ensemble de comportements que les classes doivent suivre.
			</p>
			<ul class="fragment">
				<li>
					Une interface ne peut contenir que des méthodes abstraites et des constantes, tandis
					qu'une classe abstraite peut contenir à la fois des méthodes concrètes et abstraites.
				</li>
				<li>
					Une classe peut implémenter plusieurs interfaces, mais elle ne peut hériter que d'une
					seule classe abstraite.
				</li>
				<li>
					Les interfaces sont utilisées pour définir des contrats et des comportements, tandis que
					les classes abstraites sont utilisées pour partager le code commun et fournir des
					implémentations de base pour les sous-classes.
				</li>
			</ul>
		</div>
	</Slide>

	<Slide>
		<h3>Héritage vs Interface</h3>
		<div class="flex justify-center">
			<PlantUml
				>{`@startuml
                abstract class Animal{
                    + seNourrir()
                    + reproduire()
                }
                interface PeutVoler {
                    + voler()
                }
                
                interface PeutPondre {
                    + pondre()
                }
                
                abstract class Mammifère extends Animal {
                    - nom: String
                    - age: int
                    + Mammifère(nom: String, age: int)
                    + seNourrir()
                    + reproduire()
                }
                
                abstract class Reptile extends Animal{
                    - nom: String
                    - age: int
                    + Reptile(nom: String, age: int)
                    + seNourrir()
                    + reproduire()
                }
                
                class Colibri extends Oiseau{
                    + voler()
                    + pondre()
                    + seNourrir()
                    + reproduire()
                }
                
                class ChauveSouris {
                    + voler()
                    + seNourrir()
                    + reproduire()
                }
                
                class Tortue {
                    + pondre()
                    + seNourrir()
                    + reproduire()
                }
                
                PeutVoler <|.. Oiseau
                PeutVoler <|.. ChauveSouris
                PeutPondre <|.. Oiseau
                PeutPondre <|.. Tortue
                Mammifère <|-- ChauveSouris
                Reptile <|-- Tortue
                
                @enduml
                
                `}</PlantUml
			>
		</div>
	</Slide>
	<Slide>
		<h3>Héritage vs Interface</h3>
		<blockquote>L'ornithorynque est à la fois un mammifère, un reptile et un oiseau.</blockquote>
		<div class="flex justify-center">
			<PlantUml
				>{`@startuml

                    abstract class Animal
                    
                    interface PeutVoler {
                        + voler()
                    }
                    
                    interface PeutPondre {
                        + pondre()
                    }
                    
                    interface PeutAllaiter {
                        + allaiter()
                    }
                    
                    class Ornithorynque extends Animal implements PeutPondre, PeutAllaiter {
                        - nom: String
                        - age: int
                        + Ornithorynque(nom: String, age: int)
                        + seNourrir()
                        + reproduire()
                        + pondre()
                        + allaiter()
                    }
                    abstract class Oiseau extends Animal implements PeutVoler, PeutPondre {
                        + voler()
                        + pondre()
                        + seNourrir()
                        + reproduire()
                    }
                    abstract class Reptile extends Animal {
                        + seNourrir()
                        + reproduire()
                    }
                    class Colibri extends Oiseau {
                        + voler()
                        + pondre()
                        + seNourrir()
                        + reproduire()
                    }
                    
                    class ChauveSouris extends Mammifère implements PeutVoler {
                        + voler()
                        + seNourrir()
                        + reproduire()
                        + allaiter()
                    }
                    
                    class Tortue extends Reptile implements PeutPondre {
                        + pondre()
                        + seNourrir()
                        + reproduire()
                    }
                    abstract class Mammifère extends Animal implements PeutAllaiter {
                        + allaiter()
                        + seNourrir()
                        + reproduire()
                    }

                    class Serpent extends Reptile {
                        + seNourrir()
                        + reproduire()
                    }
                    @enduml
                    
                
                `}</PlantUml
			>
		</div>

		<p class="text-red-400">⚠ Ce diagramme est probablement faux</p>
	</Slide>
	<Slide>
		<h3>
			Comment pouvez-vous appeler des méthodes de la classe parente à partir d'une classe fille en
			Java ?
		</h3>
		<div class="fragment flex flex-col">
			<Code
				>{`
    public class Fille extends Parent {
        public Fille() {
            super(); // Appel du constructeur de la classe parente
        }
        public void maMethode() {
            super.maMethode(); // Appel de la méthode de la classe parente
        }
    }`}
			</Code>
			<p>
				L’utilisation de super vous permet d’accéder aux membres de la classe parente dans la classe
				fille, ce qui est utile lorsque vous souhaitez étendre le comportement de la classe parente
				tout en conservant son implémentation existante.
			</p>
		</div>
	</Slide>

	<Slide>
		<h3>
			En quoi consiste l'encapsulation et pourquoi est-elle importante en POO? Donnez un exemple
			concret d'encapsulation dans un programme.
		</h3>
	</Slide>
	<Slide
		><h3>Envisagez un scénario dans lequel vous utiliseriez des classes abstraites plutôt que des
		interfaces. Expliquez pourquoi vous choisiriez une approche plutôt que l'autre.</h3></Slide
	>
</Slide>
