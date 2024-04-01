




export const initialState = { user: {}, account: {} };

export function reducer(state:any, action:any) {
    switch (action.type) {
      case 'change':
        return { ...state, ...action.payload };
      case 'decrement':
        return { ...state, ...action.payload };
      case 'reset':
        return initialState;
      default:
        throw new Error('Unknown action type');
    }
  }

export interface UserInterface {
  _id?: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password?: string,
    phoneNumber?: string,
    country?: string,
    state?: string,
    linkedIn?: string,
    facebook?: string,
    instagram?: string,
    lastLoggedIn?: string,
    birthDate?: string,
    _account?: string,
    userType?: 'USER'| "ADMIN",
}

export interface AccountInterface {
  _id?: string,
  _user: string,
  balance: Number,
  tradeBalance: Number,
  bonus: Number,
  plan: string,
  referrals?: string[],
  referralBonus?: Number,
  lastGain?: Number,
  transactions?: string[],
  type?: 'BASIC'|'PREMIUM'|'LEGEND',
}