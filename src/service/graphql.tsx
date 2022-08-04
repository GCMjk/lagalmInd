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
  /** Delete contact */
  deleteContact?: Maybe<RrhhContactResult>;
  /** Delete job */
  deleteJob?: Maybe<RrhhJobResult>;
  /** Delete permission */
  deletePermission?: Maybe<RrhhPermissionResult>;
  /** Delete product */
  deleteProduct?: Maybe<PurchaseProductResult>;
  /** Delete requisition */
  deleteRequisition?: Maybe<PurchaseRequisitionResult>;
  /** Delete supplier */
  deleteSupplier?: Maybe<PurchaseSupplierResult>;
  /** Delete user */
  deleteUser?: Maybe<ResultUser>;
  /** Delete vacant */
  deleteVacant?: Maybe<RrhhVacantResult>;
  /** Login user */
  login?: Maybe<ResultLogin>;
  /** register users */
  register?: Maybe<ResultUser>;
  /** Update contact */
  updateContact?: Maybe<RrhhContactResult>;
  /** Update job */
  updateJob?: Maybe<RrhhJobResult>;
  /** Update permission */
  updatePermission?: Maybe<RrhhPermissionResult>;
  /** Update product */
  updateProduct?: Maybe<PurchaseProductResult>;
  /** Update requisition */
  updateRequisition?: Maybe<PurchaseRequisitionResult>;
  /** Update supplier */
  updateSupplier?: Maybe<PurchaseSupplierResult>;
  /** Update user */
  updateUser?: Maybe<ResultUser>;
  /** Update vacant */
  updateVacant?: Maybe<RrhhVacantResult>;
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


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteJobArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRequisitionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVacantArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  user: UserInput;
};


export type MutationUpdateContactArgs = {
  contact: RrhhContactInput;
  id: Scalars['ID'];
};


export type MutationUpdateJobArgs = {
  id: Scalars['ID'];
  job: RrhhJobInput;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  permission: RrhhPermissionInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  product: PurchaseProductInput;
};


export type MutationUpdateRequisitionArgs = {
  id: Scalars['ID'];
  requisition: PurchaseRequisitionInput;
};


export type MutationUpdateSupplierArgs = {
  id: Scalars['ID'];
  supplier: PurchaseSupplierInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user: UserInput;
};


export type MutationUpdateVacantArgs = {
  id: Scalars['ID'];
  vacant: UserInput;
};

/** Permission types */
export enum PermissionTypePermissionEnum {
  Ausencia = 'AUSENCIA',
  CambioTurno = 'CAMBIO_TURNO',
  Falta = 'FALTA',
  LlegarTarde = 'LLEGAR_TARDE',
  Retirarse = 'RETIRARSE'
}

export type ProductType = {
  __typename?: 'ProductType';
  /** Service description */
  description?: Maybe<Scalars['String']>;
  /** Enum for service type */
  type?: Maybe<ProductTypeEnum>;
};

/** Type of product/service */
export enum ProductTypeEnum {
  Producto = 'PRODUCTO',
  Servicio = 'SERVICIO'
}

export type ProductTypeInput = {
  /** Service description */
  description?: InputMaybe<Scalars['String']>;
  /** Enum for service type */
  type?: InputMaybe<ProductTypeEnum>;
};

export type PurchaseProduct = {
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
  /** If it is a service, what type of service */
  type?: Maybe<ProductType>;
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
  type?: InputMaybe<ProductTypeInput>;
};

