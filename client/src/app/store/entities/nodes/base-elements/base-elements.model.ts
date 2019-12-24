export interface BaseElements {
  id: string;
  selector: string;
  parentNode: string; // id of node entiry
  childNodes: string[]; // ids of node entities
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
