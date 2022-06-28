import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Type of object to contact the company. */
export type Contact = {
  __typename?: 'Contact';
  /** Contact age */
  age?: Maybe<Scalars['String']>;
  /** Contact company */
  company?: Maybe<Scalars['String']>;
  /** Creation date in the app */
  creationDate: Scalars['String'];
  /** Contact email */
  email: Scalars['String'];
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Contact message */
  message?: Maybe<Scalars['String']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone?: Maybe<Scalars['String']>;
  /** Contact status */
  status: Scalars['Boolean'];
  /** Purpose of contact */
  type: Purpose;
  /** Contact work position */
  workPosition?: Maybe<WorkPosition>;
};

/** Contact input for vacancies or sales */
export type ContactInput = {
  /** Contact age */
  age?: InputMaybe<Scalars['String']>;
  /** Contact company */
  company?: InputMaybe<Scalars['String']>;
  /** Contact email */
  email: Scalars['String'];
  /** Unique identifier */
  id?: InputMaybe<Scalars['ID']>;
  /** Contact message */
  message?: InputMaybe<Scalars['String']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone?: InputMaybe<Scalars['String']>;
  /** Contact status */
  status?: InputMaybe<Scalars['Boolean']>;
  /** Purpose of contact */
  type: Purpose;
  /** Contact work position */
  workPosition?: InputMaybe<WorkPosition>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** New contact */
  addContact?: Maybe<ResultContact>;
  /** New permission */
  addPermission?: Maybe<ResultPermission>;
  /** New vacant */
  addVacant?: Maybe<ResultVacant>;
  /** Delete permission */
  deletePermission?: Maybe<ResultPermission>;
  /** Delete user */
  deleteUser?: Maybe<ResultUser>;
  /** Login user */
  login?: Maybe<ResultLogin>;
  /** register users */
  register?: Maybe<ResultUser>;
  /** Update permission */
  updatePermission?: Maybe<ResultPermission>;
  /** Update user */
  updateUser?: Maybe<ResultUser>;
};


export type MutationAddContactArgs = {
  contact: ContactInput;
};


export type MutationAddPermissionArgs = {
  permission: PermissionInput;
};


export type MutationAddVacantArgs = {
  vacant: VacantInput;
};


export type MutationDeletePermissionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  user: UserInput;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  permission: PermissionInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user: UserInput;
};

/** Type of object to make permission requests. */
export type Permission = {
  __typename?: 'Permission';
  /** Permit authorization */
  authorization: Scalars['Boolean'];
  /** Creation date in the app */
  creationDate: Scalars['String'];
  /** From what time */
  from: Scalars['String'];
  /** Unique identifier */
  id: Scalars['ID'];
  /** Reason for permission */
  reason: Scalars['String'];
  /** Until what time? */
  to: Scalars['String'];
  /** Permit type */
  type: TypePermission;
  /** Requesting user */
  user: Scalars['ID'];
};

/** Input for the registration of user data */
export type PermissionInput = {
  /** Permit authorization */
  authorization?: InputMaybe<Scalars['Boolean']>;
  /** From what time */
  from: Scalars['String'];
  /** Unique identifier */
  id?: InputMaybe<Scalars['ID']>;
  /** Reason for permission */
  reason: Scalars['String'];
  /** Until what time? */
  to: Scalars['String'];
  /** Permit type */
  type: TypePermission;
  /** Requesting user */
  user?: InputMaybe<Scalars['ID']>;
};

/** Purpose of contact */
export enum Purpose {
  Rrhh = 'RRHH',
  Sales = 'SALES'
}

export type Query = {
  __typename?: 'Query';
  /** Show item contact */
  contact?: Maybe<ResultContact>;
  /** Show list of contacts */
  contacts?: Maybe<ResultContacts>;
  /** Token Authentication */
  me?: Maybe<ResultUser>;
  /** Show item permission */
  permission?: Maybe<ResultPermission>;
  /** Show list of permissions */
  permissions?: Maybe<ResultPermissions>;
  /** List of registered users */
  users?: Maybe<ResultUsers>;
  /** Show item vacant */
  vacant?: Maybe<ResultVacant>;
  /** Show list of vacants */
  vacants?: Maybe<ResultVacants>;
};


