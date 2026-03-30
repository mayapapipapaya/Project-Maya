import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const list = query({
  args: {},
  handler: async (ctx) =>
    await ctx.db.query('items').order('desc').take(20),
})

export const create = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert('items', { name: args.name, createdAt: Date.now() })
  },
})
