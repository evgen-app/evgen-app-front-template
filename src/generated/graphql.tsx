import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type CreateDoc = {
  __typename?: 'CreateDoc';
  document?: Maybe<MaterialType>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  ok?: Maybe<Scalars['Boolean']>;
};


export type DeleteDoc = {
  __typename?: 'DeleteDoc';
  ok?: Maybe<Scalars['Boolean']>;
};


export type MaterialType = Node & {
  __typename?: 'MaterialType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  content: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
};

export type MaterialTypeConnection = {
  __typename?: 'MaterialTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MaterialTypeEdge>>;
};

/** A Relay edge containing a `MaterialType` and its cursor. */
export type MaterialTypeEdge = {
  __typename?: 'MaterialTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<MaterialType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  createUser?: Maybe<CreateUser>;
  createDoc?: Maybe<CreateDoc>;
  updateDoc?: Maybe<UpdateDoc>;
  deleteDoc?: Maybe<DeleteDoc>;
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationCreateDocArgs = {
  content?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationUpdateDocArgs = {
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};


export type MutationDeleteDocArgs = {
  id?: Maybe<Scalars['ID']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  material?: Maybe<MaterialType>;
  materialsByUser?: Maybe<Array<Maybe<MaterialType>>>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryMaterialArgs = {
  id: Scalars['ID'];
};


export type QueryMaterialsByUserArgs = {
  token?: Maybe<Scalars['String']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type UpdateDoc = {
  __typename?: 'UpdateDoc';
  ok?: Maybe<Scalars['Boolean']>;
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  materialSet: MaterialTypeConnection;
};


export type UserTypeMaterialSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};


export const AuthDocument = gql`
    mutation auth($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
  }
}
    `;
export type AuthMutationFn = Apollo.MutationFunction<AuthMutation, AuthMutationVariables>;

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthMutation(baseOptions?: Apollo.MutationHookOptions<AuthMutation, AuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthMutation, AuthMutationVariables>(AuthDocument, options);
      }
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = Apollo.MutationResult<AuthMutation>;
export type AuthMutationOptions = Apollo.BaseMutationOptions<AuthMutation, AuthMutationVariables>;
export const RegisterDocument = gql`
    mutation register($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    ok
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetMaterialsDocument = gql`
    query getMaterials($token: String) {
  materialsByUser(token: $token) {
    name
    state
    content
    id
  }
}
    `;

/**
 * __useGetMaterialsQuery__
 *
 * To run a query within a React component, call `useGetMaterialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaterialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaterialsQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetMaterialsQuery(baseOptions?: Apollo.QueryHookOptions<GetMaterialsQuery, GetMaterialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaterialsQuery, GetMaterialsQueryVariables>(GetMaterialsDocument, options);
      }
export function useGetMaterialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaterialsQuery, GetMaterialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaterialsQuery, GetMaterialsQueryVariables>(GetMaterialsDocument, options);
        }
export type GetMaterialsQueryHookResult = ReturnType<typeof useGetMaterialsQuery>;
export type GetMaterialsLazyQueryHookResult = ReturnType<typeof useGetMaterialsLazyQuery>;
export type GetMaterialsQueryResult = Apollo.QueryResult<GetMaterialsQuery, GetMaterialsQueryVariables>;
export const UpdateDocDocument = gql`
    mutation UpdateDoc($id: ID, $content: String, $name: String, $state: String) {
  updateDoc(content: $content, id: $id, name: $name, state: $state) {
    ok
  }
}
    `;
export type UpdateDocMutationFn = Apollo.MutationFunction<UpdateDocMutation, UpdateDocMutationVariables>;

/**
 * __useUpdateDocMutation__
 *
 * To run a mutation, you first call `useUpdateDocMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDocMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDocMutation, { data, loading, error }] = useUpdateDocMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *      name: // value for 'name'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useUpdateDocMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDocMutation, UpdateDocMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDocMutation, UpdateDocMutationVariables>(UpdateDocDocument, options);
      }
export type UpdateDocMutationHookResult = ReturnType<typeof useUpdateDocMutation>;
export type UpdateDocMutationResult = Apollo.MutationResult<UpdateDocMutation>;
export type UpdateDocMutationOptions = Apollo.BaseMutationOptions<UpdateDocMutation, UpdateDocMutationVariables>;
export const DeleteDocDocument = gql`
    mutation DeleteDoc($id: ID) {
  deleteDoc(id: $id) {
    ok
  }
}
    `;
export type DeleteDocMutationFn = Apollo.MutationFunction<DeleteDocMutation, DeleteDocMutationVariables>;

/**
 * __useDeleteDocMutation__
 *
 * To run a mutation, you first call `useDeleteDocMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDocMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDocMutation, { data, loading, error }] = useDeleteDocMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDocMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDocMutation, DeleteDocMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDocMutation, DeleteDocMutationVariables>(DeleteDocDocument, options);
      }
export type DeleteDocMutationHookResult = ReturnType<typeof useDeleteDocMutation>;
export type DeleteDocMutationResult = Apollo.MutationResult<DeleteDocMutation>;
export type DeleteDocMutationOptions = Apollo.BaseMutationOptions<DeleteDocMutation, DeleteDocMutationVariables>;
export const GetMaterialByIdDocument = gql`
    query getMaterialByID($id: ID!) {
  material(id: $id) {
    name
    state
  }
}
    `;

/**
 * __useGetMaterialByIdQuery__
 *
 * To run a query within a React component, call `useGetMaterialByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaterialByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaterialByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMaterialByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMaterialByIdQuery, GetMaterialByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaterialByIdQuery, GetMaterialByIdQueryVariables>(GetMaterialByIdDocument, options);
      }
export function useGetMaterialByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaterialByIdQuery, GetMaterialByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaterialByIdQuery, GetMaterialByIdQueryVariables>(GetMaterialByIdDocument, options);
        }
export type GetMaterialByIdQueryHookResult = ReturnType<typeof useGetMaterialByIdQuery>;
export type GetMaterialByIdLazyQueryHookResult = ReturnType<typeof useGetMaterialByIdLazyQuery>;
export type GetMaterialByIdQueryResult = Apollo.QueryResult<GetMaterialByIdQuery, GetMaterialByIdQueryVariables>;
export const CreateDocDocument = gql`
    mutation CreateDoc($token: String, $name: String) {
  createDoc(
    token: $token
    content: "Это новый документ!"
    name: $name
    state: "{\\"blocks\\":[{\\"key\\":\\"637gr\\",\\"text\\":\\"Это новый документ!\\",\\"type\\":\\"unstyled\\",\\"depth\\":0,\\"inlineStyleRanges\\":[],\\"entityRanges\\":[],\\"data\\":{}}],\\"entityMap\\":{}}"
  ) {
    document {
      id
    }
  }
}
    `;
export type CreateDocMutationFn = Apollo.MutationFunction<CreateDocMutation, CreateDocMutationVariables>;

/**
 * __useCreateDocMutation__
 *
 * To run a mutation, you first call `useCreateDocMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDocMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDocMutation, { data, loading, error }] = useCreateDocMutation({
 *   variables: {
 *      token: // value for 'token'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateDocMutation(baseOptions?: Apollo.MutationHookOptions<CreateDocMutation, CreateDocMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDocMutation, CreateDocMutationVariables>(CreateDocDocument, options);
      }
export type CreateDocMutationHookResult = ReturnType<typeof useCreateDocMutation>;
export type CreateDocMutationResult = Apollo.MutationResult<CreateDocMutation>;
export type CreateDocMutationOptions = Apollo.BaseMutationOptions<CreateDocMutation, CreateDocMutationVariables>;
export type AuthMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthMutation = { __typename?: 'Mutation', tokenAuth?: Maybe<{ __typename?: 'ObtainJSONWebToken', token: string }> };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUser?: Maybe<{ __typename?: 'CreateUser', ok?: Maybe<boolean> }> };

export type GetMaterialsQueryVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type GetMaterialsQuery = { __typename?: 'Query', materialsByUser?: Maybe<Array<Maybe<{ __typename?: 'MaterialType', name: string, state: string, content: string, id: string }>>> };

export type UpdateDocMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
}>;


export type UpdateDocMutation = { __typename?: 'Mutation', updateDoc?: Maybe<{ __typename?: 'UpdateDoc', ok?: Maybe<boolean> }> };

export type DeleteDocMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;


export type DeleteDocMutation = { __typename?: 'Mutation', deleteDoc?: Maybe<{ __typename?: 'DeleteDoc', ok?: Maybe<boolean> }> };

export type GetMaterialByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMaterialByIdQuery = { __typename?: 'Query', material?: Maybe<{ __typename?: 'MaterialType', name: string, state: string }> };

export type CreateDocMutationVariables = Exact<{
  token?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}>;


export type CreateDocMutation = { __typename?: 'Mutation', createDoc?: Maybe<{ __typename?: 'CreateDoc', document?: Maybe<{ __typename?: 'MaterialType', id: string }> }> };
