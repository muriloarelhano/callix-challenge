import { Context } from '../interfaces'

export default abstract class BaseController {
  constructor(protected readonly repository: Context['repository']) {}
}
