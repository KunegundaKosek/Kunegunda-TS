interface Units {
      type: string[];
}

export interface ObjWithUnits {
      [key: string]: Units;
}

export interface Unit {
      name: string;
}