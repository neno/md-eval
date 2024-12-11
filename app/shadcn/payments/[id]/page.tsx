export default async function ShowPaymentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <div>This is the ShowPaymentPage ID: ${id}</div>;
}
