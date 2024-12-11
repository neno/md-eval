import { getPayments } from "~/data-access/payments";

export default async function PageWithShadcn() {
  return (
    <div>
      <h1>Example using Shadcn</h1>
      <div className="grid grid-cols-8 gap-16">
        <div className="col-span-5">TABLE</div>
        <div className="col-span-3">FORM</div>
      </div>
    </div>
  );
}
