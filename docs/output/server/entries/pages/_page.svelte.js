import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../chunks/ssr.js";
import "plantuml-encoder";
import "reveal.js";
import "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/plugin/markdown/markdown.js";
import "reveal.js/plugin/notes/notes.js";
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = null } = $$props;
  let { animate = true } = $$props;
  let { restart = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.restart === void 0 && $$bindings.restart && restart !== void 0)
    $$bindings.restart(restart);
  return `<section${add_attribute("data-auto-animate-id", id, 0)}${add_attribute("data-auto-animate", animate || null, 0)}${add_attribute("data-auto-animate-restart", restart || null, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = null } = $$props;
  let { lines = null } = $$props;
  let { noescape = false } = $$props;
  let { className = null } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.lines === void 0 && $$bindings.lines && lines !== void 0)
    $$bindings.lines(lines);
  if ($$props.noescape === void 0 && $$bindings.noescape && noescape !== void 0)
    $$bindings.noescape(noescape);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<pre${add_attribute("class", className || null, 0)}${add_attribute("data-id", id || null, 0)}>  <code data-trim${add_attribute("data-line-numbers", lines || true, 0)}${add_attribute("data-noescape", noescape || null, 0)}>
    ${slots.default ? slots.default({}) : ``}
  </code>
</pre>`;
});
const Collections = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-zhp5rm">Les tableaux</h3>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-zhp5rm">Les tableaux</h3> <h4 data-svelte-h="svelte-pe20g2">Introduction</h4> <ul data-svelte-h="svelte-1j3b9be"><li>Principe assez proche du C++</li> <li>Plus faciles à manipuler qu&#39;en C</li> <li>Les tableaux peuvent être des ensembles ordonnées de :
			<ul><li>types de bases (int, char, …)</li> <li>d&#39;objets !</li></ul></li> <li>Note : en Java, les tableaux sont des objets</li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-zhp5rm">Les tableaux</h3> <h4 data-svelte-h="svelte-iknzhq">Déclaration</h4> <ul><li>${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
            type [ ] nomDuTableau ;
            int [ ] tableau ;`)}`;
        }
      })}</li> <li data-svelte-h="svelte-mth6nt">la déclaration ne fait que déclarer le tableau mais ne crée pas le tableau en mémoire. La
			variable déclarée permet de référence tout tableau de même type.</li> <li>L&#39;opérateur new permet de créer le tableau
			${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
            int [] tableau ;
            tableau = new int[50] ;`)}`;
        }
      })}</li> <li data-svelte-h="svelte-1cukc1t">La taille donnée est fixe, elle ne peut plus être modifiée</li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-zhp5rm">Les tableaux</h3> <h4 data-svelte-h="svelte-dhbt5p">Accès aux éléments</h4> <ul><li>${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `tableau[expression]`;
        }
      })}</li> <li data-svelte-h="svelte-1gua5v3">Comme en C, les éléments d&#39;un tableau de taille n sont numérotés de 0 à n-1</li> <li data-svelte-h="svelte-1vk0bx7">expression est une expression donnant une valeur entière bien sûr !</li> <li data-svelte-h="svelte-yoagt3">Java vérifie dynamiquement que la valeur de l&#39;élément existe</li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-zhp5rm">Les tableaux</h3> <h4 data-svelte-h="svelte-v1nghc">Attribut du tableau</h4> <ul><li data-svelte-h="svelte-1alcg9h">Il y a des attributs puisque c’est un objet !</li> <li data-svelte-h="svelte-1inryxe"><code>tableau.length</code> donne la taille du tableau</li> <li>${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
        int [ ] monTableau = new int[10] ;
        monTableau.length           // 10
        monTableau.length – 1       // Indice max du tableau
        `)}`;
        }
      })}</li></ul>`;
    }
  })}`;
});
const PlantUml = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = null } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div class="${escape(className, true) + " uml object-fit"}"><pre>        <code class="no-highlight language-plantuml">
           ${slots.default ? slots.default({}) : ``}
        </code>
    </pre></div>`;
});
const Encapsulation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="capitalize" data-svelte-h="svelte-xbdsp1">Encapsulation</h3>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="capitalize" data-svelte-h="svelte-xbdsp1">Encapsulation</h3> <p data-svelte-h="svelte-59jbuw">Un objet est constitué d’un état interne (l’ensemble de ses attributs) et d’une liste
		d’opérations disponibles pour ses clients (l’ensemble de ses méthodes publiques). En
		programmation objet, il est important que les clients d’un objet en connaissent le moins
		possible sur son état interne. Nous verrons plus tard avec les mécanismes d’héritage et
		d’interface qu’un client demande des services à un objet sans même parfois connaître le type
		exact de l’objet. La programmation objet introduit un niveau d’abstraction important et cette
		abstraction devient un atout pour la réutilisation et l’évolutivité.</p>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="capitalize" data-svelte-h="svelte-xbdsp1">Encapsulation</h3> <div class="flex gap-10" data-svelte-h="svelte-12idq5i"><ul class="r-fit-text"><li><strong>Objectif</strong>: L&#39;encapsulation vise à regrouper les données et les méthodes
				associées dans une même entité, restreignant l&#39;accès direct aux données.</li> <li><strong>Approche</strong>: On définit une classe générale avec des attributs privés et des
				méthodes publiques pour interagir avec ces données.</li> <li><strong>Exemple</strong>: Dans les classes &quot;Carre&quot; et &quot;Rectangle&quot;, les données telles que la
				longueur et la largeur sont encapsulées, avec des méthodes pour les manipuler de manière
				contrôlée.</li> <li><strong>Résultat</strong>: Grâce à l&#39;encapsulation on assure la réutilisabilité du code et
				une maintenance aisée.</li></ul></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="capitalize" data-svelte-h="svelte-xbdsp1">Encapsulation</h3> <h4 data-svelte-h="svelte-1bdnxg0">Solution sans encapsulation</h4> <div class="flex flex-row items-center justify-center gap-10">${validate_component(PlantUml, "PlantUml").$$render($$result, { className: "w-1/3 mr-10" }, {}, {
        default: () => {
          return `${escape(`
		@startuml
		class Voiture {
			+ vitesse: int
		}
		@enduml`)}`;
        }
      })} ${validate_component(Code, "Code").$$render($$result, { className: "w-1/2", lines: "10-11" }, {}, {
        default: () => {
          return `${escape(`
public class Voiture {
	public int vitesse;

	public Voiture() {
		this.vitesse = 0;
	}
}
...
public static void main(String[] args) {
	Voiture maVoiture = new Voiture();
	maVoiture.vitesse = 100;
}
`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="capitalize" data-svelte-h="svelte-xbdsp1">Encapsulation</h3> <h4 data-svelte-h="svelte-1bdnxg0">Solution sans encapsulation</h4> <div class="flex flex-row items-center justify-center gap-10">${validate_component(PlantUml, "PlantUml").$$render($$result, { className: "w-1/3 mr-10" }, {}, {
        default: () => {
          return `${escape(`
		@startuml
		class Voiture {
			+ vitesse: int
		}
		@enduml`)}`;
        }
      })} ${validate_component(Code, "Code").$$render(
        $$result,
        {
          className: "w-1/2 r-strech h-[600px]",
          lines: "10-13"
        },
        {},
        {
          default: () => {
            return `${escape(`
public class Voiture {
	public int vitesse;

	public Voiture() {
		this.vitesse = 0;
	}
}
...
public static void main(String[] args) {
	Voiture maVoiture = new Voiture();
	maVoiture.vitesse = 100;
	maVoiture.vitesse = -100; //❌
	mavoiture.vitesse = 10000000; //❌
}
`)}`;
          }
        }
      )}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="capitalize" data-svelte-h="svelte-xbdsp1">Encapsulation</h3> <h4 data-svelte-h="svelte-s2pa9e">Solution <strong class="text-red-400">avec</strong> encapsulation</h4> <div class="flex flex-row items-center justify-center gap-10">${validate_component(PlantUml, "PlantUml").$$render($$result, { className: "w-1/3 mr-10" }, {}, {
        default: () => {
          return `${escape(`
		@startuml
		class Voiture {
			- vitesse: int
			+ accelerer(): void
			+ freiner(): void
		}
		@enduml`)}`;
        }
      })} ${validate_component(Code, "Code").$$render(
        $$result,
        {
          className: "w-1/2 r-strech h-[600px]",
          lines: "2,19,20"
        },
        {},
        {
          default: () => {
            return `${escape(`
public class Voiture {
	private int vitesse;

	public Voiture() {
		this.vitesse = 0;
	}

	public void accelerer() {
		this.vitesse += 10;
	}

	public void freiner() {
		this.vitesse -= 5;
	}
}
...
public static void main(String[] args) {
	Voiture maVoiture = new Voiture();
	maVoiture.accelerer();
	maVoiture.freiner();
}
`)}`;
          }
        }
      )}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="capitalize" data-svelte-h="svelte-xbdsp1">Encapsulation</h3> ${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
Voiture maVoiture = new Voiture(); 

// Simulation des actions sur la voiture
maVoiture.accelerer();
maVoiture.freiner();

// Affichage de la vitesse de la voiture
System.out.printf(
		"La vitesse de la voiture est : %d km/h
",
		maVoiture.vitesse);	
	`)}`;
        }
      })}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="capitalize" data-svelte-h="svelte-xbdsp1">Encapsulation</h3> <h4 data-svelte-h="svelte-1mexa0t">Cas d&#39;usage</h4> <div class="r-fit" data-svelte-h="svelte-1a5r8z8"><p class="text-left">Vous implémentez une librairie pour communiquer avec votre logiciel de note de frais ; si une
			dépense est validée elle s&#39;ajoute à une variable <code class="text-purple-400">montant</code>
			et un compteur
			<code class="text-purple-400">count</code> s&#39;incrémente.<br>
			Vous distribuez votre librairie à d&#39;autres collègues<br>
			Si vous n&#39;encapsulez pas vos variables :</p> <ul><li><p>Vous allez vous retrouver avec un compteur à 0 et un montant non nul car vos collègues
					auront oublié de l&#39;incrémenter</p></li> <li><p>Ils vont evidement mettre 1 000 000€ sans passer par la méthode de validation</p></li> <li>Quelqu&#39;un va essayer d&#39;écrire -0.01€</li></ul></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="capitalize" data-svelte-h="svelte-xbdsp1">Encapsulation</h3> <p data-svelte-h="svelte-urgix4">En résumé, l&#39;encapsulation permet de protéger les données internes d&#39;un objet et de les rendre
		accessibles uniquement via des méthodes publiques. Cela permet de contrôler l&#39;accès aux données
		et de garantir leur intégrité.<br>
		En programmation objet, le principe d’encapsulation nous incite à contrôler et limiter l’accès au
		contenu de nos classes au strict nécessaire afin de permettre le couplage le plus faible possible.
		L’encapsulation en Java est permise grâce à la portée private.
		<br>
		On considère que tous les attributs d’une classe doivent être déclarés private afin de satisfaire
		le principe d’encapsulation.</p>`;
    }
  })}`;
});
const Heritage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 id="héritage-de-classes-en-programmation-orientée-objet" class="capitalize" data-svelte-h="svelte-171rboy">Héritage de Classes</h3>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 id="héritage-de-classes-en-programmation-orientée-objet" class="capitalize" data-svelte-h="svelte-171rboy">Héritage de Classes</h3> <div class="r-fit-text" data-svelte-h="svelte-ear80u"><p>Une application Java est composée d’un ensemble d’objets. Un des intérêts de la programmation
			objet réside dans les relations que ces objets entretiennent les uns avec les autres. Ces
			relations sont construites par les développeurs et constituent ce que l’on appelle
			l’architecture d’une application. Il existe deux relations fondamentales en programmation
			objet :</p> <dl class="simple"><dt><strong>est un</strong> (<em>is-a</em>)</dt><dd><p>Cette relation permet de créer une chaîne de relation d’identité entre des classes. Elle
					indique qu’une classe peut être assimilée à une autre classe qui correspond à une notion
					plus abstraite ou plus générale. On parle <strong>d’héritage</strong> pour désigner le mécanisme
					qui permet d’implémenter ce type de relation.</p> </dd><dt><strong>a un</strong> (<em>has-a</em>)</dt><dd><p>Cette relation permet de créer une relation de dépendance d’une classe envers une autre.
					Une classe a besoin des services d’une autre classe pour réaliser sa fonction. On parle
					également de relation de <strong>composition</strong> pour désigner ce type de relation.</p></dd></dl></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 id="héritage-de-classes-en-programmation-orientée-objet" data-svelte-h="svelte-8r9ius">Héritage de Classes</h3> <div class="flex gap-10"><ul class="r-fit-text" data-svelte-h="svelte-v7uu7b"><li><strong>Objectif</strong>: Factoriser les attributs communs entre les classes.</li> <li><strong>Approche</strong>: Définir une classe générale avec des attributs partagés.</li> <li><strong>Exemple</strong>: Les classes “Carre” et “Rectangle” partagent la méthode
				“surface()” pour calculer leur surface.</li> <li><strong>Optimisation</strong>: Établir une relation d’héritage entre les classes pour éviter
				la redondance de code.</li> <li><strong>Résultat</strong>: Seule la classe “Rectangle” contient le code de la méthode
				“surface()”, mais elle reste utilisable par les objets de la classe “Carre” grâce à
				l’héritage.</li></ul> ${validate_component(PlantUml, "PlantUml").$$render($$result, { className: "w-1/3 " }, {}, {
        default: () => {
          return `${escape(`
@startuml
digraph G {
node [ shape=box ]
rankdir="BT"
            
Rectangle -> Forme
Cercle -> Forme
Carre ->Rectangle
}
@enduml`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 id="héritage-de-classes-en-programmation-orientée-objet" data-svelte-h="svelte-8r9ius">Héritage de Classes</h3> <p data-svelte-h="svelte-1mwj8ca">Imaginons que nous voulions développer un simulateur de conduite. Nous pouvons concevoir une
		classe Voiture qui sera la représentation d’une voiture dans notre application.</p> <p class="fragment" data-svelte-h="svelte-es70v7">Mais nous pouvons également rendre possible la simulation d’une moto. Dans ce cas, nous aurons
		également besoin d’une classe Moto.</p> <div class="flex flex-row">${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
			public class Voiture {
									
				private final String marque;
				private float vitesse;
				
				public Voiture(String marque) {
					this.marque = marque;
				}
			}`)}`;
        }
      })} ${validate_component(Code, "Code").$$render($$result, { className: "fragment" }, {}, {
        default: () => {
          return `${escape(`
			public class Moto {
		
				private final String marque;
				private float vitesse;
				
				public Moto(String marque) {
					this.marque = marque;
				}
			}`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 id="héritage-de-classes-en-programmation-orientée-objet" data-svelte-h="svelte-8r9ius">Héritage de Classes</h3> <p class="text-left r-fit-text" data-svelte-h="svelte-gr7vok">En conséquence, nous avons deux classes qui partagent des attributs et des comportements
		similaires. Nous pouvons donc factoriser ces attributs et comportements communs dans une classe
		Véhicule.</p> ${validate_component(Code, "Code").$$render(
        $$result,
        {
          lines: "18-20,25-27",
          className: "r-strech h-[600px]"
        },
        {},
        {
          default: () => {
            return `${escape(`
		class Vehicule {
			private int vitesse;
		
			public Vehicule() {
				this.vitesse = 0;
			}
		
			public void accelerer() {
				this.vitesse += 10;
			}
		
			public void freiner() {
				this.vitesse -= 10;
			}
		}
		
		class Voiture extends Vehicule {
		
		}
		
		// Classe Moto qui hérite de Vehicule
		class Moto extends Vehicule {
		
		}
		
		public class Main {
			public static void main(String[] args) {
				Voiture voiture = new Voiture();
				Moto moto = new Moto();
		
				// Exemple d'utilisation des méthodes héritées
				voiture.accelerer();
				moto.accelerer();
			}
		}
		`)}`;
          }
        }
      )}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 id="héritage-de-classes-en-programmation-orientée-objet" data-svelte-h="svelte-8r9ius">Héritage de Classes</h3> <p class="text-left r-fit-text" data-svelte-h="svelte-qf90i0">Bon les voitures et les motos partagent des comportements similaires, mais ils ont aussi des
		comportements spécifiques. Introduisons des méthodes spécifiques pour chaque classe. Les
		voitures peuvent fermer les portières et les motos peuvent replier la béquille.</p> ${validate_component(Code, "Code").$$render(
        $$result,
        {
          lines: "18-20,25-27",
          className: "r-strech h-[600px]"
        },
        {},
        {
          default: () => {
            return `${escape(`

class Voiture extends Vehicule {
    public void fermerPortieres() {
        System.out.println("Portières fermées.");
    }
}

// Classe Moto qui hérite de Vehicule
class Moto extends Vehicule {
    public void replierBequille() {
        System.out.println("Béquille repliée.");
    }
}

public class Main {
    public static void main(String[] args) {
        Voiture voiture = new Voiture();
        Moto moto = new Moto();

        // Exemple d'utilisation des méthodes héritées
        voiture.accelerer();
        voiture.fermerPortieres();

        moto.accelerer();
        moto.replierBequille();
    }
}
`)}`;
          }
        }
      )}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 id="héritage-de-classes-en-programmation-orientée-objet" data-svelte-h="svelte-8r9ius">Héritage de Classes</h3> <p class="text-left r-fit-text" data-svelte-h="svelte-o7dgw2">On peut également surcharger un comportement<br>
		Dans cet exemple la voiture lorsqu&#39;elle accèlère écrit dans la console<br>
		De même pour la moto sauf qu&#39;on accèlère + !</p> ${validate_component(Code, "Code").$$render(
        $$result,
        {
          lines: true,
          className: "r-strech h-[650px]"
        },
        {},
        {
          default: () => {
            return `${escape(`

class Voiture extends Vehicule {
    public override void accelerer() {
        base.accelerer();
        system.out.println("La voiture accélère. 🚗");
    }
}

class Moto extends Vehicule {
    public override void accelerer() {
        this.vitesse += 20;
        system.out.println("La moto accélère (plus vite). 🏍💨");
    }
}
`)}`;
          }
        }
      )}`;
    }
  })}`;
});
const Gpt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-left"><div class="final-completion flex flex-1 gap-3 group lg:max-w-[40rem] lg:px-1 md:max-w-3xl md:px-5 mx-auto text-base xl:max-w-[48rem] xl:px-5"><div class="flex-shrink-0 flex flex-col relative items-end" data-svelte-h="svelte-1crx5y2"><div><div class="pt-0.5"><div class="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full"><div class="relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center" style="background-color: rgb(25, 195, 125); width: 24px; height: 24px;"><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm" role="img"><text x="-9999" y="-9999">ChatGPT</text><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg></div></div></div></div></div> <div class="lg:w-[calc(100%-115px)]"><div class="font-semibold" data-svelte-h="svelte-40jaz7">ChatGPT</div> <div class=""><div class=""><div data-message-author-role="assistant" data-message-id="ad98faa3-4137-4e3a-a8d7-1f6d28bfd685" class=""><div class=""><p>${slots.default ? slots.default({}) : ``}</p></div></div></div> <div class="mt-1 flex justify-start gap-3 empty:hidden" data-svelte-h="svelte-hpwj3b"><div class="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 visible"><span class="" data-state="closed"><button class="flex items-center gap-1.5 rounded-md p-1 text-xs text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg></button></span><span class="" data-state="closed"><button class="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible"><div class="flex items-center gap-1.5 text-xs"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 2.5C5.05228 2.5 5.5 2.94772 5.5 3.5V5.07196C7.19872 3.47759 9.48483 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C7.1307 21.5 3.11828 17.8375 2.565 13.1164C2.50071 12.5679 2.89327 12.0711 3.4418 12.0068C3.99033 11.9425 4.48712 12.3351 4.5514 12.8836C4.98798 16.6089 8.15708 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C9.7796 4.5 7.7836 5.46469 6.40954 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H4.5C3.96064 9 3.52101 8.57299 3.50073 8.03859C3.49983 8.01771 3.49958 7.99677 3.5 7.9758V3.5C3.5 2.94772 3.94771 2.5 4.5 2.5Z" fill="currentColor"></path></svg></div></button></span> <div class="flex"><span class="" data-state="closed"><button class="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8727 21.4961C11.6725 21.8466 11.2811 22.0423 10.8805 21.9922L10.4267 21.9355C7.95958 21.6271 6.36855 19.1665 7.09975 16.7901L7.65054 15H6.93226C4.29476 15 2.37923 12.4921 3.0732 9.94753L4.43684 4.94753C4.91145 3.20728 6.49209 2 8.29589 2H18.0045C19.6614 2 21.0045 3.34315 21.0045 5V12C21.0045 13.6569 19.6614 15 18.0045 15H16.0045C15.745 15 15.5054 15.1391 15.3766 15.3644L11.8727 21.4961ZM14.0045 4H8.29589C7.39399 4 6.60367 4.60364 6.36637 5.47376L5.00273 10.4738C4.65574 11.746 5.61351 13 6.93226 13H9.00451C9.32185 13 9.62036 13.1506 9.8089 13.4059C9.99743 13.6612 10.0536 13.9908 9.96028 14.2941L9.01131 17.3782C8.6661 18.5002 9.35608 19.6596 10.4726 19.9153L13.6401 14.3721C13.9523 13.8258 14.4376 13.4141 15.0045 13.1902V5C15.0045 4.44772 14.5568 4 14.0045 4ZM17.0045 13V5C17.0045 4.64937 16.9444 4.31278 16.8338 4H18.0045C18.5568 4 19.0045 4.44772 19.0045 5V12C19.0045 12.5523 18.5568 13 18.0045 13H17.0045Z" fill="currentColor"></path></svg></button></span></div></div></div></div></div></div></div>`;
});
const IntroductionClasses = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-m5f1dg">Les objets et les classes</h3>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-1bkakst">Évolution</h3> <h4 data-svelte-h="svelte-nftiy0">L&#39;assembleur</h4> <p data-svelte-h="svelte-1furge9">Programmation dictée par le fonctionnement des processeurs</p> <ul><li data-svelte-h="svelte-5mvnzq">Programme = succession d&#39;instructions</li> <li>Organisation du programme et nature des instructions le plus proche possible de la façon dont
			le processeur les exécute
			<ul><li data-svelte-h="svelte-bdaf6z">Modification des données mémorisées</li> <li data-svelte-h="svelte-1a74tc3">Déplacement des données d&#39;un emplacement à un autre</li> <li data-svelte-h="svelte-171exjr">Opérations arithmétiques et de logique élémentaires</li> <li>Programmation en langage « machine »
					<ul><li data-svelte-h="svelte-974iho">Exemple : « c = a + b » se programme</li> <li>${validate_component(Code, "Code").$$render(
        $$result,
        {
          lines: true,
          className: "language-x86asm"
        },
        {},
        {
          default: () => {
            return `${escape(`
						LD A, REG1
						LD B, REG2
						ADD REG3, REG1, REG2
						MV c, REG3`)}`;
          }
        }
      )}</li></ul></li></ul></li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-1bkakst">Évolution</h3> <h4 data-svelte-h="svelte-vddmra">Les langages procéduraux</h4> <p data-svelte-h="svelte-klsdd0">Mise au point d&#39;algorithmes plus complexes</p> <ul data-svelte-h="svelte-1iptq33"><li>Nécessité de simplifier la programmation
			<ul><li>Langages C, Cobol, etc.</li></ul></li> <li>Le raisonnement reste néanmoins conditionné par la conception des traitements et leur
			succession
			<ul><li>Éloigné de la manière humaine de poser et résoudre les problèmes</li> <li>Mal adapté à des problèmes de plus en plus complexes</li></ul></li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-1bkakst">Évolution</h3> <h4 data-svelte-h="svelte-1pjw2bd">Les langages orientés objet</h4> <p data-svelte-h="svelte-3ersmd">Libérer la programmation des contraintes liées au fonctionnement des processeurs</p> <ul data-svelte-h="svelte-p18sqq"><li>Rapprocher la programmation du mode cognitif de résolution des problèmes</li> <li>Mise au point d&#39;un nouveau style de langage de programmation
			<ul><li>Placer les entités, objets ou acteurs du problème à la base de la conception</li> <li>Étudier les traitements comme des interactions entre les entités</li> <li>Penser aux données AVANT de penser aux traitements</li></ul></li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-m5f1dg">Les objets et les classes</h3> <h4 data-svelte-h="svelte-2f8314">Qu&#39;est ce qu&#39;un objet ?</h4> ${validate_component(Gpt, "Gpt").$$render($$result, {}, {}, {
        default: () => {
          return `Un objet est une instance d&#39;une <strong class="text-red-400" data-svelte-h="svelte-swtrt4">classe</strong> qui contient à la fois
		des informations et des actions spécifiques à une entité, comme une voiture ou un animal. Il combine
		les données (comme la couleur d&#39;une voiture) et les actions (comme accélérer) en une seule entité
		utilisable.`;
        }
      })} <span data-svelte-h="svelte-bhkr83">En fin de compte, c&#39;est un peu une variable, de type structure, mais avec des méthodes</span>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-m5f1dg">Les objets et les classes</h3> <h4 data-svelte-h="svelte-16u5496">Qu&#39;est ce qu&#39;une classe ?</h4> ${validate_component(Gpt, "Gpt").$$render($$result, {}, {}, {
        default: () => {
          return `En programmation orientée objet (POO), une classe est comme un plan ou un modèle pour créer des
		objets. Prenons l&#39;exemple d&#39;une recette de cuisine : la classe serait semblable à la recette
		elle-même. Elle décrit les ingrédients nécessaires et les étapes à suivre pour créer un plat
		spécifique. Une fois que vous avez la recette, vous pouvez créer plusieurs plats différents en
		suivant les mêmes instructions de la recette.`;
        }
      })}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-m5f1dg">Les objets et les classes</h3> <h4 data-svelte-h="svelte-16u5496">Qu&#39;est ce qu&#39;une classe ?</h4> <ul data-svelte-h="svelte-1f40gs0"><li>Une classe est constituée de descriptions de :
			<ul><li>données : que l&#39;on nomme <strong>attributs</strong></li> <li>procédures et fonctions : que l&#39;on nomme <strong>méthodes</strong></li></ul></li> <li>Une classe est uniquement un modèle de représentation d&#39;objets
			<ul><li>ayant même structure (même ensemble d&#39;attributs)</li> <li>ayant même comportement (même ensemble de méthodes)</li></ul></li> <li>Les objets sont des représentations, on parle d&#39;instances du modèle défini dans les classes
			<ul><li>une classe permet d&#39;instancier (créer) plusieurs objets</li> <li>en général, un objet est instance d&#39;une classe</li></ul></li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-m5f1dg">Les objets et les classes</h3> <h4 data-svelte-h="svelte-qgbd9">Qu&#39;est ce que <span class="text-red-400">N&#39;EST PAS</span> un objet ?</h4>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-m5f1dg">Les objets et les classes</h3> <h4 data-svelte-h="svelte-qgbd9">Qu&#39;est ce que <span class="text-red-400">N&#39;EST PAS</span> un objet ?</h4> <div class="flex flex-row items-center"><pre>            <code data-trim${add_attribute("data-line-numbers", true, 0)} class="r-strech h-[650px]">
			${escape(`
public static void main(String[] args) {
    int vitesseVoiture = 0; 
    accelerer(vitesseVoiture);
    freiner(vitesseVoiture);
    System.out.printf(
     "La vitesse de la voiture est : %d km/h
", vitesseVoiture);
    }
	public void accelerer(int vitesse){
		vitesse += 10;
	}
	public void freiner(int vitesse){
		vitesse -= 10;
	}
}
`)}</code></pre></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-m5f1dg">Les objets et les classes</h3> <h4 data-svelte-h="svelte-2f8314">Qu&#39;est ce qu&#39;un objet ?</h4> <div class="flex flex-row items-center"><pre>            <code data-trim${add_attribute("data-line-numbers", true, 0)} class="language-java">
			${escape(`
public class Main {
	public static void main(String[] args) {
		Voiture maVoiture = new Voiture(); // Création d'un objet de type Voiture

		// Simulation des actions sur la voiture
		maVoiture.accelerer();
		maVoiture.freiner();

		// Affichage de la vitesse de la voiture
		System.out.printf(
				"La vitesse de la voiture est : %d km/h
",
				maVoiture.vitesse);
	}
}

public class Voiture {
	public int vitesse; // La vitesse de la voiture

	// Constructeur
	public Voiture() {
		this.vitesse = 0; // La vitesse initiale est de 0
	}

	// Méthode pour accélérer la voiture
	public void accelerer() {
		// Implémentation de l'accélération (par exemple, ajouter 10 à la vitesse)
		this.vitesse += 10;
	}

	// Méthode pour freiner la voiture
	public void freiner() {
		// Implémentation du freinage (par exemple, soustraire 5 à la vitesse)
		this.vitesse -= 5;
	}
}`)}</code></pre></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-f3a8g3">Ça semble sans intérêt</h3> <i data-svelte-h="svelte-me9uu2">34 lignes pour ça ?</i> <div class="flex flex-row justify-center" data-svelte-h="svelte-1i15fvk"><img alt="Pourquoi" class="object-cover text-center print:hidden h-[200px]" src="https://media1.tenor.com/m/s1wnF2DiWA0AAAAC/skeptical-futurama.gif"></div> <ul data-svelte-h="svelte-370r81"><li>😫 Le code est plus long</li> <li>😕 Le code est moins optimisé</li> <li>🙄 Il y a 50 fichiers à modifier</li> <li>🙃 Il faut plus réflechir</li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-yt407k">Les avanatges de la POO</h3> <ul data-svelte-h="svelte-w9v58h"><li>On va pouvoir faire de l&#39;encapsulation</li> <li>On va pouvoir faire de l&#39;héritage</li> <li>On va pouvoir faire du polymorphisme</li> <li>On va pouvoir faire de l&#39;abstraction</li> <li>On va pouvoir faire de la modularité</li> <li>On va pouvoir faire de la réutilisabilité</li> <li>etc.</li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-1pqtvkd">Généralités</h3> <h4 data-svelte-h="svelte-yjznie">Les constructeurs</h4> <div class="r-fit-text" data-svelte-h="svelte-x72x5t"><p>Les constructeurs en Java sont des méthodes spéciales utilisées pour initialiser les objets
			d&#39;une classe. Voici quelques points clés à retenir :</p> <ul class="fragment"><li><strong>Initialisation des objets</strong>: Les constructeurs sont utilisés pour initialiser
				les variables d&#39;instance d&#39;un objet lors de sa création.</li> <li class="fragment"><strong>Nom de la classe</strong>: Le nom du constructeur doit correspondre exactement au
				nom de la classe dans laquelle il est défini.</li> <li class="fragment"><strong>Pas de type de retour explicite</strong>: Contrairement aux autres méthodes, les
				constructeurs n&#39;ont pas de type de retour explicite, même pas <code>void</code>.</li> <li class="fragment"><strong>Surcharges</strong>: Vous pouvez définir plusieurs constructeurs dans une classe en
				utilisant la surcharge, ce qui permet de créer des objets de différentes manières.</li> <li class="fragment"><strong>Appel explicite du constructeur parent</strong>: Si une classe hérite d&#39;une autre
				classe, le constructeur de la classe enfant peut explicitement appeler le constructeur de la
				classe parent en utilisant <code>super()</code>.</li> <li class="fragment"><strong>Appel implicite</strong>: Si aucun constructeur n&#39;est explicitement défini dans une
				classe, Java fournit un constructeur par défaut qui initialise les variables d&#39;instance avec
				des valeurs par défaut.</li> <li class="fragment"><strong>Chaque objet a un constructeur</strong>: Chaque objet en Java est créé en appelant
				un constructeur, que ce soit le constructeur par défaut fourni par Java ou un constructeur
				défini par l&#39;utilisateur.</li></ul> <p class="fragment">En résumé, les constructeurs en Java sont des éléments essentiels pour initialiser les objets
			et peuvent être utilisés pour fournir différentes manières de créer des instances d&#39;une
			classe.</p></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-golr00">La classe <code>Object</code></h3> <p data-svelte-h="svelte-1203kw7">Toute classe déclarée hérite implicitement de la classe <code>Object</code></p> <p data-svelte-h="svelte-1hbzynw">Tout objet peut redéfinir une méthode <code>toString()</code></p> ${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
import java.util.*;

public class Main {
	int car_no;
	
	Main(int car_no){
		this.car_no=car_no;
	}

	// Driver code
	public static void main(String args[])
	{
		Main s = new Main(16);

		// Below two statements are equivalent
		System.out.println(s.toString());
		System.out.println(s);
	}
}
`)}`;
        }
      })} ${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
        Main@d716361
        Main@d716361
            `)}`;
        }
      })}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-golr00">La classe <code>Object</code></h3> <p data-svelte-h="svelte-1203kw7">Toute classe déclarée hérite implicitement de la classe <code>Object</code></p> <p data-svelte-h="svelte-1hbzynw">Tout objet peut redéfinir une méthode <code>toString()</code></p> ${validate_component(Code, "Code").$$render($$result, { lines: "10-12" }, {}, {
        default: () => {
          return `${escape(`
            import java.util.*;

            public class Main {
                int car_no;
                
                Main(int car_no){
                    this.car_no=car_no;
                }
                // Overriding the toString()
                public String toString() {
                    return "Nombre de voitures : "+ car_no;
                }
                // Driver code
                public static void main(String args[])
                {
                    Main s = new Main(16);
                    System.out.println(s);
                }
            }
            `)}`;
        }
      })} ${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`Nombre de voitures : 16`)}`;
        }
      })}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-golr00">La classe <code>Object</code></h3> <p data-svelte-h="svelte-1203kw7">Toute classe déclarée hérite implicitement de la classe <code>Object</code></p> <p data-svelte-h="svelte-1u8dgkw">Tout objet peut redéfinir une méthode <code>compareTo()</code></p> ${validate_component(Code, "Code").$$render($$result, { lines: true }, {}, {
        default: () => {
          return `${escape(`
		// Overriding compareTo() method
    @Override public int compareTo(GFG o)
    {
        if (this.age > o.age) {
 
            // if current object is greater,then return 1
            return 1;
        }
        else if (this.age < o.age) {
 
            // if current object is greater,then return -1
            return -1;
        }
        else {
 
            // if current object is equal to o,then return 0
            return 0;
        }
    }`)}`;
        }
      })}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-golr00">La classe <code>Object</code></h3> <p data-svelte-h="svelte-1203kw7">Toute classe déclarée hérite implicitement de la classe <code>Object</code></p> <p data-svelte-h="svelte-15pjhfv">Tout objet peut redéfinir une méthode <code>equals()</code></p> ${validate_component(Code, "Code").$$render($$result, { lines: "12-32" }, {}, {
        default: () => {
          return `${escape(`
		class Complex {
		 
		 private double re, im;
		
		 public Complex(double re, double im) {
			 this.re = re;
			 this.im = im;
		 }
		
		 // Overriding equals() to compare two Complex objects
		 @Override
		 public boolean equals(Object o) {
		
			 // If the object is compared with itself then return true  
			 if (o == this) {
				 return true;
			 }
		
			 /* Check if o is an instance of Complex or not
			   "null instanceof [type]" also returns false */
			 if (!(o instanceof Complex)) {
				 return false;
			 }
			  
			 // typecast o to Complex so that we can compare data members 
			 Complex c = (Complex) o;
			  
			 // Compare the data members and return accordingly 
			 return Double.compare(re, c.re) == 0
					 && Double.compare(im, c.im) == 0;
		 }
		}`)}`;
        }
      })}`;
    }
  })}`;
});
const LangageJava = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-1iqgvdm">Le langage Java</h3> <div class="flex flex-col justify-center" data-svelte-h="svelte-1e0wdj7"><img class="object-contain h-64 w-full" src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg" alt="Java Logo"> <p class="italic r-strech">Java est un langage de programmation polyvalent, orienté objet et largement utilisé dans le
			développement logiciel. Il a été conçu pour être portable, ce qui signifie qu&#39;il peut
			fonctionner sur différentes plateformes sans nécessiter de modifications importantes.</p></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-zf3p5z">Fonctionnement</h3> <div class="r-fit-text" data-svelte-h="svelte-ncwbwy"><p>L’indépendance par rapport à l’environnement d’exécution est garantie par la <em>machine virtuelle Java</em>
			(Java Virtual Machine ou <strong>JVM</strong>). En effet, Java est un langage compilé mais le compilateur ne
			produit pas de code natif pour la machine, il produit du <a class="reference external" href="https://fr.wikipedia.org/wiki/Bytecode_Java">bytecode</a> : un jeu d’instructions compréhensibles
			par la JVM qu’elle va traduire en code exécutable par la machine au moment de l’exécution.</p> <p>Pour qu’un programme Java fonctionne, il faut non seulement que les développeurs aient compilé le code
			source mais il faut également qu’un environnement d’exécution (comprenant la JVM) soit installé sur
			la machine cible.</p> <p>Il existe ainsi deux environnements Java qui peuvent être téléchargés et installés depuis le <a class="reference external" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">site
				d’Oracle</a> :</p> <dl class="simple"><dt>JRE - Java Runtime Environment</dt><dd><p>Cet environnement fournit uniquement les outils nécessaires à l’exécution de programmes Java. Il
					fournit entre-autres la machine virtuelle Java.</p> </dd><dt>JDK - Java Development Kit</dt><dd><p>Cet environnement fournit tous les outils nécessaires à l’exécution mais aussi au développement de
					programmes Java. Il fournit entre-autres la machine virtuelle Java et la compilateur.</p></dd></dl></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-1iqgvdm">Le langage Java</h3> <h4 data-svelte-h="svelte-18h9ipq">Caractéristiques</h4> <div class="flex flex-col justify-center"><ul class="r-strech"><li data-svelte-h="svelte-j9xzk5">S&#39;inspire mais se débarrasse des complexités du C (pointeurs, allocation mémoire,..)</li> <li data-svelte-h="svelte-ytdrfv">Orienté objet !</li> <li data-svelte-h="svelte-jh2a8">Gestion automatique de la mémoire</li> <li>Typage statique fort (à la différence de Python, les variables doivent être déclarées avec
				leur type)
				${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
					int i = 0;
					i = 4; // OK
					i = "bonjour"; // ERREUR : on tente d'affecter une chaîne de caractères`)}`;
        }
      })}</li> <li data-svelte-h="svelte-uu99nv">Bibliothèque de classes et de packages très riche (graphismes, encryption, …)</li> <li data-svelte-h="svelte-1d499ss">Polymorphisme et introspection</li></ul></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-tghgi6">Conventions</h3> <div class="flex flex-col justify-center" data-svelte-h="svelte-1cc378f"><ul class="r-strech"><li>Les noms de classe commencent par une majuscule
				<ul><li><code>Visage, Objet</code></li></ul></li> <li>Les mots contenus dans un identificateur commencent par une minuscule
				<ul><li><code>uneClasse, uneMethode, uneVariable</code></li></ul></li> <li>Les constantes sont en majuscules
				<ul><li><code>UNE_CONSTANTE</code></li></ul></li></ul></div>`;
    }
  })}  ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-7p2708">Types de données</h3> <div class="flex flex-col justify-center" data-svelte-h="svelte-1brovb"><ul class="r-strech"><li>Types primitifs
				<ul><li><code>byte, short, int, long, float, double, char, boolean</code></li></ul></li> <li>Objets (instances de classes)
				<ul><li><code>String, Integer, Float, Double, Boolean, Character, …</code></li></ul></li></ul></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-7p2708">Types de données</h3> <h4 data-svelte-h="svelte-8317wg">Le type String</h4> <ul><li data-svelte-h="svelte-1q77k0k">Ce n&#39;est pas un type primitif, c&#39;est une classe (d&#39;où la présence de la majuscule)</li> <li>Comme c&#39;est une classe, on utilise le mot-clef new pour créer un objet, on parle d&#39;une
			instance de classe de type String
			${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
				String str = new String() ;
				str = "ceci est une phrase" ;
				`)}`;
        }
      })}</li> <li data-svelte-h="svelte-1ughinc">la chaîne de caractères se met entre guillemets</li> <li>Exceptionnellement, il est possible de déclarer une chaîne de caractère sans utiliser <code class="text-purple-400" data-svelte-h="svelte-1k5vong">new</code> ${validate_component(Code, "Code").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(`
				String str = "ceci est une phrase" ;
				`)}`;
        }
      })}</li></ul>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-16353j8">Syntaxe</h3> <div class="flex flex-col justify-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "1-5" }, {}, {
        default: () => {
          return `${escape(`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`)}`;
        }
      })} <p class="italic r-strech" data-svelte-h="svelte-nq5fh3">La syntaxe de Java est similaire à celle de C++, mais elle a moins de fonctionnalités basées
			sur les pointeurs. Java est un langage de programmation orienté objet, ce qui signifie que les
			programmes Java sont constitués de classes et d&#39;objets.</p></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-16353j8">Syntaxe</h3> <h4 data-svelte-h="svelte-7x7xjx">Les variables</h4> <div class="flex flex-col justify-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "3-7" }, {}, {
        default: () => {
          return `${escape(`
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
}`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-16353j8">Syntaxe</h3> <h4 data-svelte-h="svelte-1ys0pg8">Les structures de contrôle</h4> <h5 data-svelte-h="svelte-k67mux">Condition</h5> <div class="flex flex-col justify-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "3-7" }, {}, {
        default: () => {
          return `${escape(`
public class Main {
    public static void main(String[] args) {
        if (condition) {
            // code block
        } else {
            // code block
        }
        System.out.println("Hello World");
    }
}`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-16353j8">Syntaxe</h3> <h4 data-svelte-h="svelte-1ys0pg8">Les structures de contrôle</h4> <h5 data-svelte-h="svelte-fyqcl4">Boucle</h5> <div class="flex flex-col justify-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "3-5" }, {}, {
        default: () => {
          return `${escape(`
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            // code block
        }
        System.out.println("Hello World");
    }
}`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-16353j8">Syntaxe</h3> <h4 data-svelte-h="svelte-1ys0pg8">Les structures de contrôle</h4> <h5 data-svelte-h="svelte-fyqcl4">Boucle</h5> <div class="flex flex-col justify-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "3-7" }, {}, {
        default: () => {
          return `${escape(`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            // code block
            i++;
        }
        System.out.println("Hello World");
    }
}`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-16353j8">Syntaxe</h3> <h4 data-svelte-h="svelte-1ys0pg8">Les structures de contrôle</h4> <h5 data-svelte-h="svelte-fyqcl4">Boucle</h5> <div class="flex flex-col justify-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "3-7" }, {}, {
        default: () => {
          return `${escape(`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        do {
            // code block
            i++;
        } while (i < 5);
        System.out.println("Hello World");
    }
}`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-16353j8">Syntaxe</h3> <h4 data-svelte-h="svelte-1ys0pg8">Les structures de contrôle</h4> <h5 data-svelte-h="svelte-1f33u0k">Les switch</h5> <div class="flex flex-col justify-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "3-13" }, {}, {
        default: () => {
          return `${escape(`
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
        }`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-16353j8">Syntaxe</h3> <h4 data-svelte-h="svelte-5w960">Les exceptions</h4> <div class="flex flex-col justify-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "3-8" }, {}, {
        default: () => {
          return `${escape(`
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
			`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-1wotoib">La génération de nombres &quot;aléatoires&quot;</h3> <div class="flex flex-col justify-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "4-6" }, {}, {
        default: () => {
          return `${escape(`
import java.util.Random;
public class Main {
	public static void main(String [] args){
		Random r = new Random();
		int a;
		a = r.nextInt(100);
		System.out.println(a + "	" + r.nextInt(20));
	}
}
`)}`;
        }
      })}</div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-16353j8">Syntaxe</h3> <h4 data-svelte-h="svelte-1f59xtj">La lecture clavier</h4> <div class="flex flex-row justify-center items-center">${validate_component(Code, "Code").$$render($$result, { id: "code", lines: "6-7" }, {}, {
        default: () => {
          return `${escape(`
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
			`)}`;
        }
      })} <ul class="text-2xl w-1/2" data-svelte-h="svelte-yozt3p"><li><code class="inlineCode">nextInt()</code> : gets the next integer</li> <li><code class="inlineCode">nextBoolean()</code> : gets the next Boolean</li> <li><code class="inlineCode">nextDouble()</code> : gets the next double</li> <li><code class="inlineCode">nextFloat()</code> : gets the next float</li> <li><code class="inlineCode">nextShort()</code> : gets the next short</li> <li><code class="inlineCode">next()</code> : gets the next string (a line can have multiple strings
				separated by space)</li> <li><code class="inlineCode">nextLine()</code> : gets the next line</li></ul></div>`;
    }
  })} `;
});
const TP1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="capitalize" data-svelte-h="svelte-1a9go9r">Séance 1</h1> <div class="fragment" data-svelte-h="svelte-2cp1yk"><h2>Déroulé</h2> <p>CM : 1h, TD :1h, TP: 4h</p></div>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LangageJava, "LangageJava").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Collections, "Collections").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(IntroductionClasses, "IntroductionClasses").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Encapsulation, "Encapsulation").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Heritage, "Heritage").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-131zoms">TD</h1> <p data-svelte-h="svelte-i9849y">Question à compléter et à rendre sur <i>e-campus</i></p> <a href="/TD1.docx" data-svelte-h="svelte-eib8tq">Version Word</a>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-syd9f4">TP</h1> <p data-svelte-h="svelte-iinqcy">Code source à déposer sur <i>e-campus</i></p> <a href="/TP1.docx" data-svelte-h="svelte-1f6j5ya">Version Word</a>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1i03cqb">Explications tirées de :</p> <ul data-svelte-h="svelte-wgc9ze"><li><a href="https://gayerie.dev/epsi-b3-java/langage_java/">gayerie.dev</a> </li><li> <a href="https://www-lisic.univ-littoral.fr/~fonlupt/Enseignement/2020/POO/index.html">POO - LISIC</a></li></ul>`;
    }
  })}`;
});
const Presentation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slide, "Slide").$$render($$result, { animate: true }, {}, {
    default: () => {
      return `<h1 class="capitalize" data-svelte-h="svelte-w4278q">Programmation Orientée objet</h1> <h2 class="capitalize" data-svelte-h="svelte-hdbq0n">Java</h2>`;
    }
  })} ${validate_component(TP1, "Tp1").$$render($$result, {}, {}, {})}`;
});
const Slides = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="reveal"><div class="slides">${validate_component(Presentation, "Presentation").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-16xc1pb_START -->${$$result.title = `<title>Programmation Orientée Objet - PICOT Alexis</title>`, ""}<!-- HEAD_svelte-16xc1pb_END -->`, ""} ${validate_component(Slides, "Slides").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
