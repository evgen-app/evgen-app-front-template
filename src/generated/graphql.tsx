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
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
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
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
};

export type AddGroupToOrg = {
  __typename?: 'AddGroupToOrg';
  group?: Maybe<GroupType>;
};

export type AddSubjectToTeacher = {
  __typename?: 'AddSubjectToTeacher';
  teacher?: Maybe<TeacherType>;
};

export type AnswerQuestion = {
  __typename?: 'AnswerQuestion';
  answer?: Maybe<AnswerType>;
};

export type AnswerSheetType = Node & {
  __typename?: 'AnswerSheetType';
  /** The ID of the object. */
  id: Scalars['ID'];
  child: ChildType;
  completed: Scalars['Boolean'];
  test: TestsType;
  answerSet: AnswerTypeConnection;
};


export type AnswerSheetTypeAnswerSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sheet?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
};

export type AnswerSheetTypeConnection = {
  __typename?: 'AnswerSheetTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnswerSheetTypeEdge>>;
};

/** A Relay edge containing a `AnswerSheetType` and its cursor. */
export type AnswerSheetTypeEdge = {
  __typename?: 'AnswerSheetTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AnswerSheetType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AnswerType = Node & {
  __typename?: 'AnswerType';
  /** The ID of the object. */
  id: Scalars['ID'];
  sheet: AnswerSheetType;
  content: Scalars['String'];
  number: Scalars['Int'];
  completed: Scalars['Boolean'];
  score: Scalars['Int'];
  pk?: Maybe<Scalars['Int']>;
};

export type AnswerTypeConnection = {
  __typename?: 'AnswerTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnswerTypeEdge>>;
};

/** A Relay edge containing a `AnswerType` and its cursor. */
export type AnswerTypeEdge = {
  __typename?: 'AnswerTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AnswerType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ChangeMaterail = {
  __typename?: 'ChangeMaterail';
  material?: Maybe<Material>;
};

export type ChildType = Node & {
  __typename?: 'ChildType';
  /** The ID of the object. */
  id: Scalars['ID'];
  profile: ProfileType;
  org: OrganisationType;
  groups: GroupTypeConnection;
  name: Scalars['String'];
  surname: Scalars['String'];
  midname: Scalars['String'];
  answersheetSet: AnswerSheetTypeConnection;
  hyperlink?: Maybe<HyperLinkType>;
  pk?: Maybe<Scalars['Int']>;
};


export type ChildTypeGroupsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type ChildTypeAnswersheetSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ChildTypeConnection = {
  __typename?: 'ChildTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChildTypeEdge>>;
};

/** A Relay edge containing a `ChildType` and its cursor. */
export type ChildTypeEdge = {
  __typename?: 'ChildTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ChildType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CreateAnswer = {
  __typename?: 'CreateAnswer';
  answer?: Maybe<AnswerType>;
};

export type CreateAnwerSheet = {
  __typename?: 'CreateAnwerSheet';
  answer?: Maybe<AnswerSheetType>;
};

export type CreateGroup = {
  __typename?: 'CreateGroup';
  group?: Maybe<GroupType>;
};

export type CreateLesson = {
  __typename?: 'CreateLesson';
  ok?: Maybe<Scalars['Boolean']>;
  lesson?: Maybe<LessonType>;
};

export type CreateMaterial = {
  __typename?: 'CreateMaterial';
  material?: Maybe<Material>;
};

export type CreateOrg = {
  __typename?: 'CreateOrg';
  Org?: Maybe<OrganisationType>;
};

export type CreateSubject = {
  __typename?: 'CreateSubject';
  subject?: Maybe<SubjectType>;
};

export type CreateSubjectClass = {
  __typename?: 'CreateSubjectClass';
  subjectClass?: Maybe<LocalSubjectType>;
};

export type CreateTest = {
  __typename?: 'CreateTest';
  test?: Maybe<TestsType>;
};



export type DeleteChildGroup = {
  __typename?: 'DeleteChildGroup';
  modelType?: Maybe<ChildType>;
};

