import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** YYYY-MM-DDTHH:MM:SS.mmm+ZZ:ZZ */
  Timestamp: { input: any; output: any; }
  /** https://.../... */
  Url: { input: any; output: any; }
};

export enum AccessInterface {
  Api = 'API',
  App = 'APP',
  Telegram = 'TELEGRAM',
  Viber = 'VIBER',
  Web = 'WEB'
}

/** Single email address attached to the session */
export type Address = Node & {
  __typename?: 'Address';
  /** Email address string <login>@<domain> */
  address: Scalars['String']['output'];
  /** <domain> part of .address. Note: it's not domain name string! It's `Domain` object! */
  domain: Domain;
  id: Scalars['ID']['output'];
  /** List of all emails received by this address. It's recommended to use Session.mails instead */
  mails?: Maybe<Array<Maybe<Mail>>>;
  /** Key that can be used to restore the access to this address after session terminated. See MutationRoot.restoreAddress */
  restoreKey: Scalars['String']['output'];
};

/** Single email attachment */
export type Attachment = Node & {
  __typename?: 'Attachment';
  /** Raw attachment body can be downloaded by this URL */
  downloadUrl: Scalars['Url']['output'];
  id: Scalars['ID']['output'];
  /** MIME-type of the attached file */
  mime: Scalars['String']['output'];
  /** Name of the attached file */
  name?: Maybe<Scalars['String']['output']>;
  /** Raw contents of the attachment (only when it's utf8 plaintext) */
  raw: Scalars['String']['output'];
  /** Size of the raw payload */
  rawSize: Scalars['Int']['output'];
};

export enum DecodeStatus {
  ErrorDecoding = 'ERROR_DECODING',
  Ok = 'OK'
}

/**
 * Input for `deleteAddress` mutation.
 * Only takes addressId - ID of the address to be removed
 */
export type DeleteAddressInput = {
  /** ID of the Address to delete */
  addressId: Scalars['ID']['input'];
};

/** Domain name that is available for mailbox registration */
export type Domain = Node & {
  __typename?: 'Domain';
  /**
   * List of interfaces the domain is available through.
   * When domain is not available via some interface, it means `Address` can not be created or restored
   * via this interface.
   */
  availableVia: Array<Maybe<AccessInterface>>;
  id: Scalars['ID']['output'];
  /** Timestamp of when this domain was first introduced in dropmail.me (how old is this domain) */
  introducedAt: Scalars['Timestamp']['output'];
  /** Fully-qualified domain name */
  name: Scalars['String']['output'];
};

