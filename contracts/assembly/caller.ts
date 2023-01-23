import { Address, Args, call } from '@massalabs/massa-as-sdk';

export function main(): i32 {
  const address = new Address(
    'A12hWQw3NZyUPFZtifK4vE72acehZB9V7RttCM4vTssmuTaXRqcE',
  );
  
  call(address, 'TriggerValue', new Args().add(0 as u32), 0);
  return 1;
}
