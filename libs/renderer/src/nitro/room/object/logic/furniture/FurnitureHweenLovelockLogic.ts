import {FriendFurniEngravingWidgetType} from "../../../../../api";
import {FurnitureFriendFurniLogic} from "./FurnitureFriendFurniLogic";

export class FurnitureHweenLovelockLogic extends FurnitureFriendFurniLogic {
  public override get engravingDialogType(): number {
    return FriendFurniEngravingWidgetType.HABBOWEEN;
  }
}
