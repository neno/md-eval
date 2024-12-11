import { ReactNode } from "react";
import { Payments } from "./_components/payments";

export default function BlahLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <div className="col-span-5 bg-red-300 w-full">
        <Payments />
      </div>
      <div className="col-span-3">
        <p>asdölfkjasdlkfj</p>
      </div>
      {/* <div className="col-span-3">{children}</div> */}
    </div>
  );
}
