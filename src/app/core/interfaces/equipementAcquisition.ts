import { Acquisition } from "./acquisition"
import { Equipement } from "./equipement"

export interface EquipementAcquisition {
    id : number
    equipement : Equipement
    acquisition : Acquisition
    coutReel : number
    quantite : number
    code : string
    numeroSerie : string
    numeroMatricule : string
    dateMiseEnService : Date
}
