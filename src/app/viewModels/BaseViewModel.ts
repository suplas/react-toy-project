export default class BaseViewModel {
  protected async runWithAwareness(action: () => Promise<void>) {
    await action()
  }
}
