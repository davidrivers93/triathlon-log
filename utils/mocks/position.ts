import { Position } from "../../models/position";
import { datatype } from "faker/locale/es";

export const createPosition = (): Position => ({
  categoryPosition: datatype.number(100),
  position: datatype.number(100),
  totalCategoryParticipants: datatype.number(100),
  totalParticipants: datatype.number(100),
});
