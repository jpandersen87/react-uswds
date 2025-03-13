import { type ReactElement } from 'react'

/**
 * @deprecated ReactElement defaults to unknown as of React 19,
 * so we're allowing `any` in order to not break users relying
 * on this behavior in projects using <=React 18.
 * @todo Remove this file when this type is longer in use.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LegacyReactElement = ReactElement<any>