/** Configuration input object for Mail.sanitizedHtml attribute. */
export type HtmlSanitizerConfig = {
  /**
   * What to do with `<img src='cid:...' />` RFC-2392 attribute?
   * * \"strip\" - remove completely
   * * \"keep\" - keep unchanged
   * * \"proxy\" - replace it with a special dropmail.me link that will serve the content of this CID
   *               as long as the session is alive
   */
  imgCid?: InputMaybe<Scalars['String']['input']>;
  /**
   * What to do with `<img src='data:...' />` attribute?
   * * \"strip\" - remove completely
   * * \"keep\" - keep unchanged
   */
  imgData?: InputMaybe<Scalars['String']['input']>;
  /**
   * What to do with `<img src='http://...' />` / `<img src='https://...' />` attribute?
   * * \"strip\" - remove completely
   * * \"keep\" - keep unchanged
   * * \"proxy\" - replace it with a special dropmail.me link that will anonymously proxy the content
   *               of this link as long as the session is alive
   * XXX: `keep` and `proxy` may let sender track the fact that user opened the email
   */
  imgHttp?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Input for `introduceAddress` mutation to create and attach new address to already existing session.
 * Allows to tell to which session it should attach the address and (optionally) what domain to use for address creation.
 */
export type IntroduceAddressInput = {
  /** Create address in this domain */
  domainId?: InputMaybe<Scalars['ID']['input']>;
  /** Add address to this session */
  sessionId: Scalars['ID']['input'];
};

/**
 * Input for `introduceSession` mutation to define specific options for the new session.
 * Mainly - to configure email address attached to session at creation (if any).
 */
export type IntroduceSessionInput = {
  /** ID of the domain where to create a new address. Random domain will be used if not specified */
  domainId?: InputMaybe<Scalars['ID']['input']>;
  /** Should a new address being added to the session when started? Otherwise use `introduceAddress` */
  withAddress?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Single email received by the session */
export type Mail = Node & {
  __typename?: 'Mail';
  /** List of mail's attachents, if any and only when decodeStatus is STRICT */
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  /** Reflects the extent to which this MIME mail was decoded (not all emails are valid MIME, so sometimes we are not able to decode them) */
  decodeStatus: DecodeStatus;
  /** Similar to `sanitizedHtml`, but returns an URL where that same sanitized HTML can be downloaded. */
  downloadSanitizedHtmlUrl?: Maybe<Scalars['Url']['output']>;
  /** Raw email (same as `raw` field) can be downloaded from this URL */
  downloadUrl: Scalars['Url']['output'];
  /** Value of SMTP `RCPT TO` command */
  fromAddr: Scalars['String']['output'];
  /**
   * `true` if email has text/html body version.
   * `false` when there is no HTML version
   * `null` when `decodeStatus` is ERROR_DECODING
   */
  hasHtml?: Maybe<Scalars['Boolean']['output']>;
  /** Value of MIME `From` header (only when decodeStatus is OK) */
  headerFrom?: Maybe<Scalars['String']['output']>;
  /** Value of MIME `Subject` header (only when decodeStatus is OK) */
  headerSubject?: Maybe<Scalars['String']['output']>;
  /** If MIME has HTML version, this field contains raw value of this HTML */
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Raw contents of the email exactly as it was received */
  raw: Scalars['String']['output'];
  /** Size of `raw` field */
  rawSize: Scalars['Int']['output'];
  /** timestamp of when this email was received */
  receivedAt: Scalars['Timestamp']['output'];
  /**
   * If MIME has HTML version, this field contains sanitized version of this HTML:
   * * `<script>` tags are cleaned
   * * `<style>` tags are cleaned
   * * `<link>` tags are removed
   * * `<iframe>` tags are removed
   * * `<meta>` tags are removed
   * * `style` attributes are removed
   * * `on*` attributes are removed
   * * `href=\"javascript:\"` are removed
   * * `<img src="">` is cleaned, based on (nullable) sanitizerConfig
   * When `sanitizerConfig` is not provided, default `HtmlSanitizerConfig` is applied
   */
  sanitizedHtml?: Maybe<Scalars['String']['output']>;
  /** Cleaned text payload of the email. When MIME contains `text/plain` version, we put it here. When MIME has only HTML body, we extract text from HTML (see textSource). It's NULL when decodeStatus is ERROR_DECODING */
  text?: Maybe<Scalars['String']['output']>;
  /** How `text` field was populated (from MIME `text/plain` or `text/html`) */
  textSource?: Maybe<TextSource>;
  /** Just <login>@<domain> email address. When extended address was used, extensions are dropped from this field */
  toAddr: Scalars['String']['output'];
  /** Raw unmodified value of the receiving email address string (so, when extended address was used, this field will contain extended address) */
  toAddrOrig: Scalars['String']['output'];
};


/** Single email received by the session */
export type MailDownloadSanitizedHtmlUrlArgs = {
  sanitizerConfig?: InputMaybe<HtmlSanitizerConfig>;
};


/** Single email received by the session */
export type MailSanitizedHtmlArgs = {
  sanitizerConfig?: InputMaybe<HtmlSanitizerConfig>;
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  /**
   * Remove `Address` from `Session`. This address stops receiving mail, but can be restored later (to same or other session).
   * It does not remove associated `Mail` objects. Only `Address` itself.
   * Returns `true` on success and `false` on failure
   */
  deleteAddress?: Maybe<Scalars['Boolean']['output']>;
  /** Add one more address to existing session */
  introduceAddress?: Maybe<Address>;
  /** Start a new session. Without an input a new session will be started and a new address created with random domain */
  introduceSession?: Maybe<Session>;
  /** Restore old inactive address using `restoreKey` */
  restoreAddress?: Maybe<Address>;
};


export type MutationRootDeleteAddressArgs = {
  input: DeleteAddressInput;
};


export type MutationRootIntroduceAddressArgs = {
  input: IntroduceAddressInput;
};


export type MutationRootIntroduceSessionArgs = {
  input?: InputMaybe<IntroduceSessionInput>;
};


export type MutationRootRestoreAddressArgs = {
  input: RestoreAddressInput;
};

/**
 * An object with a globally unique ID.
 *
 * https://relay.dev/graphql/objectidentification.htm
 */
export type Node = {
  /** ID of the object */
  id: Scalars['ID']['output'];
};

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

/**
 * Sesion.mailsConnection flexible pagination.
 *
 * https://relay.dev/graphql/connections.htm
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor to use for `after` */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Same query, but with `after=endCursor`, would return non-empty result */
  hasNextPage: Scalars['Boolean']['output'];
  /** Same query, but with `before=startCursor`, would return non-empty result */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Cursor to use for `before` */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  /** All domains available for address registration */
  domains: Array<Domain>;
  /** Lookup any object by it's globally unique ID (basically, it's `.id` field) */
  node?: Maybe<Node>;
  /** Lookup session by ID. Null is returned when session doesn't exist */
  session?: Maybe<Session>;
  /** All sessions active (created and not expired) for the current user */
  sessions: Array<Session>;
};


export type QueryRootNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRootSessionArgs = {
  id: Scalars['ID']['input'];
};

/**
 * Input for `restoreAddress` mutation.
 * Let you to specify into which session to restore the address, email address itself and mandatory restoration key for this address.
 */
export type RestoreAddressInput = {
  /** Address to restore in 'login@example.com' form. See Address.address */
  mailAddress: Scalars['String']['input'];
  /** See Address.restoreKey */
  restoreKey: Scalars['String']['input'];
  /** ID of the session to where this address should be restored */
  sessionId: Scalars['ID']['input'];
};

/**
 * Session is an umbrella object that has a limited lifetime.
 * It contains a list of email addresses and a single mailbox that is shared between all the addresses.
 * When session expires, all the received emails are destroyed and all the addresses are deactivated;
 * addresses can be later restored into another session, but emails are removed permanently.
 * Session's `expiresAt` is bumped each time the session is accessed or it receives an email. So, it
 * can stay alive forever - as long as it is periodically checked.
 */
export type Session = Node & {
  __typename?: 'Session';
  /** All the email addresses active in this session. Most recently added first. */
  addresses?: Maybe<Array<Maybe<Address>>>;
  /** URL where all raw `mails` can be downloaded as .zip archive */
  downloadZipUrl?: Maybe<Scalars['Url']['output']>;
  /** Time (always in the future), when this session going to self-destruct */
  expiresAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  /** All the emails received by this session. Most recently received first */
  mails?: Maybe<Array<Maybe<Mail>>>;
  /**
   * All mails received after the mail with specified `Mail.id` (not inclusive). Most recently received first.
   * When `mailId` is not specified - returns the same result as `mails`.
   * Useful for simple pagination: when you receive multiple mails in the same session, first you query
   * this field without `mailId` and after you received the 1st mail, use it's ID as an argument
   * and so on.
   * For more advanced pagination see `mailsConnection`.
   */
  mailsAfterId?: Maybe<Array<Maybe<Mail>>>;
  /**
   * Relay-standard pagination for mails belonging to this session.
   * See https://relay.dev/graphql/connections.htm
   * Cursor is executed in the following order:
   * 1. Take all the session's emails
   * 2. Sort using `sort`: Order.DESC - newest first (default); Order.ASC - oldest first
   * 3. Drop all the mails up to and including `after`
   * 4. Drop all the mails following and including `before`
   * 5. From result of (4) take only `first` number of elements from start
   * 6. From result of (5) take only `last` number of elements from end
   * When only one defined:
   * [A, B, C, D, E, F]
   *       [C, D, E, F] After(B)
   * [A, B, C, D]       Before(E)
   * [A, B, C]          First(3)
   *          [D, E, F] Last(3)
   * When all defined:
   * [A, B, C, D, E, F]
   *    [B, C, D, E, F] After(A)
   *    [B, C, D, E]    Before(F)
   *    [B, C, D]       First(3)
   *       [C, D]       Last(2)
   */
  mailsConnection?: Maybe<SessionMailsConnection>;
};


/**
 * Session is an umbrella object that has a limited lifetime.
 * It contains a list of email addresses and a single mailbox that is shared between all the addresses.
 * When session expires, all the received emails are destroyed and all the addresses are deactivated;
 * addresses can be later restored into another session, but emails are removed permanently.
 * Session's `expiresAt` is bumped each time the session is accessed or it receives an email. So, it
 * can stay alive forever - as long as it is periodically checked.
 */
export type SessionMailsAfterIdArgs = {
  mailId?: InputMaybe<Scalars['ID']['input']>;
};


/**
 * Session is an umbrella object that has a limited lifetime.
 * It contains a list of email addresses and a single mailbox that is shared between all the addresses.
 * When session expires, all the received emails are destroyed and all the addresses are deactivated;
 * addresses can be later restored into another session, but emails are removed permanently.
 * Session's `expiresAt` is bumped each time the session is accessed or it receives an email. So, it
 * can stay alive forever - as long as it is periodically checked.
 */
export type SessionMailsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Order>;
};

