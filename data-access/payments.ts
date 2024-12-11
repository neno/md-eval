import "server-only";

import { randomUUID } from "crypto";
import { InsertPayment, Payment } from "~/types/payment";
import { sleep } from "~/lib/utils";

const initialData: Payment[] = [
  {
    id: "a871cb79-4517-44c2-8264-26d07b36c94d",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "2bdd7c8c-09ab-4ef5-b318-2a8dfe221484",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "fc2b948e-22bf-4694-91a2-ce20c083e223",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "3c28847b-c819-412f-9d73-153fd70a52c3",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "91e82550-5f64-4bd7-8ad1-09451668c174",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

const defaultSec = 1;

const paymentsMap = new Map<string, Payment>();
initialData.map((payment) => {
  paymentsMap.set(payment.id, payment);
});

export async function getPayments(sec?: number): Promise<Payment[]> {
  await sleep(sec ?? defaultSec);
  return Array.from(paymentsMap.values());
}

export async function getPaymentById(
  id: string,
  sec?: number
): Promise<Payment | undefined> {
  await sleep(sec ?? defaultSec);
  const payment = paymentsMap.get(id);
  return payment;
}

export async function addPayment(
  payment: InsertPayment,
  sec?: number
): Promise<{ id: string }> {
  await sleep(sec ?? defaultSec);
  const id = randomUUID();
  paymentsMap.set(id, { ...payment, id });
  return { id };
}

export async function updatePayment(
  id: string,
  paymentData: InsertPayment | Payment,
  sec?: number
): Promise<Payment> {
  await sleep(sec ?? defaultSec);
  const updatedPayment = { ...paymentData, id };
  paymentsMap.set(id, updatedPayment);
  return updatedPayment;
}

export async function deletePayment(
  id: string,
  sec?: number
): Promise<{ id: string }> {
  await sleep(sec ?? defaultSec);
  paymentsMap.delete(id);
  return { id };
}
