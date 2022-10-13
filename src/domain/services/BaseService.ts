import { Context } from '../../interfaces'

export default abstract class BaseService {
  constructor(protected readonly repository: Context['repository']) {}
}
