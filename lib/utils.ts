import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export type TransactionType = {
  _account: string,
    _plan?: string,
    type: 'DEPOSIT'|'WITHDRAW'|'SUBSCRIBE'|'OTHER',
    plan?: "SILVER" | "GOLD" | "BASIC" | "DIAMOND",
    amount: Number,
    date: Date,
    message?: string,
    status?: 'PENDING'|'COMPLETED'|'ERROR',
    isActive?: Boolean,
}