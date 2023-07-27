# Angular

## Introduction: Typescript

Commandes : 

Pour que windows puisse executer du typescript
> Powershell: Set-ExecutionPolicy 'unrestricted'

Installation de package
> npm install -g typescript


```ts

//déclaration typé:
const unSuperNombre: number = 42;

// création d'un type
type Pokemon = {
    name: string,
    type: string,
    id: number
}

// utilisation d'un type générique qui contient des type perso
const pokemons: Array<Pokemon> = [{name: 'premier', type:'feu', id: 1}]

// type any ( ne pas utiliser )
let doNotdoThis: any = "je suis n'importe quoi"
doNotdoThis = 12

// multiple type (pokemon ou string)
let growlithe : Pokemon | string = 'string';

// enum
enum PokemonStatus {
    Paralysed,
    Asleep,
    Frozen,
    Burned,
    KO,
    Poisoned
}



// Fonction avec typage pour le return de function avec param optionnel
function startBattle(b1: Pokemon, b2:Pokemon, b3?:Pokemon): number {
    return 2
}


// Déclaration f'une interface avec une fonction qui peut être surcharger si besoin
interface CanRun {
    run(kilometers:number):void;
}

// Utilisation de l'interface
class Pony implements CanRun {
    run(kilometers: number): void {
        console.log(`je cours ${kilometers}`)
    }
}

```

## Point info: 
 - TS est un superset de JS, tous les programmes JS sont des programmes TS
    mais pas l'inverse
 - TS ajoute un système de type, utile pour detecter du code qui entrainera
    des erreurs 


```
Tsc vous permet de config un fichier config avec le tsconfig.json
tsc convertit le ts/js nouvelle génération en js compatible avec les navigateurs

"noImplicitAny"  Ne peux pas déclarer de type any
"strictNullChecks"  Ne peux pas affecter null a une variable qui n'es pas de type null
```


Les modules: regroupe des fonctionnalite commune , un ensemble de component, de template, de fonctions
Les components: sont la vue et la logique 




## Introduction Angular :

Création d'une application:

> ng new <name>

Choisir si le projet à besoin d'un routing
Choisir CSS / SCSS

Fichier config: angular.json
Fichier d'entrer: main.ts
Page d'accueil app/app.component.html

### Components: 
    
#### Commandes: 

Pour créer un component: 

> ng generate component <name>

Les composant sont auto-import via leur selector présent dans le 
décorateur , vous pouvez aussi déclarer ce que vous voulez dans la classe du composant 

#### Structure:
4 fichier lors de la création d'un components
<ul>
    <li>Le fichier css</li>
    <li>Le template html</li>
    <li>le fichier typescript</li>
    <li>le fichier spec typesript pour les test</li>
</ul>




```html

Evenement de click sur une div
<div (click)="displayPokemon()"> directive click</div>

Boucle
<p *ngFor="let pokemon of pokemons">{{ pokemon }}</p>

Condition 
<p *ngIf="pokemons.lenght >= 3">{{ pokemon }}</p>

Déclaration de variable dans le template en lui même
<p #inputData> déclaration de la variable inputData</p>

Utilisation de inputData dans le template directement
<input (click)="inputData.focus()" type="text"/>

ajouter / supprimer du style dynamiquement, (myColor peut être une varaible du script
<div {ngStyle}="{color: myColor}"></div>

ajouter / supprimer des classes dynamiquement
<div {ngStyle}="{color: myColor}"></div>


<div [class.myClasse]="myBooleanFunction()"></div>

```


resumer:
<ul>
<li>{{ }} affiche le contenu</li>
<li>ng pour les directive</li>
<li>[] pour le binding de propriete</li>
<li># création de variable local</li>
<li>() gestion d'event</li>
</ul>


### Pipe

Les pipes nous prmettent de formater du texte de facon simple, ils foncitonnent comme
des fonctiones en prenant en input la variable passer au template

La synthaxe est l'expression suivi de ` | ` tel que `{{ <expression> | <function> }}`


```ts
export class NomPipe implements PipeTransform {
    transform(value: string, ...args: unknown[]): unknown {
        return null
    }
}
```

## Observable 

Le param de l'observable est ce qui est call quand on se subscribe

La valeur de observer.next est return dans le val du subscribe

je console log la val
```ts
let title$ = new Observable(observer=> {
  console.log('a')
  observer.next(3)
});


title$.subscribe((val) => {
  console.log(val)
})
```

## onChange
```ts
function ngOnChange(changes: SimpleChanges): void {
    const product = changes['product']
    
    
}
```
