import {IPalette} from "@nitro/renderer";

import {GetAvatarRenderManager} from "./GetAvatarRenderManager";

export function GetAvatarPalette(paletteId: number): IPalette {
  return GetAvatarRenderManager().structureData.getPalette(paletteId);
}
