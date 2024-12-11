import { z } from "zod";

export const paymentStatus = z.enum([
  "pending",
  "processing",
  "success",
  "failed",
]);

export const payment = z.object({
  id: z.string().uuid(),
  amount: z.number(),
  status: paymentStatus,
  email: z.string().email(),
});

export type Payment = z.infer<typeof payment>;

export const insertPayment = payment.omit({ id: true });
export type InsertPayment = z.infer<typeof insertPayment>;
