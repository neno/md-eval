export default async function EditPaymentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <div>This is the EditPaymentPage ID: ${id}</div>;
}
