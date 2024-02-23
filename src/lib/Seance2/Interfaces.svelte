<script>
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<Slide><h2>Les interfaces</h2></Slide>
	<Slide
		><h2>Les interfaces</h2>
		<p>
			Une interface permet de définir un ensemble de services qu’un client peut obtenir d’un objet.
			Une interface introduit une abstraction pure qui permet un découplage maximal entre un service
			et son implémentation. On retrouve ainsi les interfaces au cœur de l’implémentation de
			beaucoup de bibliothèques et de frameworks. Le mécanisme des interfaces permet d’introduire
			également une forme simplifiée d’héritage multiple.
		</p>
	</Slide>
	<Slide
		><h2>Les interfaces</h2>
		<h3>Déclaration d’une interface</h3>
		<p>Une interface se déclare avec le mot-clé <code>interface</code>.</p>
		<Code
			>{`
	public interface Compte {

	}`}</Code
		>
	</Slide>
	<Slide
		><h2>Les interfaces</h2>

		<p>Une interface décrit un ensemble de méthodes en fournissant uniquement leur signature.</p>
		<Code
			>{`

public interface Compte {

  void deposer(int montant) throws OperationInterrompueException,
								   CompteBloqueException;

  int retirer(int montant) throws OperationInterrompueException,
								  CompteBloqueException;

  int getBalance() throws OperationInterrompueException;

}
	`}</Code
		>
	</Slide>

	<Slide
		><h2>Les interfaces</h2>
		<h3>Implémentation d’une interface</h3>
		<p>
			Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.
		</p>
	</Slide>
	<Slide
		><h2>Les interfaces</h2>
		<h3>Implémentation d’une interface</h3>
		<Code className="h-[70vh]"
			>{`
public class CompteBancaire implements Compte {

private final String numero;
private int balance;

public CompteBancaire(String numero) {
  this.numero = numero;
}

@Override
public void deposer(int montant) {
  this.balance += montant;
}

@Override
public int retirer(int montant) throws OperationInterrompueException {
  if (balance < montant) {
	throw new OperationInterrompueException();
  }
  return this.balance -= montant;
}

@Override
public int getBalance() {
  return this.balance;
}

public String getNumero() {
  return numero;
}

}
`}</Code
		>
	</Slide>
	<Slide
		><h2>Les interfaces</h2>

		<h3>Implémentation d’une interface</h3>
		<p>
			Une classe abstraite permet de mutualiser une implémentation dans une hiérarchie d’héritage en
			introduisant un type plus abstrait. Une interface permet de définir les interactions possibles
			entre un objet et ses clients. Une interface agit comme un contrat que les deux parties
			doivent remplir. Comme l’interface n’impose pas de s’insérer dans une hiérarchie d’héritage,
			il est relativement simple d’adapter une classe pour qu’elle implémente une interface.
		</p>
	</Slide>
	<Slide
		><h2>Les interfaces</h2>

		<h3>Implémentation d’une interface</h3>
		<div class="flex flex-col">
			<p>Une classe peut implémenter plusieurs interfaces si nécessaire.</p>
			<div class="flex flex-row">
				<Code
					>{`public interface Carnivore {
			void manger(Animal animal);
		}`}</Code
				>
				<Code
					>{`public interface Herbivore {

			void manger(Vegetal vegetal);
		}`}</Code
				>
			</div>
			<Code className="highlighter language-java"
				>{`
public class Humain extends Animal implements Carnivore, Herbivore {

	@Override
	public void manger(Animal animal) {
	// ...
	}

	@Override
	public void manger(Vegetal vegetal) {
	// ...
	}

}`}</Code
			>
		</div>
	</Slide>
	<Slide
		><h2>Les interfaces</h2>

		<h3>Implémentation d’une interface</h3>
		<p>
			Dans l’exemple précédent, la classe Humain implémente les interfaces Carnivore et Herbivore.
			Donc une instance de la classe Humain peut être utilisée dans une application partout où les
			types Carnivore et Herbivore sont attendus.
		</p>
		<Code className="highlighter language-java"
			>{`
        Humain humain = new Humain();

        Carnivore carnivore = humain;
        carnivore.manger(new Poulet()); // Poulet hérite de Animal
        
        Herbivore herbivore = humain;
        herbivore.manger(new Chou());   // Chou hérite de Vegetal
        `}</Code
		>
	</Slide>
	<Slide>
		<h2>Les interfaces</h2>
		<h3>Héritage d’interface</h3>
		<p>
			Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes.
            Pour déclarer un héritage, on utilise le mot-clé <code>extends</code>.
		</p>
        <Code>{`
        public interface Omnivore extends Carnivore, Herbivore {
            //void manger(Animal animal);
            //void manger(Vegetal vegetal);
        }
        `}</Code>
       
	</Slide>
	<Slide>
		<h2>Les interfaces</h2>
		<h3>Héritage d’interface</h3>

        <p>Comme chaque interface introduit un nouveau type, il est possible de contrôler grâce au mot-clé <code>instanceof</code> qu’une variable, un paramètre ou un attribut est bien une instance compatible avec cette interface.</p>
        <Code className="highlighter language-java">{`
Humain bob = new Humain();
if (bob instanceof Carnivore) {
System.out.println("bob mange de la viande");
}
        `}</Code>
	</Slide>
    <Slide>
		<h2>Les interfaces</h2>
        <h3>Les interfaces marqueurs</h3>
        <p>
            Une interface sans méthode est appelée une interface marqueur. Elle est utilisée pour marquer
            une classe comme possédant une certaine propriété. Par exemple, l’interface
            <code>Serializable</code> est utilisée pour marquer une classe comme étant sérialisable.</p>
            <Code className="highlighter language-java">{`
            public interface Cannibale {
}
            `}</Code>
            <Code className="highlighter language-java">{`
public class Humain extends Animal implements Omnivore {
    @Override
    public void manger(Animal animal) {
        if (!(animal instanceof Humain) || this instanceof Cannibale) {
            // ...
        }
    }
}
            `}</Code>
           

    </Slide>
    <Slide>
        <h2>Les interfaces</h2>
        <h3>Les interfaces marqueur</h3>
        <p>Dans l’exemple précédent, <i>Cannibale</i> agit comme une interface marqueur, elle permet à une classe héritant de Humain de manger une instance d’humain. Pour cela, il suffit de déclarer que cette nouvelle classe implémente  <i>Cannibale</i> :</p>
        <Code className="highlighter language-java">{`
public class Anthropophage extends Humain implements Cannibale {

}
        `}</Code>
    </Slide>

</Slide>
