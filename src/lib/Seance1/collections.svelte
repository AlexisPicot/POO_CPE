<script>
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Les tableaux</h3>
</Slide>
<Slide>
	<h3>Les tableaux</h3>
	<h4>Introduction</h4>
	<ul>
		<li>Principe assez proche du C++</li>
		<li>Plus faciles à manipuler qu'en C</li>
		<li>
			Les tableaux peuvent être des ensembles ordonnées de :
			<ul>
				<li>types de bases (int, char, …)</li>
				<li>d'objets !</li>
			</ul>
		</li>
		<li>Note : en Java, les tableaux sont des objets</li>
	</ul></Slide
>
<Slide>
	<h3>Les tableaux</h3>
	<h4>Déclaration</h4>
	<ul>
		<li>
			<Code
				>{`
            type [ ] nomDuTableau ;
            int [ ] tableau ;`}
			</Code>
		</li>
		<li>
			la déclaration ne fait que déclarer le tableau mais ne crée pas le tableau en mémoire. La
			variable déclarée permet de référence tout tableau de même type.
		</li>
		<li>
			L'opérateur new permet de créer le tableau
			<Code
				>{`
            int [] tableau ;
            tableau = new int[50] ;`}
			</Code>
		</li>
		<li>La taille donnée est fixe, elle ne peut plus être modifiée</li>
	</ul>
</Slide>
<Slide>
	<h3>Les tableaux</h3>
	<h4>Accès aux éléments</h4>
	<ul>
		<li>
            <Code>tableau[expression]</Code></li>
		<li>Comme en C, les éléments d'un tableau de taille n sont numérotés de 0 à n-1</li>
		<li>expression est une expression donnant une valeur entière bien sûr !</li>
		<li>
			Java vérifie dynamiquement que la valeur de l'élément existe
		</li>
	</ul>
</Slide>
<Slide>
	<h3>Les tableaux</h3>
	<h4>Attribut du tableau</h4>
	<ul>
		<li>Il y a des attributs puisque c’est un objet !</li>
		<li><code>tableau.length</code> donne la taille du tableau</li>
		<li><Code>{`
        int [ ] monTableau = new int[10] ;
        monTableau.length           // 10
        monTableau.length – 1       // Indice max du tableau
        `}</Code></li>
	
	</ul>
</Slide>
