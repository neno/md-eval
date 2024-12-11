import { getPayments } from "~/data-access/payments";
import { PaymentsTable } from "./payments-table";

export async function Payments() {
  const data = await getPayments();
  return (
    <div className="w-full relative">
      <PaymentsTable data={data} />
    </div>
  );
}