export type QueryContactArgs = {
  id: Scalars['ID'];
};


export type QueryContactsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryVacantArgs = {
  id: Scalars['ID'];
};


export type QueryVacantsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** Interface to specify the required properties in the response */
export type Result = {
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultContact = Result & {
  __typename?: 'ResultContact';
  /** Contact */
  contact?: Maybe<Contact>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultContacts = Result & {
  __typename?: 'ResultContacts';
  /** List of contacts */
  contacts?: Maybe<Array<Contact>>;
  /** Paging system information */
  info?: Maybe<ResultInfo>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultInfo = {
  __typename?: 'ResultInfo';
  /** Number of documents per page */
  itemsPage: Scalars['Int'];
  /** Selected page */
  page: Scalars['Int'];
  /** Pages containing the result */
  pages: Scalars['Int'];
  /** Total number of documents corresponding to the collection */
  total: Scalars['Int'];
};

export type ResultLogin = Result & {
  __typename?: 'ResultLogin';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Logged user token information */
  token?: Maybe<Scalars['String']>;
};

export type ResultPermission = Result & {
  __typename?: 'ResultPermission';
  /** Operation message */
  message: Scalars['String'];
  /** Permission */
  permission?: Maybe<Permission>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultPermissions = Result & {
  __typename?: 'ResultPermissions';
  /** Paging system information */
  info?: Maybe<ResultInfo>;
  /** Operation message */
  message: Scalars['String'];
  /** List of permissions */
  permissions?: Maybe<Array<Permission>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultUser = Result & {
  __typename?: 'ResultUser';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of registered users */
  user?: Maybe<User>;
};

export type ResultUsers = Result & {
  __typename?: 'ResultUsers';
  /** Paging system information */
  info?: Maybe<ResultInfo>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of registered users */
  users: Array<User>;
};

export type ResultVacant = Result & {
  __typename?: 'ResultVacant';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Vacant */
  vacant?: Maybe<Vacant>;
};

export type ResultVacants = Result & {
  __typename?: 'ResultVacants';
  /** Paging system information */
  info?: Maybe<ResultInfo>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of Vacants */
  vacants?: Maybe<Array<Vacant>>;
};

/** User types */
export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

/** Permission types */
export enum TypePermission {
  Ausencia = 'AUSENCIA',
  CambioTurno = 'CAMBIO_TURNO',
  Falta = 'FALTA',
  LlegarTarde = 'LLEGAR_TARDE',
  Retirarse = 'RETIRARSE'
}

/**
 * User details.
 * Dates in ISO format.
 */
export type User = {
  __typename?: 'User';
  /** User information */
  birthday: Scalars['String'];
  /** Creation date in the app */
  creationDate: Scalars['String'];
  /** Account data */
  email: Scalars['String'];
  /** Unique identifier */
  id: Scalars['ID'];
  /** Last user session */
  lastSession: Scalars['String'];
  lastname: Scalars['String'];
  /** Username */
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  /** User permissions */
  role: Role;
};

/** Input for the registration of user data */
export type UserInput = {
  /** User information */
  birthday: Scalars['String'];
  /** Account data */
  email: Scalars['String'];
  /** Unique identifier */
  id?: InputMaybe<Scalars['ID']>;
  lastname: Scalars['String'];
  /** Username */
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** User permissions */
  role?: InputMaybe<Role>;
};

/** Type of object to vacants. */
export type Vacant = {
  __typename?: 'Vacant';
  /** Vacant available */
  available: Scalars['Boolean'];
  /** Creation date in the app */
  creationDate: Scalars['String'];
  /** Vacant name */
  description: Scalars['String'];
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Vacant status */
  status: Scalars['Boolean'];
  /** Vacant name */
  title: Scalars['String'];
};

/** Vacant input */
export type VacantInput = {
  /** Vacant available */
  available?: InputMaybe<Scalars['Boolean']>;
  /** Vacant description */
  description: Scalars['String'];
  /** Unique identifier */
  id?: InputMaybe<Scalars['ID']>;
  /** Vacant status */
  status?: InputMaybe<Scalars['Boolean']>;
  /** Vacant title */
  title: Scalars['String'];
};

/** Purpose of contact */
export enum WorkPosition {
  Compras = 'COMPRAS',
  Desarrollador = 'DESARROLLADOR',
  Gerente = 'GERENTE',
  Mercadotecnia = 'MERCADOTECNIA',
  Otros = 'OTROS',
  RecursosHumanos = 'RECURSOS_HUMANOS',
  Sistemas = 'SISTEMAS',
  Ventas = 'VENTAS'
}

export type ContactFragment = { __typename?: 'Contact', id?: string | null, type: Purpose, name: string, email: string, phone?: string | null, age?: string | null, company?: string | null, workPosition?: WorkPosition | null, message?: string | null, status: boolean };

export type VacantFragment = { __typename?: 'Vacant', id?: string | null, title: string, description: string, status: boolean, available: boolean, creationDate: string };

export type AddContactMutationVariables = Exact<{
  contact: ContactInput;
}>;


export type AddContactMutation = { __typename?: 'Mutation', addContact?: { __typename?: 'ResultContact', status: boolean, message: string, contact?: { __typename?: 'Contact', id?: string | null, type: Purpose, name: string, email: string, phone?: string | null, age?: string | null, company?: string | null, workPosition?: WorkPosition | null, message?: string | null, status: boolean } | null } | null };

export type GetContactQueryVariables = Exact<{
  contactId: Scalars['ID'];
}>;


export type GetContactQuery = { __typename?: 'Query', contact?: { __typename?: 'ResultContact', status: boolean, message: string, contact?: { __typename?: 'Contact', id?: string | null, type: Purpose, name: string, email: string, phone?: string | null, age?: string | null, company?: string | null, workPosition?: WorkPosition | null, message?: string | null, status: boolean } | null } | null };

export type GetContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactsQuery = { __typename?: 'Query', contacts?: { __typename?: 'ResultContacts', status: boolean, message: string, contacts?: Array<{ __typename?: 'Contact', id?: string | null, type: Purpose, name: string, email: string, phone?: string | null, age?: string | null, company?: string | null, workPosition?: WorkPosition | null, message?: string | null, status: boolean }> | null } | null };

export type GetVacantQueryVariables = Exact<{
  vacantId: Scalars['ID'];
}>;


export type GetVacantQuery = { __typename?: 'Query', vacant?: { __typename?: 'ResultVacant', status: boolean, message: string, vacant?: { __typename?: 'Vacant', id?: string | null, title: string, description: string, status: boolean, available: boolean, creationDate: string } | null } | null };

export type GetVacantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVacantsQuery = { __typename?: 'Query', vacants?: { __typename?: 'ResultVacants', status: boolean, message: string, vacants?: Array<{ __typename?: 'Vacant', id?: string | null, title: string, description: string, status: boolean, available: boolean, creationDate: string }> | null } | null };

export const ContactFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Contact"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contact"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"workPosition"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<ContactFragment, unknown>;
export const VacantFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Vacant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vacant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"available"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}}]} as unknown as DocumentNode<VacantFragment, unknown>;
export const AddContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contact"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContactInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contact"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Contact"}}]}}]}}]}},...ContactFragmentDoc.definitions]} as unknown as DocumentNode<AddContactMutation, AddContactMutationVariables>;
export const GetContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contactId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Contact"}}]}}]}}]}},...ContactFragmentDoc.definitions]} as unknown as DocumentNode<GetContactQuery, GetContactQueryVariables>;
export const GetContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Contact"}}]}}]}}]}},...ContactFragmentDoc.definitions]} as unknown as DocumentNode<GetContactsQuery, GetContactsQueryVariables>;
export const GetVacantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVacant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vacantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vacant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vacantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vacant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Vacant"}}]}}]}}]}},...VacantFragmentDoc.definitions]} as unknown as DocumentNode<GetVacantQuery, GetVacantQueryVariables>;
export const GetVacantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVacants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vacants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vacants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Vacant"}}]}}]}}]}},...VacantFragmentDoc.definitions]} as unknown as DocumentNode<GetVacantsQuery, GetVacantsQueryVariables>;