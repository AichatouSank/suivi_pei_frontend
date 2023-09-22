import { Prevision } from "./prevision"
import { Region } from "./region"

export interface Structure {
    id : number
    libelleCourt : string
    libelleLong : string
    regions : Region[]
    previsions: Prevision[]
}
