import { ClapProject, ClapSegment } from "@aitube/clap"
import { Monaco } from "@monaco-editor/react"
import MonacoEditor from "monaco-editor"
import { VersionControls, VersionedState } from "./version-control"

export type ScrollData = {
  scrollHeight: number
  scrollLeft: number
  scrollTop: number
  scrollWidth: number
}

export type ScriptEditorState = {
  monaco?: Monaco

  textModel?: MonacoEditor.editor.ITextModel

  // reference to the React component
  standaloneCodeEditor?: MonacoEditor.editor.IStandaloneCodeEditor

  // used to know if the user is actually inside the editor or not
  mouseIsInside: boolean

  // the full-text of the screenplay
  draft: string

  // map screenplay lines to dialogue segments
  // (note: some lines point to nothing, eg. when we have empty spaces)
  lineNumberToMentionedSegments: Record<number, ClapSegment>


  /**
   * the index of the first step visible in the current screenplay
   * 
   * (the topmost visible timeline step in the current timeline)
   */
  scrollTopInMs: number
} & ScrollData & VersionedState<string>

export type ScriptEditorControls = {
  setMonaco: (monaco?: Monaco) => void
  setTextModel: (textModel?: MonacoEditor.editor.ITextModel) => void
  setStandaloneCodeEditor: (standaloneCodeEditor?: MonacoEditor.editor.IStandaloneCodeEditor) => void
  setMouseIsInside: (mouseIsInside: boolean) => void
  loadDraftFromClap: (clap: ClapProject) => void
  setDraft: (draft: string) => void
  publishDraftToTimeline: () => Promise<void>
  onDidScrollChange: (scrollData: ScrollData) => void
  jumpCursorOnLineClick: (line?: number) => void
  highlightElements: () => void
  applyClassNameToKeywords: (className?: string, keywords?: string[], caseSensitive?: boolean) => void
} & VersionControls<string>

export type ScriptEditorStore = ScriptEditorState & ScriptEditorControls
