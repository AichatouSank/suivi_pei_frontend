import { Equipement } from "./equipement"
import { Structure } from "./structure"

export interface Prevision {
    id : number
    anneBudgetaire : number
    structure : Structure
    equipements : Equipement[]
}
