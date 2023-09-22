import { ModeAcquisition } from "../enum/modeAcquisition"
import { Equipement } from "./equipement"

export interface Acquisition {
    acquisitionId : number
    dateAcquisition : Date
    modeAcquisition :ModeAcquisition
    equipements : Equipement[]
}
