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

export type AddressNumber = {
  __typename?: 'AddressNumber';
  exterior?: Maybe<Scalars['String']>;
  interior?: Maybe<Scalars['String']>;
};

export type AddressNumberInput = {
  exterior: Scalars['String'];
  interior?: InputMaybe<Scalars['String']>;
};

export type AddressStreets = {
  __typename?: 'AddressStreets';
  a?: Maybe<Scalars['String']>;
  b?: Maybe<Scalars['String']>;
};

export type AddressStreetsInput = {
  a?: InputMaybe<Scalars['String']>;
  b?: InputMaybe<Scalars['String']>;
};

export type ContactPersonalized = {
  __typename?: 'ContactPersonalized';
  /** Contact email */
  email?: Maybe<Scalars['String']>;
  /** Contact name */
  name?: Maybe<Scalars['String']>;
  /** Contact phone */
  phone?: Maybe<Scalars['String']>;
  /** Job position */
  position?: Maybe<Scalars['String']>;
  /** Title of the person */
  title?: Maybe<SupplierPersonalizedTitleEnum>;
};

export type ContactPersonalizedInput = {
  /** Contact email */
  email: Scalars['String'];
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone?: InputMaybe<Scalars['String']>;
  /** Job position */
  position?: InputMaybe<Scalars['String']>;
  /** Title of the person */
  title?: InputMaybe<SupplierPersonalizedTitleEnum>;
};

/** Purpose of contact */
export enum ContactWorkPositionEnum {
  Compras = 'COMPRAS',
  Desarrollador = 'DESARROLLADOR',
  Gerente = 'GERENTE',
  Mercadotecnia = 'MERCADOTECNIA',
  Otros = 'OTROS',
  RecursosHumanos = 'RECURSOS_HUMANOS',
  Sistemas = 'SISTEMAS',
  Ventas = 'VENTAS'
}

export type Details = {
  __typename?: 'Details';
  /** Creation date */
  creationDate?: Maybe<Scalars['String']>;
  creatorUser?: Maybe<User>;
  /** Creator user of item */
  creatorUserId?: Maybe<Scalars['String']>;
  /** Last modification */
  lastModification?: Maybe<Scalars['String']>;
  /** Last modification */
  modifierUserId?: Maybe<User>;
  /** Availability */
  status?: Maybe<Scalars['Boolean']>;
};

export type DetailsInput = {
  /** Creation date of item */
  creationDate?: InputMaybe<Scalars['String']>;
  /** Creator user of item */
  creatorUserId?: InputMaybe<Scalars['String']>;
  /** Last modification */
  modifierUserId?: InputMaybe<Scalars['String']>;
  /** Availability */
  status?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** New contact */
  addContact?: Maybe<RrhhContactResult>;
  /** New job */
  addJob?: Maybe<RrhhJobResult>;
  /** New permission */
  addPermission?: Maybe<RrhhPermissionResult>;
  /** New product */
  addProduct?: Maybe<PurchaseProductResult>;
  /** New requisition */
  addRequisition?: Maybe<PurchaseRequisitionResult>;
  /** New supplier */
  addSupplier?: Maybe<PurchaseSupplierResult>;
  /** New vacant */
  addVacant?: Maybe<RrhhVacantResult>;
  /** Delete permission */
  deletePermission?: Maybe<RrhhPermissionResult>;
  /** Delete user */
  deleteUser?: Maybe<ResultUser>;
  /** Login user */
  login?: Maybe<ResultLogin>;
  /** register users */
  register?: Maybe<ResultUser>;
  /** Update permission */
  updatePermission?: Maybe<RrhhPermissionResult>;
  /** Update user */
  updateUser?: Maybe<ResultUser>;
};


export type MutationAddContactArgs = {
  contact: RrhhContactInput;
};


export type MutationAddJobArgs = {
  job: RrhhJobInput;
};


export type MutationAddPermissionArgs = {
  permission: RrhhPermissionInput;
};


export type MutationAddProductArgs = {
  product: PurchaseProductInput;
};


export type MutationAddRequisitionArgs = {
  requisition: PurchaseRequisitionInput;
};


export type MutationAddSupplierArgs = {
  supplier: PurchaseSupplierInput;
};


export type MutationAddVacantArgs = {
  vacant: RrhhVacantInput;
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
  permission: RrhhPermissionInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user: UserInput;
};

