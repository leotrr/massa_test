
 import { generateEvent, Args, Storage, toBytes, print} from '@massalabs/massa-as-sdk';

// // This is my SC


 
 export function Increment(count : u32):u32 {
   count=count+1;
   return count;
  }

  export function TriggerValue(_args : StaticArray<u8>): StaticArray<u8> {
   let args= new Args(_args);
   let a = args.nextU32();
   let result=Increment(a);
   //let counter=new Args();
  //counter.add(result);
   //Storage.set(toBytes("counter"), counter.serialize());
   //Storage.set(toBytes("Counter"),result);

   generateEvent(
     `Counter :${result}`,
   );
   return new Args().add(result).serialize();
  }

  







 