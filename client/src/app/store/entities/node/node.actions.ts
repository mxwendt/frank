import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Node } from './node.model';

export const loadNodes = createAction(
  '[Node/API] Load Nodes', 
  props<{ nodes: Node[] }>()
);

export const addNode = createAction(
  '[Node/API] Add Node',
  props<{ node: Node }>()
);

export const upsertNode = createAction(
  '[Node/API] Upsert Node',
  props<{ node: Node }>()
);

export const addNodes = createAction(
  '[Node/API] Add Nodes',
  props<{ nodes: Node[] }>()
);

export const upsertNodes = createAction(
  '[Node/API] Upsert Nodes',
  props<{ nodes: Node[] }>()
);

export const updateNode = createAction(
  '[Node/API] Update Node',
  props<{ node: Update<Node> }>()
);

export const updateNodes = createAction(
  '[Node/API] Update Nodes',
  props<{ nodes: Update<Node>[] }>()
);

export const deleteNode = createAction(
  '[Node/API] Delete Node',
  props<{ id: string }>()
);

export const deleteNodes = createAction(
  '[Node/API] Delete Nodes',
  props<{ ids: string[] }>()
);

export const clearNodes = createAction(
  '[Node/API] Clear Nodes'
);
