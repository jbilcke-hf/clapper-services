import {
  ChatEvent,
  ChatHistory,
  AssistantMessage,
  AssistantAction,
} from "./base-types"

/**
 * Assistant 
 */
export type AssistantState = {
  /**
   * the chat history
   */
  history: ChatHistory
}
export type AssistantControls = {

  processUserMessage: (userMessage: string) => void

  /**
   * Process an action or a message
   *
   * @param actionOrAssistantMessage 
   * @returns 
   */
  processActionOrMessage: (actionOrAssistantMessage: AssistantAction | AssistantMessage) => Promise<void>

  /**
   * Add a chat event to the history
   * 
   * @param event 
   * @returns 
   */
  addEventToHistory: (event: Partial<ChatEvent>) => ChatEvent

  clearHistory: () => void
}

export type AssistantStore =
  AssistantState &
  AssistantControls