/** Permission types */
export enum PermissionTypePermissionEnum {
  Ausencia = 'AUSENCIA',
  CambioTurno = 'CAMBIO_TURNO',
  Falta = 'FALTA',
  LlegarTarde = 'LLEGAR_TARDE',
  Retirarse = 'RETIRARSE'
}

export type ProductTypeService = {
  __typename?: 'ProductTypeService';
  /** Service description */
  description?: Maybe<Scalars['String']>;
  /** Enum for service type */
  type?: Maybe<ProductTypeServiceEnum>;
};

/** Type of services */
export enum ProductTypeServiceEnum {
  Carga = 'CARGA',
  Financiero = 'FINANCIERO',
  Tecnologico = 'TECNOLOGICO',
  Transporte = 'TRANSPORTE'
}

export type ProductTypeServiceInput = {
  /** Service description */
  description?: InputMaybe<Scalars['String']>;
  /** Enum for service type */
  type?: InputMaybe<ProductTypeServiceEnum>;
};

export type PurchaseProduct = PurchaseProductInterface & {
  __typename?: 'PurchaseProduct';
  /** Auditable product/service */
  audited: Scalars['Boolean'];
  /** Brand */
  brand?: Maybe<Scalars['String']>;
  /** Description of the product/service */
  description?: Maybe<Scalars['String']>;
  /** Item details */
  details: Details;
  id: Scalars['ID'];
  /** Name of the product/service */
  name: Scalars['String'];
  /** Supplier */
  supplierId: PurchaseSupplier;
};

export type PurchaseProductInput = {
  /** Auditable product/service */
  audited: Scalars['Boolean'];
  /** Brand */
  brand?: InputMaybe<Scalars['String']>;
  /** Description of the product/service */
  description?: InputMaybe<Scalars['String']>;
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Name of the product/service */
  name: Scalars['String'];
  /** Supplier */
  supplierId: Scalars['String'];
  /** If it is a service, what type of service */
  typeService?: InputMaybe<ProductTypeServiceInput>;
};

export type PurchaseProductInterface = {
  /** Auditable product/service */
  audited: Scalars['Boolean'];
  /** Brand */
  brand?: Maybe<Scalars['String']>;
  /** Description of the product/service */
  description?: Maybe<Scalars['String']>;
  /** Item creator and modifier details */
  details: Details;
  id: Scalars['ID'];
  /** Name of the product/service */
  name: Scalars['String'];
  /** Supplier */
  supplierId: PurchaseSupplier;
};

