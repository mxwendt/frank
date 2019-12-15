import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseElements } from './base-elements.model';
import * as BaseElementsActions from './base-elements.actions';

export const baseElementsesFeatureKey = 'baseElementses';

export interface State extends EntityState<BaseElements> {
  // additional entities state properties
}

export const adapter: EntityAdapter<BaseElements> = createEntityAdapter<BaseElements>();

export const initialState: State = adapter.getInitialState({

  // additional entity state properties

  // default values
  ids: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
  entities: {
    '0': {
      id: '0',
      selector: 'body',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '1': {
      id: '1',
      selector: 'article',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '2': {
      id: '2',
      selector: 'footer',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '3': {
      id: '3',
      selector: 'header',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '4': {
      id: '4',
      selector: 'h1',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '5': {
      id: '5',
      selector: 'h2',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '6': {
      id: '6',
      selector: 'h3',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '7': {
      id: '7',
      selector: 'h4',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '8': {
      id: '8',
      selector: 'h5',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '9': {
      id: '9',
      selector: 'h6',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '10': {
      id: '10',
      selector: 'hgroup',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '11': {
      id: '11',
      selector: 'main',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '12': {
      id: '12',
      selector: 'nav',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '13': {
      id: '13',
      selector: 'section',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '14': {
      id: '14',
      selector: 'blockquote',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '15': {
      id: '15',
      selector: 'dir',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '16': {
      id: '16',
      selector: 'div',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '17': {
      id: '17',
      selector: 'dl',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '18': {
      id: '18',
      selector: 'dt',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '19': {
      id: '19',
      selector: 'dd',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '20': {
      id: '20',
      selector: 'figure',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '21': {
      id: '21',
      selector: 'figcaption',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '22': {
      id: '22',
      selector: 'hr',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '23': {
      id: '23',
      selector: 'ol',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '24': {
      id: '24',
      selector: 'li',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '25': {
      id: '25',
      selector: 'p',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '26': {
      id: '26',
      selector: 'pre',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '27': {
      id: '27',
      selector: 'ul',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '28': {
      id: '28',
      selector: 'li',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    }

  }

});

const baseElementsReducer = createReducer(
  initialState,
  on(BaseElementsActions.addBaseElements,
    (state, action) => adapter.addOne(action.baseElements, state)
  ),
  on(BaseElementsActions.upsertBaseElements,
    (state, action) => adapter.upsertOne(action.baseElements, state)
  ),
  on(BaseElementsActions.addBaseElementss,
    (state, action) => adapter.addMany(action.baseElementss, state)
  ),
  on(BaseElementsActions.upsertBaseElementss,
    (state, action) => adapter.upsertMany(action.baseElementss, state)
  ),
  on(BaseElementsActions.updateBaseElements,
    (state, action) => adapter.updateOne(action.baseElements, state)
  ),
  on(BaseElementsActions.updateBaseElementss,
    (state, action) => adapter.updateMany(action.baseElementss, state)
  ),
  on(BaseElementsActions.deleteBaseElements,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BaseElementsActions.deleteBaseElementss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BaseElementsActions.loadBaseElementss,
    (state, action) => adapter.addAll(action.baseElementss, state)
  ),
  on(BaseElementsActions.clearBaseElementss,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return baseElementsReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
