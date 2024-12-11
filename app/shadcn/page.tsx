import { getPayments } from "~/data-access/payments";
import { PaymentsTable } from "./_components/payments-table";

export default async function PageWithShadcn() {
  const data = await getPayments();
  return (
    <div className="grid gap-8">
      <h1 className="sr-only">Example using Shadcn</h1>
      <div className="grid grid-cols-8 gap-16">
        <div className="col-span-5">
          <PaymentsTable data={data} />
        </div>
        <div className="col-span-3">FORM</div>
      </div>
    </div>
  );
}
