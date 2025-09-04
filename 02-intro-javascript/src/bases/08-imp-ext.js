// import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

export const getHeroesById = (id) => {
    return heroes.find((element) => element.id === id);
}

//console.log(getHeroesById(2));

export const getHeoesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeoesByOwner('DC'));

//console.log(owners);
