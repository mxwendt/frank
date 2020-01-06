export enum Type {
  ELEMENT = 'Element',
  CLASS = 'Class',
  ID = 'ID',
  UNIVERSAL = 'Universal',
  ATTRIBUTE = 'Attribute'
}

export interface Node {
  id: string;
  selector: string;
  type: Type;
  level: number;
  declarations: {
    fonts: {
      fontFamily: string; // id of font family entity
      fontSize: string; // id of font size entity
      fontStyle: string; // id of font style entity
      fontVariant: string; // id of font variant entity
      fontWeight: string; // id of font weight entity
      lineHeight: string; // id of line height entity
    },
    text: {
      letterSpacing: string;  // id of line height entity
      textAlign: string;  // id of line height entity
    }
  }
}
