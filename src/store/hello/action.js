import * as Types from './type';

export function change(value) {
    return {
        type: Types.CHANGE_NAME,
        value,
    };
  }