export type PurchaseProductResult = Result & {
  __typename?: 'PurchaseProductResult';
  /** Operation message */
  message: Scalars['String'];
  /** Product */
  product?: Maybe<PurchaseProductInterface>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseProductService = PurchaseProductInterface & {
  __typename?: 'PurchaseProductService';
  /** Auditable product/service */
  audited: Scalars['Boolean'];
  /** Brand */
  brand?: Maybe<Scalars['String']>;
  /** Description of the product/service */
  description?: Maybe<Scalars['String']>;
  /** Item details */
  details: Details;
  id: Scalars['ID'];
  /** Name of the product/service */
  name: Scalars['String'];
  /** Supplier */
  supplierId: PurchaseSupplier;
  /** If it is a service, what type of service */
  typeService?: Maybe<ProductTypeService>;
};

export type PurchaseProductsResult = Result & {
  __typename?: 'PurchaseProductsResult';
  /** Operation message */
  message: Scalars['String'];
  /** List of Products */
  products?: Maybe<Array<PurchaseProductInterface>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseRequisition = {
  __typename?: 'PurchaseRequisition';
  /** If it was authorized */
  autorization?: Maybe<Scalars['Boolean']>;
  /** Item creator and modifier details */
  details: Details;
  id: Scalars['ID'];
  /** Product */
  product?: Maybe<Array<Maybe<RequisitionProduct>>>;
  /** Requesting user */
  userId?: Maybe<User>;
};

export type PurchaseRequisitionInput = {
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Product */
  product?: InputMaybe<Array<RequisitionProductInput>>;
  /** Requesting user */
  userId: Scalars['String'];
};

export type PurchaseRequisitionResult = Result & {
  __typename?: 'PurchaseRequisitionResult';
  /** Operation message */
  message: Scalars['String'];
  /** Requisition */
  requisition?: Maybe<PurchaseRequisition>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseRequisitionsResult = Result & {
  __typename?: 'PurchaseRequisitionsResult';
  /** Operation message */
  message: Scalars['String'];
  /** List of Requisitions */
  requisitions?: Maybe<Array<PurchaseRequisition>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseSupplier = {
  __typename?: 'PurchaseSupplier';
  /** Address */
  address?: Maybe<SupplierAddress>;
  /** Classification */
  classification?: Maybe<SupplierClassificationEnum>;
  /** Approximate delivery time */
  deliveryTime?: Maybe<Scalars['Int']>;
  /** Item creator and modifier details */
  details: Details;
  id: Scalars['ID'];
  /** Contact information */
  infoContact?: Maybe<SupplierContact>;
  /** Logo */
  logo?: Maybe<Scalars['String']>;
  /** Supplier name */
  name: Scalars['String'];
  /** Approved */
  passed?: Maybe<Scalars['Boolean']>;
  /** List of your products */
  productId?: Maybe<Array<Maybe<PurchaseProductInterface>>>;
  /** RFC */
  taxes?: Maybe<SupplierTaxes>;
};

export type PurchaseSupplierInput = {
  /** Address */
  address: SupplierAddressInput;
  /** Classification */
  classification: SupplierClassificationEnum;
  /** Approximate delivery time */
  deliveryTime?: InputMaybe<Scalars['Int']>;
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Contact information */
  infoContact: SupplierContactInput;
  /** Logo */
  logo?: InputMaybe<Scalars['String']>;
  /** Supplier name */
  name: Scalars['String'];
  /** Approved */
  passed: Scalars['Boolean'];
  /** RFC */
  taxes: SupplierTaxesInput;
};

export type PurchaseSupplierResult = Result & {
  __typename?: 'PurchaseSupplierResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Supplier */
  supplier?: Maybe<PurchaseSupplier>;
};

export type PurchaseSuppliersResult = Result & {
  __typename?: 'PurchaseSuppliersResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of Suppliers */
  suppliers?: Maybe<Array<PurchaseSupplier>>;
};

export type Query = {
  __typename?: 'Query';
  /** Show item contact */
  contact?: Maybe<RrhhContactResult>;
  /** Show list of contacts */
  contacts?: Maybe<RrhhContactsResult>;
  /** Show item job */
  job?: Maybe<RrhhJobResult>;
  /** Show list of job */
  jobs?: Maybe<RrhhJobsResult>;
  /** Token Authentication */
  me?: Maybe<ResultUser>;
  /** Show item permission */
  permission?: Maybe<RrhhPermissionResult>;
  /** Show list of permissions */
  permissions?: Maybe<RrhhPermissionsResult>;
  /** Show item product */
  product?: Maybe<PurchaseProductResult>;
  /** Show list of products */
  products?: Maybe<PurchaseProductsResult>;
  /** Show item requisition */
  requisition?: Maybe<PurchaseRequisitionResult>;
  /** Show list of suppliers */
  requisitions?: Maybe<PurchaseRequisitionsResult>;
  /** Show item supplier */
  supplier?: Maybe<PurchaseSupplierResult>;
  /** Show list of suppliers */
  suppliers?: Maybe<PurchaseSuppliersResult>;
  /** List of registered users */
  users?: Maybe<ResultUser>;
  /** Show item vacant */
  vacant?: Maybe<RrhhVacantResult>;
  /** Show list of vacants */
  vacants?: Maybe<RrhhVacantsResult>;
};


export type QueryContactArgs = {
  id: Scalars['ID'];
};


export type QueryContactsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryJobArgs = {
  id: Scalars['ID'];
};


export type QueryJobsArgs = {
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


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRequisitionArgs = {
  id: Scalars['ID'];
};


export type QueryRequisitionsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySupplierArgs = {
  id: Scalars['ID'];
};


export type QuerySuppliersArgs = {
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

/** Product Quantity */
export enum RequisitionAmountOfEnum {
  Kg = 'KG',
  Lts = 'LTS',
  Pz = 'PZ'
}

export type RequisitionProduct = {
  __typename?: 'RequisitionProduct';
  /** Quantity */
  number?: Maybe<Scalars['Int']>;
  /** Product */
  productId?: Maybe<PurchaseProduct>;
  /** Quantity type */
  type?: Maybe<RequisitionAmountOfEnum>;
};

export type RequisitionProductInput = {
  /** Quantity */
  number: Scalars['Int'];
  /** Product */
  productId?: InputMaybe<Scalars['String']>;
  /** Quantity type */
  type: RequisitionAmountOfEnum;
};

/** Interface to specify the required properties in the response */
export type Result = {
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

export type ResultUser = Result & {
  __typename?: 'ResultUser';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of registered users */
  users?: Maybe<Array<User>>;
};

/** User types */
export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

/** Interface to specify the required properties in the response */
export type RrhhContact = {
  /** Contact status */
  attended: Scalars['Boolean'];
  creationDate: Scalars['String'];
  /** Contact email */
  email: Scalars['String'];
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
};

/** Contact input for vacancies or sales */
export type RrhhContactInput = {
  /** Contact age */
  age?: InputMaybe<Scalars['String']>;
  /** Contact company */
  company?: InputMaybe<Scalars['String']>;
  /** Contact email */
  email: Scalars['String'];
  /** Contact message */
  message?: InputMaybe<Scalars['String']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
  /** Unique identifier of a vacancy */
  vacantId?: InputMaybe<Scalars['ID']>;
  /** Contact work position */
  workPosition?: InputMaybe<ContactWorkPositionEnum>;
};

export type RrhhContactResult = Result & {
  __typename?: 'RrhhContactResult';
  /** Contact */
  contact?: Maybe<RrhhContact>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

/** Type of object to contact the company. */
export type RrhhContactRrhh = RrhhContact & {
  __typename?: 'RrhhContactRrhh';
  /** Contact age */
  age?: Maybe<Scalars['String']>;
  /** Contact status */
  attended: Scalars['Boolean'];
  creationDate: Scalars['String'];
  /** Contact email */
  email: Scalars['String'];
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
  /** Unique identifier of a vacancy */
  vacantId?: Maybe<RrhhVacant>;
};

export type RrhhContactSales = RrhhContact & {
  __typename?: 'RrhhContactSales';
  /** Contact status */
  attended: Scalars['Boolean'];
  /** Contact company */
  company?: Maybe<Scalars['String']>;
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
  phone: Scalars['String'];
  /** Contact work position */
  workPosition?: Maybe<ContactWorkPositionEnum>;
};

export type RrhhContactsResult = Result & {
  __typename?: 'RrhhContactsResult';
  /** List of Contacts */
  contacts?: Maybe<Array<RrhhContact>>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type RrhhJob = {
  __typename?: 'RrhhJob';
  /** Job description */
  description?: Maybe<Scalars['String']>;
  /** Item details */
  details: Details;
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Job image */
  image?: Maybe<Scalars['String']>;
  /** Job title */
  title: Scalars['String'];
};

/** Job input */
export type RrhhJobInput = {
  /** Job description */
  description: Scalars['String'];
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Job image */
  image: Scalars['String'];
  /** Job title */
  title: Scalars['String'];
};

export type RrhhJobResult = Result & {
  __typename?: 'RrhhJobResult';
  /** Job */
  job?: Maybe<RrhhJob>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type RrhhJobsResult = Result & {
  __typename?: 'RrhhJobsResult';
  /** List of Jobs */
  jobs?: Maybe<Array<RrhhJob>>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

/** Type of object to make permission requests. */
export type RrhhPermission = {
  __typename?: 'RrhhPermission';
  /** Permit authorization */
  authorization: Scalars['Boolean'];
  /** Item details */
  details: Details;
  /** From what time */
  from: Scalars['String'];
  /** Unique identifier */
  id: Scalars['ID'];
  /** Reason for permission */
  reason: Scalars['String'];
  /** Until what time? */
  to: Scalars['String'];
  /** Permit type */
  type: PermissionTypePermissionEnum;
  /** Requesting user */
  userId: User;
};

/** Input for the registration of user data */
export type RrhhPermissionInput = {
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** From what time */
  from: Scalars['String'];
  /** Reason for permission */
  reason: Scalars['String'];
  /** Until what time? */
  to: Scalars['String'];
  /** Permit type */
  type: PermissionTypePermissionEnum;
  /** Requesting user */
  userId: Scalars['ID'];
};

export type RrhhPermissionResult = Result & {
  __typename?: 'RrhhPermissionResult';
  /** Operation message */
  message: Scalars['String'];
  /** Permission */
  permission?: Maybe<RrhhPermission>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type RrhhPermissionsResult = Result & {
  __typename?: 'RrhhPermissionsResult';
  /** Operation message */
  message: Scalars['String'];
  /** List of Permissions */
  permissions?: Maybe<Array<RrhhPermission>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

/** Type of object to vacants. */
export type RrhhVacant = {
  __typename?: 'RrhhVacant';
  /** Vacant available */
  available: Scalars['Boolean'];
  /** Vacant name */
  description: Scalars['String'];
  /** Item details */
  details: Details;
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Unique identifier of a Job */
  jobId: RrhhJob;
  /** Vacant name */
  title: Scalars['String'];
};

/** Vacant input */
export type RrhhVacantInput = {
  /** Vacant description */
  description: Scalars['String'];
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Unique identifier of a Job */
  jobId: Scalars['String'];
  /** Vacant title */
  title: Scalars['String'];
};

export type RrhhVacantResult = Result & {
  __typename?: 'RrhhVacantResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Vacant */
  vacant?: Maybe<RrhhVacant>;
};

export type RrhhVacantsResult = Result & {
  __typename?: 'RrhhVacantsResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of Vacants */
  vacants?: Maybe<Array<RrhhVacant>>;
};

export type SupplierAddress = {
  __typename?: 'SupplierAddress';
  /** Colony */
  colony?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Municipality */
  municipality?: Maybe<Scalars['String']>;
  /** Number (interior and exterior) */
  number?: Maybe<AddressNumber>;
  /** State */
  state?: Maybe<Scalars['String']>;
  /** Street */
  street?: Maybe<Scalars['String']>;
  /** Between which streets is it located (a and b) */
  streets?: Maybe<AddressStreets>;
  /** Postal code */
  zipCode?: Maybe<Scalars['String']>;
};

export type SupplierAddressInput = {
  /** Colony */
  colony: Scalars['String'];
  /** Country */
  country: Scalars['String'];
  /** Municipality */
  municipality: Scalars['String'];
  /** Number (interior and exterior) */
  number: AddressNumberInput;
  /** State */
  state: Scalars['String'];
  /** Street */
  street: Scalars['String'];
  /** Between which streets is it located (a and b) */
  streets?: InputMaybe<AddressStreetsInput>;
  /** Postal code */
  zipCode: Scalars['String'];
};

/** Provider Classification */
export enum SupplierClassificationEnum {
  A = 'A',
  B = 'B',
  C = 'C'
}

export type SupplierContact = {
  __typename?: 'SupplierContact';
  /** Provider email */
  email?: Maybe<Scalars['String']>;
  /** Personalized contacts */
  personalizedContact?: Maybe<Array<Maybe<ContactPersonalized>>>;
  /** Provider phone */
  phone?: Maybe<Scalars['String']>;
  /** Provider website */
  web?: Maybe<Scalars['String']>;
};

export type SupplierContactInput = {
  /** Provider email */
  email: Scalars['String'];
  /** Personalized contacts */
  personalizedContact?: InputMaybe<Array<InputMaybe<ContactPersonalizedInput>>>;
  /** Provider phone */
  phone: Scalars['String'];
  /** Provider website */
  web?: InputMaybe<Scalars['String']>;
};

export enum SupplierPersonalizedTitleEnum {
  Ing = 'Ing',
  Lic = 'Lic',
  Mtr = 'Mtr',
  Mtro = 'Mtro',
  PhD = 'PhD',
  Sr = 'Sr',
  Sra = 'Sra',
  Undefined = 'undefined'
}

export type SupplierTaxes = {
  __typename?: 'SupplierTaxes';
  /** Your RFC if direct */
  rfc?: Maybe<Scalars['String']>;
  /** Direct/indirect */
  type?: Maybe<SupplierTypeTaxesEnum>;
};

export type SupplierTaxesInput = {
  /** Your RFC if direct */
  rfc?: InputMaybe<Scalars['String']>;
  /** Direct/indirect */
  type: SupplierTypeTaxesEnum;
};

/** If it shows RFC */
export enum SupplierTypeTaxesEnum {
  Directo = 'DIRECTO',
  Indirecto = 'INDIRECTO'
}

/**
 * User details.
 * Dates in ISO format.
 */
export type User = {
  __typename?: 'User';
  /** User information */
  birthday: Scalars['String'];
  /** Item details */
  details: Details;
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
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Account data */
  email: Scalars['String'];
  /** Last session user */
  lastSession?: InputMaybe<Scalars['String']>;
  lastname: Scalars['String'];
  /** Username */
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** User permissions */
  role?: InputMaybe<Role>;
};

type Contact_RrhhContactRrhh_Fragment = { __typename?: 'RrhhContactRrhh', age?: string | null, name: string, email: string, phone: string, creationDate: string, vacantId?: { __typename?: 'RrhhVacant', id?: string | null, title: string, description: string, available: boolean, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null };

type Contact_RrhhContactSales_Fragment = { __typename?: 'RrhhContactSales', company?: string | null, workPosition?: ContactWorkPositionEnum | null, message?: string | null, name: string, email: string, phone: string, creationDate: string };

export type ContactFragment = Contact_RrhhContactRrhh_Fragment | Contact_RrhhContactSales_Fragment;

export type VacantFragment = { __typename?: 'RrhhVacant', id?: string | null, title: string, description: string, available: boolean, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } };

export type DetailsFragment = { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null };

export type AddContactMutationVariables = Exact<{
  contact: RrhhContactInput;
}>;


export type AddContactMutation = { __typename?: 'Mutation', addContact?: { __typename?: 'RrhhContactResult', status: boolean, message: string, contact?: { __typename?: 'RrhhContactRrhh', age?: string | null, name: string, email: string, phone: string, creationDate: string, vacantId?: { __typename?: 'RrhhVacant', id?: string | null, title: string, description: string, available: boolean, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | { __typename?: 'RrhhContactSales', company?: string | null, workPosition?: ContactWorkPositionEnum | null, message?: string | null, name: string, email: string, phone: string, creationDate: string } | null } | null };

export type GetContactQueryVariables = Exact<{
  contactId: Scalars['ID'];
}>;


export type GetContactQuery = { __typename?: 'Query', contact?: { __typename?: 'RrhhContactResult', status: boolean, message: string, contact?: { __typename?: 'RrhhContactRrhh', age?: string | null, name: string, email: string, phone: string, creationDate: string, vacantId?: { __typename?: 'RrhhVacant', id?: string | null, title: string, description: string, available: boolean, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | { __typename?: 'RrhhContactSales', company?: string | null, workPosition?: ContactWorkPositionEnum | null, message?: string | null, name: string, email: string, phone: string, creationDate: string } | null } | null };

export type GetContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactsQuery = { __typename?: 'Query', contacts?: { __typename?: 'RrhhContactsResult', status: boolean, message: string, contacts?: Array<{ __typename?: 'RrhhContactRrhh', age?: string | null, name: string, email: string, phone: string, creationDate: string, vacantId?: { __typename?: 'RrhhVacant', id?: string | null, title: string, description: string, available: boolean, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | { __typename?: 'RrhhContactSales', company?: string | null, workPosition?: ContactWorkPositionEnum | null, message?: string | null, name: string, email: string, phone: string, creationDate: string }> | null } | null };

export type GetVacantQueryVariables = Exact<{
  vacantId: Scalars['ID'];
}>;


export type GetVacantQuery = { __typename?: 'Query', vacant?: { __typename?: 'RrhhVacantResult', status: boolean, message: string, vacant?: { __typename?: 'RrhhVacant', id?: string | null, title: string, description: string, available: boolean, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type GetVacantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVacantsQuery = { __typename?: 'Query', vacants?: { __typename?: 'RrhhVacantsResult', status: boolean, message: string, vacants?: Array<{ __typename?: 'RrhhVacant', id?: string | null, title: string, description: string, available: boolean, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }> | null } | null };

export const DetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Details"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Details"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUserId"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modifierUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastModification"}}]}}]} as unknown as DocumentNode<DetailsFragment, unknown>;
export const VacantFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Vacant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhVacant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"available"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Details"}}]}}]}},...DetailsFragmentDoc.definitions]} as unknown as DocumentNode<VacantFragment, unknown>;
export const ContactFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Contact"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhContact"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhContactRrhh"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vacantId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Vacant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"age"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhContactSales"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"workPosition"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}},...VacantFragmentDoc.definitions]} as unknown as DocumentNode<ContactFragment, unknown>;
export const AddContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contact"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhContactInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contact"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Contact"}}]}}]}}]}},...ContactFragmentDoc.definitions]} as unknown as DocumentNode<AddContactMutation, AddContactMutationVariables>;
export const GetContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contactId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Contact"}}]}}]}}]}},...ContactFragmentDoc.definitions]} as unknown as DocumentNode<GetContactQuery, GetContactQueryVariables>;
export const GetContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Contact"}}]}}]}}]}},...ContactFragmentDoc.definitions]} as unknown as DocumentNode<GetContactsQuery, GetContactsQueryVariables>;
export const GetVacantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVacant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vacantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vacant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vacantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vacant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Vacant"}}]}}]}}]}},...VacantFragmentDoc.definitions]} as unknown as DocumentNode<GetVacantQuery, GetVacantQueryVariables>;
export const GetVacantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVacants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vacants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vacants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Vacant"}}]}}]}}]}},...VacantFragmentDoc.definitions]} as unknown as DocumentNode<GetVacantsQuery, GetVacantsQueryVariables>;