export type PurchaseProductResult = Result & {
  __typename?: 'PurchaseProductResult';
  /** Operation message */
  message: Scalars['String'];
  /** Product */
  product?: Maybe<PurchaseProduct>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseProductsResult = Result & {
  __typename?: 'PurchaseProductsResult';
  /** Operation message */
  message: Scalars['String'];
  /** List of Products */
  products?: Maybe<Array<PurchaseProduct>>;
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
  productId?: Maybe<Array<Maybe<PurchaseProduct>>>;
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
  /** Contact status */
  attended?: InputMaybe<Scalars['Boolean']>;
  /** Contact company */
  company?: InputMaybe<Scalars['String']>;
  creationDate?: InputMaybe<Scalars['String']>;
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
  available: VacantAvailable;
  /** Vacant description */
  description: VacantDescription;
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
  /** Vacant available */
  available: VacantAvailableInput;
  /** Vacant description */
  description: VacantDescriptionInput;
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

export type VacantAvailable = {
  __typename?: 'VacantAvailable';
  available?: Maybe<Scalars['Boolean']>;
  candidates: Scalars['Int'];
  date: Scalars['String'];
};

export type VacantAvailableInput = {
  available?: InputMaybe<Scalars['Boolean']>;
  candidates: Scalars['Int'];
  date: Scalars['String'];
};

export type VacantDescription = {
  __typename?: 'VacantDescription';
  benefits?: Maybe<Array<Maybe<Scalars['String']>>>;
  description: Array<Maybe<Scalars['String']>>;
  salary?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
};

export type VacantDescriptionInput = {
  benefits?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Array<Scalars['String']>;
  salary?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['Int']>;
};

export type DetailsFragmentFragment = { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null };

export type PurchaseProductFragmentFragment = { __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } };

export type NewPurchaseProductMutationVariables = Exact<{
  product: PurchaseProductInput;
}>;


export type NewPurchaseProductMutation = { __typename?: 'Mutation', addProduct?: { __typename?: 'PurchaseProductResult', status: boolean, message: string, product?: { __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type UpdatePurchaseProductMutationVariables = Exact<{
  updateProductId: Scalars['ID'];
  updateProductProduct: PurchaseProductInput;
}>;


export type UpdatePurchaseProductMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'PurchaseProductResult', status: boolean, message: string, product?: { __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type DeletePurchaseProductMutationVariables = Exact<{
  deleteProductId: Scalars['ID'];
}>;


export type DeletePurchaseProductMutation = { __typename?: 'Mutation', deleteProduct?: { __typename?: 'PurchaseProductResult', status: boolean, message: string } | null };

export type GetPurchaseProductQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type GetPurchaseProductQuery = { __typename?: 'Query', product?: { __typename?: 'PurchaseProductResult', status: boolean, message: string, product?: { __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type GetPurchaseProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPurchaseProductsQuery = { __typename?: 'Query', products?: { __typename?: 'PurchaseProductsResult', status: boolean, message: string, products?: Array<{ __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }> | null } | null };

export type PurchaseRequisitionFragmentFragment = { __typename?: 'PurchaseRequisition', id: string, autorization?: boolean | null, product?: Array<{ __typename?: 'RequisitionProduct', type?: RequisitionAmountOfEnum | null, number?: number | null, productId?: { __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null> | null, userId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } };

export type NewPurchaseRequisitionMutationVariables = Exact<{
  requisition: PurchaseRequisitionInput;
}>;


export type NewPurchaseRequisitionMutation = { __typename?: 'Mutation', addRequisition?: { __typename?: 'PurchaseRequisitionResult', status: boolean, message: string, requisition?: { __typename?: 'PurchaseRequisition', id: string, autorization?: boolean | null, product?: Array<{ __typename?: 'RequisitionProduct', type?: RequisitionAmountOfEnum | null, number?: number | null, productId?: { __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null> | null, userId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type UpdatePurchaseRequisitionMutationVariables = Exact<{
  updateRequisitionId: Scalars['ID'];
  requisition: PurchaseRequisitionInput;
}>;


export type UpdatePurchaseRequisitionMutation = { __typename?: 'Mutation', updateRequisition?: { __typename?: 'PurchaseRequisitionResult', status: boolean, message: string, requisition?: { __typename?: 'PurchaseRequisition', id: string, autorization?: boolean | null, product?: Array<{ __typename?: 'RequisitionProduct', type?: RequisitionAmountOfEnum | null, number?: number | null, productId?: { __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null> | null, userId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type DeletePurchaseSupplierMutationVariables = Exact<{
  deleteSupplierId: Scalars['ID'];
}>;


export type DeletePurchaseSupplierMutation = { __typename?: 'Mutation', deleteSupplier?: { __typename?: 'PurchaseSupplierResult', status: boolean, message: string } | null };

export type GetPurchaseRequisitionQueryVariables = Exact<{
  requisitionId: Scalars['ID'];
}>;


export type GetPurchaseRequisitionQuery = { __typename?: 'Query', requisition?: { __typename?: 'PurchaseRequisitionResult', status: boolean, message: string, requisition?: { __typename?: 'PurchaseRequisition', id: string, autorization?: boolean | null, product?: Array<{ __typename?: 'RequisitionProduct', type?: RequisitionAmountOfEnum | null, number?: number | null, productId?: { __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null> | null, userId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type GetPurchaseRequisitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPurchaseRequisitionsQuery = { __typename?: 'Query', requisitions?: { __typename?: 'PurchaseRequisitionsResult', status: boolean, message: string, requisitions?: Array<{ __typename?: 'PurchaseRequisition', id: string, autorization?: boolean | null, product?: Array<{ __typename?: 'RequisitionProduct', type?: RequisitionAmountOfEnum | null, number?: number | null, productId?: { __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null> | null, userId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }> | null } | null };

export type PurchaseSupplierFragmentFragment = { __typename?: 'PurchaseSupplier', id: string, name: string, logo?: string | null, deliveryTime?: number | null, passed?: boolean | null, classification?: SupplierClassificationEnum | null, infoContact?: { __typename?: 'SupplierContact', email?: string | null, phone?: string | null, web?: string | null, personalizedContact?: Array<{ __typename?: 'ContactPersonalized', title?: SupplierPersonalizedTitleEnum | null, name?: string | null, position?: string | null, email?: string | null, phone?: string | null } | null> | null } | null, address?: { __typename?: 'SupplierAddress', street?: string | null, colony?: string | null, municipality?: string | null, state?: string | null, country?: string | null, zipCode?: string | null, number?: { __typename?: 'AddressNumber', interior?: string | null, exterior?: string | null } | null, streets?: { __typename?: 'AddressStreets', a?: string | null, b?: string | null } | null } | null, taxes?: { __typename?: 'SupplierTaxes', type?: SupplierTypeTaxesEnum | null, rfc?: string | null } | null, productId?: Array<{ __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null> | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } };

export type NewPurchaseSupplierMutationVariables = Exact<{
  supplier: PurchaseSupplierInput;
}>;


export type NewPurchaseSupplierMutation = { __typename?: 'Mutation', addSupplier?: { __typename?: 'PurchaseSupplierResult', status: boolean, message: string, supplier?: { __typename?: 'PurchaseSupplier', id: string, name: string, logo?: string | null, deliveryTime?: number | null, passed?: boolean | null, classification?: SupplierClassificationEnum | null, infoContact?: { __typename?: 'SupplierContact', email?: string | null, phone?: string | null, web?: string | null, personalizedContact?: Array<{ __typename?: 'ContactPersonalized', title?: SupplierPersonalizedTitleEnum | null, name?: string | null, position?: string | null, email?: string | null, phone?: string | null } | null> | null } | null, address?: { __typename?: 'SupplierAddress', street?: string | null, colony?: string | null, municipality?: string | null, state?: string | null, country?: string | null, zipCode?: string | null, number?: { __typename?: 'AddressNumber', interior?: string | null, exterior?: string | null } | null, streets?: { __typename?: 'AddressStreets', a?: string | null, b?: string | null } | null } | null, taxes?: { __typename?: 'SupplierTaxes', type?: SupplierTypeTaxesEnum | null, rfc?: string | null } | null, productId?: Array<{ __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null> | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type UpdatePurchaseSupplierMutationVariables = Exact<{
  updateSupplierId: Scalars['ID'];
  supplier: PurchaseSupplierInput;
}>;


export type UpdatePurchaseSupplierMutation = { __typename?: 'Mutation', updateSupplier?: { __typename?: 'PurchaseSupplierResult', status: boolean, message: string, supplier?: { __typename?: 'PurchaseSupplier', id: string, name: string, logo?: string | null, deliveryTime?: number | null, passed?: boolean | null, classification?: SupplierClassificationEnum | null, infoContact?: { __typename?: 'SupplierContact', email?: string | null, phone?: string | null, web?: string | null, personalizedContact?: Array<{ __typename?: 'ContactPersonalized', title?: SupplierPersonalizedTitleEnum | null, name?: string | null, position?: string | null, email?: string | null, phone?: string | null } | null> | null } | null, address?: { __typename?: 'SupplierAddress', street?: string | null, colony?: string | null, municipality?: string | null, state?: string | null, country?: string | null, zipCode?: string | null, number?: { __typename?: 'AddressNumber', interior?: string | null, exterior?: string | null } | null, streets?: { __typename?: 'AddressStreets', a?: string | null, b?: string | null } | null } | null, taxes?: { __typename?: 'SupplierTaxes', type?: SupplierTypeTaxesEnum | null, rfc?: string | null } | null, productId?: Array<{ __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null> | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type GetPurchaseSupplierQueryVariables = Exact<{
  supplierId: Scalars['ID'];
}>;


export type GetPurchaseSupplierQuery = { __typename?: 'Query', supplier?: { __typename?: 'PurchaseSupplierResult', status: boolean, message: string, supplier?: { __typename?: 'PurchaseSupplier', id: string, name: string, logo?: string | null, deliveryTime?: number | null, passed?: boolean | null, classification?: SupplierClassificationEnum | null, infoContact?: { __typename?: 'SupplierContact', email?: string | null, phone?: string | null, web?: string | null, personalizedContact?: Array<{ __typename?: 'ContactPersonalized', title?: SupplierPersonalizedTitleEnum | null, name?: string | null, position?: string | null, email?: string | null, phone?: string | null } | null> | null } | null, address?: { __typename?: 'SupplierAddress', street?: string | null, colony?: string | null, municipality?: string | null, state?: string | null, country?: string | null, zipCode?: string | null, number?: { __typename?: 'AddressNumber', interior?: string | null, exterior?: string | null } | null, streets?: { __typename?: 'AddressStreets', a?: string | null, b?: string | null } | null } | null, taxes?: { __typename?: 'SupplierTaxes', type?: SupplierTypeTaxesEnum | null, rfc?: string | null } | null, productId?: Array<{ __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null> | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type GetPurchaseSuppliersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPurchaseSuppliersQuery = { __typename?: 'Query', suppliers?: { __typename?: 'PurchaseSuppliersResult', status: boolean, message: string, suppliers?: Array<{ __typename?: 'PurchaseSupplier', id: string, name: string, logo?: string | null, deliveryTime?: number | null, passed?: boolean | null, classification?: SupplierClassificationEnum | null, infoContact?: { __typename?: 'SupplierContact', email?: string | null, phone?: string | null, web?: string | null, personalizedContact?: Array<{ __typename?: 'ContactPersonalized', title?: SupplierPersonalizedTitleEnum | null, name?: string | null, position?: string | null, email?: string | null, phone?: string | null } | null> | null } | null, address?: { __typename?: 'SupplierAddress', street?: string | null, colony?: string | null, municipality?: string | null, state?: string | null, country?: string | null, zipCode?: string | null, number?: { __typename?: 'AddressNumber', interior?: string | null, exterior?: string | null } | null, streets?: { __typename?: 'AddressStreets', a?: string | null, b?: string | null } | null } | null, taxes?: { __typename?: 'SupplierTaxes', type?: SupplierTypeTaxesEnum | null, rfc?: string | null } | null, productId?: Array<{ __typename?: 'PurchaseProduct', id: string, name: string, description?: string | null, brand?: string | null, audited: boolean, type?: { __typename?: 'ProductType', type?: ProductTypeEnum | null, description?: string | null } | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null> | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }> | null } | null };

export type RrhhContactRrhhFragmentFragment = { __typename?: 'RrhhContactRrhh', id?: string | null, name: string, email: string, phone: string, attended: boolean, age?: string | null, creationDate: string, vacantId?: { __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null };

export type RrhhContactSalesFragmentFragment = { __typename?: 'RrhhContactSales', id?: string | null, name: string, email: string, phone: string, attended: boolean, company?: string | null, workPosition?: ContactWorkPositionEnum | null, message?: string | null, creationDate: string };

export type NewRrhhContactMutationVariables = Exact<{
  contact: RrhhContactInput;
}>;


export type NewRrhhContactMutation = { __typename?: 'Mutation', addContact?: { __typename?: 'RrhhContactResult', status: boolean, message: string, contact?: { __typename?: 'RrhhContactRrhh', id?: string | null, name: string, email: string, phone: string, attended: boolean, age?: string | null, creationDate: string, vacantId?: { __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | { __typename?: 'RrhhContactSales', id?: string | null, name: string, email: string, phone: string, attended: boolean, company?: string | null, workPosition?: ContactWorkPositionEnum | null, message?: string | null, creationDate: string } | null } | null };

export type UpdateRrhhContactMutationVariables = Exact<{
  updateContactId: Scalars['ID'];
  contact: RrhhContactInput;
}>;


export type UpdateRrhhContactMutation = { __typename?: 'Mutation', updateContact?: { __typename?: 'RrhhContactResult', status: boolean, message: string, contact?: { __typename?: 'RrhhContactRrhh', id?: string | null, name: string, email: string, phone: string, attended: boolean, age?: string | null, creationDate: string, vacantId?: { __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | { __typename?: 'RrhhContactSales', id?: string | null, name: string, email: string, phone: string, attended: boolean, company?: string | null, workPosition?: ContactWorkPositionEnum | null, message?: string | null, creationDate: string } | null } | null };

export type DeleteRrhhContactMutationVariables = Exact<{
  deleteContactId: Scalars['ID'];
}>;


export type DeleteRrhhContactMutation = { __typename?: 'Mutation', deleteContact?: { __typename?: 'RrhhContactResult', status: boolean, message: string } | null };

export type GetRrhhContactQueryVariables = Exact<{
  contactId: Scalars['ID'];
}>;


export type GetRrhhContactQuery = { __typename?: 'Query', contact?: { __typename?: 'RrhhContactResult', status: boolean, message: string, contact?: { __typename?: 'RrhhContactRrhh', id?: string | null, name: string, email: string, phone: string, attended: boolean, age?: string | null, creationDate: string, vacantId?: { __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | { __typename?: 'RrhhContactSales', id?: string | null, name: string, email: string, phone: string, attended: boolean, company?: string | null, workPosition?: ContactWorkPositionEnum | null, message?: string | null, creationDate: string } | null } | null };

export type GetRrhhContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRrhhContactsQuery = { __typename?: 'Query', contacts?: { __typename?: 'RrhhContactsResult', status: boolean, message: string, contacts?: Array<{ __typename?: 'RrhhContactRrhh', id?: string | null, name: string, email: string, phone: string, attended: boolean, age?: string | null, creationDate: string, vacantId?: { __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | { __typename?: 'RrhhContactSales', id?: string | null, name: string, email: string, phone: string, attended: boolean, company?: string | null, workPosition?: ContactWorkPositionEnum | null, message?: string | null, creationDate: string }> | null } | null };

export type RrhhJobFragmentFragment = { __typename?: 'RrhhJob', id?: string | null, title: string, description?: string | null, image?: string | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } };

export type NewRrhhJobMutationVariables = Exact<{
  job: RrhhJobInput;
}>;


export type NewRrhhJobMutation = { __typename?: 'Mutation', addJob?: { __typename?: 'RrhhJobResult', status: boolean, message: string, job?: { __typename?: 'RrhhJob', id?: string | null, title: string, description?: string | null, image?: string | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type UpdateRrhhJobMutationVariables = Exact<{
  updateJobId: Scalars['ID'];
  job: RrhhJobInput;
}>;


export type UpdateRrhhJobMutation = { __typename?: 'Mutation', updateJob?: { __typename?: 'RrhhJobResult', status: boolean, message: string, job?: { __typename?: 'RrhhJob', id?: string | null, title: string, description?: string | null, image?: string | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type DeleteRrhhJobMutationVariables = Exact<{
  deleteJobId: Scalars['ID'];
}>;


export type DeleteRrhhJobMutation = { __typename?: 'Mutation', deleteJob?: { __typename?: 'RrhhJobResult', status: boolean, message: string } | null };

export type GetRrhhJobQueryVariables = Exact<{
  jobId: Scalars['ID'];
}>;


export type GetRrhhJobQuery = { __typename?: 'Query', job?: { __typename?: 'RrhhJobResult', status: boolean, message: string, job?: { __typename?: 'RrhhJob', id?: string | null, title: string, description?: string | null, image?: string | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type GetRrhhJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRrhhJobsQuery = { __typename?: 'Query', jobs?: { __typename?: 'RrhhJobsResult', status: boolean, message: string, jobs?: Array<{ __typename?: 'RrhhJob', id?: string | null, title: string, description?: string | null, image?: string | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }> | null } | null };

export type RrhhPermissionFragmentFragment = { __typename?: 'RrhhPermission', id: string, type: PermissionTypePermissionEnum, reason: string, from: string, to: string, authorization: boolean, userId: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, modifierUserId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } };

export type NewRrhhPermissionMutationVariables = Exact<{
  permission: RrhhPermissionInput;
}>;


export type NewRrhhPermissionMutation = { __typename?: 'Mutation', addPermission?: { __typename?: 'RrhhPermissionResult', status: boolean, message: string, permission?: { __typename?: 'RrhhPermission', id: string, type: PermissionTypePermissionEnum, reason: string, from: string, to: string, authorization: boolean, userId: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, modifierUserId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } } | null } | null };

export type UpdateRrhhPermissionMutationVariables = Exact<{
  updatePermissionId: Scalars['ID'];
  permission: RrhhPermissionInput;
}>;


export type UpdateRrhhPermissionMutation = { __typename?: 'Mutation', updatePermission?: { __typename?: 'RrhhPermissionResult', status: boolean, message: string, permission?: { __typename?: 'RrhhPermission', id: string, type: PermissionTypePermissionEnum, reason: string, from: string, to: string, authorization: boolean, userId: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, modifierUserId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } } | null } | null };

export type DeleteRrhhPermissionMutationVariables = Exact<{
  deletePermissionId: Scalars['ID'];
}>;


export type DeleteRrhhPermissionMutation = { __typename?: 'Mutation', deletePermission?: { __typename?: 'RrhhPermissionResult', status: boolean, message: string } | null };

export type GetRrhPermissionQueryVariables = Exact<{
  permissionId: Scalars['ID'];
}>;


export type GetRrhPermissionQuery = { __typename?: 'Query', permission?: { __typename?: 'RrhhPermissionResult', status: boolean, message: string, permission?: { __typename?: 'RrhhPermission', id: string, type: PermissionTypePermissionEnum, reason: string, from: string, to: string, authorization: boolean, userId: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, modifierUserId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } } | null } | null };

export type GetRrhhPermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRrhhPermissionsQuery = { __typename?: 'Query', permissions?: { __typename?: 'RrhhPermissionsResult', status: boolean, message: string, permissions?: Array<{ __typename?: 'RrhhPermission', id: string, type: PermissionTypePermissionEnum, reason: string, from: string, to: string, authorization: boolean, userId: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null, modifierUserId?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } }> | null } | null };

export type RrhhVacantFragmentFragment = { __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } };

export type NewRrhhVacantMutationVariables = Exact<{
  vacant: RrhhVacantInput;
}>;


export type NewRrhhVacantMutation = { __typename?: 'Mutation', addVacant?: { __typename?: 'RrhhVacantResult', status: boolean, message: string, vacant?: { __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type UpdateRrhhVacantMutationVariables = Exact<{
  updateVacantId: Scalars['ID'];
  vacant: UserInput;
}>;


export type UpdateRrhhVacantMutation = { __typename?: 'Mutation', updateVacant?: { __typename?: 'RrhhVacantResult', status: boolean, message: string, vacant?: { __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type DeleteRrhhVacantMutationVariables = Exact<{
  deleteVacantId: Scalars['ID'];
}>;


export type DeleteRrhhVacantMutation = { __typename?: 'Mutation', deleteVacant?: { __typename?: 'RrhhVacantResult', status: boolean, message: string } | null };

export type GetRrhhVacantQueryVariables = Exact<{
  vacantId: Scalars['ID'];
}>;


export type GetRrhhVacantQuery = { __typename?: 'Query', vacant?: { __typename?: 'RrhhVacantResult', status: boolean, message: string, vacant?: { __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } } | null } | null };

export type GetRrhhVacantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRrhhVacantsQuery = { __typename?: 'Query', vacants?: { __typename?: 'RrhhVacantsResult', status: boolean, message: string, vacants?: Array<{ __typename?: 'RrhhVacant', id?: string | null, title: string, jobId: { __typename?: 'RrhhJob', title: string, description?: string | null, image?: string | null }, description: { __typename?: 'VacantDescription', description: Array<string | null>, benefits?: Array<string | null> | null, time?: number | null, salary?: number | null }, available: { __typename?: 'VacantAvailable', date: string, candidates: number, available?: boolean | null }, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }> | null } | null };

export type UserFragmentFragment = { __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } };

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'ResultLogin', status: boolean, message: string, token?: string | null } | null };

export type NewUserMutationVariables = Exact<{
  user: UserInput;
}>;


export type NewUserMutation = { __typename?: 'Mutation', register?: { __typename?: 'ResultUser', status: boolean, message: string, users?: Array<{ __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }> | null } | null };

export type UpdateUserMutationVariables = Exact<{
  updateUserId: Scalars['ID'];
  user: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'ResultUser', status: boolean, message: string, users?: Array<{ __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }> | null } | null };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['ID'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'ResultUser', status: boolean, message: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: { __typename?: 'ResultUser', status: boolean, message: string, users?: Array<{ __typename?: 'User', id: string, name: string, lastname: string, email: string, password: string, birthday: string, phone?: string | null, role: Role, lastSession: string, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creationDate?: string | null, lastModification?: string | null, creatorUser?: { __typename?: 'User', name: string, email: string } | null, modifierUserId?: { __typename?: 'User', name: string, email: string } | null } }> | null } | null };

export const DetailsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Details"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUserId"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modifierUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastModification"}}]}}]} as unknown as DocumentNode<DetailsFragmentFragment, unknown>;
export const PurchaseProductFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PurchaseProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"audited"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailsFragment"}}]}}]}},...DetailsFragmentFragmentDoc.definitions]} as unknown as DocumentNode<PurchaseProductFragmentFragment, unknown>;
export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"lastSession"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailsFragment"}}]}}]}},...DetailsFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const PurchaseRequisitionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PurchaseRequisitionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseRequisition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseProductFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"autorization"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailsFragment"}}]}}]}},...PurchaseProductFragmentFragmentDoc.definitions,...UserFragmentFragmentDoc.definitions,...DetailsFragmentFragmentDoc.definitions]} as unknown as DocumentNode<PurchaseRequisitionFragmentFragment, unknown>;
export const PurchaseSupplierFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PurchaseSupplierFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseSupplier"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"infoContact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"web"}},{"kind":"Field","name":{"kind":"Name","value":"personalizedContact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"number"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interior"}},{"kind":"Field","name":{"kind":"Name","value":"exterior"}}]}},{"kind":"Field","name":{"kind":"Name","value":"colony"}},{"kind":"Field","name":{"kind":"Name","value":"municipality"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"zipCode"}},{"kind":"Field","name":{"kind":"Name","value":"streets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"a"}},{"kind":"Field","name":{"kind":"Name","value":"b"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"rfc"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deliveryTime"}},{"kind":"Field","name":{"kind":"Name","value":"passed"}},{"kind":"Field","name":{"kind":"Name","value":"classification"}},{"kind":"Field","name":{"kind":"Name","value":"productId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseProductFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUserId"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modifierUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastModification"}}]}}]}},...PurchaseProductFragmentFragmentDoc.definitions]} as unknown as DocumentNode<PurchaseSupplierFragmentFragment, unknown>;
export const RrhhVacantFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RrhhVacantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhVacant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"benefits"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"salary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"available"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"candidates"}},{"kind":"Field","name":{"kind":"Name","value":"available"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailsFragment"}}]}}]}},...DetailsFragmentFragmentDoc.definitions]} as unknown as DocumentNode<RrhhVacantFragmentFragment, unknown>;
export const RrhhContactRrhhFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RrhhContactRrhhFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhContactRrhh"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"attended"}},{"kind":"Field","name":{"kind":"Name","value":"vacantId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhVacantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}},...RrhhVacantFragmentFragmentDoc.definitions]} as unknown as DocumentNode<RrhhContactRrhhFragmentFragment, unknown>;
export const RrhhContactSalesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RrhhContactSalesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhContactSales"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"attended"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"workPosition"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}}]} as unknown as DocumentNode<RrhhContactSalesFragmentFragment, unknown>;
export const RrhhJobFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RrhhJobFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailsFragment"}}]}}]}},...DetailsFragmentFragmentDoc.definitions]} as unknown as DocumentNode<RrhhJobFragmentFragment, unknown>;
export const RrhhPermissionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RrhhPermissionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhPermission"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"authorization"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUserId"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modifierUserId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastModification"}}]}}]}},...UserFragmentFragmentDoc.definitions]} as unknown as DocumentNode<RrhhPermissionFragmentFragment, unknown>;
export const NewPurchaseProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPurchaseProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"product"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseProductFragment"}}]}}]}}]}},...PurchaseProductFragmentFragmentDoc.definitions]} as unknown as DocumentNode<NewPurchaseProductMutation, NewPurchaseProductMutationVariables>;
export const UpdatePurchaseProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePurchaseProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProductProduct"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProductId"}}},{"kind":"Argument","name":{"kind":"Name","value":"product"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProductProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseProductFragment"}}]}}]}}]}},...PurchaseProductFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePurchaseProductMutation, UpdatePurchaseProductMutationVariables>;
export const DeletePurchaseProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePurchaseProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeletePurchaseProductMutation, DeletePurchaseProductMutationVariables>;
export const GetPurchaseProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPurchaseProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseProductFragment"}}]}}]}}]}},...PurchaseProductFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPurchaseProductQuery, GetPurchaseProductQueryVariables>;
export const GetPurchaseProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPurchaseProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseProductFragment"}}]}}]}}]}},...PurchaseProductFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPurchaseProductsQuery, GetPurchaseProductsQueryVariables>;
export const NewPurchaseRequisitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPurchaseRequisition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requisition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseRequisitionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addRequisition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requisition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requisition"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"requisition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseRequisitionFragment"}}]}}]}}]}},...PurchaseRequisitionFragmentFragmentDoc.definitions]} as unknown as DocumentNode<NewPurchaseRequisitionMutation, NewPurchaseRequisitionMutationVariables>;
export const UpdatePurchaseRequisitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePurchaseRequisition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateRequisitionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requisition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseRequisitionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRequisition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateRequisitionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"requisition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requisition"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"requisition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseRequisitionFragment"}}]}}]}}]}},...PurchaseRequisitionFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePurchaseRequisitionMutation, UpdatePurchaseRequisitionMutationVariables>;
export const DeletePurchaseSupplierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePurchaseSupplier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSupplierId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSupplier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSupplierId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeletePurchaseSupplierMutation, DeletePurchaseSupplierMutationVariables>;
export const GetPurchaseRequisitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPurchaseRequisition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requisitionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requisition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requisitionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"requisition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseRequisitionFragment"}}]}}]}}]}},...PurchaseRequisitionFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPurchaseRequisitionQuery, GetPurchaseRequisitionQueryVariables>;
export const GetPurchaseRequisitionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPurchaseRequisitions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requisitions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"requisitions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseRequisitionFragment"}}]}}]}}]}},...PurchaseRequisitionFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPurchaseRequisitionsQuery, GetPurchaseRequisitionsQueryVariables>;
export const NewPurchaseSupplierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPurchaseSupplier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"supplier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseSupplierInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSupplier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"supplier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"supplier"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"supplier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseSupplierFragment"}}]}}]}}]}},...PurchaseSupplierFragmentFragmentDoc.definitions]} as unknown as DocumentNode<NewPurchaseSupplierMutation, NewPurchaseSupplierMutationVariables>;
export const UpdatePurchaseSupplierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePurchaseSupplier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSupplierId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"supplier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseSupplierInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSupplier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSupplierId"}}},{"kind":"Argument","name":{"kind":"Name","value":"supplier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"supplier"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"supplier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseSupplierFragment"}}]}}]}}]}},...PurchaseSupplierFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePurchaseSupplierMutation, UpdatePurchaseSupplierMutationVariables>;
export const GetPurchaseSupplierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPurchaseSupplier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"supplierId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supplier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"supplierId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"supplier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseSupplierFragment"}}]}}]}}]}},...PurchaseSupplierFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPurchaseSupplierQuery, GetPurchaseSupplierQueryVariables>;
export const GetPurchaseSuppliersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPurchaseSuppliers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suppliers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"suppliers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PurchaseSupplierFragment"}}]}}]}}]}},...PurchaseSupplierFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPurchaseSuppliersQuery, GetPurchaseSuppliersQueryVariables>;
export const NewRrhhContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewRrhhContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contact"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhContactInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contact"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhContactRrhhFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhContactSalesFragment"}}]}}]}}]}},...RrhhContactRrhhFragmentFragmentDoc.definitions,...RrhhContactSalesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<NewRrhhContactMutation, NewRrhhContactMutationVariables>;
export const UpdateRrhhContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRrhhContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contact"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhContactInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateContactId"}}},{"kind":"Argument","name":{"kind":"Name","value":"contact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contact"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhContactRrhhFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhContactSalesFragment"}}]}}]}}]}},...RrhhContactRrhhFragmentFragmentDoc.definitions,...RrhhContactSalesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UpdateRrhhContactMutation, UpdateRrhhContactMutationVariables>;
export const DeleteRrhhContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRrhhContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteContactId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteRrhhContactMutation, DeleteRrhhContactMutationVariables>;
export const GetRrhhContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRrhhContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contactId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhContactRrhhFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhContactSalesFragment"}}]}}]}}]}},...RrhhContactRrhhFragmentFragmentDoc.definitions,...RrhhContactSalesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetRrhhContactQuery, GetRrhhContactQueryVariables>;
export const GetRrhhContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRrhhContacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhContactRrhhFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhContactSalesFragment"}}]}}]}}]}},...RrhhContactRrhhFragmentFragmentDoc.definitions,...RrhhContactSalesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetRrhhContactsQuery, GetRrhhContactsQueryVariables>;
export const NewRrhhJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewRrhhJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"job"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhJobInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"job"},"value":{"kind":"Variable","name":{"kind":"Name","value":"job"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhJobFragment"}}]}}]}}]}},...RrhhJobFragmentFragmentDoc.definitions]} as unknown as DocumentNode<NewRrhhJobMutation, NewRrhhJobMutationVariables>;
export const UpdateRrhhJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRrhhJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateJobId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"job"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhJobInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateJobId"}}},{"kind":"Argument","name":{"kind":"Name","value":"job"},"value":{"kind":"Variable","name":{"kind":"Name","value":"job"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhJobFragment"}}]}}]}}]}},...RrhhJobFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UpdateRrhhJobMutation, UpdateRrhhJobMutationVariables>;
export const DeleteRrhhJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRrhhJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteJobId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteJobId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteRrhhJobMutation, DeleteRrhhJobMutationVariables>;
export const GetRrhhJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRrhhJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhJobFragment"}}]}}]}}]}},...RrhhJobFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetRrhhJobQuery, GetRrhhJobQueryVariables>;
export const GetRrhhJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRrhhJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"jobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhJobFragment"}}]}}]}}]}},...RrhhJobFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetRrhhJobsQuery, GetRrhhJobsQueryVariables>;
export const NewRrhhPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewRrhhPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permission"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhPermissionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"permission"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permission"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhPermissionFragment"}}]}}]}}]}},...RrhhPermissionFragmentFragmentDoc.definitions]} as unknown as DocumentNode<NewRrhhPermissionMutation, NewRrhhPermissionMutationVariables>;
export const UpdateRrhhPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRrhhPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePermissionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permission"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhPermissionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePermissionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"permission"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permission"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhPermissionFragment"}}]}}]}}]}},...RrhhPermissionFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UpdateRrhhPermissionMutation, UpdateRrhhPermissionMutationVariables>;
export const DeleteRrhhPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRrhhPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deletePermissionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deletePermissionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteRrhhPermissionMutation, DeleteRrhhPermissionMutationVariables>;
export const GetRrhPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRrhPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permissionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permissionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhPermissionFragment"}}]}}]}}]}},...RrhhPermissionFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetRrhPermissionQuery, GetRrhPermissionQueryVariables>;
export const GetRrhhPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRrhhPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhPermissionFragment"}}]}}]}}]}},...RrhhPermissionFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetRrhhPermissionsQuery, GetRrhhPermissionsQueryVariables>;
export const NewRrhhVacantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewRrhhVacant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vacant"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RrhhVacantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addVacant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"vacant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vacant"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vacant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhVacantFragment"}}]}}]}}]}},...RrhhVacantFragmentFragmentDoc.definitions]} as unknown as DocumentNode<NewRrhhVacantMutation, NewRrhhVacantMutationVariables>;
export const UpdateRrhhVacantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRrhhVacant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateVacantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vacant"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVacant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateVacantId"}}},{"kind":"Argument","name":{"kind":"Name","value":"vacant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vacant"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vacant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhVacantFragment"}}]}}]}}]}},...RrhhVacantFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UpdateRrhhVacantMutation, UpdateRrhhVacantMutationVariables>;
export const DeleteRrhhVacantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRrhhVacant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteVacantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteVacant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteVacantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteRrhhVacantMutation, DeleteRrhhVacantMutationVariables>;
export const GetRrhhVacantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRrhhVacant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vacantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vacant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vacantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vacant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhVacantFragment"}}]}}]}}]}},...RrhhVacantFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetRrhhVacantQuery, GetRrhhVacantQueryVariables>;
export const GetRrhhVacantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRrhhVacants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vacants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vacants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RrhhVacantFragment"}}]}}]}}]}},...RrhhVacantFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetRrhhVacantsQuery, GetRrhhVacantsQueryVariables>;
export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const NewUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]}},...UserFragmentFragmentDoc.definitions]} as unknown as DocumentNode<NewUserMutation, NewUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]}},...UserFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]}},...UserFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;