export type SessionMailEdge = {
  __typename?: 'SessionMailEdge';
  cursor: Scalars['String']['output'];
  node: Mail;
};

/** One to many connection from `Session` to `Mail`s in this session */
export type SessionMailsConnection = {
  __typename?: 'SessionMailsConnection';
  edges?: Maybe<Array<Maybe<SessionMailEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum TextSource {
  Html = 'HTML',
  Text = 'TEXT'
}

export type IntroduceSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type IntroduceSessionMutation = { __typename?: 'MutationRoot', introduceSession?: { __typename?: 'Session', id: string, expiresAt: any, addresses?: Array<{ __typename?: 'Address', address: string } | null> | null } | null };

export type GetEmailsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetEmailsQuery = { __typename?: 'QueryRoot', session?: { __typename?: 'Session', mails?: Array<{ __typename?: 'Mail', rawSize: number, fromAddr: string, toAddr: string, downloadUrl: any, text?: string | null, headerSubject?: string | null } | null> | null } | null };


export const IntroduceSessionDocument = gql`
    mutation introduceSession {
  introduceSession(input: {withAddress: true, domainId: "RG9tYWluOjE4"}) {
    id
    expiresAt
    addresses {
      address
    }
  }
}
    `;
export type IntroduceSessionMutationFn = Apollo.MutationFunction<IntroduceSessionMutation, IntroduceSessionMutationVariables>;

/**
 * __useIntroduceSessionMutation__
 *
 * To run a mutation, you first call `useIntroduceSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIntroduceSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [introduceSessionMutation, { data, loading, error }] = useIntroduceSessionMutation({
 *   variables: {
 *   },
 * });
 */
export function useIntroduceSessionMutation(baseOptions?: Apollo.MutationHookOptions<IntroduceSessionMutation, IntroduceSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IntroduceSessionMutation, IntroduceSessionMutationVariables>(IntroduceSessionDocument, options);
      }
export type IntroduceSessionMutationHookResult = ReturnType<typeof useIntroduceSessionMutation>;
export type IntroduceSessionMutationResult = Apollo.MutationResult<IntroduceSessionMutation>;
export type IntroduceSessionMutationOptions = Apollo.BaseMutationOptions<IntroduceSessionMutation, IntroduceSessionMutationVariables>;
export const GetEmailsDocument = gql`
    query getEmails($id: ID!) {
  session(id: $id) {
    mails {
      rawSize
      fromAddr
      toAddr
      downloadUrl
      text
      headerSubject
    }
  }
}
    `;

/**
 * __useGetEmailsQuery__
 *
 * To run a query within a React component, call `useGetEmailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEmailsQuery(baseOptions: Apollo.QueryHookOptions<GetEmailsQuery, GetEmailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmailsQuery, GetEmailsQueryVariables>(GetEmailsDocument, options);
      }
export function useGetEmailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmailsQuery, GetEmailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmailsQuery, GetEmailsQueryVariables>(GetEmailsDocument, options);
        }
export type GetEmailsQueryHookResult = ReturnType<typeof useGetEmailsQuery>;
export type GetEmailsLazyQueryHookResult = ReturnType<typeof useGetEmailsLazyQuery>;
export type GetEmailsQueryResult = Apollo.QueryResult<GetEmailsQuery, GetEmailsQueryVariables>;