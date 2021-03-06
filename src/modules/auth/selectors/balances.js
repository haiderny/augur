import { isZero } from 'utils/math';

export const anyAccountBalancesZero = balances => (
  (balances.ethTokens !== undefined && isZero(balances.ethTokens)) ||
  (balances.eth !== undefined && isZero(balances.eth)) ||
  (balances.rep !== undefined && isZero(balances.rep))
);

export const allAccountBalancesZero = balances => (
  (balances.ethTokens !== undefined && isZero(balances.ethTokens)) &&
  (balances.eth !== undefined && isZero(balances.eth)) &&
  (balances.rep !== undefined && isZero(balances.rep))
);

export const allAssetsLoaded = assets => (
    assets.ethTokens !== undefined && assets.eth !== undefined && assets.rep !== undefined
);
