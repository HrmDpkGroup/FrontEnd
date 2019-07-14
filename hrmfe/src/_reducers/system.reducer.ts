import { adminConstants } from '../_constants';

export function system(state = {}, action:any) {
    
  switch (action.type) {
      case adminConstants.ADD_SYSTEM_REQUEST:
          return {system: null, systemData: null };
      case adminConstants.ADD_SYSTEM_SUCCESS:
          return { system: true, systemData: action.Data };
    case adminConstants.ADD_SYSTEM_FAILURE:
          return { system: false, systemData: null};
    default:
      return state
  }
}