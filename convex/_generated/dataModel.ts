// AUTO-GENERATED STUB — run `npx convex dev` to generate real types
import type { GenericDataModel, GenericTableInfo } from 'convex/server'
import type { Infer } from 'convex/values'
import type { GenericId } from 'convex/values'

export type DataModel = GenericDataModel

export type Id<TableName extends string> = GenericId<TableName>

export type Doc<TableName extends string> = TableName extends keyof DataModel
  ? Infer<DataModel[TableName]['validator']>
  : never
