import { setRenderer } from './renderers/setRenderer.js'
import { renderTodoList } from './renderers/renderTodoList.js'

setRenderer(renderTodoList)
renderTodoList('root');