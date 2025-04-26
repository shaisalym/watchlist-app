import { useState } from 'react';

const IS_FIRST_TIME = 'IS_FIRST_TIME';

export const useIsFirstTime = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  return [isFirstTime, setIsFirstTime] as const;
};