export type DeleteGroup = {
  __typename?: 'DeleteGroup';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DeleteLesson = {
  __typename?: 'DeleteLesson';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DeleteMaterial = {
  __typename?: 'DeleteMaterial';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DeleteSubject = {
  __typename?: 'DeleteSubject';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DeleteSubjectLocal = {
  __typename?: 'DeleteSubjectLocal';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DeleteTeacherClass = {
  __typename?: 'DeleteTeacherClass';
  teacher?: Maybe<TeacherType>;
};


export type GroupType = Node & {
  __typename?: 'GroupType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  org: OrganisationType;
  teacherSet: TeacherTypeConnection;
  childSet: ChildTypeConnection;
  organisatorSet: OrganisatorTypeConnection;
  subjectclasslocalSet: LocalSubjectTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  classes?: Maybe<Array<Maybe<LocalSubjectType>>>;
  childrenLen?: Maybe<Scalars['Int']>;
};


export type GroupTypeTeacherSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type GroupTypeChildSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type GroupTypeOrganisatorSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type GroupTypeSubjectclasslocalSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
};

export type GroupTypeConnection = {
  __typename?: 'GroupTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GroupTypeEdge>>;
};

/** A Relay edge containing a `GroupType` and its cursor. */
export type GroupTypeEdge = {
  __typename?: 'GroupTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<GroupType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type HyperLinkType = {
  __typename?: 'HyperLinkType';
  link: Scalars['UUID'];
  teacher?: Maybe<TeacherType>;
  child?: Maybe<ChildType>;
  organ?: Maybe<OrganisatorType>;
};

export type LessonType = Node & {
  __typename?: 'LessonType';
  /** The ID of the object. */
  id: Scalars['ID'];
  typeLesson: LocalSubjectType;
  name: Scalars['String'];
  descr: Scalars['String'];
  content: Scalars['String'];
  timeLesson: Scalars['DateTime'];
  materialsSet: MaterialConnection;
  testsSet: TestsTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  tests?: Maybe<Array<Maybe<TestsType>>>;
  testsLen?: Maybe<Scalars['Int']>;
  materialsLen?: Maybe<Scalars['Int']>;
  materials?: Maybe<Array<Maybe<Material>>>;
};


export type LessonTypeMaterialsSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type LessonTypeTestsSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
};

export type LessonTypeConnection = {
  __typename?: 'LessonTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LessonTypeEdge>>;
};

/** A Relay edge containing a `LessonType` and its cursor. */
export type LessonTypeEdge = {
  __typename?: 'LessonTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<LessonType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type LocalSubjectType = Node & {
  __typename?: 'LocalSubjectType';
  /** The ID of the object. */
  id: Scalars['ID'];
  subject: SubjectType;
  teachers: TeacherTypeConnection;
  group: GroupType;
  name: Scalars['String'];
  lessonSet: LessonTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  teachersSet?: Maybe<Array<Maybe<TeacherType>>>;
  lessonsLen?: Maybe<Scalars['Int']>;
};


export type LocalSubjectTypeTeachersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type LocalSubjectTypeLessonSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  descr?: Maybe<Scalars['String']>;
  descr_Contains?: Maybe<Scalars['String']>;
};

export type LocalSubjectTypeConnection = {
  __typename?: 'LocalSubjectTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LocalSubjectTypeEdge>>;
};

/** A Relay edge containing a `LocalSubjectType` and its cursor. */
export type LocalSubjectTypeEdge = {
  __typename?: 'LocalSubjectTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<LocalSubjectType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Material = Node & {
  __typename?: 'Material';
  /** The ID of the object. */
  id: Scalars['ID'];
  link: Scalars['String'];
  name: Scalars['String'];
  data: Scalars['String'];
  Type: Scalars['String'];
  lesson: LessonType;
};

export type MaterialConnection = {
  __typename?: 'MaterialConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MaterialEdge>>;
};

/** A Relay edge containing a `Material` and its cursor. */
export type MaterialEdge = {
  __typename?: 'MaterialEdge';
  /** The item at the end of the edge */
  node?: Maybe<Material>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  getProfile?: Maybe<GetProfile>;
  createLesson?: Maybe<CreateLesson>;
  updateLessonRegistration?: Maybe<UpdateLessonRegistration>;
  deleteLesson?: Maybe<DeleteLesson>;
  createTest?: Maybe<CreateTest>;
  updateTestRegistration?: Maybe<UpdateTestRegistration>;
  deleteTest?: Maybe<DeleteTest>;
  createTask?: Maybe<CreateTask>;
  updateTask?: Maybe<UpdateTask>;
  deleteTask?: Maybe<DeleteTask>;
  addChildToGroup?: Maybe<AddChildToGroup>;
  addChildToOrg?: Maybe<AddChildToOrg>;
  createSubjectClass?: Maybe<CreateSubjectClass>;
  updateSubjectClass?: Maybe<UpdateSubjectLocalReg>;
  deleteSubjectClass?: Maybe<DeleteSubjectLocal>;
  createSubject?: Maybe<CreateSubject>;
  updateSubject?: Maybe<UpdateSubjectReg>;
  deleteSubject?: Maybe<DeleteSubject>;
  addSubjectToTeacher?: Maybe<AddSubjectToTeacher>;
  removeSubjectFromTeacher?: Maybe<RemoveSubjectFromTeacher>;
  answerQuestion?: Maybe<AnswerQuestion>;
  createMaterial?: Maybe<CreateMaterial>;
  deleteMaterial?: Maybe<DeleteMaterial>;
  changeMaterial?: Maybe<ChangeMaterail>;
  createAnwerSheet?: Maybe<CreateAnwerSheet>;
  createAnswer?: Maybe<CreateAnswer>;
  scoringTasks?: Maybe<ScoringTasks>;
  createOrg?: Maybe<CreateOrg>;
  createGroup?: Maybe<CreateGroup>;
  addGroupToOrg?: Maybe<AddGroupToOrg>;
  deleteGroup?: Maybe<DeleteGroup>;
  regTeacherOrg?: Maybe<RegTeacherToOrg>;
  regChildOrg?: Maybe<RegChildToOrg>;
  regChildGroup?: Maybe<RegChildGroup>;
  deleteChildGroup?: Maybe<DeleteChildGroup>;
  regTeacherClass?: Maybe<RegTeacherClass>;
  deleteTeacherClass?: Maybe<DeleteTeacherClass>;
  regOrganisatorToOrg?: Maybe<RegOrganisatorToOrg>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  registerUser?: Maybe<RegisterUser>;
};


export type MutationGetProfileArgs = {
  profileToken?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationCreateLessonArgs = {
  descr?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['ID']>;
};


export type MutationUpdateLessonRegistrationArgs = {
  descr?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteLessonArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationCreateTestArgs = {
  deadline?: Maybe<Scalars['Date']>;
  lessonId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateTestRegistrationArgs = {
  deadline?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteTestArgs = {
  testId?: Maybe<Scalars['ID']>;
};


export type MutationCreateTaskArgs = {
  Type?: Maybe<Scalars['String']>;
  maxScore?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  practise?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['ID']>;
  theory?: Maybe<Scalars['String']>;
};


export type MutationUpdateTaskArgs = {
  Type?: Maybe<Scalars['ID']>;
  autoCheck?: Maybe<Scalars['Boolean']>;
  autoCheckData?: Maybe<Scalars['String']>;
  isTime?: Maybe<Scalars['Boolean']>;
  maxScore?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  practise?: Maybe<Scalars['String']>;
  taskId?: Maybe<Scalars['ID']>;
  theory?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Int']>;
};


export type MutationDeleteTaskArgs = {
  taskId?: Maybe<Scalars['ID']>;
};


export type MutationAddChildToGroupArgs = {
  childId?: Maybe<Scalars['ID']>;
  groupId?: Maybe<Scalars['ID']>;
};


export type MutationAddChildToOrgArgs = {
  childId?: Maybe<Scalars['ID']>;
  midname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
  surname?: Maybe<Scalars['String']>;
};


export type MutationCreateSubjectClassArgs = {
  groupId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateSubjectClassArgs = {
  name?: Maybe<Scalars['String']>;
  subjectLocalId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteSubjectClassArgs = {
  subjectLocalId?: Maybe<Scalars['ID']>;
};


export type MutationCreateSubjectArgs = {
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateSubjectArgs = {
  name?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteSubjectArgs = {
  subjectId?: Maybe<Scalars['ID']>;
};


export type MutationAddSubjectToTeacherArgs = {
  subjectId?: Maybe<Scalars['ID']>;
  teacherId?: Maybe<Scalars['ID']>;
};


export type MutationRemoveSubjectFromTeacherArgs = {
  subjectId?: Maybe<Scalars['ID']>;
  teacherId?: Maybe<Scalars['ID']>;
};


export type MutationAnswerQuestionArgs = {
  answer?: Maybe<Scalars['String']>;
  answerTableId?: Maybe<Scalars['ID']>;
};


export type MutationCreateMaterialArgs = {
  data?: Maybe<Scalars['String']>;
  lessonType?: Maybe<Scalars['String']>;
  lessonId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteMaterialArgs = {
  materialId?: Maybe<Scalars['ID']>;
};


export type MutationChangeMaterialArgs = {
  data?: Maybe<Scalars['String']>;
  materialId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationCreateAnwerSheetArgs = {
  child?: Maybe<Scalars['ID']>;
  test?: Maybe<Scalars['ID']>;
};


export type MutationCreateAnswerArgs = {
  data?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  sheet?: Maybe<Scalars['ID']>;
};


export type MutationScoringTasksArgs = {
  answerSheetId?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};


export type MutationCreateOrgArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationCreateGroupArgs = {
  groupName?: Maybe<Scalars['String']>;
  orgName?: Maybe<Scalars['String']>;
};


export type MutationAddGroupToOrgArgs = {
  groupName?: Maybe<Scalars['String']>;
  orgName?: Maybe<Scalars['String']>;
};


export type MutationDeleteGroupArgs = {
  groupName?: Maybe<Scalars['String']>;
  orgName?: Maybe<Scalars['String']>;
};


export type MutationRegTeacherOrgArgs = {
  midname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
  surname?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationRegChildOrgArgs = {
  midname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
  surname?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationRegChildGroupArgs = {
  groupId?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteChildGroupArgs = {
  groupId?: Maybe<Scalars['ID']>;
  modelId?: Maybe<Scalars['ID']>;
};


export type MutationRegTeacherClassArgs = {
  classId?: Maybe<Scalars['ID']>;
  teacherId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteTeacherClassArgs = {
  classId?: Maybe<Scalars['ID']>;
  teacherId?: Maybe<Scalars['ID']>;
};


export type MutationRegOrganisatorToOrgArgs = {
  midname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
  surname?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
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


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
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

export type OrganisationType = Node & {
  __typename?: 'OrganisationType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  groupSet: GroupTypeConnection;
  teacherSet: TeacherTypeConnection;
  childSet: ChildTypeConnection;
  organisatorSet: OrganisatorTypeConnection;
  subjectSet: SubjectTypeConnection;
  childrenLength?: Maybe<Scalars['Int']>;
  classesLength?: Maybe<Scalars['Int']>;
  subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrganisationTypeGroupSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type OrganisationTypeTeacherSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type OrganisationTypeChildSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type OrganisationTypeOrganisatorSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type OrganisationTypeSubjectSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['ID']>;
  teachersGive_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type OrganisationTypeConnection = {
  __typename?: 'OrganisationTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrganisationTypeEdge>>;
};

/** A Relay edge containing a `OrganisationType` and its cursor. */
export type OrganisationTypeEdge = {
  __typename?: 'OrganisationTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<OrganisationType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type OrganisatorType = Node & {
  __typename?: 'OrganisatorType';
  /** The ID of the object. */
  id: Scalars['ID'];
  profile: ProfileType;
  org: OrganisationType;
  groups: GroupTypeConnection;
  name: Scalars['String'];
  surname: Scalars['String'];
  midname: Scalars['String'];
  hyperlink?: Maybe<HyperLinkType>;
};


export type OrganisatorTypeGroupsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};

export type OrganisatorTypeConnection = {
  __typename?: 'OrganisatorTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrganisatorTypeEdge>>;
};

/** A Relay edge containing a `OrganisatorType` and its cursor. */
export type OrganisatorTypeEdge = {
  __typename?: 'OrganisatorTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<OrganisatorType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
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

export type ProfileType = Node & {
  __typename?: 'ProfileType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  teacherSet: TeacherTypeConnection;
  childSet: ChildTypeConnection;
  organisatorSet: OrganisatorTypeConnection;
  pk?: Maybe<Scalars['Int']>;
};


export type ProfileTypeTeacherSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileTypeChildSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileTypeOrganisatorSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ProfileTypeConnection = {
  __typename?: 'ProfileTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileTypeEdge>>;
};

/** A Relay edge containing a `ProfileType` and its cursor. */
export type ProfileTypeEdge = {
  __typename?: 'ProfileTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProfileType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hyperLinks?: Maybe<Array<Maybe<HyperLinkType>>>;
  allTest?: Maybe<TestsTypeConnection>;
  /** The ID of the object */
  test?: Maybe<TestsType>;
  allSubject?: Maybe<SubjectTypeConnection>;
  /** The ID of the object */
  subject?: Maybe<SubjectType>;
  /** The ID of the object */
  answerSheet?: Maybe<AnswerSheetType>;
  allAnswerSheet?: Maybe<AnswerSheetTypeConnection>;
  /** The ID of the object */
  answer?: Maybe<AnswerType>;
  allAnswer?: Maybe<AnswerTypeConnection>;
  allLessons?: Maybe<LessonTypeConnection>;
  /** The ID of the object */
  lessons?: Maybe<LessonType>;
  /** The ID of the object */
  subjectClass?: Maybe<LocalSubjectType>;
  subjectClasses?: Maybe<LocalSubjectTypeConnection>;
  materials?: Maybe<MaterialConnection>;
  /** The ID of the object */
  material?: Maybe<Material>;
  /** The ID of the object */
  gettaskType?: Maybe<TaskTypeType>;
  taskTypes?: Maybe<TaskTypeTypeConnection>;
  tasks?: Maybe<TaskTypeConnection>;
  /** The ID of the object */
  task?: Maybe<TaskType>;
  roles?: Maybe<Array<Maybe<RoleType>>>;
  organisations?: Maybe<OrganisationTypeConnection>;
  /** The ID of the object */
  organisation?: Maybe<OrganisationType>;
  teachers?: Maybe<TeacherTypeConnection>;
  /** The ID of the object */
  teacher?: Maybe<TeacherType>;
  children?: Maybe<ChildTypeConnection>;
  /** The ID of the object */
  child?: Maybe<ChildType>;
  /** The ID of the object */
  group?: Maybe<GroupType>;
  groups?: Maybe<GroupTypeConnection>;
  hello?: Maybe<Scalars['String']>;
  userInfo?: Maybe<UserType>;
  /** The ID of the object */
  profile?: Maybe<ProfileType>;
  allProfiles?: Maybe<ProfileTypeConnection>;
};


export type QueryAllTestArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
};


export type QueryTestArgs = {
  id: Scalars['ID'];
};


export type QueryAllSubjectArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['ID']>;
  teachersGive_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QuerySubjectArgs = {
  id: Scalars['ID'];
};


export type QueryAnswerSheetArgs = {
  id: Scalars['ID'];
};


export type QueryAllAnswerSheetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAnswerArgs = {
  id: Scalars['ID'];
};


export type QueryAllAnswerArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sheet?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
};


export type QueryAllLessonsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  descr?: Maybe<Scalars['String']>;
  descr_Contains?: Maybe<Scalars['String']>;
};


export type QueryLessonsArgs = {
  id: Scalars['ID'];
};


export type QuerySubjectClassArgs = {
  id: Scalars['ID'];
};


export type QuerySubjectClassesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
};


export type QueryMaterialsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryMaterialArgs = {
  id: Scalars['ID'];
};


export type QueryGettaskTypeArgs = {
  id: Scalars['ID'];
};


export type QueryTaskTypesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTasksArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  test?: Maybe<Array<Maybe<Scalars['ID']>>>;
  types_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
  number?: Maybe<Scalars['Int']>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type QueryOrganisationArgs = {
  id: Scalars['ID'];
};


export type QueryTeachersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryTeacherArgs = {
  id: Scalars['ID'];
};


export type QueryChildrenArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryChildArgs = {
  id: Scalars['ID'];
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryGroupsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type QueryHelloArgs = {
  token: Scalars['String'];
};


export type QueryUserInfoArgs = {
  token: Scalars['String'];
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAllProfilesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user_Username?: Maybe<Scalars['String']>;
  user_Username_Contains?: Maybe<Scalars['String']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type RegChildGroup = {
  __typename?: 'RegChildGroup';
  modelType?: Maybe<ChildType>;
};

export type RegChildToOrg = {
  __typename?: 'RegChildToOrg';
  modelType?: Maybe<ChildType>;
};

export type RegOrganisatorToOrg = {
  __typename?: 'RegOrganisatorToOrg';
  modelType?: Maybe<OrganisatorType>;
};

export type RegTeacherClass = {
  __typename?: 'RegTeacherClass';
  teacher?: Maybe<TeacherType>;
};

export type RegTeacherToOrg = {
  __typename?: 'RegTeacherToOrg';
  modelType?: Maybe<TeacherType>;
};

export type RegisterUser = {
  __typename?: 'RegisterUser';
  ok?: Maybe<Scalars['Boolean']>;
};

export type RegisterUserInput = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type RemoveSubjectFromTeacher = {
  __typename?: 'RemoveSubjectFromTeacher';
  teacher?: Maybe<TeacherType>;
};

export type RoleType = {
  __typename?: 'RoleType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ScoringTasks = {
  __typename?: 'ScoringTasks';
  answer?: Maybe<AnswerType>;
};

export type SubjectType = Node & {
  __typename?: 'SubjectType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  organisation: OrganisationType;
  teachersGive: TeacherTypeConnection;
  subjectclasslocalSet: LocalSubjectTypeConnection;
  pk?: Maybe<Scalars['Int']>;
};


export type SubjectTypeTeachersGiveArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type SubjectTypeSubjectclasslocalSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
};

export type SubjectTypeConnection = {
  __typename?: 'SubjectTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SubjectTypeEdge>>;
};

/** A Relay edge containing a `SubjectType` and its cursor. */
export type SubjectTypeEdge = {
  __typename?: 'SubjectTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<SubjectType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TaskType = Node & {
  __typename?: 'TaskType';
  /** The ID of the object. */
  id: Scalars['ID'];
  theory: Scalars['String'];
  practise: Scalars['String'];
  test: TestsTypeConnection;
  number: Scalars['Int'];
  maxScore: Scalars['Int'];
  isTiming: Scalars['Boolean'];
  time: Scalars['Int'];
  Type: TaskTypeType;
  isAutocheck: Scalars['Boolean'];
  autoCheckData: Scalars['String'];
  pk?: Maybe<Scalars['Int']>;
};


export type TaskTypeTestArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
};

export type TaskTypeConnection = {
  __typename?: 'TaskTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TaskTypeEdge>>;
};

/** A Relay edge containing a `TaskType` and its cursor. */
export type TaskTypeEdge = {
  __typename?: 'TaskTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TaskType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TaskTypeType = Node & {
  __typename?: 'TaskTypeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  taskSet: TaskTypeConnection;
};


export type TaskTypeTypeTaskSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  test?: Maybe<Array<Maybe<Scalars['ID']>>>;
  types_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
  number?: Maybe<Scalars['Int']>;
};

export type TaskTypeTypeConnection = {
  __typename?: 'TaskTypeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TaskTypeTypeEdge>>;
};

/** A Relay edge containing a `TaskTypeType` and its cursor. */
export type TaskTypeTypeEdge = {
  __typename?: 'TaskTypeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TaskTypeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TeacherType = Node & {
  __typename?: 'TeacherType';
  /** The ID of the object. */
  id: Scalars['ID'];
  org: OrganisationType;
  profile: ProfileType;
  groups: GroupTypeConnection;
  name: Scalars['String'];
  surname: Scalars['String'];
  midname: Scalars['String'];
  subjectSet: SubjectTypeConnection;
  subjectclasslocalSet: LocalSubjectTypeConnection;
  hyperlink?: Maybe<HyperLinkType>;
  pk?: Maybe<Scalars['Int']>;
};


export type TeacherTypeGroupsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type TeacherTypeSubjectSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['ID']>;
  teachersGive_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type TeacherTypeSubjectclasslocalSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
};

export type TeacherTypeConnection = {
  __typename?: 'TeacherTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TeacherTypeEdge>>;
};

/** A Relay edge containing a `TeacherType` and its cursor. */
export type TeacherTypeEdge = {
  __typename?: 'TeacherTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TeacherType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TestsType = Node & {
  __typename?: 'TestsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  deadline: Scalars['DateTime'];
  lesson: LessonType;
  isTiming: Scalars['Boolean'];
  timeSec: Scalars['Int'];
  taskSet: TaskTypeConnection;
  answersheetSet: AnswerSheetTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  taskLen?: Maybe<Scalars['Int']>;
  answerLen?: Maybe<Scalars['Int']>;
};


export type TestsTypeTaskSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  test?: Maybe<Array<Maybe<Scalars['ID']>>>;
  types_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
  number?: Maybe<Scalars['Int']>;
};


export type TestsTypeAnswersheetSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TestsTypeConnection = {
  __typename?: 'TestsTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TestsTypeEdge>>;
};

/** A Relay edge containing a `TestsType` and its cursor. */
export type TestsTypeEdge = {
  __typename?: 'TestsTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TestsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};


export type UpdateLessonRegistration = {
  __typename?: 'UpdateLessonRegistration';
  ok?: Maybe<Scalars['Boolean']>;
};

export type UpdateSubjectLocalReg = {
  __typename?: 'UpdateSubjectLocalReg';
  subjectLocal?: Maybe<LocalSubjectType>;
};

export type UpdateSubjectReg = {
  __typename?: 'UpdateSubjectReg';
  subject?: Maybe<SubjectType>;
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
  profile?: Maybe<ProfileType>;
  pk?: Maybe<Scalars['Int']>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type AddChildToGroup = {
  __typename?: 'addChildToGroup';
  child?: Maybe<ChildType>;
};

export type AddChildToOrg = {
  __typename?: 'addChildToOrg';
  child?: Maybe<ChildType>;
};

export type CreateTask = {
  __typename?: 'createTask';
  task?: Maybe<TaskType>;
};

export type DeleteTask = {
  __typename?: 'deleteTask';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DeleteTest = {
  __typename?: 'deleteTest';
  ok?: Maybe<Scalars['Boolean']>;
};

export type GetProfile = {
  __typename?: 'getProfile';
  id?: Maybe<Scalars['ID']>;
  userType?: Maybe<Scalars['String']>;
};

export type UpdateTask = {
  __typename?: 'updateTask';
  task?: Maybe<TaskType>;
};

export type UpdateTestRegistration = {
  __typename?: 'updateTestRegistration';
  test?: Maybe<TestsType>;
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
  registerUser(input: {username: $username, password: $password}) {
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
export type AuthMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthMutation = { __typename?: 'Mutation', tokenAuth?: Maybe<{ __typename?: 'ObtainJSONWebToken', token: string }> };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerUser?: Maybe<{ __typename?: 'RegisterUser', ok?: Maybe<boolean> }> };
