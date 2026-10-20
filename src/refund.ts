export const REFUND_WINDOW_DAYS = 14;
export type RefundStatus = 'requested' | 'approved' | 'paid';
export const PLAN_LIMITS = { free: { monitors: 5, retentionDays: 30 }, pro: { monitors: 100, retentionDays: 365 } };
