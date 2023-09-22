import { Equipement } from "./equipement"

export interface Obsolescence {
    id : number
    dureeExploitation : Date
    equipement : Equipement
}
