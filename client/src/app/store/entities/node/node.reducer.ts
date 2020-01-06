import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Node, Type } from './node.model';
import * as NodeActions from './node.actions';

export const nodesFeatureKey = 'nodes';

export interface State extends EntityState<Node> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Node> = createEntityAdapter<Node>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  // default values
  ids: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
  entities: {
    '0': {
      id: '0',
      selector: 'body',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '1': {
      id: '1',
      selector: 'article',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '2': {
      id: '2',
      selector: 'footer',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '3': {
      id: '3',
      selector: 'header',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '4': {
      id: '4',
      selector: 'h1',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '5': {
      id: '5',
      selector: 'h2',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '6': {
      id: '6',
      selector: 'h3',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '7': {
      id: '7',
      selector: 'h4',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '8': {
      id: '8',
      selector: 'h5',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '9': {
      id: '9',
      selector: 'h6',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '10': {
      id: '10',
      selector: 'hgroup',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '11': {
      id: '11',
      selector: 'main',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '12': {
      id: '12',
      selector: 'nav',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '13': {
      id: '13',
      selector: 'section',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '14': {
      id: '14',
      selector: 'blockquote',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '15': {
      id: '15',
      selector: 'dir',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '16': {
      id: '16',
      selector: 'div',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '17': {
      id: '17',
      selector: 'dl',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '18': {
      id: '18',
      selector: 'dt',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '19': {
      id: '19',
      selector: 'dd',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '20': {
      id: '20',
      selector: 'figure',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '21': {
      id: '21',
      selector: 'figcaption',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '22': {
      id: '22',
      selector: 'hr',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '23': {
      id: '23',
      selector: 'ol',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '24': {
      id: '24',
      selector: 'li',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '25': {
      id: '25',
      selector: 'p',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '26': {
      id: '26',
      selector: 'pre',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    },
    '27': {
      id: '27',
      selector: 'ul',
      type: Type.ELEMENT,
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        },
        text: {
          letterSpacing: '0',
          textAlign: '0'
        }
      }
    }

  }
  
});

const nodeReducer = createReducer(
  initialState,
  on(NodeActions.addNode,
    (state, action) => adapter.addOne(action.node, state)
  ),
  on(NodeActions.upsertNode,
    (state, action) => adapter.upsertOne(action.node, state)
  ),
  on(NodeActions.addNodes,
    (state, action) => adapter.addMany(action.nodes, state)
  ),
  on(NodeActions.upsertNodes,
    (state, action) => adapter.upsertMany(action.nodes, state)
  ),
  on(NodeActions.updateNode,
    (state, action) => adapter.updateOne(action.node, state)
  ),
  on(NodeActions.updateNodes,
    (state, action) => adapter.updateMany(action.nodes, state)
  ),
  on(NodeActions.deleteNode,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(NodeActions.deleteNodes,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(NodeActions.loadNodes,
    (state, action) => adapter.addAll(action.nodes, state)
  ),
  on(NodeActions.clearNodes,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return nodeReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
