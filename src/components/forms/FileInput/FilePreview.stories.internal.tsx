import React from 'react'

import { FilePreview } from './FilePreview'
import {
  TEST_TEXT_FILE,
  TEST_PDF_FILE,
  TEST_DOC_FILE,
  TEST_XLS_FILE,
  TEST_VIDEO_FILE,
  TEST_PNG_FILE,
} from './constants'
import { LegacyReactElement } from '../../../types/legacyReactElement'

/*
// THIS STORY FOR INTERNAL DEVELOPMENT ONLY
export default {
  title: 'Components/File input/File preview',
  component: FilePreview,
}
*/

const testProps = {
  imageId: 'testImageId_12345',
  file: TEST_TEXT_FILE,
}

export const loadingPreview = (): LegacyReactElement => (
  <FilePreview {...testProps} />
)

export const pdfPreview = (): LegacyReactElement => (
  <FilePreview {...testProps} file={TEST_PDF_FILE} />
)

export const docPreview = (): LegacyReactElement => (
  <FilePreview {...testProps} file={TEST_DOC_FILE} />
)

export const xlsPreview = (): LegacyReactElement => (
  <FilePreview {...testProps} file={TEST_XLS_FILE} />
)

export const videoPreview = (): LegacyReactElement => (
  <FilePreview {...testProps} file={TEST_VIDEO_FILE} />
)

export const imagePreview = (): LegacyReactElement => (
  <FilePreview {...testProps} file={TEST_PNG_FILE} />
)
