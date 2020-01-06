export interface AbbreviationNode {
  selector: string; // id of a selector entity
  level: number;
  children: AbbreviationNode[];
}

export interface Abbreviation {
  id: string;
  root: AbbreviationNode;
}
