/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as ContextModule } from "./../grapqhl/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Project: { // root type
    colorHex?: string | null; // String
    id?: string | null; // ID
    name?: string | null; // String
    tasks?: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
  }
  Query: {};
  Tag: { // root type
    colorHex?: string | null; // String
    id?: string | null; // ID
    name?: string | null; // String
    tasks?: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
  }
  Task: { // root type
    assignedToUser?: NexusGenRootTypes['User'] | null; // User
    assignedToUserId?: number | null; // Int
    createdByUser?: NexusGenRootTypes['User'] | null; // User
    createdByUserId?: number | null; // Int
    description?: string | null; // String
    id?: string | null; // ID
    project?: NexusGenRootTypes['Project'] | null; // Project
    projectId?: number | null; // Int
    tags?: Array<NexusGenRootTypes['Tag'] | null> | null; // [Tag]
    title?: string | null; // String
  }
  User: { // root type
    assignedTasks?: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
    createdTasks?: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
    id?: string | null; // ID
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createUser: NexusGenRootTypes['User'] | null; // User
  }
  Project: { // field return type
    colorHex: string | null; // String
    id: string | null; // ID
    name: string | null; // String
    tasks: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
  }
  Query: { // field return type
    nexusfoobar: string | null; // String
  }
  Tag: { // field return type
    colorHex: string | null; // String
    id: string | null; // ID
    name: string | null; // String
    tasks: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
  }
  Task: { // field return type
    assignedToUser: NexusGenRootTypes['User'] | null; // User
    assignedToUserId: number | null; // Int
    createdByUser: NexusGenRootTypes['User'] | null; // User
    createdByUserId: number | null; // Int
    description: string | null; // String
    id: string | null; // ID
    project: NexusGenRootTypes['Project'] | null; // Project
    projectId: number | null; // Int
    tags: Array<NexusGenRootTypes['Tag'] | null> | null; // [Tag]
    title: string | null; // String
  }
  User: { // field return type
    assignedTasks: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
    createdTasks: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
    id: string | null; // ID
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createUser: 'User'
  }
  Project: { // field return type name
    colorHex: 'String'
    id: 'ID'
    name: 'String'
    tasks: 'Task'
  }
  Query: { // field return type name
    nexusfoobar: 'String'
  }
  Tag: { // field return type name
    colorHex: 'String'
    id: 'ID'
    name: 'String'
    tasks: 'Task'
  }
  Task: { // field return type name
    assignedToUser: 'User'
    assignedToUserId: 'Int'
    createdByUser: 'User'
    createdByUserId: 'Int'
    description: 'String'
    id: 'ID'
    project: 'Project'
    projectId: 'Int'
    tags: 'Tag'
    title: 'String'
  }
  User: { // field return type name
    assignedTasks: 'Task'
    createdTasks: 'Task'
    id: 'ID'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      name: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: ContextModule;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}