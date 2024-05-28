import { Fullwidth } from "../../objects/facets/Fullwidth";

export interface TableProps extends Fullwidth {
  children: React.ReactNode;
  bordered?: boolean;
  comparative?: boolean;
  className?: string;
  striped?: boolean;
  compact?: boolean;
}
