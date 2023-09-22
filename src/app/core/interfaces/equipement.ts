import { Acquisition } from "./acquisition"
import { Prevision } from "./prevision"

export interface Equipement {
    id : number
    libelle : string
    coutUnitaire : number
    acquisition :  Acquisition
    prevision : Prevision
}
