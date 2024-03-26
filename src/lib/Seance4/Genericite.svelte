<script>
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<Slide>
		<h3>La généricité</h3>
	</Slide>

	<Slide>
		<h3>La généricité</h3>
		<p>
			La généricité permet de créer des classes, des interfaces et des méthodes qui prennent des
			types en paramètres.
		</p>
		<p>Elle permet de créer des classes qui peuvent fonctionner avec n'importe quel type.</p>
	</Slide>
	<Slide>
		<h3>La généricité</h3>
		<h4>Exemple</h4>
		<Code>
			{`public class Boite<T> {
                private T contenu;
            
                public Boite(T contenu) {
                    this.contenu = contenu;
                }
            
                public T getContenu() {
                    return contenu;
                }
            
                public void setContenu(T contenu) {
                    this.contenu = contenu;
                }
            }
            
            // Utilisation de la classe générique
            public class Main {
                public static void main(String[] args) {
                    Boite<String> boiteString = new Boite<>("Hello");
                    System.out.println(boiteString.getContenu()); // Affiche : Hello
            
                    Boite<Integer> boiteInteger = new Boite<>(123);
                    System.out.println(boiteInteger.getContenu()); // Affiche : 123
                }
            }
            `}
		</Code>
		<p>
			Vous connaissez déjà <code>ArrayList &lt;T&gt;</code> <br />Vous auriez pu renvoyer un type
			<code>Object</code> et vous amuser à le caster, la généricité permet de conserver le type manipuler
			sans savoir à l'avance de quoi il s'agit
		</p>
	</Slide>
	<Slide>
		<h3>La généricité</h3>
		<h4>Les filtres</h4>
		<Code
			>{`
            public class Boite<T extends TrucEmboitables> {
                ...
            }
        `}</Code
		>
		<p>On peut restreindre le type de T à une classe ou une interface</p>
		<p>
			On peut aussi restreindre le type de T à une classe ou une interface qui hérite d'une autre
			classe ou interface
		</p>
	</Slide>
	<Slide>
		<h3>La généricité</h3>
		<h4>Les méthodes génériques</h4>
		<Code
			>{`
        public static class RandomUtil{
            public static <T> T piocherAuHasardDansUneListe(ICollection<T> liste) {
                int index = new Random().nextInt(liste.size());
                return liste.get(index);
            }
        }
        `}</Code
		>
	</Slide>
	<Slide>
		<h3>La généricité</h3>
		<h4>Les interfaces génériques</h4>
		<Code
			>{`
public interface Paire<K, V> {
    K getKey();
    V getValue();
}

// Implémentation de l'interface générique
public class PaireImpl<K, V> implements Paire<K, V> {
    private K key;
    private V value;

    public PaireImpl(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }
}

// Utilisation de l'interface générique
public class Main {
    public static void main(String[] args) {
        Paire<String, Integer> paire = new PaireImpl<>("Clé", 123);
        System.out.println("Clé : " + paire.getKey() + ", Valeur : " + paire.getValue()); // Affiche : Clé : Clé, Valeur : 123
    }
}
`}</Code
		>
	</Slide>
</Slide>
