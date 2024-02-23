<script>
	import Code from "$lib/deck/code.svelte"
	import PlantUml from "$lib/deck/plantUml.svelte"
	import Slide from "$lib/deck/slide.svelte"

</script>
<Slide>
	<Slide><h2>Rappel de la séance précédente</h2></Slide>

	<Slide>
		<h2>Rappel de la séance précédente</h2>
		<h3>Polymorphisme</h3>
		<p>
			Le polymorphisme permet à des objets de différentes classes de répondre de manière unique à
			une même méthode ou un même comportement. <br />Cela signifie qu'un même nom de méthode peut
			être utilisé pour des objets de classes différentes, et l'exécution de cette méthode dépendra
			du type réel de l'objet sur lequel elle est appelée. <br />Le polymorphisme favorise la
			flexibilité et la réutilisabilité du code.
		</p>
	</Slide>
	<Slide>
		<h2>Rappel de la séance précédente</h2>
		<h3>Encapsulation</h3>
		<p>
			L'encapsulation est le concept qui consiste à regrouper les données et les méthodes qui les
			manipulent au sein d'une même entité, souvent une classe. <br />Cela permet de cacher les
			détails d'implémentation et de limiter l'accès aux données à travers des méthodes spécifiques
			(getters et setters). <br />L'encapsulation favorise la sécurité et la maintenabilité du code
			en limitant l'accès direct aux données.
		</p>
	</Slide>
	<Slide>
		<h2>Rappel de la séance précédente</h2>
		<h3>Héritage</h3>
		<p>
			L'héritage est un mécanisme de la programmation orientée objet qui permet à une classe
			(appelée classe dérivée ou sous-classe) d'hériter des attributs et des méthodes d'une autre
			classe (appelée classe de base ou superclasse). <br />Les classes dérivées peuvent étendre ou
			modifier le comportement de la classe de base. <br />L'héritage favorise la réutilisabilité du
			code en permettant de définir des relations is-a entre les classes.
		</p>
	</Slide>
</Slide>
