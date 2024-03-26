<script>
	import PlantUml from '$lib/deck/plantuml.svelte'
	import Slide from '$lib/deck/slide.svelte'

	import puml from '$lib/Seance3/decorator.puml?raw'
</script>

<Slide>
	<Slide
		><h2>Patrons de conception</h2>
		<p class="fragment">
			Cours très bien expliqué : <a href="https://refactoring.guru/fr" target="_blank"
				>Refactoring Guru</a
			>
		</p>
	</Slide>
	<Slide>
		<h3>Qu'est-ce qu'un patron de conception ?</h3>
		<div>
			<p>
				Un patron de conception (design pattern en anglais) est une solution générale à un problème
				récurrent en conception logicielle. Il s'agit d'une description ou d'un modèle de solution
				qui peut être appliqué à de nombreux problèmes différents. Les patrons de conception sont
				utilisés pour résoudre des problèmes de conception logicielle courants et pour améliorer la
				qualité, la maintenabilité et la réutilisabilité du code.
			</p>
		</div></Slide
	>
	<Slide>
		<h3>Les patrons de conception sont-ils indispensables ?</h3>
		<p>
			Les patrons de conception ne sont pas indispensables, mais ils sont très utiles pour résoudre
			des problèmes de conception logicielle courants. Ils permettent de résoudre des problèmes
			récurrents de manière efficace et de produire un code de meilleure qualité, plus maintenable
			et plus réutilisable. Les patrons de conception sont également très utiles pour communiquer et
			partager des solutions de conception entre les développeurs.
		</p>
		<hr />
		<p class="text-red-600">Vous utilisez déjà des patrons de conception sans le savoir !</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<p class="fragment">
			Dans mon application, je me connecte à une base de données pour récupérer des données.<br />
			Imaginons qu'elle soit ultra sécurisée et que la première connexion prenne 1 minute car il faut
			valider plein de choses avant de pouvoir y accéder.<br />
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Singleton</h4>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/content/singleton/singleton.png"
				alt="Singleton"
			/>
		</div>
		<p>
			Le Singleton est un patron de conception qui garantit qu'une classe n'a qu'une seule instance
			et fournit un point d'accès global à cette instance. Il est utile lorsque vous avez besoin
			d'une seule instance d'une classe dans toute votre application.
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Singleton</h4>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/diagrams/singleton/structure-fr.png"
				alt="Singleton"
			/>
		</div>
		<p>
			La classe Singleton déclare la méthode statique <code>getInstance</code> qui retourne la même
			instance de sa propre classe.<br />

			Le code client ne doit pas avoir de visibilité sur le constructeur du singleton. Seule la
			méthode <code>getInstance</code> doit permettre l’accès à l’objet du singleton.
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<p>
			Dans mon TP sur le RPG, j'ai crée un générateur de combat, l'issue du combat est determinée
			plus ou moins selon la chance ; dans une version améliorée, j'ai fais en sorte que l'issue
			soit également déterminée selon la force, ou l'agilité de mon personnage. De même dans mon
			générateur d'exploration, en plus de looter et combattre des ennemis, je peux débloquer des
			quêtes.<br />
		</p>
		<p class="text-purple-200">
			<br />
			Les joueurs ne sont pas content de ce changement et préféraient l'éxpérience originale, aussi,
			certains joueurs trouvent le jeu pas assez difficile, il faudrait que le joueur puisse choisir
			plusieurs modes de jeu !<br />
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Solutions</h4>
		<p>
			Dans ce cas, je pourrais peut-être mettre un <code>if</code> ou un <code>switch</code> dans mon
			code ?
		</p>
		<p class="text-purple-200">
			<br />
			Les joueurs veulent encore un autre mode de jeu !<br />
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Strategy</h4>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/content/strategy/strategy.png"
				alt="Strategy"
			/>
		</div>
		<p>
			Le patron de conception Strategy est un patron de conception comportemental qui permet de
			définir une famille d'algorithmes, de les encapsuler et de les rendre interchangeables. Les
			algorithmes peuvent alors varier indépendamment des clients qui les utilisent.
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Strategy</h4>
		<h5>Analogie</h5>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/content/strategy/strategy-comic-1-fr.png?id=1d3ad14476434dd642f689d176336a88"
				alt="Strategy"
			/>
		</div>
		<p>
			Imaginez que vous devez vous rendre à l’aéroport. Vous pouvez prendre le bus, appeler un taxi
			ou enfourcher votre vélo. Ce sont vos stratégies de transport. Vous pouvez sélectionner une de
			ces stratégies en fonction de certains facteurs, comme le budget ou les contraintes de temps.
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Strategy</h4>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/diagrams/strategy/structure.png?id=c6aa910c94960f35d100bfca02810ea1"
				alt="Strategy"
			/>
		</div>
		<p>
			La classe Contexte utilise une référence de type Stratégie pour appeler l'algorithme
			spécifique. Elle ne connaît pas le détail de l'algorithme, mais elle sait comment appeler
			l'algorithme.
		</p>
	</Slide><Slide>
		<h3>Exemple</h3>
		<h4>Strategy</h4>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/diagrams/strategy/structure.png?id=c6aa910c94960f35d100bfca02810ea1"
				alt="Strategy"
			/>
		</div>

		<p class="text-purple-200">
			Dans notre exemple de TP, vous avez crée les interfaces <code>ICombatGenerator</code>,
			<code>ILootGenerator</code>
			et <code>IExperienceGenerator</code> .<br /><code>CombatGenerator</code>,
			<code>LootGenerator</code>
			et <code>ExperienceGenerator</code> sont les stratégies concrètes.
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Decorator</h4>
		<p>
			Imaginez, que dans votre RPG, certains objets peuvent modifier l'issue d'un combat au dela de
			la chance, de la force, ou de l'agilité. <br />Un objet un peu cheaté que fait que si vous le
			possèdez, vous gagnez deux fois plus d'expérience.<br /> Votre jeu n'est pas prévu pour que
			les objets aient une incidence directe sur l'expérience engrangée, vous faites la
			modification, pour que <code>ExperienceGenerator</code> prenne en compte les objets équipés, comme
			ce n'était pas conçu pour, vous avez galéré.
		</p>
		<p class="text-purple-200">
			Dans votre malheur, le service marketing de votre studio trouve que c'est une super idée et
			vous demande de faire la même chose pour les loots afin de vendre des objets en
			micro-transactions.
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Decorator</h4>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/content/decorator/decorator.png"
				alt="Decorator"
			/>
		</div>
		<p>
			Le patron de conception Decorator permet d'attacher de nouvelles fonctionnalités à des objets
			existants de manière dynamique et transparente, sans affecter leur comportement. Il est utile
			lorsque vous avez besoin d'ajouter des fonctionnalités à des objets existants de manière
			dynamique et flexible.
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Decorator</h4>

		<p>
			Dans notre exemple, notre jeu possède une référence à <code>IExperienceGenerator</code>, vous
			avez en plus crée plein de classes qui calculent l'expérience grâce au pattern
			<b>Strategy</b>.
		</p>
		<p>
			Lorsque vous équipez l'objet "<i>Anneau d'expérience</i>", vous voulez que l'expérience soit
			doublée, indépendamment de la <b class="text-red-300">statégie</b> de base<br />
		</p>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Decorator</h4>
		<h5>Structure</h5>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/diagrams/decorator/structure.png"
				alt="Decorator"
			/>
		</div>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Decorator</h4>
		<div class="flex items-center justify-center">
			<div class=" r-stack">
				<PlantUml>{puml}</PlantUml>
				<PlantUml className="fragment">{puml.split('hide').slice(0, -1).join('hide')}</PlantUml>
				<PlantUml className="fragment">{puml.split('hide').slice(0, -2).join('hide')}</PlantUml>
				<PlantUml className="fragment">{puml.split('hide').slice(0, -3).join('hide')}</PlantUml>
				<PlantUml className="fragment">{puml.split('hide').slice(0, -4).join('hide')}</PlantUml>
			</div>
		</div>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Decorator</h4>
		<div class="grid">
			<ol class="r-fit-text">
				<li>
					Lors de l'équipement d'un objet, le jeu vérifie si l'objet est une instance de <code
						>IExperienceDecorator</code
					>
					<ul>
						<li>
							Vous utilisez les <strong>interfaces marqueurs</strong> (<code>instanceof</code>) pour
							vérifier si l'objet est une instance de <code>IExperienceDecorator</code>
						</li>
					</ul>
				</li>

				<li>
					Si c'est le cas, il appelle la méthode createDecorator() qui prends en paramètre le <code
						>IExperienceGenerator</code
					>
					actuel, le résultat est une instance de <code>EquipementDecorator</code> qui implémente
					toujours <code>IExperienceGenerator</code> ;
					<strong>Le générateur d'origine est imbriqué</strong>
				</li>

				<li>
					Pensez, que si vous équipez un autre objet, vérifiez que l'ancien objet est une instance
					de <code>IExperienceDecorator</code>, accédez au générateur d'origine à l'aide d'un
					<i>getter</i> afin de le rétablir
				</li>
			</ol>
			<div>
				<PlantUml>{puml.split('hide').slice(0, -4).join('hide')}</PlantUml>
			</div>
		</div>
	</Slide>
	<Slide>
		<h3>Exemple</h3>
		<h4>Decorator</h4>
		<h5>Analogie</h5>

		<p>
			Imaginez que vous avez un café. Vous pouvez commander un café simple, ou un café avec du lait,
			ou un café avec du lait et du sucre. <br />
			Vous pouvez également commander un café avec du lait et du sucre, puis ajouter du chocolat ou de
			la cannelle. <br />Les décorateurs fonctionnent de la même manière. Ils enveloppent un objet
			et modifient son comportement de manière transparente.
			<strong>L'avantage étant que les effets peuvent se superposer</strong>
		</p>
	</Slide>
	<Slide>
		<h3>Conclusion</h3>
		<p>
			Les patrons de conceptions ne sont pas indispensables, il est encore moins indispensable de
			savoir les nommer ; il est même possible d'en utiliser sans s'en rendre compte.
		</p>
		<p>
			Avoir le reflexe dans utilisez vous dans votre code, vous permettra de produire un code de
			meilleure qualité, plus maintenable et plus réutilisable. <br /> Dans le TP, il n'était pas
			prévu que l'expérience puisse être calculée différemment, mais grâce au pattern
			<b>Strategy</b>, utilisé par reflexe car simple à mettre en place, vous pourriez plus
			facilement améliorer votre jeu, voire même déléguer l'implementation à un autre développeur.
		</p>
	</Slide>
</Slide>
