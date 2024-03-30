




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
  _id?: String
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password?: String,
    phoneNumber?: String,
    country?: String,
    state?: String,
    linkedIn?: String,
    facebook?: String,
    instagram?: String,
    lastLoggedIn?: String,
    birthDate?: String,
    _account?: string,
    userType?: 'USER'| "ADMIN",
}

export interface AccountInterface {
  _id?: String,
  _user: string,
  balance: Number,
  tradeBalance: Number,
  bonus: Number,
  plan: string,
  referrals?: String[],
  referralBonus?: Number,
  lastGain?: Number,
  transactions?: string[],
  type?: 'BASIC'|'PREMIUM'|'LEGEND',
}