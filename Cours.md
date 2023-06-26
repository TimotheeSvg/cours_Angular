## Introduction: Typescript

Commandes : 
```
Powershell: Set-ExecutionPolicy 'unrestricted'

npm install -g typescript
npm install -g @angular/cli

```

Déclaration de variable : 

```ts

//déclaration typé:
const unSuperNombre: number = 42;

// création d'un type
type Pokemon = {
    name: String,
    type: String,
    id: Number
}

// utilisation d'un type générique
const pokemons: Array<Pokemon> = [{name: 'premier', type:'feu', id: 1}]

// type any
let doNotdoThis: any = "je suis n'importe quoi"
doNotdoThis = 12

// multiple type
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



// typage return de function avec param optionnel

function startBattle(b1: Pokemon, b2:Pokemon, b3?:Pokemon): number {
    return 2
}


interface CanRun {
    run(kilometers:number):void;
}

class Pony implements CanRun {
    run(kilometers: number): void {
        console.log(`je cours ${kilometers}`)
    }
}

```

Point info: 
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

